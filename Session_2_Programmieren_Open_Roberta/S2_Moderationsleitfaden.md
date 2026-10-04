# Sitzung 2 – Programmieren mit Open Roberta: Sequenz, Schleife, Bedingung und Sensoren

**Moderationsleitfaden für die Fortbildungsleitung** · 90 Minuten · ICT-CFT-Ebene: Wissensvertiefung

Grundlage: das in der Didaktikwerkstatt Technik (SoSe 2026) erprobte „Modul 2: Kennenlernen des mBots & Open Roberta Lab“, überarbeitet nach Hospitationsfeedback und fachlicher Prüfung.

---

## 1 Ziele der Sitzung

Die Teilnehmenden können …

| Nr. | Lernziel | AFB |
|---|---|---|
| LZ 2.1 | Sequenz, Wiederholung (Zähl- und Endlosschleife) und Verzweigung unterscheiden und in NEPO anwenden. | II |
| LZ 2.2 | das Verhalten eines gegebenen Programms vorhersagen und mit dem beobachteten Verhalten vergleichen. | II |
| LZ 2.3 | Sensorwerte erfassen und einen Schwellenwert begründet festlegen. | II–III |
| LZ 2.4 | Fehler in Programmen systematisch eingrenzen und beheben. | III |
| LZ 2.5 | einen Algorithmus einer anderen Person verständlich erklären und Lernpfade für heterogene Gruppen beurteilen. | II–III |

**Kernbotschaft:** *Programmieren heißt: vorhersagen, testen, verbessern. Der mBot2 zeigt sofort, ob das eigene Modell der Wirklichkeit standhält.*

## 2 Was gegenüber der Erprobung geändert wurde

| Beobachtung in der Erprobung / fachliche Prüfung | Änderung |
|---|---|
| Das Konzept setzte auf „erst Simulation, dann echter mBot“. **Open Roberta bietet für den mBot2 keinen Simulator** (nur für den mBot der 1. Generation u. a.). | Ersetzt durch **PRIMM** (Predict – Run – Investigate – Modify – Make): Jedes Programm wird erst vorhergesagt, dann am Gerät getestet. Der Vergleich Modell ↔ Wirklichkeit bleibt Lernziel. |
| Anfängliche Verbindungsprobleme mit Open Roberta | „Ankommen = Verbinden“: Tandems verbinden ihren mBot2 bereits beim Ankommen (Folie 1 zeigt die Schritte). |
| Lernpfade funktionieren nur, wenn alle die passenden Aufgaben wählen | Selbsteinschätzung mit **Lernpfad-Empfehlung** (3 Fragen), die die Leitung bei Bedarf anpasst |
| Qualität der Mini-Teach-Erklärungen hing davon ab, wer erklärt | **Leitkarte** (3 Schritte, 4 Min.) und **feste Expert:innen-Stationen**, an denen die anderen rotieren |
| Expert:innen-Aufgaben wurden nicht bearbeitet | Lernpfad C ist kleiner, klarer und bereitet konkret Sitzung 3 vor (C3) |
| Wunsch nach garantiert funktionierenden Lösungen | Lösungsheft mit Musterprogrammen, gestuften Hilfekarten und Testprotokoll |
| Fünf Minuten Reserve waren bei Technikproblemen zu knapp | Reserve steckt in der Lernpfad-Phase (Pflicht + Wahl, Wahl entfällt bei Verzug) |
| Fachliche Unschärfen (z. B. „Phototaxis“ mit einem einzigen Lichtsensor, „Export als Java“) | korrigiert: mit einem Lichtsensor lässt sich **Photokinese** modellieren; Open Roberta zeigt für den mBot2 den erzeugten **Python-Code** |

## 3 Vorbereitung

- mBot2 aus Sitzung 1 (montiert, geladen, nummeriert); 1 Laptop je Tandem
- Linienparcours: schwarzes Isolierband (19 mm) auf weißem Karton/Plakat, ein Oval und eine Strecke mit sanften Kurven
- Hindernisse (Bücher, Kartons), **Maßband**, Lineale, Klebeband
- ausgedruckt: Arbeitsheft S2, Hilfekarten (gestuft H1–H3) je Aufgabe, Lösungskarten am Leitungstisch, Mini-Teach-Leitkarten
- Auswertung des Wissenschecks 1 aus Moodle: die zwei am häufigsten falsch beantworteten Fragen notieren
- Demo-Programm „Wachhund“ (Lösungsheft 2.1) auf dem Demo-mBot2 vorbereitet

