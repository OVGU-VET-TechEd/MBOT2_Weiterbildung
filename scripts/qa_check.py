"""Automatische Qualitätsprüfung der Kursmaterialien.

Prüft:
  1. Wissenschecks: Jede Single-Choice-Frage hat genau eine richtige Antwort,
     jede Frage ist einem Lernziel (LZ) zugeordnet und hat eine Rückmeldung.
  2. Alignment: Jedes Lernziel aus dem Kompetenzmodell kommt in mindestens einer
     Quizfrage und in mindestens einer Arbeitsheft-Aufgabe vor.
  3. Zeitplanung: Die Phasen jedes Verlaufsplans ergeben lückenlos 90 Minuten.
  4. Links: Alle externen URLs sind erreichbar (mit --links).

Aufruf: python3 scripts/qa_check.py [--links]
"""
import re
import sys
import urllib.request
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SESSIONS = sorted(p for p in ROOT.iterdir() if p.is_dir() and p.name.startswith("Session_"))
problems = []


def lz_list():
    text = (ROOT / "00_Kurskonzept/02_Kompetenzmodell.md").read_text()
    return re.findall(r"^\| (LZ \d\.\d) \|", text, re.M)


def check_quizzes():
    coverage = defaultdict(int)
    for s in SESSIONS:
        md = next(s.glob("*_Selbstlernmodul.md")).read_text()
        blocks = re.split(r"\n\*\*Frage (\d+)\*\* · ", md)[1:]
        for num, body in zip(blocks[0::2], blocks[1::2]):
            body = body.split("\n## ")[0]
            lzs = re.findall(r"LZ (\d\.\d)", body.splitlines()[0])
            if not lzs:
                problems.append(f"{s.name} Frage {num}: kein Lernziel zugeordnet")
            for lz in lzs:
                coverage["LZ " + lz] += 1
            single = re.findall(r"^\[\((.)\)\]", body, re.M)
            multi = re.findall(r"^\[\[([ X])\]\]", body, re.M)
            text_in = re.findall(r"^\[\[([^\]?_][^\]]*)\]\]\s*$", body, re.M)
            if single and single.count("X") != 1:
                problems.append(f"{s.name} Frage {num}: {single.count('X')} richtige Antworten (Single Choice)")
            if multi and "X" not in multi:
                problems.append(f"{s.name} Frage {num}: Multiple Choice ohne richtige Antwort")
            if not (single or multi or text_in):
                problems.append(f"{s.name} Frage {num}: kein Antwortformat erkannt")
            if body.count("****") < 2:
                problems.append(f"{s.name} Frage {num}: keine Rückmeldung")
            print(f"  {s.name[:9]} Frage {num:>2}: LZ {', '.join(lzs) or '-':<10} "
                  f"{'SC' if single else 'MC' if multi else 'Text'}  ok")
    return coverage


def check_workbooks():
    coverage = defaultdict(int)
    for s in SESSIONS:
        md = next(s.glob("*_Arbeitsheft.md")).read_text()
        # Einzelverweise (LZ 1.2) und Bereiche (LZ 2.1–2.4) zählen
        for major, a, b in re.findall(r"LZ (\d)\.(\d)(?:[–-]\d\.(\d))?", md):
            for minor in range(int(a), int(b or a) + 1):
                coverage[f"LZ {major}.{minor}"] += 1
    return coverage


def check_timing():
    for s in SESSIONS:
        md = next(s.glob("*_Moderationsleitfaden.md")).read_text()
        spans = [(int(a), int(b)) for a, b in re.findall(r"^\| (\d+)–(\d+) \| \*\*", md, re.M)]
        ok = spans and spans[0][0] == 0 and spans[-1][1] == 90 and all(
            spans[i][1] == spans[i + 1][0] for i in range(len(spans) - 1))
        total = sum(b - a for a, b in spans)
        print(f"  {s.name}: {len(spans)} Phasen, {total} Min., lückenlos: {'ja' if ok else 'NEIN'}")
        if not ok or total != 90:
            problems.append(f"{s.name}: Verlaufsplan ergibt {total} Min. oder hat Lücken")


def check_links():
    urls = set()
    for f in ROOT.rglob("*.md"):
        urls |= set(re.findall(r"https?://[^\s)\]>|`]+", f.read_text()))
    for url in sorted(urls):
        url = url.rstrip(".,;")
        try:
            req = urllib.request.Request(url, method="GET", headers={"User-Agent": "Mozilla/5.0 qa-check"})
            code = urllib.request.urlopen(req, timeout=15).status
        except Exception as e:  # noqa: BLE001 – jede Störung ist ein Befund
            code = getattr(e, "code", type(e).__name__)
        flag = "ok" if code == 200 else "PRÜFEN"
        print(f"  {flag:<6} {code}  {url}")
        if code != 200:
            problems.append(f"Link nicht erreichbar ({code}): {url}")


if __name__ == "__main__":
    print("1 Wissenschecks")
    quiz = check_quizzes()
    print("\n2 Alignment Lernziel → Quiz / Arbeitsheft")
    work = check_workbooks()
    for lz in lz_list():
        print(f"  {lz}: Quizfragen {quiz[lz]}, Arbeitsheft-Verweise {work[lz]}")
        if quiz[lz] == 0:
            problems.append(f"{lz}: keine Quizfrage")
        if work[lz] == 0:
            problems.append(f"{lz}: keine Arbeitsheft-Aufgabe")
    print("\n3 Zeitplanung")
    check_timing()
    if "--links" in sys.argv:
        print("\n4 Links")
        check_links()
    print("\nErgebnis:", "keine Befunde" if not problems else f"{len(problems)} Befund(e)")
    for p in problems:
        print("  -", p)
    sys.exit(1 if problems else 0)
