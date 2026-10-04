# Arbeitsheft Sitzung 1 – Den mBot2 kennenlernen

**Fortbildungsreihe „Der mBot2 im Fachunterricht“** · Aufbau, EVA-Prinzip und erstes Programm · 90 Minuten

Name: ______________________________   Tandem-Partner:in: ______________________________   mBot2 Nr.: ______

> **Ihre Ziele heute:** Sie bauen den mBot2 im Tandem zusammen, erklären ihn als System aus Eingabe, Verarbeitung und Ausgabe, verbinden ihn mit Open Roberta und lassen ihn ein erstes Programm ausführen. Zum Schluss überlegen Sie, was das für Ihre eigene Klasse bedeutet.

| Zeit | Was passiert? |
|---|---|
| 0–10 | Ankommen, Ampel, Tandems |
| 10–24 | EVA-Prinzip und Bauteile (Aufgabe 1) |
| 24–62 | Zusammenbau im Tandem (Aufgabe 3) |
| 62–80 | Open Roberta: Verbinden und erste Programme (Aufgabe 4–5) |
| 80–90 | Reflexion: Was heißt das für meine Klasse? (Aufgabe 6) |

---

## Aufgabe 0 – Wo stehe ich? (2 Min.)

Kreuzen Sie an: 1 = trifft nicht zu … 4 = trifft voll zu. Am Ende von Sitzung 3 schätzen Sie sich noch einmal ein.

| Aussage | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Ich kann die Bauteile des mBot2 und ihre Funktion erklären. | ☐ | ☐ | ☐ | ☐ |
| Ich kann den mBot2 mit Open Roberta verbinden und ein Programm übertragen. | ☐ | ☐ | ☐ | ☐ |
| Ich kann ein Programm mit Schleife und Bedingung selbst schreiben. | ☐ | ☐ | ☐ | ☐ |
| Ich kann einen Sensorwert messen und einen sinnvollen Schwellenwert festlegen. | ☐ | ☐ | ☐ | ☐ |
| Ich kann begründen, wozu der mBot2 in meinem Fach beiträgt. | ☐ | ☐ | ☐ | ☐ |
| Ich kann eine Unterrichtsstunde mit dem mBot2 für eine heterogene Klasse planen. | ☐ | ☐ | ☐ | ☐ |
| Ich weiß, was technisch und organisatorisch vorbereitet werden muss. | ☐ | ☐ | ☐ | ☐ |

---

## Das EVA-Prinzip

Jedes technische System, das auf seine Umwelt reagiert, folgt demselben Muster:

| Eingabe – WAHRNEHMEN | Verarbeitung – ENTSCHEIDEN | Ausgabe – HANDELN |
|---|---|---|
| Sensoren erfassen die Umwelt: Abstand, Helligkeit, Farbe, Geräusch, Neigung, Tastendruck. | Der Mikrocontroller führt das Programm aus und entscheidet, was passieren soll. | Aktoren wirken auf die Umwelt: Motoren bewegen, LEDs leuchten, Lautsprecher tönen, Display zeigt an. |

Dazu kommen Bauteile, die das System **versorgen** (Energie) und **zusammenhalten** (Struktur, Verbindung).

## Aufgabe 1 – Bauteile zuordnen (8 Min., Tandem) · LZ 1.1, 1.2

Legen Sie die Bauteile aus dem Bausatz vor sich. Tragen Sie für jedes Bauteil die **EVA-Rolle** ein (E, V, A, Energie oder Struktur/Verbindung) und wählen Sie die passende **Funktion** aus dem Wortspeicher (Buchstabe eintragen).

**Wortspeicher Funktion**

- **(a)** misst mit Schallwellen den Abstand zu Hindernissen
- **(b)** führt das Programm aus; enthält Display, RGB-LEDs, Lautsprecher, Mikrofon, Licht- und Lagesensor, Joystick und Tasten
- **(c)** erkennt mit vier Einzelsensoren helle/dunkle Flächen und Farben am Boden
- **(d)** setzt Befehle in Drehbewegung um und misst dabei die Drehung des Rads
- **(e)** verbindet CyberPi, Motoren und Sensoren und enthält den Akku
- **(f)** trägt alle Bauteile
- **(g)** überträgt Strom und Signale
- **(h)** geben Licht-, Ton- und Bildsignale aus

