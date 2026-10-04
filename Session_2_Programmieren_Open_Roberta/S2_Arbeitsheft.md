# Arbeitsheft Sitzung 2 – Programmieren mit Open Roberta

**Fortbildungsreihe „Der mBot2 im Fachunterricht“** · Sequenz, Schleife, Bedingung und Sensoren · 90 Minuten

Name: ______________________________   Tandem-Partner:in: ______________________________   mBot2 Nr.: ______

> **Ihre Ziele heute:** Sie programmieren den mBot2 so, dass er auf seine Umwelt reagiert. Sie sagen das Verhalten Ihrer Programme vorher, testen es und verbessern es Schritt für Schritt. Zum Schluss erklären Sie einer anderen Person Ihren Algorithmus.

---

## Schritt 0 – Welcher Lernpfad passt zu mir? (3 Min.)

| Frage | ja | nein |
|---|---|---|
| Ich habe schon mit einer Blocksprache programmiert (Scratch, Calliope, mBlock, LEGO …). | ☐ | ☐ |
| Ich kann erklären, was eine Bedingung („wenn … dann … sonst“) in einem Programm tut. | ☐ | ☐ |
| Ich programmiere auch textbasiert (z. B. Python, Java) oder habe Wissenscheck 1 fast fehlerfrei gelöst. | ☐ | ☐ |

**Empfehlung:** 0–1 × ja → **Pfad A** · 2 × ja → **Pfad B** · 3 × ja → **Pfad C**

Mein Pfad: ☐ A  ☐ B  ☐ C   *(Wechseln ist jederzeit erlaubt.)*

## Schritt 1 – Mensch-Roboter (10 Min.) · LZ 2.1

Eine Person ist Roboter, die andere programmiert mit den Befehlskarten. Führen Sie den Roboter einmal um einen Stuhl herum.

| Runde | Erlaubte Befehle | Wie viele Befehle haben Sie gebraucht? |
|---|---|---|
| 1 | Gehe *n* Schritte · Drehe links 90° · Drehe rechts 90° | |
| 2 | zusätzlich: Wiederhole *n* mal […] | |
| 3 | zusätzlich: Wenn Hindernis vor dir, dann […] sonst […] | |

Notieren Sie die drei Grundstrukturen mit eigenen Worten:

| Struktur | Bedeutung |
|---|---|
| Sequenz | |
| Schleife (Wiederholung) | |
| Bedingung (Verzweigung) | |

## Schritt 2 – PRIMM am Programm „Wachhund“ (15 Min.) · LZ 2.1–2.3

```
Start
  Wiederhole unendlich oft
    Wenn  Gib Abstand cm Ultraschallsensor U  <  20
      Schalte RGB LED an  alle  Farbe rot
      Spiele Note  Viertel  a'
    sonst
      Schalte RGB LED an  alle  Farbe grün
```

**P – Predict:** Was tut der mBot2? Notieren Sie Ihre Vorhersage, bevor das Programm läuft.

[[LINIEN:2]]

**R – Run:** Was ist tatsächlich passiert?

[[LINIEN:1]]

**I – Investigate:**
(a) Was ändert sich, wenn Sie 20 durch 5 ersetzen?
(b) Wo im Programm steckt die Schleife, obwohl kein Schleifenblock zu sehen ist?
(c) Was passiert, wenn der „sonst“-Teil fehlt und Sie die Hand wieder wegnehmen?

[[LINIEN:3]]

**M – Modify:** Lassen Sie zusätzlich den gemessenen Abstand auf dem Display anzeigen.

**Zwei Muster für alle weiteren Aufgaben**

> **Messen vor Entscheiden.** Bevor Sie einen Schwellenwert festlegen, lassen Sie den Sensorwert auf dem Display anzeigen und notieren echte Werte: `Zeige Text ( wandle (Sensorwert) um in Zeichenkette ) in Spalte 0 in Zeile 0`, danach `Warte ms 200`.

