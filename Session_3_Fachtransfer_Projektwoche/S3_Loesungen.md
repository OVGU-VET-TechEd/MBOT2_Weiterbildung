# Lösungen Sitzung 3 – Vom Roboter zum Unterricht

**Für die Fortbildungsleitung** · Lösungen der Erprobungsaufgaben, Beispiel-Tagesplan und Erwartungshorizont

> NEPO-Notation wie in den Lösungsheften 1 und 2. Messwerte und Schwellen sind Beispielwerte und müssen vor Ort gemessen werden. Programme vor dem ersten Einsatz testen und im Testprotokoll (Abschnitt 7) abzeichnen.

---

## 1 Montag – Technik: Beispiele für Fehlerfälle

| Fehler (eingebaut) | Symptom (für den Diagnoseauftrag) | geeigneter Test | H1 → H3 | Kontrolltest |
|---|---|---|---|---|
| Programm: „Fahre rückwärts“ statt „vorwärts“ | fährt in die falsche Richtung | Programm Block für Block lesen | H1: Vergleicht Soll und Ist – was genau ist anders? H2: Schaut euch die Auswahllisten in den Fahrblöcken an. H3: Richtung im ersten Fahrblock prüfen. | 30 cm vorwärts gemessen |
| Programm: Strecke 3 statt 30 cm | fährt nur ein kleines Stück | Strecke messen und mit Programm vergleichen | H1: Wie weit fährt er, wie weit soll er? H2: Wo steht im Programm die Strecke? H3: Zahl im Strecke-Feld prüfen. | 30 cm gemessen |
| Hardware: Motorkabel an EM2 abgezogen (Gerät aus!) | dreht sich im Kreis statt geradeaus | beide Räder beim Fahren beobachten | H1: Drehen sich beide Räder? H2: Verfolgt das Kabel vom Motor zum Shield. H3: Steckt der Stecker an EM2? | geradeaus 30 cm |
| Hardware: mBuild-Kabel des Ultraschallsensors abgezogen (Gerät aus!) | Wachhund-Programm reagiert nicht auf die Hand | Abstandswert auf dem Display anzeigen | H1: Welcher Sensor ist zuständig? H2: Was zeigt der Messwert an? H3: Kabelweg Sensor → Shield prüfen. | Hand bei 10 cm → LED rot |

**Sicherheitsregeln:** Hardware nur im ausgeschalteten Zustand verändern; keine Eingriffe am Akku; nach jedem Fehlerfall den Ausgangszustand wiederherstellen und prüfen.

## 2 Dienstag – Mathematik: Fahrwege

| Weg | Teilstrecken | Drehungen | Gesamtlänge |
|---|---|---|---|
| **A**: (0\|0) → (3\|0) → (3\|2) | 3 Felder = 60 cm; 2 Felder = 40 cm | bei (3\|0): **links 90°** | **100 cm** |
| **B**: (0\|0) → (0\|3) → (3\|3) → (3\|2) | 60 cm; 60 cm; 20 cm | zu Beginn **links 90°**; bei (0\|3) **rechts 90°**; bei (3\|3) **rechts 90°** | **140 cm** |

**Unterschied:** Weg A ist **40 cm** kürzer und braucht nur eine Drehung.

**Begründung des kürzesten Weges:** Auf Rasterlinien muss der Roboter mindestens 3 Felder in x-Richtung und 2 Felder in y-Richtung zurücklegen, also mindestens 5 Felder = **100 cm**. Jeder Umweg in Gegenrichtung muss wieder ausgeglichen werden und verlängert den Weg.
**Weitere kürzeste Wege:** Es gibt **10** (Anzahl der Anordnungen von 3 × „rechts“ und 2 × „hoch“: (5 über 2) = 10). In Klasse 7 genügt systematisches Aufzählen, z. B. als Baumdiagramm; ab Klasse 9/10 kann die Anzahl kombinatorisch begründet werden.

**Programm Weg A:**

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Fahre vorwärts  Tempo U/min 40  Strecke cm 60
    Drehe links     Tempo U/min 40  Grad 90
    Fahre vorwärts  Tempo U/min 40  Strecke cm 40