| Bauteil | EVA-Rolle | Funktion (a–h) | Mein Alltagsvergleich |
|---|---|---|---|
| CyberPi | | | |
| mBot2-Shield (mit Akku) | | | |
| Ultraschallsensor 2 | | | |
| Quad-RGB-Sensor | | | |
| Encoder-Motoren (2×) | | | |
| Display, RGB-LEDs, Lautsprecher am CyberPi | | | |
| Aluminium-Chassis | | | |
| Kabel (USB-C, Motor, mBuild) | | | |

**Denkfrage:** Der Encoder-Motor ist Ausgabe *und* Eingabe zugleich. Warum?

[[LINIEN:2]]

## Aufgabe 2 – EVA im Alltag (für schnelle Tandems) · LZ 1.2

Ordnen Sie zwei Alltagssysteme nach dem EVA-Prinzip. Wählen Sie ein drittes System aus Ihrem Fach.

| System | Eingabe | Verarbeitung | Ausgabe |
|---|---|---|---|
| Fußgängerampel mit Taster | | | |
| Saugroboter | | | |
| Aus meinem Fach: ___________ | | | |

<!-- pagebreak -->

## Aufgabe 3 – Zusammenbau im Tandem (36 Min.) · LZ 1.3

**Rollen:** Die **Navigator:in** liest jeden Schritt aus der Originalanleitung vor und prüft das Ergebnis. Die **Monteur:in** schraubt. **Nach Schritt 5 wechseln Sie die Rollen.**

> **Schraubendreher-Tipp:** Das Bit lässt sich umstecken – Kreuzseite für Kreuzschlitzschrauben, die andere Seite für die übrigen Schrauben. Sortieren Sie die Schrauben vorher nach Größe.

| ☐ | Schritt | Was ist zu tun? | Schraube | Kontrolle |
|---|---|---|---|---|
| ☐ | 1 Räder und Motorkabel | Reifen auf die Radnaben ziehen; Motorkabel an beide Motoren anschließen | – | Reifen sitzen gleichmäßig |
| ☐ | 2 Motoren ans Chassis | beide Encoder-Motoren am Aluminium-Rahmen festschrauben | M4×8 | Motoren sitzen fest, zeigen gleich |
| ☐ | 3 Räder anbringen | Räder auf die Motorachsen setzen | M2,5×12 | Räder drehen frei |
| ☐ | 4 Stützrad und Quad-RGB-Sensor | Mini-Rad und Quad-RGB-Sensor unten anbauen | M4×14 | Sensor zeigt nach unten |
| ☐ | 5 Quad-RGB-Sensor verkabeln | mit dem **10-cm**-Kabel verbinden (nicht 20 cm) | – | **Zwischencheck mit der Leitung** |
| | **Rollenwechsel** | | | |
| ☐ | 6 Ultraschallsensor 2 | vorn anbauen, mit 10-cm-Kabel verbinden | M4×14 | „Augen“ zeigen nach vorn |
| ☐ | 7 Shield aufsetzen | mBot2-Shield oben aufsetzen und festschrauben | M4×25 | Shield sitzt stabil |
| ☐ | 8 Verkabeln | linker Motor → **EM1**, rechter Motor → **EM2**; Sensoren anschließen | – | kein Kabel berührt ein Rad |
| ☐ | 9 CyberPi aufstecken | CyberPi auf das Shield stecken | – | fertig |

**Funktionsprüfung**

- [ ] mBot2 am Shield einschalten: Das CyberPi-Display leuchtet.
- [ ] Räder lassen sich von Hand frei drehen; kein Kabel schleift.
- [ ] Ultraschallsensor: Die blauen LEDs leuchten.

**Montage-Notizen für meine Klasse** (Was war schwierig? Was würde ich vorbereiten?)

