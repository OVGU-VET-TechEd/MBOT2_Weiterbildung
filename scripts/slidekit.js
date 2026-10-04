// Gemeinsame Folienbausteine für alle drei Sitzungen (pptxgenjs).
// Jede Folie wird aus einem Datenobjekt { type, ... , notes } erzeugt.

const pptxgen = require("pptxgenjs");

// Farben nach Corporate Design der OVGU (cd.ovgu.de): Hausfarbe Dunkelrot, Grau 70 %,
// Fakultätsfarbe Humanwissenschaften (Orange) als Hervorhebung.
const C = {
  dark: "7A003F",     // OVGU-Hausfarbe – Titel, Badges mit weißer Schrift
  teal: "7A003F",     // Standard-Badge
  tint: "F2F2F2",     // helle graue Fläche
  tintO: "FDF0E3",    // helle Fläche in Fakultätsfarbe
  orange: "EF7D00",   // Fakultätsfarbe FHW – nur mit dunkler Schrift verwenden (Kontrast)
  ink: "1D1D1B",      // Fließtext
  muted: "706F6F",    // OVGU-Grau 70 %
  white: "FFFFFF",
  line: "D9D9D9",
  e: "706F6F", v: "7A003F", a: "EF7D00", n: "9D9D9C",  // EVA-Rollen
};
const HEAD = "Lucida Sans";   // Office-Schrift laut OVGU-CD
const BODY = "Lucida Sans";
const path = require("path");
const LOGO = path.join(__dirname, "..", "assets", "ovgu_fhw_logo.png");
const LOGO_RATIO = 366 / 1600;
const LIGHT_FILLS = ["EF7D00", "E0B020", "FDF0E3", "F2F2F2"];
const W = 13.333, H = 7.5, M = 0.6;

function deck(meta) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.author = "ITVET – OVGU Magdeburg";
  pres.company = "Otto-von-Guericke-Universität Magdeburg";
  pres.title = meta.title;
  pres.theme = { headFontFace: HEAD, bodyFontFace: BODY };

  pres.defineSlideMaster({
    title: "INHALT",
    background: { color: C.white },
    objects: [
      { text: { text: meta.footer, options: { x: M, y: H - 0.42, w: 9, h: 0.3, fontFace: BODY, fontSize: 10, color: C.muted, isTextBox: true } } },
      { image: { x: W - M - 2.7, y: 0.3, w: 2.7, h: 2.7 * LOGO_RATIO, path: LOGO } },
      { placeholder: { options: { name: "title", type: "title", x: M, y: 0.3, w: W - 2 * M - 3.0, h: 0.98, fontFace: HEAD, fontSize: 26, bold: true, color: C.dark, align: "left", valign: "middle", margin: 0 }, text: "" } },
    ],
    slideNumber: { x: W - M - 0.6, y: H - 0.42, w: 0.6, h: 0.3, fontFace: BODY, fontSize: 10, color: C.muted, align: "right" },
  });
  pres.defineSlideMaster({
    title: "TITEL",
    background: { color: C.white },
    objects: [
      { image: { x: M, y: 0.5, w: 6.0, h: 6.0 * LOGO_RATIO, path: LOGO } },
      { text: { text: meta.footer, options: { x: M, y: H - 0.42, w: 9, h: 0.3, fontFace: BODY, fontSize: 10, color: C.muted, isTextBox: true } } },
    ],
  });
  return pres;
}

// ---------- kleine Helfer ----------
function title(s, t) { s.addText(t, { placeholder: "title" }); }

function badge(s, x, y, d, label, fill, size = 16) {
  s.addShape("ellipse", { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } });
  const txt = LIGHT_FILLS.includes(fill) ? C.ink : C.white;  // Kontrast: auf Orange/Gelb dunkle Schrift
  s.addText(String(label), { x, y, w: d, h: d, align: "center", valign: "middle", fontFace: BODY, fontSize: size, bold: true, color: txt, margin: 0, isTextBox: true });
}