> **Start mit A, Stopp mit B.** Weil der Startblock eine Endlosschleife ist, bauen Sie Fahrprogramme so: `Warte bis Taste A gedrückt?` → `Wiederhole bis Taste B gedrückt?` [ … Ihr Programm … ] → `Stoppe`. So startet der mBot2 auf Knopfdruck und lässt sich jederzeit anhalten.

<!-- pagebreak -->

## Schritt 3 – Lernpfade (30 Min.) · LZ 2.1–2.4

Bearbeiten Sie eine **Pflicht**- und, wenn Zeit bleibt, eine **Wahl**aufgabe. Für jede Aufgabe gilt: **vorhersagen → testen → messen → eine Sache ändern → wieder testen.** Hilfekarten (Anhang) erst nach 3 Minuten eigenem Probieren und der Reihe nach nehmen.

### Pfad A – Einstieg

**A1 (Pflicht) – Strecke messen**
Der mBot2 soll auf Knopfdruck genau 50 cm geradeaus fahren.
1. Vorhersage: Wie viele Radumdrehungen braucht er dafür? (Raddurchmesser 6,5 cm) ______
2. Programmieren Sie mit „Fahre vorwärts Tempo U/min 50 Strecke cm 50“ und messen Sie dreimal mit dem Maßband.
3. Vergleichen Sie mit einer zeitgesteuerten Version: „Fahre vorwärts Tempo U/min 50“ → „Warte ms …“ → „Stoppe“. Wie lange muss er fahren? Welche Version ist genauer – und warum?

| Fahrt | Streckenblock: gemessen (cm) | Zeitversion: gemessen (cm) |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

**A2 (Wahl) – Vielecke**
Der mBot2 fährt ein Quadrat mit 30 cm Seitenlänge. Nutzen Sie „Wiederhole 4 mal“.
Erweiterung: Ändern Sie das Programm für ein gleichseitiges Dreieck und ein Sechseck. Drehwinkel vorher berechnen!

| Figur | Ecken | Drehwinkel (Vorhersage) | Ergebnis |
|---|---|---|---|
| Quadrat | 4 | | |
| Dreieck | 3 | | |
| Sechseck | 6 | | |

Allgemeine Regel für den Drehwinkel: ______________________

**A3 (Wahl) – Hell-Dunkel-Licht**
Der CyberPi hat oben einen Lichtsensor. Bei Helligkeit leuchten die LEDs grün, bei Dunkelheit (Hand darüber) rot.
1. Messen: Lichtwert hell = ______  Lichtwert dunkel = ______
2. Schwellenwert festlegen und begründen: ______
3. Programmieren mit „Wenn … sonst“.

### Pfad B – Sensoren

**B1 (Pflicht) – Hindernis**
Der mBot2 fährt geradeaus. Erkennt der Ultraschallsensor ein Hindernis näher als 15 cm, stoppt er, piept, fährt 10 cm zurück und dreht sich um 90°. Dann fährt er weiter. Nutzen Sie „Start mit A, Stopp mit B“.
Untersuchung: Bei welchem Abstand steht der mBot2 **tatsächlich**?

| Schwellenwert | Tempo U/min | gemessener Abstand beim Stillstand (cm) |
|---|---|---|
| 15 | 40 | |
| 15 | 100 | |
| 10 | 100 | |

Erklärung für die Abweichung: ______________________________________

**B2 (Wahl) – Linienfolger**
Der mBot2 folgt dem **Rand** einer schwarzen Linie. Nutzen Sie **einen** Einzelsensor des Quad-RGB-Sensors (Helligkeit in %).
1. Messen: Helligkeit auf Schwarz = ______  auf Weiß = ______  → Schwellenwert = ______
2. Regel: *Wenn dunkel, dann lenke von der Linie weg, sonst lenke zur Linie hin* („Steure … Tempo links … rechts …“).
3. Optimieren: Ändern Sie immer nur **einen** Wert.