## 4 Verlaufsplan

| Zeit | Phase | Inhalt und Handlung der Leitung | Sozialform / Medien | LZ |
|---|---|---|---|---|
| vorher | **Ankommen = Verbinden** | Tandems verbinden ihren mBot2 mit Open Roberta (Anleitung auf Folie 1) und testen das Verbindungsprogramm. | Tandem | – |
| 0–8 | **Rückblick und Lernpfad** | Kurz die zwei häufigsten Fehler aus Wissenscheck 1 klären (meist: Endlosschleife im Startblock; Encoder). Selbsteinschätzung mit drei Fragen → Lernpfad-Empfehlung A/B/C (Arbeitsheft S. 1). Leitung passt bei Bedarf an. | Plenum, Arbeitsheft | – |
| 8–18 | **Unplugged: Mensch-Roboter** | Partner:in A ist Roboter, B programmiert mit Befehlskarten. Auftrag: Roboter einmal um einen Stuhl führen. Erst nur Einzelbefehle, dann mit „Wiederhole n mal“, dann mit „Wenn Hindernis, dann …“. Plenum: Begriffe **Sequenz – Schleife – Bedingung** an die Tafel. | Partnerarbeit, Befehlskarten | 2.1 |
| 18–33 | **PRIMM am Beamer** | Programm „Wachhund“ zeigen. **Predict** (2 Min., Tandem notiert Vorhersage) → **Run** (Demo-mBot2) → **Investigate** (Was passiert bei 5 statt 20? Wo ist die Schleife? Warum blinkt nichts, wenn „sonst“ fehlt?) → **Modify** (Tandems lassen zusätzlich den Abstand auf dem Display anzeigen). Muster „Messen vor Entscheiden“ und „Start mit A, Stopp mit B“ einführen. | Plenum + Tandem, Folie 5–8 | 2.1–2.3 |
| 33–63 | **Lernpfade A/B/C** | Je Tandem eine **Pflicht**- und eine **Wahl**aufgabe aus dem empfohlenen Pfad. Jede Aufgabe: Vorhersage → Test → Messung/Beobachtung im Arbeitsheft. Gestufte Hilfekarten H1–H3 liegen aus; Lösungskarten nur am Leitungstisch. Leitung geht herum und fragt: *Was hast du vorhergesagt? Was ist passiert? Was änderst du als Nächstes – und nur das?* Bei Verzug entfällt die Wahlaufgabe. | Tandem, Arbeitsheft, Parcours | 2.1–2.4 |
| 63–75 | **Mini-Teach** | 3–4 **feste Stationen** (z. B. A2 Vieleck, B1 Hindernis, B2 Linienfolger, C1 Regler), besetzt mit je einer Person, die die Aufgabe gelöst hat. Die anderen rotieren zweimal (je 5 Min.). Leitkarte: 1. Was soll der Roboter tun? 2. Zeige im Code Schleife, Bedingung, Schwellenwert. 3. Lass dein Gegenüber eine Zahl ändern und vorhersagen, was passiert. | Stationen, Leitkarte | 2.5 |
| 75–85 | **Sicherung und Transfer** | (1) *Modell und Wirklichkeit:* Wo wichen Vorhersage und Fahrt ab? Warum? (Reibung, Akkustand, Sensorrauschen, Bremsweg) (2) *Fachbezug:* Jede Person schreibt eine Karte „Sequenz/Schleife/Bedingung steckt in meinem Fach in …“ → Pinnwand nach Fächern. (3) *Doppeldecker:* Welcher Lernpfad passt zu welcher Ihrer Klassen? | Plenum, Karten, Folie 11–12 | 2.2, 2.5 |
| 85–90 | **Ausblick** | Sitzung 3: Fachgruppen (Technik, Mathematik, Physik, Informatik, offen) – Wahl bis eine Woche vorher im Moodle. Selbstlernmodul 2. Programme exportieren (Datei) oder speichern. mBot2 an die Ladestation. | Plenum, Folie 13 | – |