function card(s, x, y, w, h, opts) {
  s.addShape("roundRect", { x, y, w, h, rectRadius: 0.12, fill: { color: opts.fill || C.tint }, line: { color: opts.fill || C.tint } });
  let ty = y + 0.25;
  if (opts.badge !== undefined) {
    badge(s, x + 0.25, y + 0.25, 0.6, opts.badge, opts.badgeColor || C.teal, opts.badgeSize || 16);
    ty = y + 0.25;
    s.addText(opts.head, { x: x + 1.0, y: ty, w: w - 1.2, h: 0.6, fontFace: BODY, fontSize: opts.headSize || 18, bold: true, color: opts.headColor || C.dark, valign: "middle", margin: 0, isTextBox: true });
    ty = y + 1.0;
  } else if (opts.head) {
    s.addText(opts.head, { x: x + 0.3, y: ty, w: w - 0.6, h: 0.5, fontFace: BODY, fontSize: opts.headSize || 18, bold: true, color: opts.headColor || C.dark, valign: "top", margin: 0, isTextBox: true });
    ty = y + 0.8;
  }
  if (opts.body) {
    const runs = Array.isArray(opts.body)
      ? opts.body.map((b, i) => ({ text: b, options: { bullet: opts.bullets !== false ? { indent: 14 } : false, breakLine: i < opts.body.length - 1, paraSpaceAfter: 6 } }))
      : opts.body;
    s.addText(runs, { x: x + 0.3, y: ty, w: w - 0.6, h: y + h - ty - 0.2, fontFace: BODY, fontSize: opts.size || 17, color: opts.color || C.ink, valign: "top", margin: 0, isTextBox: true });
  }
}

function code(s, x, y, w, h, text, size = 17) {
  s.addShape("roundRect", { x, y, w, h, rectRadius: 0.1, fill: { color: "3C3C3B" }, line: { color: "3C3C3B" } });
  s.addText(text, { x: x + 0.3, y: y + 0.25, w: w - 0.6, h: h - 0.5, fontFace: "Courier New", fontSize: size, color: C.white, valign: "top", margin: 0, isTextBox: true });
}

