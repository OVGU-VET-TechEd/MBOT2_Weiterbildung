# Moodle-Kurs einrichten (Bildungsportal Magdeburg)

Die drei Selbstlernmodule liegen als **SCORM-1.2-Pakete** im Ordner [`moodle/`](../moodle/). Sie wurden mit dem LiaScript-Exporter (Version 3.4) in den Einstellungen des Moodle-Presets erzeugt (SCORM 1.2, Inhalt eingebettet) und können direkt als Moodle-Aktivität „Lernpaket“ hochgeladen werden.

| Paket | Inhalt | Bearbeitungszeit |
|---|---|---|
| `S1_Selbstlernmodul_SCORM.zip` | Vorbereitung auf Sitzung 1 und Wissenscheck 1 | ca. 45 Min. |
| `S2_Selbstlernmodul_SCORM.zip` | Wissenscheck 2, Wahl von Fachgruppe und Jahrgangsstufe | ca. 30 Min. |
| `S3_Selbstlernmodul_SCORM.zip` | Wissenscheck 3, Praxisauftrag, Evaluation | ca. 30 Min. |

*Prüfstand:* Alle drei Pakete wurden mit einer simulierten SCORM-1.2-Laufzeitumgebung getestet: Sie starten, melden sich bei der Lernplattform an und übertragen den Bearbeitungsstand der Quizfragen. Ein Test im Bildungsportal selbst steht noch aus. Das Bildungsportal läuft auf Moodle ab Version 4.5.

## 1 Empfohlene Kursstruktur

| Abschnitt | Aktivitäten / Material |
|---|---|
| **Allgemeines** | Ankündigungen · Forum „Austausch“ · Kursprogramm (PDF/DOCX) · Technik-Vorbereitung |
| **Vor Sitzung 1** | Lernpaket „Selbstlernmodul 1“ (Teil A: Vorbereitung) |
| **Sitzung 1** | Folien S1 · Arbeitsheft S1 · Unterrichtsmaterial S1 |
| **Nach Sitzung 1** | Lernpaket „Selbstlernmodul 1“ (Teil B: Wissenscheck) – dieselbe Aktivität, die Teilnehmenden setzen dort fort |
| **Sitzung 2** | Folien S2 · Arbeitsheft S2 · Unterrichtsmaterial S2 |
| **Nach Sitzung 2** | Lernpaket „Selbstlernmodul 2“ |
| **Sitzung 3** | Folien S3 · Arbeitsheft S3 · Unterrichtsmaterial S3 · Anpassung an Jahrgangsstufen |
| **Abschluss** | Lernpaket „Selbstlernmodul 3“ · Aufgabe „Praxisauftrag“ (Datei-Abgabe, ca. 1 Seite) · Teilnahmebescheinigung |

Lösungshefte und Moderationsleitfäden **nicht** im Kurs für Teilnehmende veröffentlichen (nur für die Leitung).

## 2 Lernpaket hochladen

1. Bearbeiten einschalten → im Abschnitt „Aktivität oder Material anlegen“ → **Lernpaket**.
2. Name, z. B. „Selbstlernmodul 1 – Den mBot2 kennenlernen“, und das ZIP-Paket hochladen.
3. Einstellungen:

| Einstellung | Empfehlung | Begründung |
|---|---|---|
| Anzeigen | Aktuelles Fenster (bei Darstellungsproblemen: Neues Fenster) | LiaScript passt sich der Fenstergröße an |
| Bewertungsmethode | Lernobjekte | Wissenschecks dienen der Selbststeuerung, nicht der Benotung |
| Höchste Bewertung | 0 bzw. keine Bewertung | |
| Anzahl der Versuche | unbegrenzt | Wiederholung ausdrücklich erwünscht |
| Status „Abgeschlossen“ erzwingen | nein | |
| Abschlussverfolgung | Abschluss, wenn Status „abgeschlossen“ oder „bestanden“ | Voraussetzung für die Teilnahmebescheinigung |

**Upload-Grenze:** Jedes Paket ist ca. 7,6 MB groß (enthält die LiaScript-Laufzeitumgebung). Die maximale Dateigröße des Kurses muss mindestens 10 MB betragen.

## 3 Alternative ohne SCORM

Statt des Lernpakets kann jedes Modul als **Link** eingebunden werden (Aktivität „Link“ mit der LiaScript-Adresse aus der README). Vorteil: immer die aktuelle Fassung. Nachteil: Moodle erfasst keinen Bearbeitungsstand; die Antworten bleiben nur im Browser der Teilnehmenden.

## 4 Pakete neu erzeugen

Nach Änderungen an einem Selbstlernmodul:

```bash
./scripts/build_scorm.sh
```

Das Skript exportiert jedes Modul einzeln (damit keine Folien oder Word-Dateien ins Paket gelangen) und legt die Pakete in `moodle/` ab. Danach im Moodle-Kurs das Paket der jeweiligen Aktivität ersetzen. Bereits gespeicherte Bearbeitungsstände können dabei verloren gehen; Änderungen deshalb möglichst vor Kursbeginn vornehmen.

## 5 Datenschutz

Die Pakete speichern den Bearbeitungsstand im Moodle-Kurs. LiaScript legt dabei auch Antworten auf Umfragen und Freitextfelder (Erwartungen, Reflexion) als SCORM-Daten ab; sie können für die Kursleitung in den SCORM-Berichten sichtbar sein – darauf im Kurs hinweisen. Das Logo wird von GitHub geladen; die Vorlesefunktion von LiaScript nutzt bei Aktivierung einen externen Sprachdienst.
