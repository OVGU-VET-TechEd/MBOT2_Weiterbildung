// Wandelt die Markdown-Arbeitshefte dieses Repositories in druckbare DOCX-Dateien um.
// Unterstützt bewusst nur die hier verwendete Teilmenge von Markdown:
// Überschriften (#, ##, ###), Absätze, **fett**, *kursiv*, `code`, Listen (-, 1.),
// Checkboxen (- [ ]), Tabellen, Hinweisboxen (>), Schreiblinien ([[LINIEN:n]]),
// Seitenumbrüche (<!-- pagebreak -->). LiaScript-Kopfzeilen (<!-- ... -->) werden ignoriert.
//
// Aufruf: node md2docx.js <eingabe.md> <ausgabe.docx>

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, AlignmentType, PageBreak, Footer, PageNumber,
  LevelFormat, TableLayoutType, Header, ImageRun,
} = require("docx");

const TEXT_W = 11906 - 2 * 1100; // A4-Breite minus Ränder, in twip

// Corporate Design der OVGU: Hausfarbe Dunkelrot, Fakultätsfarbe FHW Orange, Office-Schrift Lucida Sans
const ACCENT = "7A003F";
const ORANGE = "EF7D00";
const TINT = "FDF0E3";
const GRID = "BFBFBF";
const FONT = "Lucida Sans";
const LOGO = path.join(__dirname, "..", "assets", "ovgu_fhw_logo.png");

function inline(text, base = {}) {
  // Zerlegt **fett**, *kursiv* und `code` in TextRuns.
  const runs = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) runs.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith("**")) runs.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else if (t.startsWith("`")) runs.push(new TextRun({ text: t.slice(1, -1), font: "Courier New", ...base }));
    else runs.push(new TextRun({ text: t.slice(1, -1), italics: true, ...base }));
    last = m.index + t.length;
  }
  if (last < text.length) runs.push(new TextRun({ text: text.slice(last), ...base }));
  return runs;
}

function cell(text, header, widthPct) {
  const parts = text.split(/<br\s*\/?>/i);
  return new TableCell({
    width: { size: Math.round(widthPct * TEXT_W / 100), type: WidthType.DXA },
    shading: header ? { type: ShadingType.CLEAR, fill: TINT, color: "auto" } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: parts.map((p) => new Paragraph({ children: inline(p.trim(), header ? { bold: true } : {}) })),
  });
}

function table(rows) {
  const parse = (r) => r.trim().replace(/\\\|/g, "\u0000").replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim().replace(/\u0000/g, "|"));
  const header = parse(rows[0]);
  const body = rows.slice(2).map(parse);
  const n = header.length;
  // Spaltenbreiten nach Textlänge gewichten (mind. 7 %), damit lange Aussagen nicht gequetscht werden
  // Spalten, die überwiegend leer sind, sind Schreibfelder und bekommen Platz.
  const len = Array.from({ length: n }, (_, i) => {
    const filled = body.filter((r) => (r[i] || "").trim()).length;
    const longest = Math.max(header[i].length, ...body.map((r) => (r[i] || "").length), 3);
    return body.length && filled / body.length < 0.3 && header[i].length > 2 ? Math.max(longest, 45) : longest;
  });
  const weight = len.map((l) => Math.sqrt(l));
  const sum = weight.reduce((a, b) => a + b, 0);
  let pct = weight.map((x) => Math.max(7, (100 * x) / sum));
  const scale = 100 / pct.reduce((a, b) => a + b, 0);
  pct = pct.map((p) => Math.floor(p * scale));
  const border = { style: BorderStyle.SINGLE, size: 4, color: GRID };
  return new Table({
    width: { size: TEXT_W, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    columnWidths: pct.map((p) => Math.round((p * TEXT_W) / 100)),
    borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border },
    rows: [
      // Leere Kopfzeile (Schlüssel-Wert-Tabellen) nicht ausgeben
      ...(header.some((h) => h.trim()) ? [new TableRow({ tableHeader: true, children: header.map((h, i) => cell(h, true, pct[i])) })] : []),
      ...body.map((r) => new TableRow({ children: Array.from({ length: n }, (_, i) => cell(r[i] || "", false, pct[i])) })),
    ],
  });
}

function writingLines(n) {
  return Array.from({ length: n }, () => new Paragraph({
    spacing: { before: 280 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "999999", space: 1 } },
    children: [new TextRun(" ")],
  }));
}