## 5 Lernpfade im Überblick

| Pfad | Für wen? | Pflicht | Wahl |
|---|---|---|---|
| **A – Einstieg** | keine/wenig Programmiererfahrung | A1 Strecke messen | A2 Vielecke **oder** A3 Hell-Dunkel-Licht |
| **B – Sensoren** | Erfahrung mit Blocksprachen (Scratch, Calliope o. Ä.) | B1 Hindernis | B2 Linienfolger **oder** B3 Zufall |
| **C – Vertiefung** | Programmiererfahrung, auch textbasiert | C1 Linienfolger als Regler | C2 Verhaltensmodell **oder** C3 Unterrichtsaufgabe entwerfen |

Wechsel zwischen Pfaden ist ausdrücklich erlaubt („nach oben“ wie „nach unten“).

## 6 Gestufte Hilfen

Jede Aufgabe hat drei Hilfekarten. Die Teilnehmenden nehmen sie **der Reihe nach** und erst nach 3 Minuten eigenem Probieren.

| Stufe | Inhalt |
|---|---|
| H1 Denkanstoß | eine Frage, die auf den entscheidenden Gedanken lenkt |
| H2 Werkzeug | die benötigten Blöcke mit Kategorie |
| H3 Teillösung | Programmgerüst mit Lücken |

Die Hilfekarten stehen im Arbeitsheft-Anhang (Teilnehmende) und sind zugleich Vorlage für den eigenen Unterricht.

## 7 Typische Stolperstellen

| Stolperstelle | Hinweis |
|---|---|
| Programm „hängt“ | Es wartet auf Taste A – oder die innere Schleife hat keine Abbruchbedingung. |
| Zahl lässt sich nicht im Display anzeigen | Wert mit „wandle … um in Zeichenkette“ (Kategorie Text) umwandeln. |
| Linienfolger verliert die Linie | Tempo senken; Schwellenwert aus **gemessenen** Werten (Mittelwert schwarz/weiß) bilden; Kurven sanfter kleben. |
| Hindernis wird „zu spät“ erkannt | Bremsweg: Bei hohem Tempo fährt der mBot2 nach dem Stoppbefehl noch etwas weiter. Gute Physik-Frage! |
| Dreieck wird „zu spitz“ | Drehwinkel ist der Außenwinkel (120°), nicht der Innenwinkel (60°). |
| Viele Änderungen auf einmal | Debugging-Regel: **eine** Änderung, dann testen, dann notieren. |

## 8 Diskussionsimpulse

1. **Lernpfade in der Klasse:** Sollen Schülerinnen und Schüler ihren Pfad selbst wählen oder zugewiesen bekommen? Was spricht für die Kombination „Empfehlung + Wechselrecht“?
2. **Hilfekarten und Frust:** Ab wann ist eine Hilfe hilfreich, ab wann nimmt sie das Lernen weg? Wie lange lassen Sie probieren?
3. **Kein Simulator:** Nachteil (mehr Geräte nötig, mehr Unruhe) oder Vorteil (echtes Feedback, Modell-Realität-Vergleich)? Wie organisieren Sie Testfahrten mit 28 Schülerinnen und Schülern und 8 Robotern?
4. **Regelbasiert ist nicht lernend:** Der Linienfolger „lernt“ nichts – die Regeln stammen von Menschen. Wie nutzen Sie diesen Unterschied, wenn Schülerinnen und Schüler über KI sprechen?

## 9 Material dieser Sitzung

- `S2_Folien.pptx` – Präsentation mit Moderationsnotizen
- `S2_Arbeitsheft.md` / `.docx` – Arbeitsheft mit Lernpfaden, Protokollen und Hilfekarten
- `S2_Loesungen.md` / `.docx` – Musterprogramme, Erwartungshorizont, Testprotokoll
- `S2_Selbstlernmodul.md` – LiaScript: Wissenscheck und Vorbereitung auf Sitzung 3
- `S2_Unterrichtsmaterial.md` / `.docx` – Unplugged-Karte, Aufgabenkarten und Hilfekarten für die eigene Klasse