[[LINIEN:3]]

<!-- pagebreak -->

## Aufgabe 4 – Den mBot2 mit Open Roberta verbinden (5 Min.) · LZ 1.4

- [ ] mBot2 einschalten und mit dem **USB-C-Datenkabel** an den Laptop anschließen.
- [ ] **Open Roberta Connector** starten → mBot2 wird gefunden → **Verbinden** klicken.
- [ ] Den angezeigten **Token** notieren: ______________
- [ ] Browser: **lab.open-roberta.org** → System **„mBot 2“** wählen.
- [ ] Menü **Roboter → Verbinden** → Token eingeben → OK.
- [ ] Das Roboter-Symbol zeigt „verbunden“.

> **Merke: Der Startblock ist eine Endlosschleife.** Beim mBot2 hängt am Startblock immer „Wiederhole unendlich oft“. Alles, was Sie hineinlegen, läuft wieder und wieder. Setzen Sie deshalb als ersten Block **„Warte bis Taste A gedrückt?“** ein. Dann startet jeder Durchlauf erst auf Knopfdruck.

## Aufgabe 5 – Erste Programme (11 Min.) · LZ 1.4

### 5a Pflicht: Fahren – erst vorhersagen, dann testen

Das Programm lautet:

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Fahre vorwärts   Tempo U/min 30   Strecke cm 20
    Drehe rechts     Tempo U/min 30   Grad 180
    Fahre vorwärts   Tempo U/min 30   Strecke cm 10
```

**Vorhersage:** Wo steht der mBot2 am Ende, und in welche Richtung schaut er? Skizzieren Sie Start (S) und Endpunkt (E).

[[LINIEN:3]]

**Beobachtung:** Stimmt Ihre Vorhersage? Was weicht ab?

[[LINIEN:2]]

### 5b Wahl: Licht, Klang oder Text

| ☐ | Auftrag | Hilfreiche Blöcke (Kategorie „Aktion“) |
|---|---|---|
| ☐ | **Licht:** LED 1 rot, LED 2 grün, LED 3 blau leuchten lassen | Schalte RGB LED an … Farbe … |
| ☐ | **Klang:** Den Dreiklang c′ – e′ – g′ nacheinander spielen | Spiele Note … |
| ☐ | **Text:** „Hallo“ anzeigen, 2 Sekunden warten, dann „Wie geht es dir?“ | Zeige Text …, Warte ms …, Zeige Text in neuer Zeile … |

### 5c Zusatz: Begrüßungsroboter

Auf Knopfdruck fährt der mBot2 auf Sie zu (30 cm), leuchtet grün, spielt eine Note und zeigt „Hallo!“.

<!-- pagebreak -->

## Aufgabe 6 – Was bedeutet das für meine Klasse? (6 Min.) · LZ 1.5

**1.** Wie viel Unterrichtszeit würde der Zusammenbau in Ihrer Klasse brauchen? Würden Sie ihn überhaupt im Unterricht machen? Begründen Sie.

[[LINIEN:3]]

**2.** Was müssten Sie an Ihrer Schule technisch vorbereiten, bevor die erste Stunde stattfinden kann? (Geräte, Rechte, Laden, Raum)

[[LINIEN:3]]

**3.** Welche Methode aus der heutigen Sitzung (Ampel, Tandem-Rollen, Vorhersage, Live-Demo) übernehmen Sie, und wie würden Sie sie anpassen?

[[LINIEN:3]]

---

## Bis zur nächsten Sitzung (ca. 30 Min.)

- [ ] **Selbstlernmodul 1** im Moodle-Kurs bearbeiten: Wissenscheck zu Bauteilen, EVA und Open Roberta.
- [ ] Open Roberta **ohne Roboter** erkunden: Ein vorgegebenes Programm lesen und vorhersagen, was es tut.
- [ ] Notieren, welche Programmierbegriffe Ihnen schon begegnet sind (z. B. Schleife, Bedingung, Variable).

## Notizen

[[LINIEN:8]]
