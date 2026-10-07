# Lösungen Sitzung 2 – Programmieren mit Open Roberta

**Für die Fortbildungsleitung** · Musterprogramme, Rechenwege, Erwartungshorizont und Testprotokoll

> **Hinweis zur Notation.** NEPO-Blöcke wie im Lab für das System „mBot 2“ beschriftet (Stand Oktober 2026). Einrückung = „liegt innerhalb von“. `U` ist der Ultraschallsensor, `Q` der Quad-RGB-Sensor (Namen aus der Standardkonfiguration). Sensorwerte (Schwellen) sind **Beispielwerte** – sie hängen von Licht, Untergrund und Klebeband ab und müssen vor Ort gemessen werden. Jedes Programm vor dem ersten Einsatz testen und im Testprotokoll (Abschnitt 6) abzeichnen.

---

## 1 Mensch-Roboter (Schritt 1)

Erwartete Erkenntnis: Runde 1 braucht viele Einzelbefehle (Sequenz). In Runde 2 wird die wiederkehrende Folge „Gehe n Schritte, Drehe 90°“ zur Schleife zusammengefasst – das Programm wird kürzer und lesbarer. In Runde 3 reagiert der Roboter auf seine Umgebung (Bedingung): Dasselbe Programm funktioniert jetzt auch, wenn der Stuhl verschoben wird.

| Struktur | Bedeutung |
|---|---|
| Sequenz | Anweisungen werden der Reihe nach ausgeführt. |
| Schleife | Anweisungen werden mehrfach ausgeführt – eine feste Anzahl (Zählschleife), solange/bis eine Bedingung gilt, oder unendlich. |
| Bedingung | Abhängig von einer Prüfung (wahr/falsch) wird der eine oder der andere Programmteil ausgeführt. |

## 2 PRIMM „Wachhund“ (Schritt 2)

**Predict/Run:** Die LEDs leuchten grün. Kommt ein Gegenstand näher als 20 cm, leuchten sie rot und es ertönt ein Ton – solange der Gegenstand nah ist, immer wieder.

**Investigate:**
(a) Mit 5 statt 20 reagiert er erst sehr spät (Hand fast am Sensor).
(b) Im Startblock: Beim mBot2 ist „Wiederhole unendlich oft“ fest mit „Start“ verbunden.
(c) Ohne „sonst“ bleiben die LEDs nach dem ersten Alarm rot – niemand schaltet sie wieder auf grün. Gute Einsicht: Ein Zustand bleibt, bis ihn das Programm ändert.

**Modify – Abstand anzeigen:**

```
Start
  Wiederhole unendlich oft
    Zeige Text  ( wandle  Gib Abstand cm Ultraschallsensor U  um in Zeichenkette )  in Spalte 0  in Zeile 0
    Wenn  Gib Abstand cm Ultraschallsensor U  <  20
      Schalte RGB LED an  alle  Farbe rot
      Spiele Note  Viertel  a'
    sonst
      Schalte RGB LED an  alle  Farbe grün
    Warte ms 200
```

Hinweis: Wird eine kürzere Zahl über eine längere geschrieben, bleiben Ziffern stehen („85“ → „95“ statt „9“). Abhilfe: vorher „Lösche Bildschirm“ – eine schöne Debugging-Gelegenheit.

## 3 Pfad A

### A1 Strecke messen

**Rechnung:** Radumfang U = π · 6,5 cm ≈ 20,4 cm. Für 50 cm: 50 ÷ 20,4 ≈ **2,45 Umdrehungen**.
Geschwindigkeit bei 50 U/min: v = 50 · 20,4 cm ÷ 60 s ≈ **17 cm/s**. Zeit für 50 cm: 50 ÷ 17 ≈ **2,9 s = 2 900 ms**.

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Fahre vorwärts  Tempo U/min 50  Strecke cm 50
```

Zeitversion:

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Fahre vorwärts  Tempo U/min 50
    Warte ms 2900
    Stoppe
```

**Erwartung:** Die Streckenversion ist meist genauer. Sie misst über die Encoder die tatsächliche Raddrehung. Die Zeitversion berücksichtigt Anfahren und Abbremsen nicht und reagiert auf Akkustand und Untergrund. Abweichungen von einigen Zentimetern sind normal; bei beiden Versionen schlupfen die Räder etwas. **Fachbezug:** Mathematik (Kreisumfang, Proportionalität), Physik (v = s/t, Messunsicherheit).

### A2 Vielecke

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Wiederhole 4 mal
      Fahre vorwärts  Tempo U/min 40  Strecke cm 30
      Drehe links     Tempo U/min 40  Grad 90
