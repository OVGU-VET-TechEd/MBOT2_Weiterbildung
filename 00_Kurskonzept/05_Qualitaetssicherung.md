# Qualitätssicherung

Dieses Dokument hält fest, **wie** die Materialien geprüft wurden, **was** im studentischen Ausgangsmaterial gefunden und korrigiert wurde und **welche** Punkte vor der ersten Durchführung noch offen sind.

Prüfstand: 4. Oktober 2026

---

## 1 Prüfkriterien

| Kriterium | Prüffrage | Methode |
|---|---|---|
| Fachliche Richtigkeit | Stimmen Angaben zu mBot2, Open Roberta und Fachinhalten? | Abgleich mit dem Quellcode und der Blockhilfe von Open Roberta (GitHub, Robotersystem „mBot 2“), Herstellerdokumentation, Nachrechnen aller Zahlenangaben |
| Constructive Alignment | Passen Lernziele, Aktivitäten und Wissenschecks zueinander? (Biggs) | Jedes Lernziel hat mindestens eine Aktivität im Arbeitsheft und eine Frage im Wissenscheck (automatisch geprüft, `scripts/qa_check.py`) |
| Anforderungsniveau | Decken die Fragen nicht nur Reproduktion ab? | Zuordnung jeder Frage zu einem Anforderungsbereich (AFB I–III) |
| Fragequalität | Genau eine richtige Antwort (Single Choice)? Plausible Distraktoren? Keine Lösungshinweise durch Länge oder „immer/nie“? Rückmeldung mit Begründung? | manuelle Durchsicht + automatische Prüfung der Antwortformate |
| Zeitplausibilität | Ergeben die Phasen genau 90 Minuten? Passen die Zeiten zu den Erfahrungen aus der Erprobung? | automatische Summenprüfung + Abgleich mit Feedback und Selbstreflexionen |
| Zielgruppenpassung | Ist das Material für Lehrkräfte im Dienst geschrieben (Doppeldecker, Praxisbezug, keine Bewertung)? | manuelle Durchsicht |
| Sprache | Sie-Form für Lehrkräfte, Du-Form für Schülerinnen und Schüler, geschlechtergerecht, einheitliche Fachbegriffe | manuelle Durchsicht |
| Erreichbarkeit der Quellen | Funktionieren alle Links? | automatische Prüfung (`qa_check.py --links`) |

## 2 Befunde im Ausgangsmaterial und Maßnahmen

Schwere: **A** = fachlich falsch oder nicht durchführbar · **B** = didaktische Schwäche · **C** = formal/redaktionell

### 2.1 Übergreifend (Kompetenz- und Präsentationsentwürfe, Prompt-Ergebnisse)

| Befund | Schwere | Maßnahme |
|---|---|---|
| Hardwarebeschreibung bezieht sich auf den **mBot der 1. Generation** (Platine mCore, 4 × AA-Batterien, Ports 1–4, M1/M2), nicht auf den mBot2 (CyberPi, Shield mit Akku, EM1/EM2, mBuild). Die Wissenscheck-Frage „An welchen Port wird der Ultraschallsensor angeschlossen? – Port 3“ ist für den mBot2 falsch. | A | Alle Hardwareangaben auf mBot2 umgestellt; Frage 2 in Selbstlernmodul 1 thematisiert die Verwechslung ausdrücklich. |
| Uneinheitliche Bezeichnung der ICT-CFT-Ebenen (Erwerb/Vertiefung/Gestaltung, Anwendung/Infusion/Transformation, Technology Literacy) | B | Einheitlich Version 3: Wissenserwerb – Wissensvertiefung – Wissensgenerierung. |
| Vermischung von Kompetenzcodes aus verschiedenen Rahmen (ICT-CFT „KD.4.a“, KI-Kompetenzrahmen „KD 3.2.1“, DigComp 2.2 „5.2“) | B | Kompetenzmodell mit klar getrennten Bezugsrahmen (`02_Kompetenzmodell.md`); für Lehrkräfte DigCompEdu statt DigComp. |
| Analogien zu KI zu weitgehend (Linienfolger als „direkte Analogie zu maschinellem Lernen“) | B | Klare Unterscheidung regelbasiert ↔ lernend (S2 Frage 10, Lösung C1). |
| Lizenzhinweis „CC BY 4.0 – nicht-kommerziell“ widersprüchlich (CC BY erlaubt kommerzielle Nutzung) | C | Einheitlich CC BY 4.0 ohne Zusatz. |
| Preisangabe „ca. 35–55 € pro Gerät“ ohne Quelle und für den mBot2 nicht zutreffend | C | Entfernt; keine Preisangaben im Material. |
| Wissenschecks überwiegend Reproduktion (AFB I) | B | Neue Wissenschecks mit Schwerpunkt AFB II/III (Abschnitt 3). |