| Versuch | Tempo innen/außen | Schwellenwert | Beobachtung |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**B3 (Wahl) – Zufall**
Nach jedem Hindernis dreht sich der mBot2 **zufällig** nach links oder rechts. Führen Sie 20 Versuche durch und führen Sie eine Strichliste.

| links | rechts |
|---|---|
| | |

Ist das Ergebnis „gleichmäßig“? Was erwarten Sie bei 20, was bei 200 Versuchen?

### Pfad C – Vertiefung

**C1 (Pflicht) – Linienfolger als Regler**
Statt „links oder rechts“ (Zweipunktregler) soll der mBot2 **proportional** lenken: Je weiter er von der Linienkante entfernt ist, desto stärker lenkt er.
`Fehler = Helligkeit − Schwellenwert` · `Lenkung = k · Fehler` · `Tempo links = Basis − Lenkung` · `Tempo rechts = Basis + Lenkung`
(gilt für die rechte Linienkante wie in B2; an der linken Kante kehren sich die Vorzeichen um – Vorhersage und Test!)
Bestimmen Sie gute Werte für *k* und *Basis* und dokumentieren Sie systematisch.

| k | Basis U/min | Linie gehalten? | Zeit für eine Runde (s) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

Reflexionsfrage: Man vergleicht das Abstimmen von *k* gern mit dem „Hyperparameter-Tuning“ beim maschinellen Lernen. Wo trägt der Vergleich, wo nicht?

**C2 (Wahl) – Verhaltensmodell**
Modellieren Sie ein Tierverhalten: Der mBot2 fährt umso schneller, je heller es ist (**Photokinese**: Die Lichtstärke beeinflusst nur die Geschwindigkeit, nicht die Richtung), und weicht Hindernissen aus. Erstellen Sie eine Concept Map: *biologisches Vorbild → Regel → Programm → beobachtetes Verhalten*. Warum ist mit dem einen, nach oben gerichteten Lichtsensor des CyberPi keine **Phototaxis** (gezieltes Hinsteuern zum Licht) wie bei einem Braitenberg-Vehikel mit zwei Sensoren möglich – und mit welcher Strategie ginge es trotzdem?

**C3 (Wahl) – Unterrichtsaufgabe entwerfen**
Entwerfen Sie eine Aufgabe für Ihre Klasse, in der der mBot2 einen **fachlichen** Inhalt erfahrbar macht. Diese Aufgabe nehmen Sie mit in Sitzung 3.

| Element | Ihr Entwurf |
|---|---|
| Fach, Klasse | |
| fachliches Lernziel | |
| Rolle des mBot2 | |
| benötigte Blöcke | |
| erwartbare Hürde und Hilfe | |
| Erweiterung | |

<!-- pagebreak -->

## Schritt 4 – Mini-Teach (12 Min.) · LZ 2.5

**Leitkarte für Erklärende (max. 4 Minuten)**

1. **Ziel:** Was soll der Roboter tun? (1 Satz, Roboter zeigt es)
2. **Code:** Zeigen Sie im Programm: Wo ist die **Schleife**? Wo die **Bedingung**? Welcher **Schwellenwert** – und woher stammt er?
3. **Mitmachen:** Lassen Sie Ihr Gegenüber **eine Zahl ändern** und vorhersagen, was passiert. Dann testen.

**Für Zuhörende:** Notieren Sie eine Sache, die Sie übernehmen, und eine Frage.

| Station | übernehme ich | meine Frage |
|---|---|---|
| | | |
| | | |

## Schritt 5 – Sicherung und Transfer (10 Min.) · LZ 2.2, 2.5

**Modell und Wirklichkeit:** Wo wich Ihre Vorhersage von der Fahrt ab? Nennen Sie mögliche Ursachen.

[[LINIEN:2]]

