# Der mBot2 im Fachunterricht – Fortbildungsreihe für Lehrkräfte in Magdeburg

Drei Workshops à 90 Minuten, in denen Lehrkräfte der Sekundarstufe den **mBot2** aufbauen, mit **[Open Roberta Lab](https://lab.open-roberta.org)** programmieren und in einen erprobten Unterrichtsplan für ihr Fach übertragen.

Die Reihe beruht auf Einheiten, die Studierende der Didaktikwerkstatt Technik (OVGU, Sommersemester 2026) entwickelt und in 90-Minuten-Sitzungen erprobt haben. Sie wurde auf Grundlage des Erprobungsfeedbacks, der Selbstreflexionen und einer fachlichen Prüfung überarbeitet (siehe [Qualitätssicherung](00_Kurskonzept/05_Qualitaetssicherung.md)).

## Die drei Sitzungen

| | Thema | ICT-CFT-Ebene | Ergebnis der Teilnehmenden |
|---|---|---|---|
| **[Sitzung 1](Session_1_Aufbau_und_EVA/)** | Den mBot2 kennenlernen: Aufbau, EVA-Prinzip, erstes Programm | Wissenserwerb | fahrbereiter mBot2, erstes Programm |
| **[Sitzung 2](Session_2_Programmieren_Open_Roberta/)** | Programmieren mit Open Roberta: Sequenz, Schleife, Bedingung, Sensoren | Wissensvertiefung | eigene Programme mit Sensoren |
| **[Sitzung 3](Session_3_Fachtransfer_Projektwoche/)** | Vom Roboter zum Unterricht: Erprobung und Planung einer Projektwoche (Klasse 7) | Wissensgenerierung | erprobter Tagesplan für das eigene Fach |

Wie die Sitzungen aufeinander aufbauen, steht im **[Kurskonzept](00_Kurskonzept/01_Kurskonzept_und_Zusammenfassung.md)**.

## Material je Sitzung

| Datei | Inhalt |
|---|---|
| `S*_Folien.pptx` | Präsentation mit Moderationsnotizen |
| `S*_Moderationsleitfaden.md` | Verlaufsplan im Minutentakt, Stolperstellen, Plan B, Diskussionsimpulse |
| `S*_Arbeitsheft.md` / `.docx` | Arbeitsheft der Teilnehmenden (druckfertig) |
| `S*_Loesungen.md` / `.docx` | Musterlösungen, Musterprogramme, Erwartungshorizont, Testprotokoll |
| `S*_Selbstlernmodul.md` | LiaScript-Kurs: Vorbereitung, Wissenscheck mit Rückmeldung, Reflexion |
| `S*_Unterrichtsmaterial_Klasse7.md` / `.docx` | Material für die eigene Klasse mit Diskussionsfragen für die Fortbildung |

### Selbstlernmodule in LiaScript öffnen

- [Selbstlernmodul 1 – Den mBot2 kennenlernen](https://liascript.github.io/course/?https://raw.githubusercontent.com/OVGU-VET-TechEd/mBot2_Fortbildung_Magdeburg/main/Session_1_Aufbau_und_EVA/S1_Selbstlernmodul.md)
- [Selbstlernmodul 2 – Programmieren mit Open Roberta](https://liascript.github.io/course/?https://raw.githubusercontent.com/OVGU-VET-TechEd/mBot2_Fortbildung_Magdeburg/main/Session_2_Programmieren_Open_Roberta/S2_Selbstlernmodul.md)
- [Selbstlernmodul 3 – Vom Roboter zum Unterricht](https://liascript.github.io/course/?https://raw.githubusercontent.com/OVGU-VET-TechEd/mBot2_Fortbildung_Magdeburg/main/Session_3_Fachtransfer_Projektwoche/S3_Selbstlernmodul.md)

## Kursübergreifende Dokumente

| Dokument | Inhalt |
|---|---|
| [Kurskonzept und Zusammenfassung](00_Kurskonzept/01_Kurskonzept_und_Zusammenfassung.md) | Ziele, Zielgruppe, Aufbau, didaktische Leitideen, Übergänge |
| [Kompetenzmodell](00_Kurskonzept/02_Kompetenzmodell.md) | Kompetenzen der Lehrkräfte (K1–K5), Lernziele je Sitzung, Schülerkompetenzen, Bezugsrahmen |
| [Technik-Vorbereitung](00_Kurskonzept/03_Technik_Vorbereitung.md) | Open Roberta Connector, Token, Besonderheiten des mBot2, Checkliste, Plan B |
| [Kursausschreibung](00_Kurskonzept/04_Kursausschreibung.md) | Vorlage für Bildungsportal und Anerkennung |
| [Qualitätssicherung](00_Kurskonzept/05_Qualitaetssicherung.md) | Prüfkriterien, Befunde im Ausgangsmaterial, Prüfung der Wissenschecks, offene Punkte |
| [Quellen](00_Kurskonzept/06_Quellen.md) | Literatur, Kompetenzrahmen, technische Quellen |

## Wichtig vor der ersten Durchführung

Die Musterprogramme wurden anhand der offiziellen Blockhilfe von Open Roberta für das System „mBot 2“ geschrieben, aber **noch nicht an einem Gerät ausgeführt**. Bitte jedes Programm einmal testen und im Testprotokoll des jeweiligen Lösungshefts abzeichnen. Weitere offene Punkte stehen in der [Qualitätssicherung, Abschnitt 5](00_Kurskonzept/05_Qualitaetssicherung.md#5-offene-punkte-vor-der-ersten-durchführung).

## Materialien neu erzeugen und prüfen

Die `.pptx`- und `.docx`-Dateien werden aus den Quellen in `scripts/` erzeugt:

```bash
cd scripts && npm install && cd ..
./scripts/build.sh                 # Folien, Word-Dateien, Qualitätsprüfung
python3 scripts/qa_check.py --links  # zusätzlich alle Links prüfen
```

`qa_check.py` prüft Antwortformate und Rückmeldungen der Wissenschecks, die Zuordnung jedes Lernziels zu Quiz und Arbeitsheft und die Zeitsumme der Verlaufspläne. `fit_check.py` prüft mit den Office-Schriftmetriken, ob Text in die Folienfelder passt.

## Lizenz

[CC BY 4.0](LICENSE) – ITVET, Otto-von-Guericke-Universität Magdeburg. Grundlage: Materialien der Studierenden der Didaktikwerkstatt Technik, Sommersemester 2026.
