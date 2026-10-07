// Erzeugt aus den Foliendaten (slides_s*.js) eine LiaScript-Präsentation (Markdown).
// Aufruf: node scripts/slides2lia.js scripts/slides_s1.js Session_1_Aufbau_und_EVA/S1_Folien.md
// Die Folienquelle wird mit einem Ersatz für slidekit geladen, es entsteht also keine .pptx.
const fs = require("fs");
const path = require("path");
const Module = require("module");

const [src, out] = process.argv.slice(2);
if (!src || !out) { console.error("Aufruf: node slides2lia.js <slides_sN.js> <Ausgabe.md>"); process.exit(1); }

const REPO = "https://raw.githubusercontent.com/OVGU-VET-TechEd/MBOT2_Weiterbildung/main";

// slidekit durch einen Ersatz austauschen, der nur Metadaten und Folien einsammelt
const C = require("./slidekit").C;
let captured;
const load = Module._load;
Module._load = function (req, parent, ...rest) {
  if (req === "./slidekit") return { C, build: (meta, slides) => { captured = { meta, slides }; } };
  return load.call(this, req, parent, ...rest);
};
require(path.resolve(src));
Module._load = load;
const { meta, slides } = captured;

// ---------- Helfer ----------
const txt = (b) => (b && typeof b === "object" && "text" in b ? b.text : String(b ?? ""));
const cell = (s) => txt(s).replace(/\|/g, "\\|").replace(/\n/g, "<br>");
const list = (body, bullets = true) => {
  if (body === undefined) return "";
  if (!Array.isArray(body)) return txt(body);
  return bullets === false ? body.map(txt).join("<br>") : body.map((b) => "- " + txt(b).replace(/\n/g, " ")).join("\n");
};
const table = (head, rows) =>
  [`| ${head.map(cell).join(" | ")} |`, `|${head.map(() => "---").join("|")}|`, ...rows.map((r) => `| ${r.map(cell).join(" | ")} |`)].join("\n");
const callout = (t) => `> **!** ${txt(t).replace(/\n/g, " ")}`;
const codeBlock = (c) => "```text\n" + c + "\n```";
const lead = (t) => (t ? `*${txt(t).replace(/\n/g, " ")}*` : "");
const card = (c, label) => {
  const head = [label, c.head].filter((x) => x !== undefined && x !== "").join(" · ");
  return [head && `**${head}**`, list(c.body, c.bullets)].filter(Boolean).join("\n\n");
};
const notes = (n) =>
  n ? `<details>\n<summary>Moderationsnotiz</summary>\n\n${n}\n\n</details>` : "";

const render = {
  cover: (d) => [
    `**${d.kicker}**`,
    `### ${d.subtitle}`,
    (d.chips || []).map((c) => `\`${c}\``).join(" · "),
  ],
  closing: (d) => d.cols.map((c, i) => card(c, i + 1)),
  timeline: (d) => [lead(d.lead), table(["", "Minute", "Phase", "Inhalt"], d.phases.map((p, i) =>
    [String(i + 1), p.time, p.hl ? `**${p.head}**` : p.head, p.body]))],
  cards: (d) => [lead(d.lead), ...d.cards.map((c, i) => card(c, c.badge !== undefined ? c.badge : i + 1))],
  grid: (d) => [lead(d.lead), table(["", "Element", "Erläuterung"], d.items.map((it) =>
    [it.badge, (it.warn ? "⚠ " : "") + `**${txt(it.head)}**`, it.body]))],
  eva: (d) => [lead(d.lead),
    table(d.cols.map((c, i) => c.head + (i < d.cols.length - 1 ? " →" : "")), [d.cols.map((c) => `**${c.verb}**`), d.cols.map((c) => c.body)])],
  code: (d) => [codeBlock(d.code), ...(d.side || []).map((b) => card(b))],
  statement: (d) => [`> ### ${d.statement}`, d.code && codeBlock(d.code), list(d.body)],
  table: (d) => [lead(d.lead), table(d.head, d.rows)],
  compare: (d) => [lead(d.lead), card(d.left, "–"), card(d.right, "+")],
};

// ---------- Ausgabe ----------
const header = `<!--
author:   ITVET – Otto-von-Guericke-Universität Magdeburg
email:    itvet@ovgu.de
version:  1.0.0
language: de
mode:     Presentation
comment:  ${meta.title} – Foliensatz der Fortbildungsreihe „Der mBot2 im Fachunterricht“.
          Automatisch erzeugt aus ${path.basename(src)} (scripts/slides2lia.js), bitte dort ändern.
logo:     ${REPO}/assets/ovgu_fhw_logo.png

@style
/* Corporate Design der OVGU: Hausfarbe Dunkelrot, Fakultätsfarbe FHW Orange */
.lia-content h1, .lia-content h2 { color: #7a003f; }
.lia-content blockquote { border-left: 4px solid #ef7d00; background: #fdf0e3; }
.lia-content table th { background: #7a003f; color: #fff; }
@end
-->
`;

const parts = slides.map((d, i) => {
  if (!render[d.type]) throw new Error(`Unbekannter Folientyp: ${d.type}`);
  const heading = i === 0 && d.type === "cover" ? `# ${meta.title}` : `## ${d.title}`;
  const body = render[d.type](d);
  if (d.callout) body.push(callout(d.callout));
  body.push(notes(d.notes));
  return [heading, ...body].filter(Boolean).join("\n\n");
});

fs.writeFileSync(out, header + "\n" + parts.join("\n\n\n") + "\n\n---\n\n" + meta.footer + "\n");
console.log("geschrieben:", out);