```

| Figur | Ecken | Drehwinkel |
|---|---|---|
| Quadrat | 4 | 90° |
| gleichseitiges Dreieck | 3 | **120°** (nicht 60°!) |
| regelmäßiges Sechseck | 6 | 60° |

**Regel:** Drehwinkel = Außenwinkel = 360° ÷ n. Der Roboter dreht sich insgesamt einmal um 360°, bis er wieder in Startrichtung schaut (in der Turtle-Geometrie nach Papert als „Total Turtle Trip Theorem“ bekannt).

### A3 Hell-Dunkel-Licht

Messprogramm:

```
Start
  Wiederhole unendlich oft
    Lösche Bildschirm
    Zeige Text  ( wandle  Gib Wert % Lichtsensor  um in Zeichenkette )  in Spalte 0  in Zeile 0
    Warte ms 200
```

Lösung (Beispielwerte: hell ≈ 60 %, dunkel ≈ 5 % → Schwelle ≈ 30 %):

```
Start
  Wiederhole unendlich oft
    Wenn  Gib Wert % Lichtsensor  <  30
      Schalte RGB LED an  alle  Farbe rot
    sonst
      Schalte RGB LED an  alle  Farbe grün
```

**Begründung der Schwelle:** Mittelwert zwischen hell und dunkel; genug Abstand zu beiden Werten, damit kleine Schwankungen nicht zum Flackern führen.

## 4 Pfad B

### B1 Hindernis

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Wiederhole bis  Taste B gedrückt?
      Wenn  Gib Abstand cm Ultraschallsensor U  <  15
        Stoppe
        Spiele Note  Viertel  a'
        Fahre rückwärts  Tempo U/min 40  Strecke cm 10
        Drehe rechts     Tempo U/min 40  Grad 90
      sonst
        Fahre vorwärts  Tempo U/min 40
    Stoppe
```

**Erwartung zur Untersuchung:** Der tatsächliche Abstand beim Stillstand ist kleiner als der Schwellenwert, und zwar umso deutlicher, je höher das Tempo. Gründe: (1) Zwischen zwei Messungen fährt der Roboter weiter (Programmdurchlauf, Messzeit des Sensors). (2) Nach dem Stoppbefehl bremst er nicht sofort (Trägheit). Größenordnung: Bei 100 U/min ≈ 34 cm/s bedeuten schon 0,1 s Verzögerung etwa 3–4 cm. **Fachbezug:** Physik (Bremsweg, Reaktionsweg – wie im Straßenverkehr).

### B2 Linienfolger (Zweipunktregler)

Beispiel: Fahrt an der **rechten** Kante der Linie, Sensor ist einer der beiden mittleren Einzelsensoren. Schwarz ≈ 10 %, Weiß ≈ 80 % → Schwelle ≈ 45 %.

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Wiederhole bis  Taste B gedrückt?
      Wenn  Gib Helligkeit % Quad RGB Sensor Q (mittlerer Sensor)  <  45
        Steure vorwärts  Tempo U/min links 30  Tempo U/min rechts 10
      sonst
        Steure vorwärts  Tempo U/min links 10  Tempo U/min rechts 30
    Stoppe
```

Auf Schwarz (dunkel) lenkt er nach rechts, also von der Linie weg; auf Weiß lenkt er nach links zur Linie hin. Er „pendelt“ an der Kante entlang. Das ist ein **Zweipunktregler** (wie ein Bimetall-Thermostat). Folgt der Roboter der Linie nicht, vertauscht man die Lenkrichtungen – dann fährt er an der linken Kante.

**Typische Optimierung:** Tempo der äußeren Räder senken → weniger Pendeln, sicherere Kurven; Schwelle aus echten Messwerten bilden.

### B3 Zufall

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Wiederhole bis  Taste B gedrückt?
      Wenn  Gib Abstand cm Ultraschallsensor U  <  15
        Stoppe
        Fahre rückwärts  Tempo U/min 40  Strecke cm 10
        Wenn  Ganzzahliger Zufallswert zwischen 1 und 2  =  1
          Drehe links   Tempo U/min 40  Grad 90
        sonst
          Drehe rechts  Tempo U/min 40  Grad 90
      sonst
        Fahre vorwärts  Tempo U/min 40
    Stoppe
```