// ---------- Folientypen ----------
const builders = {
  // Titelfolie (dunkel)
  cover(pres, d) {
    const s = pres.addSlide({ masterName: "TITEL" });
    s.addText(d.kicker, { x: M, y: 2.35, w: 10, h: 0.45, fontFace: BODY, fontSize: 14, bold: true, color: C.muted, charSpacing: 2, margin: 0, isTextBox: true });
    s.addText(d.title, { x: M, y: 2.85, w: 10.4, h: 1.3, fontFace: HEAD, fontSize: 40, bold: true, color: C.dark, valign: "top", margin: 0, isTextBox: true });
    s.addText(d.subtitle, { x: M, y: 4.2, w: 10.4, h: 0.7, fontFace: BODY, fontSize: 20, color: C.ink, margin: 0, isTextBox: true });
    (d.chips || []).forEach((c, i) => {
      const x = M + i * 3.15;
      s.addShape("roundRect", { x, y: 5.25, w: 2.95, h: 0.6, rectRadius: 0.3, fill: { color: C.tintO }, line: { color: C.orange, width: 1 } });
      s.addText(c, { x, y: 5.25, w: 2.95, h: 0.6, align: "center", valign: "middle", fontFace: BODY, fontSize: 14, color: C.ink, margin: 0, isTextBox: true });
    });
    badge(s, W - M - 1.7, 2.5, 1.7, d.number, C.orange, 54);
    if (d.notes) s.addNotes(d.notes);
  },

  // Abschlussfolie (dunkel) mit 2–3 Spalten
  closing(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    const n = d.cols.length, gap = 0.4, cw = (W - 2 * M - gap * (n - 1)) / n;
    d.cols.forEach((c, i) => {
      const x = M + i * (cw + gap);
      s.addShape("roundRect", { x, y: 1.6, w: cw, h: 3.9, rectRadius: 0.12, fill: { color: C.tintO }, line: { color: C.tintO } });
      badge(s, x + 0.3, 1.85, 0.6, i + 1, C.orange);
      s.addText(c.head, { x: x + 1.05, y: 1.85, w: cw - 1.3, h: 0.6, fontFace: BODY, fontSize: 18, bold: true, color: C.dark, valign: "middle", margin: 0, isTextBox: true });
      s.addText(c.body.map((b, j) => ({ text: b, options: { bullet: { indent: 14 }, breakLine: j < c.body.length - 1, paraSpaceAfter: 6 } })),
        { x: x + 0.3, y: 2.7, w: cw - 0.6, h: 2.6, fontFace: BODY, fontSize: 16, color: C.ink, valign: "top", margin: 0, isTextBox: true });
    });
    if (d.notes) s.addNotes(d.notes);
  },

  // Zeitleiste der Sitzung
  timeline(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    if (d.lead) s.addText(d.lead, { x: M, y: 1.35, w: W - 2 * M, h: 0.7, fontFace: BODY, fontSize: 17, color: C.muted, margin: 0, isTextBox: true });
    const n = d.phases.length, gap = 0.2, cw = (W - 2 * M - gap * (n - 1)) / n;
    const y0 = 2.35;
    s.addShape("line", { x: M + 0.3, y: y0 + 0.3, w: W - 2 * M - 0.6, h: 0, line: { color: C.line, width: 2 } });
    d.phases.forEach((p, i) => {
      const x = M + i * (cw + gap);
      badge(s, x + cw / 2 - 0.3, y0, 0.6, i + 1, p.hl ? C.orange : C.teal);
      s.addText(p.time, { x, y: y0 + 0.75, w: cw, h: 0.4, align: "center", fontFace: BODY, fontSize: 14, bold: true, color: C.teal, margin: 0, isTextBox: true });
      s.addShape("roundRect", { x, y: y0 + 1.25, w: cw, h: 3.2, rectRadius: 0.1, fill: { color: p.hl ? C.tintO : C.tint }, line: { color: p.hl ? C.tintO : C.tint } });
      s.addText(p.head, { x: x + 0.2, y: y0 + 1.4, w: cw - 0.4, h: 0.75, fontFace: BODY, fontSize: 16, bold: true, color: C.dark, valign: "top", margin: 0, isTextBox: true });
      s.addText(p.body, { x: x + 0.2, y: y0 + 2.2, w: cw - 0.4, h: 2.15, fontFace: BODY, fontSize: n >= 6 ? 12.5 : 14, color: C.ink, valign: "top", margin: 0, isTextBox: true });
    });
    if (d.notes) s.addNotes(d.notes);
  },

  // 2–4 Karten nebeneinander
  cards(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    let y = 1.45;
    if (d.lead) { s.addText(d.lead, { x: M, y: 1.35, w: W - 2 * M, h: 0.7, fontFace: BODY, fontSize: 17, color: C.muted, margin: 0, isTextBox: true }); y = 2.15; }
    const n = d.cards.length, gap = 0.35, cw = (W - 2 * M - gap * (n - 1)) / n;
    const h = (d.callout ? 5.25 : 6.35) - y;
    d.cards.forEach((c, i) => card(s, M + i * (cw + gap), y, cw, h, { badge: c.badge !== undefined ? c.badge : i + 1, badgeColor: c.color, head: c.head, body: c.body, fill: c.fill, size: d.size }));
    if (d.callout) callout(s, d.callout);
    if (d.notes) s.addNotes(d.notes);
  },

  // Raster aus kleinen Karten (z. B. 9 Bauschritte, 6 Bauteile)
  grid(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    const cols = d.cols || 3, rows = Math.ceil(d.items.length / cols);
    const top = d.lead ? 2.05 : 1.45, bottom = d.callout ? 5.3 : 6.45;
    if (d.lead) s.addText(d.lead, { x: M, y: 1.3, w: W - 2 * M, h: 0.6, fontFace: BODY, fontSize: 16, color: C.muted, margin: 0, isTextBox: true });
    const gx = 0.25, gy = 0.2, cw = (W - 2 * M - gx * (cols - 1)) / cols, ch = (bottom - top - gy * (rows - 1)) / rows;
    d.items.forEach((it, i) => {
      const x = M + (i % cols) * (cw + gx), y = top + Math.floor(i / cols) * (ch + gy);
      s.addShape("roundRect", { x, y, w: cw, h: ch, rectRadius: 0.08, fill: { color: it.warn ? C.tintO : C.tint }, line: { color: it.warn ? C.tintO : C.tint } });
      badge(s, x + 0.15, y + 0.15, 0.5, it.badge, it.color || (it.warn ? C.orange : C.teal), it.badgeSize || 14);
      s.addText(it.head, { x: x + 0.8, y: y + 0.12, w: cw - 0.95, h: 0.55, fontFace: BODY, fontSize: 15, bold: true, color: C.dark, valign: "middle", margin: 0, isTextBox: true });
      s.addText(it.body, { x: x + 0.2, y: y + 0.72, w: cw - 0.4, h: ch - 0.8, fontFace: BODY, fontSize: d.size || 15, color: C.ink, valign: "top", margin: 0, isTextBox: true });
    });
    if (d.callout) callout(s, d.callout);
    if (d.notes) s.addNotes(d.notes);
  },

  // EVA-Darstellung: drei Spalten mit Pfeilen
  eva(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    s.addText(d.lead, { x: M, y: 1.3, w: W - 2 * M, h: 0.6, fontFace: BODY, fontSize: 17, color: C.muted, margin: 0, isTextBox: true });
    const cw = 3.55, gap = (W - 2 * M - 3 * cw) / 2, y = 2.15, h = 3.3;
    d.cols.forEach((c, i) => {
      const x = M + i * (cw + gap);
      s.addShape("roundRect", { x, y, w: cw, h, rectRadius: 0.12, fill: { color: c.color }, line: { color: c.color } });
      const fg = LIGHT_FILLS.includes(c.color) ? C.ink : C.white;
      s.addText(c.head, { x: x + 0.3, y: y + 0.25, w: cw - 0.6, h: 0.55, fontFace: HEAD, fontSize: 24, bold: true, color: fg, margin: 0, isTextBox: true });
      s.addText(c.verb, { x: x + 0.3, y: y + 0.85, w: cw - 0.6, h: 0.4, fontFace: BODY, fontSize: 13, bold: true, color: fg, charSpacing: 2, margin: 0, isTextBox: true });
      s.addText(c.body, { x: x + 0.3, y: y + 1.4, w: cw - 0.6, h: h - 1.6, fontFace: BODY, fontSize: 15, color: fg, valign: "top", margin: 0, isTextBox: true });
      if (i < 2) s.addShape("rightArrow", { x: x + cw + gap / 2 - 0.3, y: y + h / 2 - 0.3, w: 0.6, h: 0.6, fill: { color: C.line }, line: { color: C.line } });
    });
    if (d.callout) callout(s, d.callout);
    if (d.notes) s.addNotes(d.notes);
  },

  // Programmcode links, Frage/Erläuterung rechts
  code(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    const lw = d.codeWidth || 6.6;
    code(s, M, 1.5, lw, d.codeHeight || 4.6, d.code, d.codeSize || 17);
    const x = M + lw + 0.4, w = W - M - x;
    (d.side || []).forEach((b, i) => {
      const y = 1.5 + i * ((d.codeHeight || 4.6) + 0.0) / d.side.length;
      const h = (d.codeHeight || 4.6) / d.side.length - 0.2;
      card(s, x, y, w, h, { head: b.head, body: b.body, bullets: b.bullets, fill: b.fill, size: b.size || 17, headSize: 18 });
    });
    if (d.callout) callout(s, d.callout);
    if (d.notes) s.addNotes(d.notes);
  },

  // Große Kernaussage
  statement(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    s.addShape("roundRect", { x: M, y: 1.5, w: W - 2 * M, h: 2.0, rectRadius: 0.12, fill: { color: C.tintO }, line: { color: C.tintO } });
    s.addText(d.statement, { x: M + 0.5, y: 1.5, w: W - 2 * M - 1, h: 2.0, fontFace: HEAD, fontSize: 28, bold: true, color: C.dark, valign: "middle", margin: 0, isTextBox: true });
    if (d.code) code(s, M, 3.85, 6.4, 2.45, d.code, 17);
    if (d.body) s.addText(d.body.map((b, i) => ({ text: b, options: { bullet: { indent: 14 }, breakLine: i < d.body.length - 1, paraSpaceAfter: 8 } })),
      { x: d.code ? M + 6.8 : M, y: 3.85, w: d.code ? W - 2 * M - 6.8 : W - 2 * M, h: 2.45, fontFace: BODY, fontSize: 17, color: C.ink, valign: "top", margin: 0, isTextBox: true });
    if (d.notes) s.addNotes(d.notes);
  },

  // Tabelle
  table(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    let y = 1.45;
    if (d.lead) { s.addText(d.lead, { x: M, y: 1.3, w: W - 2 * M, h: 0.6, fontFace: BODY, fontSize: 16, color: C.muted, margin: 0, isTextBox: true }); y = 2.0; }
    const head = d.head.map((h) => ({ text: h, options: { bold: true, color: C.white, fill: { color: C.teal } } }));
    const rows = d.rows.map((r, ri) => r.map((c) => ({ text: c, options: { fill: { color: ri % 2 ? "F7F7F7" : C.white } } })));
    s.addTable([head, ...rows], { x: M, y, w: W - 2 * M, colW: d.colW, fontFace: BODY, fontSize: d.size || 14, color: C.ink, border: { type: "solid", pt: 0.75, color: C.line }, valign: "middle", margin: [5, 8, 5, 8], rowH: d.rowH });
    if (d.callout) callout(s, d.callout);
    if (d.notes) s.addNotes(d.notes);
  },

  // Gegenüberstellung zweier Spalten (z. B. schwach / stark)
  compare(pres, d) {
    const s = pres.addSlide({ masterName: "INHALT" });
    title(s, d.title);
    if (d.lead) s.addText(d.lead, { x: M, y: 1.3, w: W - 2 * M, h: 0.6, fontFace: BODY, fontSize: 16, color: C.muted, margin: 0, isTextBox: true });
    const cw = (W - 2 * M - 0.4) / 2, y = d.lead ? 2.05 : 1.5, h = (d.callout ? 5.25 : 6.3) - y;
    [d.left, d.right].forEach((c, i) => {
      card(s, M + i * (cw + 0.4), y, cw, h, { badge: i === 0 ? "–" : "+", badgeColor: i === 0 ? C.n : C.teal, badgeSize: 22, head: c.head, body: c.body, fill: i === 0 ? C.tint : C.tint, size: 16 });
    });
    if (d.callout) callout(s, d.callout);
    if (d.notes) s.addNotes(d.notes);
  },
};

function callout(s, text) {
  s.addShape("roundRect", { x: M, y: 5.5, w: W - 2 * M, h: 0.95, rectRadius: 0.1, fill: { color: C.tintO }, line: { color: C.tintO } });
  badge(s, M + 0.2, 5.68, 0.6, "!", C.orange, 20);
  s.addText(text, { x: M + 1.0, y: 5.5, w: W - 2 * M - 1.2, h: 0.95, fontFace: BODY, fontSize: 15, color: C.dark, valign: "middle", margin: 0, isTextBox: true });
}

async function build(meta, slides, file) {
  const pres = deck(meta);
  slides.forEach((d) => builders[d.type](pres, d));
  await pres.writeFile({ fileName: file });
  console.log("geschrieben:", file);
}

module.exports = { build, C };