```

**Erwartung zur Messung:** Der Endpunkt weicht meist um einige Zentimeter ab, vor allem seitlich nach der Drehung. Didaktisch wertvoll ist die Unterscheidung zwischen **Planungsfehler** (falsche Rechnung oder Drehrichtung) und **Fahrungenauigkeit** (Schlupf, Untergrund).

## 3 Mittwoch – Physik: Erwartungen

**Ultraschall:** Die Sensorwerte stimmen meist auf wenige Zentimeter mit dem Maßband überein. Abweichungen hängen davon ab, ab welcher Stelle gemessen wird (Sensorvorderkante), und von Form und Material des Hindernisses (weiche oder schräge Flächen reflektieren schlechter). Hypothese und Vergleich in einer Tabelle sichern.

**Reflexion:** Schwarz liefert niedrige, Weiß hohe Helligkeitswerte; Farben liegen dazwischen. Erklärung: Helle Flächen reflektieren mehr Licht der Sensor-LEDs. Bezug zu Licht und Farben im Physikunterricht (Lehrplan prüfen).

**Bewegung:** Rechnerische Geschwindigkeit bei 60 U/min: v = 60 · π · 6,5 cm ÷ 60 s ≈ **20,4 cm/s**.

| Weg s (cm) | erwartete Zeit t (s) |
|---|---|
| 0 | 0 |
| 20 | ≈ 0,98 |
| 40 | ≈ 1,96 |
| 60 | ≈ 2,94 |

Das s-t-Diagramm ist annähernd eine Ursprungsgerade (gleichförmige Bewegung). Die Steigung entspricht der Geschwindigkeit. Messwerte streuen durch die Reaktionszeit beim Stoppen (ca. 0,2 s – Video ist genauer) und durch Schlupf. Der **fliegende Start** vermeidet, dass die Anfahrphase die Messung verfälscht.

## 4 Donnerstag – Informatik

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Wiederhole bis  Taste B gedrückt?
      Wenn  Gib Abstand cm Ultraschallsensor U  <  15
        Stoppe
        Fahre rückwärts  Tempo U/min 40  Strecke cm 10
      sonst
        Wenn  Gib Helligkeit % Quad RGB Sensor Q (mittlerer Sensor)  <  45
          Steure vorwärts  Tempo U/min links 30  Tempo U/min rechts 10
        sonst
          Steure vorwärts  Tempo U/min links 10  Tempo U/min rechts 30
    Stoppe
```

**Vorrang:** Die Hindernis-Bedingung steht **außen**, weil Sicherheit vor Aufgabe geht: Erst wenn kein Hindernis da ist, wird die Linie verfolgt. Steht die Linien-Bedingung außen, prüft der Roboter das Hindernis gar nicht mehr.

**Ablaufdiagramm (Kurzform):** Start → [Taste A?] → Schleife bis Taste B: [Abstand < 15?] ja → Stopp, zurück | nein → [dunkel?] ja → rechts lenken | nein → links lenken → zurück zum Schleifenanfang → Stopp.

## 5 Offene Gruppe – Erwartungen

- **Deutsch:** Die Anleitung scheitert typischerweise an Mehrdeutigkeiten („dreh ihn ein bisschen“), fehlenden Zahlen oder falscher Reihenfolge – genau die Merkmale einer guten Vorgangsbeschreibung (Reihenfolge, Genauigkeit, Fachbegriffe, Adressatenbezug) werden dadurch erfahrbar.
- **Ethik:** Die Ausweichregel wurde von Menschen festgelegt; die Maschine „entscheidet“ nicht im moralischen Sinn. Verantwortung liegt bei denen, die Regeln festlegen, testen und einsetzen. Grenzen fester Regeln zeigen sich, wenn Situationen eintreten, die beim Programmieren nicht bedacht wurden.
- **Biologie:** Modell und Original unterscheiden sich (ein Sensor, keine Lernfähigkeit, keine Motivation); das Modell hilft dennoch, Reiz-Reaktions-Zusammenhänge zu untersuchen.