**Erwartung:** Bei 20 Versuchen etwa 10 : 10, aber Abweichungen sind normal. Die Anzahl „links“ ist binomialverteilt (n = 20, p = 0,5); in rund 96 % der Fälle liegt sie zwischen 6 und 14. Bei 200 Versuchen liegt der **relative** Anteil viel näher an 50 % (empirisches Gesetz der großen Zahlen). **Fachbezug:** Mathematik (Wahrscheinlichkeit, Klasse 7/8).

## 5 Pfad C

### C1 Linienfolger als Proportionalregler

Variablen: `Schwelle` (Zahl, z. B. 45), `Basis` (z. B. 30), `k` (z. B. 0,5), `Fehler`, `Lenkung`.

```
Start  (globale Variablen: Schwelle = 45, Basis = 30, k = 0.5, Fehler = 0, Lenkung = 0)
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Wiederhole bis  Taste B gedrückt?
      Schreibe Fehler   =  Gib Helligkeit % Quad RGB Sensor Q (mittlerer Sensor)  −  Schwelle
      Schreibe Lenkung  =  k  ×  Fehler
      Steure vorwärts  Tempo U/min links ( Basis − Lenkung )  Tempo U/min rechts ( Basis + Lenkung )
    Stoppe
```

**Erwartung:** Zu kleines *k* → der Roboter verliert in Kurven die Linie. Zu großes *k* → starkes Pendeln (Überschwingen). Ein mittleres *k* ergibt eine ruhige Fahrt. Mit höherer *Basis* muss *k* meist steigen.

**Vergleich mit maschinellem Lernen:** Trägt insofern, als Parameter systematisch variiert und an einem Gütemaß (Rundenzeit, Linie gehalten) bewertet werden. Trägt nicht, weil hier ein **Mensch** die Werte wählt und die Regel selbst fest programmiert ist. Beim maschinellen Lernen werden die Modellparameter aus Daten **gelernt**; Hyperparameter sind dort nur die Einstellungen dieses Lernverfahrens.

### C2 Verhaltensmodell

```
Start
  Wiederhole unendlich oft
    Wenn  Gib Abstand cm Ultraschallsensor U  <  15
      Drehe rechts  Tempo U/min 40  Grad 120
    sonst
      Fahre vorwärts  Tempo U/min ( Gib Wert % Lichtsensor )
```

**Photokinese:** Die Lichtstärke steuert nur die **Geschwindigkeit**, nicht die Richtung. **Phototaxis** verlangt Richtungsinformation, z. B. zwei seitlich ausgerichtete Sensoren, deren Werte verglichen werden und die gekreuzt oder ungekreuzt auf die Motoren wirken (Braitenberg-Vehikel). Mit einem einzigen, nach oben gerichteten Sensor ginge es nur über eine **Suchstrategie**: auf der Stelle drehen, Lichtwerte messen, zur hellsten Richtung zurückdrehen, ein Stück fahren, wiederholen.

### C3 Unterrichtsaufgabe – Erwartungshorizont

Ein guter Entwurf benennt ein **fachliches** Lernziel (nicht „den mBot2 programmieren“), erklärt, wozu der Roboter für dieses Ziel beiträgt, nennt eine konkrete Hürde mit passender Hilfe und ist in 45–90 Minuten durchführbar. Er wird in Sitzung 3 in der Fachgruppe weiterentwickelt.

## 6 Testprotokoll der Leitung

| Programm | getestet am | mBot2 Nr. | gemessene Schwellen / Anpassung | Kürzel |
|---|---|---|---|---|
| Wachhund + Anzeige | | | | |
| A1 Strecke / Zeit | | | | |
| A2 Quadrat / Dreieck / Sechseck | | | | |
| A3 Hell-Dunkel | | | | |
| B1 Hindernis | | | | |
| B2 Linienfolger | | | | |
| B3 Zufall | | | | |
| C1 P-Regler | | | | |
| C2 Photokinese | | | | |

## 7 Erwartungshorizont der Lernziele

| LZ | erreicht, wenn … |
|---|---|
| 2.1 | mindestens ein Programm mit Schleife **und** Bedingung lauffähig ist und die Strukturen benannt werden können |
| 2.2 | im Arbeitsheft Vorhersage und Beobachtung zu mindestens zwei Programmen notiert und Abweichungen begründet sind |
| 2.3 | ein Schwellenwert aus **gemessenen** Werten abgeleitet und begründet ist |
| 2.4 | eine Fehlersuche mit einer Änderung pro Test nachvollziehbar dokumentiert ist |
| 2.5 | die Mini-Teach-Leitkarte vollständig umgesetzt oder als Zuhörende:r eine Übernahme und eine Frage notiert wurden; ein Lernpfad wird einer eigenen Lerngruppe begründet zugeordnet |