### 2.2 Sitzung 1 (Gruppe 1, erprobt)

| Befund | Schwere | Maßnahme |
|---|---|---|
| Software mBlock; Open Roberta im Feedback ausdrücklich gewünscht | A (Vorgabe) | Durchgängig Open Roberta Lab, Connector und Token als Inhalt. |
| Arbeitsblatt vollständig ausgefüllt – keine Aktivität der Lernenden | B | Zuordnungsaufgabe mit Wortspeicher; Lösung im Lösungsheft. |
| Installation und Rechte im Konzept nicht berücksichtigt (Selbstreflexion) | B | Technik-Check (Selbstlernmodul 0), Technik-Vorbereitung, Reflexionsimpuls „Weg 1/Weg 2“. |
| Zeitbedarf Montage im Tandem ca. 45 Min. (Feedback) | B | 36 Min. Montage + Plan B mit vormontierten Geräten ab Min. 55. |
| Ampel-Ergebnis nicht festgehalten; Schraubendreher-Tipp ging unter; Code-Erklärung nicht am Beamer | B | Flipchart-Zählung und Wiederholung; Live-Demo unter der Dokumentenkamera; Live-Programmierung am Beamer. |
| Erprobt mit kleiner, vorerfahrener Studierendengruppe | B | Rollen, Expert:innen-Regel und Differenzierungstabelle für heterogene Lehrkräftegruppen; erneute Erprobung empfohlen (Abschnitt 5). |
| Endlosschleife im Startblock (Besonderheit von Open Roberta beim mBot2) nicht berücksichtigt | A | Merksatz und Muster „Warte bis Taste A gedrückt?“ in allen Programmen. |

### 2.3 Sitzung 2 (Gruppe 2, erprobt)

| Befund | Schwere | Maßnahme |
|---|---|---|
| Kernprinzip „erst Simulation, dann echter Roboter“ – **Open Roberta bietet für den mBot2 keinen Simulator** (im Quellcode ist die Simulationscodeerzeugung für dieses System deaktiviert; Feature-Übersicht listet nur den mBot der 1. Generation) | A | Ersetzt durch PRIMM; Modell-Realität-Vergleich bleibt über Vorhersage und Messung erhalten. |
| Schnellstart „Makeblock → mBot“ wählt das falsche System | A | System „mBot 2“. |
| „Export als Java/Python“ | C | Open Roberta erzeugt für den mBot2 Python-Code; Hinweis angepasst. |
| C2 „Phototaxis“ mit einem einzigen, nach oben gerichteten Lichtsensor | A | Korrigiert zu Photokinese; Phototaxis als Reflexionsfrage mit Suchstrategie. |
| Mini-Teach ohne Struktur; Lernpfadwahl ohne Empfehlung; Reserve zu knapp (Hospitation) | B | Leitkarte, feste Stationen, Lernpfad-Empfehlung mit Wechselrecht, Reserve in der Wahlaufgabe. |
| Keine Musterlösungen | B | Lösungsheft mit Programmen, Rechenwegen und Testprotokoll. |

### 2.4 Sitzung 3 (Gruppe 3, erprobt und überarbeitet)

| Befund | Schwere | Maßnahme |
|---|---|---|
| Software mBlock | A (Vorgabe) | Open Roberta; Programme aus Sitzung 2 werden weiterverwendet. |
| Unterschiedliche Klassenstufen in den Gruppen (Selbstreflexion) | B | Gemeinsame Referenz-Jahrgangsstufe je Durchführung, zu Beginn festgelegt (Beispiel Klasse 7); Varianten für alle Jahrgänge in `07_Anpassung_Jahrgangsstufen.md`; Übertragung im Praxisauftrag. |
| Montag sah Zusammenbau vor (Selbstreflexion) | B | Funktionsprüfung und Fehlersuche (übernommen). |
| Kernauftrag und Erweiterung nicht getrennt; Beteiligung ungleich (Selbstreflexion) | B | Kernauftrag/Erweiterung auf jeder Karte; feste Rollen mit Wechsel. |
| ICT-CFT-Zuordnung mit Begriffen aus Version 2 („Technology Literacy“) | C | Version-3-Begriffe. |
| Nur MINT-Gruppen | B | Offene Gruppe für weitere Fächer. |