## 6 Beispiel-Tagesplan: Dienstag – Mathematik (Beispiel Klasse 7)

| Planungselement | Eintrag |
|---|---|
| Bezug zum Fachlehrplan | Geometrie/Größen: Strecken und Winkel, Koordinatensystem; Problemlösen und Begründen (Fundstelle im Fachlehrplan Sachsen-Anhalt eintragen) |
| Fachliches Lernziel | Die Schülerinnen und Schüler **berechnen** Teil- und Gesamtlängen von Fahrwegen im Koordinatenraster, **bestimmen** Drehrichtung und -winkel und **begründen**, welcher Weg der kürzeste ist. |
| Rolle des mBot2 und Mehrwert | Der mBot2 überprüft die Planung: Ein Rechen- oder Drehfehler wird als falsche Fahrt sofort sichtbar. Der Vergleich Rechnung ↔ gemessener Endpunkt macht den Unterschied zwischen mathematischem Modell und Wirklichkeit erfahrbar. |
| Unterrichtszeit | 5 Std. (8:00–12:30 Uhr) |
| Einstieg (20 Min.) | Problem: „Der Lieferroboter soll möglichst schnell zum Ziel.“ Raster am Boden, Start und Ziel markiert. Vorhersage: Welcher Weg ist kürzer? |
| Erarbeitung 1 (60 Min.) | Weg A und B auf Papier zeichnen, berechnen, Drehfolge notieren (Tabelle). |
| Erarbeitung 2 (80 Min.) | Weg A programmieren, fahren, Endpunkt messen; Abweichung dokumentieren; danach Weg B oder eigener Weg. |
| Sicherung (30 Min.) | Vergleich im Plenum: kürzester Weg, Begründung, „Gibt es noch mehr kürzeste Wege?“; Planungsfehler vs. Fahrungenauigkeit |
| Puffer | 2 × 15 Min. + Pausen |
| Lernhürde → Hilfe | Drehrichtung aus Sicht des Roboters (links/rechts) → Hilfe: Pfeil auf den Roboter kleben bzw. Weg mit einer Spielfigur nachlaufen |
| Vertiefung | gesperrtes Rasterstück; alle 10 kürzesten Wege systematisch finden |
| Lernnachweis | Tabelle mit Rechnung und Drehfolge + begründete Wegwahl (2–3 Sätze) + gemessene Abweichung |
| Vorbereitung | Raster am Boden (Malerkrepp), Maßbänder, Programme vorab testen |
| Wir brauchen vom Vortag | geprüfte, fahrfähige mBot2; Prüfliste |
| Wir übergeben | Rasterplan, Rechnungen, gemessene Abweichungen → Physik nutzt sie als Anlass für Messgenauigkeit |

## 7 Testprotokoll der Leitung

| Programm / Aufbau | getestet am | mBot2 Nr. | Anpassung | Kürzel |
|---|---|---|---|---|
| Technik: Fehlerfälle 1–4 | | | | |
| Mathematik: Weg A | | | | |
| Physik: Ultraschallanzeige | | | | |
| Physik: Weg-Zeit-Fahrt 60 U/min | | | | |
| Informatik: Hindernis + Linie | | | | |

## 8 Erwartungshorizont der Lernziele

| LZ | erreicht, wenn … |
|---|---|
| 3.1 | das Lernziel einen Operator und einen fachlichen Inhalt enthält und aus der Erprobung abgeleitet ist (nicht „die SuS programmieren den mBot2“) |
| 3.2 | der Mehrwert mit Bezug zum Lernziel begründet ist |
| 3.3 | Ablauf mit Zeiten, eine konkrete Lernhürde mit Hilfe, eine Vertiefung und ein Lernnachweis vorliegen |
| 3.4 | Übergaben eingetragen sind und die Gruppe auf mindestens ein Feedback mit einer Änderung reagiert |
| 3.5 | die Organisations-Checkliste für die eigene Schule bearbeitet ist |