function convert(md, title) {
  const out = [];
  // LiaScript-/HTML-Kommentarkopf entfernen, Seitenumbruch-Marker erhalten.
  md = md.replace(/<!--\s*pagebreak\s*-->/g, "@@PAGEBREAK@@").replace(/<!--[\s\S]*?-->/g, "");
  const lines = md.split(/\r?\n/);
  let i = 0;
  let listInstance = 0;   // jede nummerierte Liste beginnt wieder bei 1
  let prevNumbered = false;
  while (i < lines.length) {
    const line = lines[i];
    // Jede nicht leere Zeile, die kein Listenpunkt ist, beendet eine nummerierte Liste
    if (line.trim() && !/^\s*\d+\.\s+/.test(line)) prevNumbered = false;
    if (line.trim() === "@@PAGEBREAK@@") { out.push(new Paragraph({ children: [new PageBreak()] })); i++; continue; }
    if (/^\s*$/.test(line) || /^---+\s*$/.test(line)) { i++; continue; }
    let m;
    if ((m = line.match(/^(#{1,4})\s+(.*)$/))) {
      const lvl = [HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3, HeadingLevel.HEADING_4][m[1].length - 1];
      out.push(new Paragraph({ heading: lvl, children: inline(m[2]) }));
      i++; continue;
    }
    if ((m = line.match(/^\[\[LINIEN:(\d+)\]\]\s*$/))) { out.push(...writingLines(+m[1])); i++; continue; }
    if (line.trim().startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++]);
      out.push(table(rows));
      out.push(new Paragraph({ children: [] }));
      continue;
    }
    if (line.startsWith(">")) {
      const buf = [];
      while (i < lines.length && lines[i].startsWith(">")) buf.push(lines[i++].replace(/^>\s?/, ""));
      const paras = buf.join("\n").split(/\n\s*\n/);
      paras.forEach((p) => out.push(new Paragraph({
        shading: { type: ShadingType.CLEAR, fill: TINT, color: "auto" },
        border: { left: { style: BorderStyle.SINGLE, size: 18, color: ORANGE, space: 6 } },
        spacing: { before: 60, after: 60 },
        indent: { left: 200, right: 200 },
        children: inline(p.replace(/\n/g, " ")),
      })));
      continue;
    }
    if ((m = line.match(/^(\s*)- \[( |x)\]\s+(.*)$/))) {
      out.push(new Paragraph({ indent: { left: 360 + (m[1].length ? 360 : 0) }, children: [new TextRun((m[2] === "x" ? "☒ " : "☐ ")), ...inline(m[3])] }));
      i++; continue;
    }
    if ((m = line.match(/^(\s*)[-*]\s+(.*)$/))) {
      out.push(new Paragraph({ bullet: { level: m[1].length >= 2 ? 1 : 0 }, children: inline(m[2]) }));
      i++; continue;
    }
    if ((m = line.match(/^(\s*)\d+\.\s+(.*)$/))) {
      if (!prevNumbered) listInstance++;
      out.push(new Paragraph({ numbering: { reference: "num", level: m[1].length >= 2 ? 1 : 0, instance: listInstance }, children: inline(m[2]) }));
      prevNumbered = true;
      i++; continue;
    }
    if (line.startsWith("```")) {
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        out.push(new Paragraph({
          shading: { type: ShadingType.CLEAR, fill: "F2F2F2", color: "auto" },
          spacing: { before: 0, after: 0 },
          children: [new TextRun({ text: lines[i] || " ", font: "Courier New", size: 19 })],
        }));
        i++;
      }
      i++;
      out.push(new Paragraph({ children: [] }));
      continue;
    }
    // Absatz: zusammenhängende Zeilen sammeln
    const buf = [line.trim()];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#|\||>|\s*[-*]\s|\s*\d+\.\s|```|\[\[LINIEN|@@PAGE)/.test(lines[i])) buf.push(lines[i++].trim());
    out.push(new Paragraph({ spacing: { after: 120 }, children: inline(buf.join(" ")) }));
  }
  return new Document({
    creator: "ITVET – OVGU Magdeburg",
    title,
    styles: {
      default: { document: { run: { font: FONT, size: 19 } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", run: { size: 34, bold: true, color: ACCENT, font: FONT }, paragraph: { spacing: { before: 240, after: 160 } } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", run: { size: 28, bold: true, color: ACCENT, font: FONT }, paragraph: { spacing: { before: 240, after: 120 } } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", run: { size: 24, bold: true, color: "333333" }, paragraph: { spacing: { before: 180, after: 80 } } },
        { id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", run: { size: 22, bold: true, color: "333333" }, paragraph: { spacing: { before: 120, after: 60 } } },
      ],
    },
    numbering: {
      config: [{
        reference: "num",
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START, style: { paragraph: { indent: { left: 360, hanging: 360 } } } },
          { level: 1, format: LevelFormat.LOWER_LETTER, text: "%2)", alignment: AlignmentType.START, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        ],
      }],
    },
    sections: [{
      properties: { page: { margin: { top: 1000, bottom: 1000, left: 1100, right: 1100 } } },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new ImageRun({ type: "png", data: fs.readFileSync(LOGO), transformation: { width: 210, height: 48 } })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({ text: `${title}  ·  mBot2-Fortbildung Magdeburg  ·  CC BY 4.0  ·  Seite `, size: 16, color: "666666" }),
              new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "666666" }),
            ],
          })],
        }),
      },
      children: out,
    }],
  });
}

async function main() {
  const [src, dst] = process.argv.slice(2);
  const md = fs.readFileSync(src, "utf8");
  const h1 = (md.match(/^#\s+(.+)$/m) || [null, path.basename(src, ".md")])[1].replace(/[*`]/g, "");
  const doc = convert(md, h1.length > 60 ? h1.slice(0, 57) + "…" : h1);
  fs.writeFileSync(dst, await Packer.toBuffer(doc));
  console.log("geschrieben:", dst);
}

main().catch((e) => { console.error(e); process.exit(1); });