## 3 Prüfung der neuen Wissenschecks

**Ergebnis der automatischen Prüfung** (`python3 scripts/qa_check.py`): 30 Quizfragen, alle einem Lernziel zugeordnet, jede Single-Choice-Frage mit genau einer richtigen Antwort, alle mit begründeter Rückmeldung. Jedes der 15 Lernziele ist mit mindestens einer Quizfrage **und** einer Arbeitsheft-Aufgabe verbunden. Alle drei Verlaufspläne ergeben lückenlos 90 Minuten.

### 3.1 Verteilung der Anforderungsbereiche

| Selbstlernmodul | AFB I | AFB II | AFB III | Fragen |
|---|---|---|---|---|
| 1 | 3 (F1, F2, F7) | 6 (F3, F4, F5, F6, F8, F9) | 1 (F10) | 10 + 2 Erkundungsfragen (AFB II) |
| 2 | 1 (F1) | 6 (F3, F4, F5, F6, F10, F11) | 4 (F2, F7, F8, F9) | 11 |
| 3 | 0 | 5 (F1, F3, F5, F6, F8) | 4 (F2, F4, F7, F9) | 9 |

Die Progression folgt der Reihe: In Sitzung 1 werden Grundbegriffe gesichert (mehr AFB I), Sitzung 3 verlangt überwiegend Begründen und Beurteilen. Die Fragen erfüllen damit die Erwartung an die ICT-CFT-Progression von Wissenserwerb zu Wissensgenerierung.

### 3.2 Inhaltliche Durchsicht

| Prüfpunkt | Ergebnis |
|---|---|
| Sind die Fragen an der Lerngruppe orientiert? | Ja: Viele Fragen sind als Unterrichtssituationen formuliert (S1 F10, S2 F9, S3 F6, F9). Das entspricht der Zielgruppe „Lehrkräfte im Dienst“. |
| Haben die Distraktoren Diagnosewert? | Ja: Sie bilden typische Fehlvorstellungen ab – Innen- statt Außenwinkel (S2 F3), mBot der 1. Generation (S1 F2), „reagiert = lernt“ (S2 F10), „Roboter fährt = Lernnachweis“ (S3 F4). |
| Gibt es Lösungshinweise durch die Form? | Richtige Antworten sind teils die längsten Optionen (z. B. S3 F1, F8, F9). Weil die Wissenschecks der Selbststeuerung dienen und nicht bewertet werden, ist das vertretbar. Bei einer Überarbeitung die Längen angleichen. |
| Sind praktische Lernziele angemessen geprüft? | LZ 1.3 (Montage) und LZ 2.5 (Mini-Teach) sind Handlungsziele. Sie werden in der Präsenz beobachtet (Funktionsprüfung, Leitkarte); die Quizfragen prüfen nur das zugehörige Wissen. Das ist so beabsichtigt. |
| Stimmen alle Rechnungen? | Nachgerechnet: Radumfang π · 6,5 cm ≈ 20,4 cm; 50 cm ≈ 2,45 Umdrehungen; 50 U/min ≈ 17 cm/s; 60 U/min ≈ 20,4 cm/s; Weg A = 100 cm, Weg B = 140 cm; 10 kürzeste Rasterwege; P(6 ≤ X ≤ 14) bei n = 20, p = 0,5 ≈ 0,96. |

## 4 Prüfung der Unterrichtsmaterialien (Beispiel Klasse 7 und Varianten)