**Mein Fach:** Sequenz, Schleife oder Bedingung stecken in meinem Fach in …

[[LINIEN:2]]

**Doppeldecker:** Welcher Lernpfad passt zu welcher Ihrer Lerngruppen? Was würden Sie an den Aufgaben ändern?

[[LINIEN:3]]

## Bis zur nächsten Sitzung (ca. 30 Min.)

- [ ] **Selbstlernmodul 2**: Wissenscheck zu Schleifen, Bedingungen und Sensoren.
- [ ] **Fachgruppe für Sitzung 3** im Moodle wählen: Technik · Mathematik · Physik · Informatik · offen.
- [ ] Im Fachlehrplan Ihres Fachs (Sachsen-Anhalt) für Ihre Wunsch-Jahrgangsstufe eine Stelle suchen, an die der mBot2 anknüpfen kann, und notieren. Voreinstellung für Sitzung 3 ist Klasse 7.

<!-- pagebreak -->

## Anhang – Hilfekarten

| Aufgabe | H1 Denkanstoß | H2 Werkzeug | H3 Teillösung |
|---|---|---|---|
| A1 | Wie weit kommt das Rad bei einer Umdrehung? | Kategorie Aktion: „Fahre … Strecke cm …“; Kontrolle: „Warte ms …“ | Umfang = π · 6,5 cm ≈ 20,4 cm; 50 cm ÷ 20,4 cm ≈ 2,45 Umdrehungen. Bei 50 U/min ≈ 17 cm/s → ca. 2 900 ms |
| A2 | Um wie viel Grad dreht sich der Roboter insgesamt, bis er wieder in Startrichtung schaut? | Kontrolle: „Wiederhole n mal“; Aktion: „Drehe … Grad …“ | Wiederhole *n* mal [Fahre 30 cm; Drehe links ___ Grad] mit Drehwinkel = 360° ÷ *n* |
| A3 | Welcher Wert liegt „zwischen“ hell und dunkel? | Sensoren: „Gib Wert % Lichtsensor“; Logik: „Vergleiche“; Kontrolle: „Wenn … sonst“ | Wenn [Lichtwert < Schwelle] → LED rot, sonst → LED grün; Schwelle = (hell + dunkel) ÷ 2 |
| B1 | Was soll **in jedem** Durchlauf geprüft werden, und was nur, wenn das Hindernis da ist? | Sensoren: „Gib Abstand cm Ultraschallsensor“; Kontrolle: „Wiederhole bis …“, „Wenn … sonst“ | Wenn [Abstand < 15] → Stoppe, Note, Fahre rückwärts 10 cm, Drehe 90°; sonst → Fahre vorwärts Tempo 40 |
| B2 | Der Sensor „sieht“ nur hell oder dunkel. Was soll er jeweils tun? | Sensoren: „Gib … Quad RGB Sensor“ (Helligkeit); Aktion: „Steure … Tempo links … rechts …“ | Wenn [Helligkeit < Schwelle] → Steure links 30, rechts 10; sonst → Steure links 10, rechts 30 |
| B3 | Wie lässt man den Roboter eine Münze werfen? | Mathematik: „Ganzzahliger Zufallswert zwischen 1 und 2“ | Wenn [Zufallswert = 1] → Drehe links 90°, sonst → Drehe rechts 90° |
| C1 | Was passiert, wenn *k* zu groß oder zu klein ist? | Variablen anlegen: Fehler, Lenkung; Mathematik: Rechenblöcke | Start: Schwelle = Mittelwert, Basis = 30, k = 0,5; dann *k* in Schritten von 0,1 ändern |
| C2 | Welche Sensorgröße soll welche Motorgröße beeinflussen? | „Gib Wert % Lichtsensor“, „Fahre … Tempo …“, „Gib Abstand …“ | Tempo = Lichtwert (0–100 %) → als U/min nutzen; Wenn Abstand < 15 → ausweichen |
