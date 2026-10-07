# Technik-Vorbereitung: mBot2 und Open Roberta Lab

> **Merksatz aus der Erprobung:** Technik-Vorbereitung ist Unterrichtszeit. In der studentischen Erprobung lief die Sitzung nur deshalb reibungslos, weil alles vorinstalliert war. Eine Installation während der Sitzung hätte nach Einschätzung der Durchführenden mindestens die Hälfte der Zeit gekostet. Zusätzlich fehlten den Durchführenden auf den Uni-Geräten die Rechte zur Installation.

Diese Checkliste gilt für die Fortbildungsleitung **und** dient als Vorlage für die Teilnehmenden an ihrer eigenen Schule (Selbstlernmodul 0).

*Stand: Oktober 2026. Open Roberta wird laufend weiterentwickelt; Menüs und Abläufe vor jeder Durchführung einmal selbst prüfen.*

---

## 1 Was wird gebraucht?

| Komponente | Hinweis |
|---|---|
| mBot2 (Makeblock) | CyberPi als Steuereinheit, mBot2-Shield mit eingebautem Li-Ionen-Akku, 2 Encoder-Motoren, Ultraschallsensor 2, Quad-RGB-Sensor |
| USB-C-Kabel (Datenkabel!) | Im Bausatz enthalten. Reine Ladekabel übertragen keine Daten – häufigste Fehlerquelle. |
| Laptop / PC | aktueller Browser (Chrome, Edge oder Firefox) |
| Open Roberta Lab | [lab.open-roberta.org](https://lab.open-roberta.org) – browserbasiert, keine Anmeldung nötig |
| Open Roberta Connector | kleines Programm, das die Verbindung zwischen Browser und mBot2 herstellt. Download über die Open-Roberta-Seiten bzw. [GitHub: openroberta-connector](https://github.com/OpenRoberta/openroberta-connector/releases). **Installation benötigt in der Regel Administratorrechte.** |
| Schraubendreher | im Bausatz; Bit ist umsteckbar (Kreuz- und Sechskantseite) |
| Für Sitzung 2/3 | schwarzes Isolierband (19 mm) auf weißem Karton/Plakat, Maßband (mind. 2 m), Lineale, Stoppuhr (Smartphone), Bücher/Kartons als Hindernisse, Klebeband zum Markieren |

## 2 So wird der mBot2 mit Open Roberta verbunden

Diese Schritte werden in Sitzung 1 am Beamer vorgeführt und stehen im Arbeitsheft.

1. mBot2 am Shield **einschalten** und per **USB-C-Datenkabel** mit dem Laptop verbinden.
2. **Open Roberta Connector** starten. Er sucht nach einem angeschlossenen Roboter und zeigt ihn an.
3. Im Connector auf **„Verbinden“** klicken. Der Connector zeigt einen **Token** (Zeichenfolge, z. B. `7GH2KQ9X`).
4. Im Browser [lab.open-roberta.org](https://lab.open-roberta.org) öffnen und als System **„mBot 2“** auswählen.
5. Im Lab: Menü **Roboter → Verbinden**, den Token eingeben, bestätigen. Das Roboter-Symbol zeigt nun „verbunden“.
6. Programm erstellen und mit dem **Play-Knopf** (unten rechts) auf den Roboter übertragen.

### Drei Dinge, die man über den mBot2 in Open Roberta wissen muss

| Besonderheit | Konsequenz für den Unterricht |
|---|---|
| **Kein Simulator.** Für den mBot2 bietet Open Roberta (anders als für den mBot der 1. Generation, Calliope oder EV3) keine Simulation an. | Programme werden direkt am Gerät getestet. Methodisch wird die Simulation durch **Vorhersagen** ersetzt (PRIMM, Sitzung 2). |
| **Der Startblock enthält eine fest verbundene „Wiederhole unendlich oft“-Schleife**, die sich nicht entfernen lässt. | Jedes Programm läuft immer wieder von vorn. Ein Quadrat wird endlos gefahren. Lösung: Als ersten Block in der Schleife **„Warte bis Taste A gedrückt?“** einsetzen. Dann startet jeder Durchlauf erst auf Knopfdruck – das ist auch eine gute Sicherheitsregel. |
| **Geschwindigkeit in U/min** (Umdrehungen pro Minute, −200 bis 200), Strecken in cm, Drehungen in Grad. Die Standardkonfiguration rechnet mit 6,5 cm Raddurchmesser und 11,5 cm Spurweite. | Gut für Mathematik und Physik: Strecke pro Radumdrehung ≈ π · 6,5 cm ≈ 20,4 cm; bei 60 U/min fährt der mBot2 rechnerisch ca. 20 cm/s. |

## 3 Zeitplan für die Vorbereitung

### Zwei bis drei Wochen vorher

- [ ] Rechte klären: Darf auf den Geräten der Connector installiert werden? Wenn nein: Schul-IT bzw. Support des Medienzentrums einbinden.
- [ ] Connector auf **allen** Laptops installieren; einmal starten (Firewall-Abfrage bestätigen).
- [ ] Open Roberta Lab im Schulnetz aufrufen (Filter/Proxy blockiert manchmal die Verbindung).
- [ ] Moodle-Kurs im Bildungsportal Magdeburg anlegen, Selbstlernmodule verlinken.

### Eine Woche vorher

- [ ] Alle mBot2 **vollständig laden** (Ladezeit laut Hersteller beachten; Ladeanzeige am Shield).
- [ ] Bausätze auf Vollständigkeit prüfen (Schrauben, Kabel 10 cm und 20 cm, Reifen).
- [ ] **Firmware des CyberPi** prüfen. Bei Verbindungsproblemen zuerst die Firmware über die mBlock-Weboberfläche ([ide.mblock.cc](https://ide.mblock.cc)) aktualisieren. *Hinweis:* Dafür wird mBlock nur einmalig durch die Leitung genutzt, nicht im Kurs.
- [ ] Mit **jedem** mBot2 einen Verbindungstest mit dem Testprogramm aus dem Lösungsheft machen.
- [ ] 2–3 mBot2 **vormontieren** (Plan B für Sitzung 1).

### Am Tag der Sitzung

- [ ] Laptops laden bzw. Steckdosenleisten bereitstellen.
- [ ] Beamer + Dokumentenkamera (für die Bauteil-Erklärung und die Schraubendreher-Demo) testen.
- [ ] Fahrfläche freiräumen; Fahrtests auf dem **Boden**, nicht auf Tischen.
- [ ] Maßband, Klebeband und Hindernisse bereitlegen.
- [ ] Sichtbaren Timer vorbereiten.

## 4 Plan B – wenn es hakt

| Problem | Erste Hilfe |
|---|---|
| Connector findet den mBot2 nicht | anderes USB-C-Kabel (Datenkabel!) testen; mBot2 aus- und einschalten; anderen USB-Anschluss nutzen; Connector neu starten |
| Token wird nicht akzeptiert | Token neu erzeugen (Connector trennen und neu verbinden); im Lab das richtige System „mBot 2“ gewählt? |
| Programm startet nicht | Ist der Roboter eingeschaltet? Akku leer? Wartet das Programm auf „Taste A“? |
| mBot2 fährt im Kreis | Ein Motorkabel lose? Beide Motorkabel fest einstecken. |
| mBot2 fährt rückwärts oder dreht falsch herum | Motorkabel vertauscht? Links muss an **EM1**, rechts an **EM2**. |
| Sensor liefert 0 oder Unsinn | mBuild-Kabel richtig eingesteckt? 10-cm-Kabel für Quad-RGB- und Ultraschallsensor verwendet? |
| Installation nicht möglich | Vorkonfigurierten Leih-Laptop der Leitung nutzen; Tandem mit einem funktionierenden Gerät zusammenlegen |
| Lab nicht erreichbar | Mobilen Hotspot nutzen; als letzte Rückfallebene Programme am Beamer gemeinsam vorhersagen (PRIMM) und an einem Gerät vorführen |

## 5 Datenschutz und Organisation an der Schule

- Open Roberta Lab ist **ohne Anmeldung** nutzbar. Programme können lokal als Datei exportiert und wieder importiert werden; ein Benutzerkonto ist nicht erforderlich. Für Schülerinnen und Schüler empfiehlt sich die Nutzung **ohne persönliche Konten**.
- Ob und wie Schülerkonten genutzt werden, entscheidet die Schule nach ihren Datenschutzvorgaben.
- Für öffentliche Präsentationen (Projektwoche, Freitag) Foto-Einverständnisse der Eltern rechtzeitig einholen.
- **Ladekonzept**: nummerierte mBot2 und Kabel, feste Ladestation, Verantwortliche je Klasse; nach jeder Stunde wieder ans Ladegerät.
- **Montage nur einmal**: Die mBot2 bleiben nach dem Zusammenbau montiert. Eine Wiederholung des Zusammenbaus in jeder Klasse kostet jeweils etwa eine Doppelstunde.
