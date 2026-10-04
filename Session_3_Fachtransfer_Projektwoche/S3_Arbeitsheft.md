# Arbeitsheft Sitzung 3 – Vom Roboter zum Unterricht

**Fortbildungsreihe „Der mBot2 im Fachunterricht“** · Fachbezogene Erprobung und Planung einer Projektwoche · 90 Minuten

Name: ______________________________   Fachgruppe: ______________________________

> **Ihr Ziel heute:** Sie erproben in Ihrer Fachgruppe eine Aufgabe am mBot2 so, wie sie später Ihre Schülerinnen und Schüler bearbeiten. Aus Ihren Erfahrungen entwickeln Sie einen Tagesplan für eine **Klasse 7** und stimmen ihn mit den anderen Projekttagen ab.

**Grundprinzip: Erst selbst ausprobieren – dann planen.**

---

## Die Projektwoche im Überblick

| Tag | Fach | Tagesziel der Schülerinnen und Schüler | Unterrichtszeit |
|---|---|---|---|
| Montag | Technik | mBot2 geprüft; ein Fehler systematisch gefunden, behoben und mit Kontrolltest belegt | 3–5 Std. |
| Dienstag | Mathematik | Fahrwege im Raster berechnet, verglichen, begründet und mit dem mBot2 überprüft | 4–6 Std. |
| Mittwoch | Physik | zwei Messungen mit Hypothese durchgeführt, dargestellt und ausgewertet | 4–6 Std. |
| Donnerstag | Informatik | eigenes Steuerprogramm mit Schleife und Bedingungen entwickelt und getestet | 4–6 Std. |
| Freitag | Präsentation | Schülerinnen und Schüler präsentieren als Expert:innen (schulindividuell) | 3–4 Std. |

**Referenz-Lerngruppe:** Klasse 7, Teams zu 3–4, Rollen Bedienung – Beobachtung – Dokumentation, täglich wechselnd. Die mBot2 sind montiert; Grundbefehle sind aus einer Einführungsstunde bekannt.

**Rollen in Ihrer Fachgruppe heute:** Bedienung · Zeit und Beobachtung · Dokumentation – Wechsel nach dem Kernauftrag.

<!-- pagebreak -->

## Aufgabenkarten der Fachgruppen (Erprobung 30 Min.) · LZ 3.1

### Montag – Technik: Funktionsprüfung und Fehlersuche

**Kernauftrag (20 Min.)**
1. Legen Sie ein beobachtbares **Soll-Verhalten** fest (z. B. 30 cm vorwärts, LED grün, Ton) und programmieren Sie es. Sichern Sie die funktionierende Version (Export).
2. Bauen Sie **genau einen** reversiblen Fehler ein – im Programm **oder** in der Hardware (**nur bei ausgeschaltetem Gerät**; keine Eingriffe am Akku). Beispiele: falsche Richtung, falsche Strecke, abgezogenes Motor- oder Sensorkabel.
3. Schreiben Sie einen **Diagnoseauftrag** für Klasse 7: nur Soll-Verhalten und beobachtbares Symptom, nicht die Ursache.
4. Tauschen Sie mit der Nachbargruppe oder einer Person aus Ihrer Gruppe, die nicht zugesehen hat: Findet sie den Fehler mit *Beobachten → Vermuten → Testen → Ändern → Kontrolltest*?

**Erweiterung (10 Min.)** Formulieren Sie **gestufte Hinweise** (H1–H3), die helfen, ohne die Ursache zu verraten.

### Dienstag – Mathematik: Fahrwege planen und vergleichen

**Kernauftrag (20 Min.)**
Raster: 1 Feld = 20 cm. Start S (0|0), Ziel Z (3|2). Der mBot2 startet in Richtung der positiven x-Achse und fährt nur auf Rasterlinien.
1. **Weg A** über (3|0) nach Z; **Weg B** über (0|3) und (3|3) nach Z. Zeichnen Sie beide Wege. Berechnen Sie Teilstrecken und Gesamtlänge und bestimmen Sie alle Drehungen (Richtung, Winkel).
2. Welcher Weg ist kürzer, um wie viel? Begründen Sie, warum es keinen kürzeren Weg auf dem Raster geben kann.
3. Kleben Sie das Raster, programmieren Sie **Weg A** und messen Sie, wo der mBot2 tatsächlich endet.

