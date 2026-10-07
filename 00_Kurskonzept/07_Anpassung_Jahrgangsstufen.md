# Anpassung an Jahrgangsstufen der Sekundarstufe

Das Unterrichtsmaterial ist **am Beispiel einer Klasse 7** ausgearbeitet. Es lässt sich für alle Jahrgangsstufen der Sekundarstufe I und II nutzen. Der Gegenstand bleibt gleich – der mBot2, das EVA-Prinzip, Sequenz, Schleife und Bedingung, Messen und Modellieren. Es ändern sich der fachliche Anspruch, die Offenheit der Aufgaben und die Art des Lernnachweises.

In Sitzung 3 legt jede Fortbildungsgruppe zu Beginn **eine gemeinsame Referenz-Jahrgangsstufe** fest (Voreinstellung: Klasse 7). So bleiben die Tagespläne vergleichbar und die Übergaben passen zueinander – das war die wichtigste Lehre aus der Erprobung. Die Übertragung auf die eigene Lerngruppe erfolgt im Praxisauftrag mit diesem Dokument.

---

## 1 Sechs Stellschrauben

| Stellschraube | jünger / weniger Vorerfahrung | älter / mehr Vorerfahrung |
|---|---|---|
| **Offenheit der Aufgabe** | Ziel und Lösungsweg vorgegeben, Programm wird nur verändert (PRIMM: Modify) | Problem vorgegeben, Lösungsweg offen (PRIMM: Make); eigene Fragestellungen |
| **Programmierumfang** | Open Roberta mit **Anfänger-Blockauswahl**; wenige Blöcke; Programmgerüste | **Experten-Blockauswahl**, Variablen, Funktionen, Listen; Blick in den erzeugten Python-Code |
| **Fachlicher Anspruch** | Phänomene beobachten, beschreiben, vergleichen | quantifizieren, modellieren, Abweichungen erklären, Modelle bewerten |
| **Steuerung durch die Lehrkraft** | kurze Arbeitsphasen, Zwischenstopps im Plenum, feste Rollen | längere Projektphasen, Rollen selbst organisiert, Lehrkraft als Coach |
| **Lernnachweis** | ausgefülltes Protokoll, mündliche Erklärung, Foto mit Bildunterschrift | Messprotokoll mit Auswertung, Ablaufdiagramm, kommentierter Code, Fachbericht |
| **Zeit** | mehr Zeit für Montage, Bedienung und Sicherung | mehr Zeit für Auswertung, Optimierung und Präsentation |

## 2 Jahrgangsbänder im Überblick

| | Klasse 5/6 | Klasse 7/8 (Beispiel im Material) | Klasse 9/10 | Sekundarstufe II |
|---|---|---|---|---|
| **Typische Voraussetzungen** | erste Erfahrungen mit Tablets/Laptops, wenig Programmiererfahrung | Grundschulerfahrung mit Blocksprachen möglich, Bruchrechnung, Koordinaten | lineare Funktionen, Proportionalität, erste Erfahrung mit Experimenten | Funktionen, Statistik, ggf. Informatikunterricht mit Textsprachen |
| **Programmieren** | Sequenz, Zählschleife; Bedingungen mit Gerüst | Sequenz, Schleife, Bedingung, Sensorwerte | zusätzlich Variablen, verschachtelte Bedingungen | Regelalgorithmen, Funktionen, Python-Code lesen und vergleichen |
| **Mathematik** | Längen messen, Quadrat und Rechteck | Kreisumfang, Winkel, Koordinatensystem, Wahrscheinlichkeit | lineare Funktionen s(t), Mittelwert und Streuung, Kreis als Grenzfall des Vielecks | Regression, Binomialverteilung, Optimierung |
| **Physik / Technik** | Phänomene (hell/dunkel, nah/fern) beschreiben | Messen mit Sensoren, s-t-Diagramm qualitativ | Geschwindigkeit, Anhalteweg, Messunsicherheit | Regelkreis (Zweipunkt-, P-Regler), Fehlerrechnung |
| **Lernnachweis** | Protokoll mit Ankreuzfeldern, mündliche Vorstellung | Protokoll, Projekttagebuch | Messprotokoll mit Diagramm, Ablaufdiagramm | Fachbericht, kommentierter Code, Präsentation mit Bewertung des Modells |

## 3 Varianten je Sitzung

### Sitzung 1 – Der mBot2 als technisches System

| Baustein | Klasse 5/6 | Klasse 7/8 | Klasse 9/10 | Sekundarstufe II |
|---|---|---|---|---|
| EVA-Prinzip | Bildkarten „sehen – denken – handeln“ zuordnen | Bauteile mit Wortspeicher zuordnen | EVA auf Alltagssysteme übertragen, Grenzen des Modells | Blockschaltbild mit Signalfluss, Rückkopplung (Encoder) als Regelkreis |
| Montage | mBot2 vormontiert oder nur Schritte 1–4 im Team; Rest durch Lehrkraft | vollständige Montage mit Rollen (Doppelstunde) | Montage mit Fehlersuche (Montagefehler finden) | Montage nur, wenn Technik Lernziel ist; sonst Systemanalyse am fertigen Gerät |
| Erstes Programm | Licht und Klang | Fahren mit Vorhersage | Fahren mit Vorhersage und Messung | Fahrprogramm + Vergleich mit dem erzeugten Python-Code |