| Prüfpunkt | Ergebnis |
|---|---|
| Sprache altersgerecht (Du-Form, kurze Sätze, Wortspeicher) | erfüllt |
| Aufgaben enthalten Vorhersage/Hypothese vor dem Testen | erfüllt (A1–B1, Mittwoch, Dienstag) |
| Differenzierung (Hilfekarten, Erweiterungen) | erfüllt; Hilfekarten dreistufig |
| Sicherheit (Fahrten am Boden, Not-Aus mit Taste B, Hardware nur ausgeschaltet verändern) | erfüllt |
| Bewertungsgrundlagen (Protokolle, Tagebuch, Beobachtungsbogen) | erfüllt |
| Anpassbarkeit an Klasse 5/6, 9/10 und Sek II | erfüllt: Stellschrauben und Varianten je Aufgabe in `07_Anpassung_Jahrgangsstufen.md`, Kurzfassung in jedem Unterrichtsmaterial |

## 5 Offene Punkte vor der ersten Durchführung

| Punkt | Verantwortlich | Status |
|---|---|---|
| **Alle Musterprogramme am Gerät testen** und im Testprotokoll der Lösungshefte abzeichnen. Die Programme wurden gegen die offizielle Blockhilfe von Open Roberta geschrieben, aber noch nicht an einem mBot2 ausgeführt. Blockbeschriftungen (z. B. Auswahl „alle“ bei den LEDs, Namen der Quad-RGB-Einzelsensoren) können abweichen. | Fortbildungsleitung | offen |
| Ablauf Connector → Token → Lab an den Geräten des Veranstaltungsorts durchspielen | Fortbildungsleitung | offen |
| Fundstellen in den Fachlehrplänen Sachsen-Anhalt für den Beispiel-Tagesplan eintragen | Fortbildungsleitung / Teilnehmende (Selbstlernmodul 2) | offen |
| Klärung mit dem LISA, Fachbereich 4 (E-Mail-Entwurf `08_LISA_Anerkennung/05_Anfrage_LISA.md`); Termine, Ort, Kosten in Ausschreibung, Kursprogramm und Einladung ergänzen | Veranstalter | offen |
| SCORM-Pakete einmal im Bildungsportal hochladen und mit einem Testkonto durchlaufen (Speichern des Bearbeitungsstands, Abschlussverfolgung) | Fortbildungsleitung | offen |
| Zuordnung zur Fakultät für Humanwissenschaften im Logo bestätigen | Kursverantwortung | erledigt (bestätigt am 04.10.2026) |
| Pilotdurchführung mit einer Gruppe von mindestens 8 Lehrkräften; Zeiten, Lernpfade und Mini-Teach anhand der Evaluation nachjustieren | Fortbildungsleitung | offen |
| Link [roberta-home.de](https://www.roberta-home.de): Bei der automatischen Prüfung am 04.10.2026 schlug die Zertifikatsprüfung fehl. Vor Veröffentlichung im Browser prüfen. | Fortbildungsleitung | offen |
| Sollen die studentischen Autorinnen und Autoren der Ausgangsmaterialien namentlich genannt werden? | Kursverantwortung | offen |

## 6 Prüfungen der Überarbeitung vom 4. Oktober 2026

| Änderung | Prüfung | Ergebnis |
|---|---|---|
| Corporate Design der OVGU (Logo der Fakultät für Humanwissenschaften aus dem offiziellen CD-Paket, Hausfarbe #7a003f, Fakultätsfarbe #ef7d00, Office-Schrift Lucida Sans) | Folien in PowerPoint gerendert und gesichtet; Textpassung mit den Metriken von Lucida Sans geprüft (`fit_check.py`); Kontrast: auf Orange nur dunkle Schrift | keine Überläufe, keine Wortumbrüche |
| Anpassbarkeit an alle Jahrgangsstufen | jede Erwähnung von „Klasse 7“ geprüft: nur noch als Beispiel oder Voreinstellung; Variantentabellen je Sitzung und je Unterrichtsmaterial | erfüllt |
| SCORM-Pakete für Moodle | Manifest geprüft (SCORM 1.2, ASCII-Bezeichner); alle drei Pakete in einer simulierten SCORM-1.2-Umgebung (Chrome, API-Stub) gestartet: Initialisierung, Registrierung aller Quizfragen und Umfragen, Darstellung des Inhalts | erfüllt; Test im Bildungsportal steht aus |
| Unterlagen zur Anerkennung durch das LISA | Abgleich mit dem LISA-Formular LISA_PDF_V_0017 (alle Felder) und der Seite „Externe Fortbildungsangebote“ des Bildungsservers | Verfahren beschrieben; Eignung als Ersatzangebot vorab mit dem LISA klären |