**Erweiterung (10 Min.)** Wie viele verschiedene kürzeste Wege gibt es? Wie verändert ein gesperrtes Rasterstück die Wahl? Programmieren Sie Weg B.

### Mittwoch – Physik: Messen mit Sensoren

**Kernauftrag (20 Min.)** Wählen Sie **zwei** Versuche. Formulieren Sie vor jeder Messung eine **Hypothese**.
- **Ultraschall:** Hindernis bei 10, 20, 30 und 50 cm (Maßband). Sensorwert auf dem Display anzeigen und mit dem Maßband vergleichen.
- **Reflexion:** Helligkeitswert des Quad-RGB-Sensors über Schwarz, Weiß und zwei Farben vergleichen.
- **Bewegung (Weg-Zeit):** Marken bei 0, 20, 40 und 60 cm. Der mBot2 fährt mit Tempo 60 U/min (fliegender Start: 30 cm Anlauf vor der 0-Marke). Zeiten an den Marken stoppen oder filmen, drei Fahrten.

**Erweiterung (10 Min.)** Weg-Zeit-Diagramm zeichnen; Geschwindigkeit aus der Steigung bestimmen und mit dem Rechenwert aus Raddurchmesser und U/min vergleichen.

### Donnerstag – Informatik: Steuerprogramm mit Schleife und Bedingungen

**Kernauftrag (20 Min.)**
1. Der mBot2 fährt (Start mit A, Stopp mit B), bis der Ultraschallsensor ein Hindernis unter 15 cm erkennt. Dann stoppt er und fährt 10 cm zurück.
2. Ergänzen Sie eine zweite Bedingung: Ohne Hindernis folgt er einer Linie (Quad-RGB-Sensor, Schwellenwert aus Sitzung 2 oder vom Mittwoch).
3. Testen Sie mehrfach, variieren Sie einen Schwellenwert.
4. Zeichnen Sie ein **Ablaufdiagramm** (Schleife → Bedingung → Aktion).

**Erweiterung (10 Min.)** Welche Bedingung muss Vorrang haben – Hindernis oder Linie? Begründen Sie und prüfen Sie im Test.

### Offene Gruppe – eigenes Fach

**Kernauftrag (20 Min.)** Wählen Sie eine der Varianten oder eine eigene Idee mit klarem Fachbezug.
- **Deutsch – Vorgangsbeschreibung:** Schreiben Sie eine Anleitung, nach der eine andere Person *ohne Hilfe* ein mBot2-Programm (z. B. Vieleck aus Sitzung 2) nachbaut. Testen Sie die Anleitung mit einer Person aus einer anderen Gruppe. Wo scheitert sie, und warum?
- **Ethik – Entscheidungen von Maschinen:** Programmieren Sie den „Hindernis“-Roboter so, dass er bei einem Hindernis immer nach rechts ausweicht. Diskutieren Sie: Wer hat diese Entscheidung getroffen? Was wäre, wenn rechts ein zweites Hindernis steht? Übertragen Sie auf ein reales System (z. B. Notbremsassistent).
- **Biologie – Verhalten modellieren:** Photokinese (Sitzung 2, C2) als Modell; Grenzen des Modells benennen.

**Erweiterung (10 Min.)** Formulieren Sie die fachliche Leitfrage für Klasse 7 und ein erwartbares Schülerergebnis.

<!-- pagebreak -->

## Zeit- und Beobachtungsprotokoll (Rolle „Zeit und Beobachtung“)

| Schritt | Dauer (Min.) | Stolperstelle / Aha-Moment | Was braucht Klasse 7 hier? |
|---|---|---|---|
| | | | |
| | | | |
| | | | |
| | | | |

## Planungsvorlage Tagesplan (20 Min.) · LZ 3.1–3.3

