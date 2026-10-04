# Unterrichtsmaterial Klasse 7 – Den mBot2 programmieren

**Zur Sitzung 2 der Fortbildungsreihe „Der mBot2 im Fachunterricht“**

Das Material ist die schülergerechte Fassung der Aufgaben, die Sie in der Fortbildung selbst bearbeitet haben. Die Hinweise und Diskussionsfragen werden in Sitzung 2 (Phase 75–85) oder im Moodle-Forum besprochen.

---

## Teil A – Hinweise für die Lehrkraft

| Merkmal | Hinweis |
|---|---|
| Klassenstufe | 7 (anpassbar für 6–9) |
| Fächer | Informatik, Technik; Aufgaben A1/A2 auch Mathematik, B1 auch Physik |
| Zeit | 2 Doppelstunden: (1) Mensch-Roboter + A1/A2, (2) A3/B1 + Präsentation |
| Sozialform | Teams zu 2–3 mit Rollen: Programmierer:in, Tester:in (Maßband, Protokoll), Sprecher:in |
| Kompetenzen | S2 Algorithmus formulieren und programmieren; S3 Wiederholung und Bedingung einsetzen; S5 Fehler systematisch suchen |
| Vorbereitung | mBot2 montiert und geladen, Connector installiert und getestet, Fahrfläche auf dem Boden, Maßbänder, Klebeband |

**Bewährte Regeln für die Klasse**

1. **Start mit A, Stopp mit B** – kein Programm ohne Not-Aus.
2. **Erst vorhersagen, dann testen** – ohne Eintrag im Protokoll keine Testfahrt.
3. **Eine Änderung pro Test.**
4. **Erst Team, dann Nachbarteam, dann Lehrkraft.**

### Diskussionsfragen für die Fortbildung

1. **Testfahrten organisieren:** 28 Schülerinnen und Schüler, 9 Roboter, eine Fahrfläche. Wie verhindern Sie Wartezeiten und Chaos? (Testzonen, Zeitfenster, „Boxenstopp“-Prinzip)
2. **Protokollpflicht:** Bremst das Protokoll die Motivation, oder macht es das Lernen sichtbar? Wie knapp darf es sein?
3. **Hilfekarten:** Sollen sie offen ausliegen, oder müssen sie „verdient“ werden (nach 3 Minuten Probieren)?
4. **Leistung sichtbar machen:** Was zeigt Lernzuwachs besser – das fahrende Programm oder das ausgefüllte Vorhersage-Protokoll?

<!-- pagebreak -->

## Teil B – Mensch-Roboter (Befehlskarten zum Ausschneiden)

**So geht’s:** Eine Person ist der Roboter und tut **nur**, was auf den Karten steht. Die andere legt die Karten als Programm hin. Auftrag: Führt den Roboter einmal um einen Stuhl herum zurück zum Start.

> **GEHE ___ SCHRITTE**

> **DREHE DICH 90° NACH LINKS**

> **DREHE DICH 90° NACH RECHTS**

> **WIEDERHOLE ___ MAL:** [ Karten hier hineinlegen ]

> **WENN** ein Hindernis direkt vor dir ist, **DANN** [ … ] **SONST** [ … ]

**Fragen danach:** Wie viele Karten habt ihr ohne die WIEDERHOLE-Karte gebraucht, wie viele mit? Was kann die WENN-Karte, was die anderen nicht können?

<!-- pagebreak -->

## Teil C – Aufgabenkarten

### Karte A1 – Genau 50 Zentimeter

Der mBot2 soll auf Knopfdruck **genau 50 cm** geradeaus fahren.

| | |
|---|---|
| **Ich vermute:** Er wird ______ cm weit fahren. | **Gemessen:** 1. ____ cm 2. ____ cm 3. ____ cm |

Warum fährt er nicht jedes Mal genau gleich weit?

[[LINIEN:2]]

### Karte A2 – Vielecke fahren

Programmiert ein **Quadrat** mit 30 cm Seitenlänge. Benutzt **Wiederhole 4 mal**.
Danach: Dreieck und Sechseck. Tragt erst ein, wie weit sich der mBot2 an jeder Ecke drehen muss!

| Figur | Ecken | Drehung an jeder Ecke | Hat es geklappt? |
|---|---|---|---|
| Quadrat | 4 | | |
| Dreieck | 3 | | |
| Sechseck | 6 | | |

**Unsere Regel:** Drehung = ___________

### Karte A3 – Nachtlicht

Wird es dunkel, leuchtet der mBot2 rot, sonst grün.
1. Lasst den Lichtwert auf dem Display anzeigen. Hell: _____ Dunkel (Hand darüber): _____
2. Unsere Grenze: _____ , weil ______________________________
3. Programmiert: **Wenn** Lichtwert < Grenze **dann** rot, **sonst** grün.

### Karte B1 – Nicht anstoßen!

Der mBot2 fährt los. Ist ein Hindernis näher als 15 cm, hält er an, piept, fährt zurück und dreht sich. Dann fährt er weiter.
Messt: Wie weit ist er beim Anhalten wirklich von der Wand weg?

| Tempo | Abstand beim Anhalten |
|---|---|
| langsam (40) | |
| schnell (100) | |

Warum ist der Abstand beim schnellen Tempo kleiner?

[[LINIEN:2]]

<!-- pagebreak -->

## Teil D – Unser Programmier-Protokoll

| Test Nr. | Was haben wir geändert? | Was vermuten wir? | Was ist passiert? | ✓ / ✗ |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

## Teil E – Hilfekarten (erst nach 3 Minuten eigenem Probieren!)

| Karte | Hilfe 1: Denk mal nach | Hilfe 2: Diese Blöcke brauchst du | Hilfe 3: So fängt es an |
|---|---|---|---|
| A1 | Wie weit kommt ein Rad bei einer Umdrehung? | Aktion → „Fahre … Strecke cm …“ | Warte bis Taste A → Fahre vorwärts Tempo 50, Strecke 50 |
| A2 | Wie oft dreht sich der Roboter insgesamt, bis er wieder nach vorn schaut? | Kontrolle → „Wiederhole n mal“; Aktion → „Drehe … Grad …“ | Wiederhole 4 mal: Fahre 30 cm, Drehe links 90 Grad |
| A3 | Welche Zahl liegt zwischen hell und dunkel? | Sensoren → „Lichtsensor“; Logik → „<“; Kontrolle → „Wenn … sonst“ | Wenn Lichtwert < Grenze: LED rot, sonst: LED grün |
| B1 | Was soll der Roboter normalerweise tun, und was nur bei einem Hindernis? | Sensoren → „Abstand Ultraschallsensor“; Kontrolle → „Wenn … sonst“ | Wenn Abstand < 15: Stoppe … sonst: Fahre vorwärts |
