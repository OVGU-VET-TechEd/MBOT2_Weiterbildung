"""Prüft, ob Text in den Textfeldern der Foliensätze Platz hat.

Misst jede Textzeile mit den echten Schriftmetriken (Calibri, Cambria, Courier New aus
der Office-Installation), bricht wie PowerPoint an Wortgrenzen um und vergleicht die
benötigte Höhe mit der Höhe des Textfelds. Tabellen werden auf ihre Unterkante geprüft.

Aufruf: python3 scripts/fit_check.py deck1.pptx [deck2.pptx ...]
"""
import sys
from pathlib import Path
from PIL import ImageFont
from pptx import Presentation
from pptx.util import Emu

FONTDIR = Path("/Applications/Microsoft PowerPoint.app/Contents/Resources/DFonts")
FILES = {
    ("Calibri", False): "Calibri.ttf", ("Calibri", True): "Calibrib.ttf",
    ("Cambria", False): "Cambria.ttc", ("Cambria", True): "Cambriab.ttf",
    ("Courier New", False): "/System/Library/Fonts/Supplemental/Courier New.ttf",
    ("Courier New", True): "/System/Library/Fonts/Supplemental/Courier New Bold.ttf",
}
_cache = {}
BROKEN = []  # Wörter, die mitten im Wort umbrechen würden


def font(name, bold, size):
    key = (name if (name, bold) in FILES else "Calibri", bold, round(size * 4))
    if key not in _cache:
        f = FILES[(key[0], bold)]
        path = f if f.startswith("/") else FONTDIR / f
        _cache[key] = ImageFont.truetype(str(path), size=int(size * 4))  # 4x für Genauigkeit
    return _cache[key]


def width_pt(text, name, bold, size):
    return font(name, bold, size).getlength(text) / 4


def para_height(p, box_w, default_font):
    runs = [r for r in p.runs if r.text]
    if not runs:
        size = (p.runs[0].font.size.pt if p.runs and p.runs[0].font.size else 18)
        return size * 1.2, 0
    size = max((r.font.size.pt if r.font.size else 18) for r in runs)
    name = runs[0].font.name or default_font
    bold = bool(runs[0].font.bold)
    indent = 14 if p._p.pPr is not None and p._p.pPr.find("{http://schemas.openxmlformats.org/drawingml/2006/main}buChar") is not None else 0
    avail = box_w - indent
    lines = 0
    for raw in "".join(r.text for r in runs).split("\n"):
        line, n = "", 1
        for word in raw.split(" "):
            trial = (line + " " + word).strip()
            if width_pt(trial, name, bold, size) <= avail:
                line = trial
            else:
                if line:
                    n += 1
                line = word
                # PowerPoint darf nach einem Bindestrich umbrechen – nur echte Wortteile prüfen
                for part in word.replace("-", "- ").split(" "):
                    if width_pt(part, name, bold, size) > avail:
                        BROKEN.append(part)
                while width_pt(line, name, bold, size) > avail and len(line) > 1:  # überlanges Wort
                    n += 1
                    line = line[len(line) // 2:]
        lines += n
    after = 0
    pPr = p._p.pPr
    if pPr is not None:
        spc = pPr.find("{http://schemas.openxmlformats.org/drawingml/2006/main}spcAft")
        if spc is not None and len(spc):
            after = int(spc[0].get("val", 0)) / 100
    return lines * size * 1.2, after


def check(path):
    prs = Presentation(path)
    slide_h = Emu(prs.slide_height).pt
    found = 0
    tight = []
    for i, slide in enumerate(prs.slides, 1):
        for sh in slide.shapes:
            if sh.has_text_frame and sh.text_frame.text.strip() and not sh.text_frame.text.strip().isdigit():
                tf = sh.text_frame
                bodyPr = tf._txBody.bodyPr
                ins = lambda k, d: int(bodyPr.get(k)) / 12700 if bodyPr.get(k) is not None else d
                w = Emu(sh.width).pt - ins("lIns", 7.2) - ins("rIns", 7.2)
                h = Emu(sh.height).pt - ins("tIns", 3.6) - ins("bIns", 3.6)
                need = 0
                paras = tf.paragraphs
                for j, p in enumerate(paras):
                    ph, after = para_height(p, w, "Calibri")
                    need += ph + (after if j < len(paras) - 1 else 0)
                for word in BROKEN:
                    found += 1
                    print(f"  Folie {i:>2}: WORTUMBRUCH „{word}“")
                BROKEN.clear()
                tight.append((need / h, i, tf.text[:50]))
                if need > h * 1.02:
                    found += 1
                    print(f"  Folie {i:>2}: ÜBERLAUF {need:5.0f} pt > {h:5.0f} pt  „{tf.text[:60]!r}“")
            if sh.has_table:
                rows = sh.table.rows
                est = 0
                for r in rows:
                    est += max(para_height(c.text_frame.paragraphs[0], Emu(sh.table.columns[k].width).pt - 12, "Calibri")[0]
                               * max(1, len(c.text_frame.paragraphs)) + 8 for k, c in enumerate(r.cells))
                bottom = Emu(sh.top).pt + est
                if bottom > slide_h - 36:
                    found += 1
                    print(f"  Folie {i:>2}: TABELLE reicht bis {bottom:.0f} pt (Grenze {slide_h - 36:.0f} pt)")
    for r, i, txt in sorted(tight, reverse=True)[:5]:
        print(f"  knappste Felder: Folie {i:>2} {r:4.0%} belegt  „{txt!r}“")
    print(f"{Path(path).name}: {len(prs.slides)} Folien, {found} Befund(e)")
    return found


if __name__ == "__main__":
    total = sum(check(p) for p in sys.argv[1:])
    sys.exit(1 if total else 0)