| Planungselement | Ihr Eintrag |
|---|---|
| Tag und Fach | |
| Bezug zum Fachlehrplan (Sachsen-Anhalt) | |
| **Fachliches Lernziel** (Operator + Inhalt; überprüfbar) | Die Schülerinnen und Schüler … |
| **Rolle des mBot2 und Mehrwert** (Was wird erst durch ihn möglich oder besser?) | |
| Unterrichtszeit gesamt | |
| Einstieg (Zeit, Inhalt) | |
| Erarbeitung 1 (Zeit, Inhalt) | |
| Erarbeitung 2 (Zeit, Inhalt) | |
| Sicherung (Zeit, Inhalt) | |
| Puffer (mind. 20 %) | |
| **Erwartbare Lernhürde → passende Hilfe** | |
| **Vertiefung** für Schnelle | |
| **Lernnachweis** (Woran sieht man den Lernzuwachs?) | |
| Technische und organisatorische Vorbereitung | |
| **Wir brauchen vom Vortag** | |
| **Wir übergeben an den nächsten Tag** | |

## Kriterienkarte für das Peer-Feedback · LZ 3.4

Gruppe: ____________ Feedback von: ____________

| Kriterium | ✓ | Anmerkung |
|---|---|---|
| Fachliches Lernziel klar und überprüfbar | ☐ | |
| Mehrwert des mBot2 begründet | ☐ | |
| Zeitplanung aus der Erprobung abgeleitet, Puffer vorhanden | ☐ | |
| Lernhürde und Hilfe konkret | ☐ | |
| Lernnachweis benannt | ☐ | |
| Übergabe geklärt | ☐ | |

**Stärke 1:** ______________________________ **Stärke 2:** ______________________________
**Frage:** ______________________________ **Tipp:** ______________________________

## Übergabe-Matrix · LZ 3.4

| Von → An | Was wird übergeben? | Warum ist es wichtig? |
|---|---|---|
| Mo → Di | | |
| Di → Mi | | |
| Mi → Do | | |
| Do → Fr | | |

<!-- pagebreak -->

## Organisations-Checkliste für die eigene Schule · LZ 3.5

- [ ] mBot2 für Klasse 7 bereitstellen (mind. 1 je 3–4 Schülerinnen und Schüler), Montage und Ladezustand prüfen
- [ ] Connector auf allen Schülergeräten installiert und getestet (IT/Medienzentrum)
- [ ] Unterrichtszeit je Tag mit der Schulleitung abstimmen
- [ ] Zeitplan aller beteiligten Lehrkräfte abstimmen; Übergabe-Matrix verteilen
- [ ] Räume und Fahrflächen reservieren (Boden!), Maßbänder, Klebeband, Hindernisse
- [ ] Projekttagebücher, Protokollvorlagen, Hilfekarten drucken
- [ ] Fehlerfälle für Montag vorab testen; Lösungsblätter getrennt aufbewahren
- [ ] Freitag: Format, Ort, Publikum festlegen; Foto-Einverständnisse einholen

## Wo stehe ich jetzt?

Tragen Sie Ihre Einschätzung ein und vergleichen Sie mit Aufgabe 0 aus Sitzung 1 (1 = trifft nicht zu … 4 = trifft voll zu).

| Aussage | S1 | heute |
|---|---|---|
| Ich kann die Bauteile des mBot2 und ihre Funktion erklären. | | |
| Ich kann den mBot2 mit Open Roberta verbinden und ein Programm übertragen. | | |
| Ich kann ein Programm mit Schleife und Bedingung selbst schreiben. | | |
| Ich kann einen Sensorwert messen und einen sinnvollen Schwellenwert festlegen. | | |
| Ich kann begründen, wozu der mBot2 in meinem Fach beiträgt. | | |
| Ich kann eine Unterrichtsstunde mit dem mBot2 für eine heterogene Klasse planen. | | |
| Ich weiß, was technisch und organisatorisch vorbereitet werden muss. | | |

## Praxisauftrag (Abschluss der Fortbildung)

Übertragen Sie Ihren Tagesplan (oder einen Teil davon, mind. 45 Min.) auf eine **eigene Lerngruppe**, führen Sie ihn durch, wenn möglich, und reichen Sie im Moodle-Kurs ein (ca. 1 Seite):

1. den angepassten Plan (Lerngruppe, Lernziel, Ablauf, Differenzierung, Lernnachweis),
2. eine Kurzreflexion: Was hat funktioniert? Was hat länger gedauert als geplant? Was ändern Sie?

Falls eine Durchführung bis zum Abgabetermin nicht möglich ist, reflektieren Sie stattdessen die erwarteten Stolperstellen und Ihre Vorbereitung.

## Notizen

[[LINIEN:6]]