### Sitzung 2 – Programmieren mit Sensoren

| Aufgabe | Klasse 5/6 | Klasse 7/8 | Klasse 9/10 | Sekundarstufe II |
|---|---|---|---|---|
| A1 Strecke | Strecke schätzen, fahren, mit dem Maßband messen | Radumfang, Umdrehungen, Strecken- vs. Zeitversion | s(t) als lineare Funktion; Mittelwert und Spannweite aus 5 Fahrten | Messunsicherheit, systematische vs. zufällige Abweichung |
| A2 Vielecke | Quadrat mit vorgegebenem Winkel | Vielecke, Außenwinkel 360° ÷ n | Kreis als Vieleck mit großem n; Umfang annähern | Spiralen und Muster mit Variablen bzw. Funktionen |
| A3 Hell-Dunkel | Programm vorgegeben, Grenzwert ausprobieren | Schwellenwert messen und begründen | Hysterese gegen Flackern (zwei Schwellen) | Sensorkennlinie aufnehmen und bewerten |
| B1 Hindernis | Stopp vor dem Hindernis | Abstand beim Stillstand messen, Reaktionsweg | Anhalteweg bei verschiedenen Tempi, Diagramm | Modell für Anhalteweg aufstellen, Regression |
| B2 Linienfolger | fertiges Programm, nur Tempo und Schwelle ändern | Zweipunktregler selbst programmieren | Regelkreisbegriffe (Soll, Ist, Stellgröße) | Proportionalregler, Parameter optimieren |
| B3 Zufall | Strichliste, „Ist das gerecht?“ | relative Häufigkeit | Gesetz der großen Zahlen, Simulation | Binomialverteilung, Hypothesentest |
| Mensch-Roboter | wie im Material, mit Bildkarten | wie im Material | zusätzlich Ablaufdiagramm zeichnen | direkt Pseudocode oder Struktogramm |

### Sitzung 3 – Projektwoche

| Tag | Klasse 5/6 | Klasse 7/8 (Beispiel) | Klasse 9/10 | Sekundarstufe II |
|---|---|---|---|---|
| Technik | Funktionsprüfung mit Checkliste, ein Fehler mit Hilfekarten | systematische Fehlersuche, ein Fehler | mehrere Fehler, Fehlerbaum | Fehleranalyse mit Messwerten, Wartungsplan |
| Mathematik | Wege auf dem Raster zählen und fahren | Wege berechnen und begründen | Wege mit Diagonalen (Pythagoras) | Optimierung, kürzeste Wege als Graphproblem |
| Physik | hell/dunkel und nah/fern untersuchen | zwei Messungen mit Hypothese, s-t-Diagramm qualitativ | Geschwindigkeit aus der Steigung, Messunsicherheit | Kennlinien, Fehlerrechnung, Modellbewertung |
| Informatik | Programm mit einer Bedingung | Schleife und zwei Bedingungen | verschachtelte Bedingungen, Ablaufdiagramm | Regelalgorithmus, Python-Code, Testfälle |
| Präsentation | Roboter-Vorführung mit Erklärkarte | Expert:innen-Stände | Science Fair mit Poster | Fachvortrag mit Diskussion |
| Unterrichtszeit pro Tag | 3–4 Std. | 4–6 Std. | 4–6 Std. | als Projektkurs oder Blockveranstaltung |

## 4 Open Roberta passend einstellen

- **Blockauswahl:** Open Roberta bietet für den mBot2 eine **Anfänger-** und eine **Experten-Blockauswahl**. Für Klasse 5/6 und für Einsteigende die Anfängerauswahl nutzen; ab Klasse 9 bzw. für Erfahrene die Expertenauswahl (Variablen, Listen, Funktionen).
- **Code-Ansicht:** In der Sekundarstufe II lohnt der Vergleich von Blöcken und dem von Open Roberta erzeugten Python-Code als Brücke zur Textprogrammierung.
- **Muster für alle Stufen:** „Warte bis Taste A gedrückt?“ und „Start mit A, Stopp mit B“ bleiben in allen Jahrgängen sinnvoll.

## 5 Checkliste: So passe ich eine Aufgabe an

1. **Lernziel prüfen:** Welches fachliche Ziel aus dem Fachlehrplan meiner Jahrgangsstufe soll erreicht werden?
2. **Offenheit wählen:** Wird ein Programm verändert (jünger) oder selbst entwickelt (älter)?
3. **Fachlichen Anspruch anheben oder senken:** beschreiben → messen → berechnen → modellieren → bewerten.
4. **Hilfen anpassen:** Hilfekarten H1–H3 sprachlich und inhaltlich auf die Lerngruppe zuschneiden; für jüngere Lerngruppen Bildkarten ergänzen.
5. **Lernnachweis festlegen:** Was zeigt in dieser Jahrgangsstufe den Lernzuwachs?
6. **Zeit planen:** aus der eigenen Erprobung ableiten, mindestens 20 % Puffer.
