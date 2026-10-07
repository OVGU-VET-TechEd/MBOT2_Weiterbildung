<!--
author:   ITVET – Otto-von-Guericke-Universität Magdeburg
email:    itvet@ovgu.de
version:  1.0.0
language: de
mode:     Presentation
comment:  Sitzung 2 – Programmieren mit Open Roberta – Foliensatz der Fortbildungsreihe „Der mBot2 im Fachunterricht“.
          Automatisch erzeugt aus slides_s2.js (scripts/slides2lia.js), bitte dort ändern.
logo:     https://raw.githubusercontent.com/OVGU-VET-TechEd/MBOT2_Weiterbildung/main/assets/ovgu_fhw_logo.png

@style
/* Corporate Design der OVGU: Hausfarbe Dunkelrot, Fakultätsfarbe FHW Orange */
.lia-content h1, .lia-content h2 { color: #7a003f; }
.lia-content blockquote { border-left: 4px solid #ef7d00; background: #fdf0e3; }
.lia-content table th { background: #7a003f; color: #fff; }
@end
-->

# Sitzung 2 – Programmieren mit Open Roberta

**FORTBILDUNGSREIHE · DER mBOT2 IM FACHUNTERRICHT**

### Sequenz, Schleife, Bedingung und Sensoren

`Sitzung 2 von 3` · `90 Minuten` · `Lernpfade A · B · C`

<details>
<summary>Moderationsnotiz</summary>

Diese Folie läuft beim Ankommen. Parallel die nächste Folie zeigen: Ankommen = Verbinden.

</details>


## Ankommen = Verbinden

*Bitte verbinden Sie Ihren mBot2 schon jetzt – dann starten wir alle gleichzeitig.*

|  | Element | Erläuterung |
|---|---|---|
| 1 | **Einschalten, anschließen** | USB-C-Datenkabel an den Laptop |
| 2 | **Connector starten** | „Verbinden“ klicken, Token notieren |
| 3 | **Lab: „mBot 2“** | lab.open-roberta.org, System wählen |
| 4 | **Roboter → Verbinden** | Token eingeben |
| 5 | **Testprogramm** | LED grün + Ton auf Taste A |
| 6 | ⚠ **Klappt nicht?** | anderes Kabel, neu einschalten, Token neu – oder Leitung fragen |

<details>
<summary>Moderationsnotiz</summary>

Feedback aus der Erprobung: Startschwierigkeiten mit Open Roberta kosteten Zeit. Deshalb wird die Verbindung vor Beginn hergestellt. Leitung geht herum.

</details>


## Ziele und Ablauf heute

*Ziel: Programme schreiben, die auf die Umwelt reagieren – vorhersagen, testen, verbessern.*

|  | Minute | Phase | Inhalt |
|---|---|---|---|
| 1 | 0–8 | Rückblick, Lernpfad | Wissenscheck 1, Lernpfad A, B oder C wählen |
| 2 | 8–18 | Mensch-Roboter | Sequenz, Schleife, Bedingung ohne Computer |
| 3 | 18–33 | PRIMM am Beamer | Programm „Wachhund“ vorhersagen, testen, ändern |
| 4 | 33–63 | **Lernpfade** | Pflicht + Wahl, gestufte Hilfen |
| 5 | 63–75 | Mini-Teach | Expert:innen-Stationen mit Leitkarte |
| 6 | 75–90 | Sicherung, Ausblick | Modell und Wirklichkeit, Fachbezug, Sitzung 3 |

<details>
<summary>Moderationsnotiz</summary>

Zu Beginn die zwei häufigsten Fehler aus dem Wissenscheck 1 aufgreifen (vorher in Moodle auswerten). Meist: Endlosschleife im Startblock, Funktion des Encoders.

</details>


## Welcher Lernpfad passt zu Ihnen?

*Drei Ja/Nein-Fragen im Arbeitsheft: Blocksprache schon genutzt? Bedingung erklärbar? Textbasiert programmiert?*

**A · Einstieg (0–1 × ja)**

- Pflicht: A1 Strecke messen
- Wahl: A2 Vielecke oder A3 Hell-Dunkel-Licht

**B · Sensoren (2 × ja)**

- Pflicht: B1 Hindernis
- Wahl: B2 Linienfolger oder B3 Zufall

**C · Vertiefung (3 × ja)**

- Pflicht: C1 Linienfolger als Regler
- Wahl: C2 Verhaltensmodell oder C3 Unterrichtsaufgabe

> **!** Empfehlung + Wechselrecht: Sie dürfen jederzeit wechseln – nach oben wie nach unten.

<details>
<summary>Moderationsnotiz</summary>

Hospitationsfeedback: Lernpfade funktionieren nur, wenn alle die passenden Aufgaben bearbeiten. Deshalb Selbsteinschätzung mit Empfehlung. Leitung passt bei Bedarf an. Doppeldecker: Diese Logik lässt sich direkt auf die Klasse übertragen.

</details>


## Mensch-Roboter: Programmieren ohne Computer

*Eine Person ist Roboter, die andere programmiert mit Befehlskarten. Auftrag: einmal um einen Stuhl herum.*

**1 · Runde 1**

- Gehe n Schritte
- Drehe links 90°
- Drehe rechts 90°

**2 · Runde 2**

- zusätzlich:
- Wiederhole n mal [ … ]

**3 · Runde 3**

- zusätzlich:
- Wenn Hindernis vor dir, dann [ … ] sonst [ … ]

> **!** Danach: Wie viele Karten brauchten Sie in jeder Runde? Was kann die Wenn-Karte, was die anderen nicht können?

<details>
<summary>Moderationsnotiz</summary>

10 Minuten. Erkenntnis: Runde 2 macht das Programm kürzer (Schleife), Runde 3 lässt den Roboter auf die Umgebung reagieren (Bedingung) – das Programm funktioniert dann auch, wenn der Stuhl verschoben wird. Begriffe an die Tafel.

</details>


## Die drei Grundstrukturen in Open Roberta

**1 · Sequenz**

- Anweisungen nacheinander
- Blöcke untereinander
- Beispiel: Fahre 20 cm → Drehe 90° → Fahre 20 cm

**2 · Schleife**

- Wiederhole n mal (Zählschleife)
- Wiederhole bis / solange …
- Wiederhole unendlich oft (Startblock)

**3 · Bedingung**

- Wenn … mache … sonst …
- Vergleich mit Schwellenwert
- Beispiel: Abstand < 20 → LED rot

> **!** Schwellenwert = der Grenzwert, ab dem eine Bedingung „wahr“ wird. Er wird gemessen, nicht geraten.

<details>
<summary>Moderationsnotiz</summary>

Kurz die Blöcke im Lab zeigen (Kategorie Kontrolle und Logik).

</details>


## PRIMM: erst vorhersagen, dann testen

|  | Element | Erläuterung |
|---|---|---|
| P | **Predict** | Was wird das Programm tun? Vorhersage notieren. |
| R | **Run** | Am mBot2 ausführen und beobachten. |
| I | **Investigate** | Warum passiert das? Was bewirkt welcher Block? |
| M | **Modify** | Gezielt eine Sache ändern und erneut vorhersagen. |
| M | ⚠ **Make** | Eigenes Programm für eine neue Aufgabe entwickeln. |

> **!** Für den mBot2 gibt es in Open Roberta keinen Simulator. Die Vorhersage übernimmt seine Rolle: Sie macht sichtbar, wo das eigene Modell nicht stimmt.

<details>
<summary>Moderationsnotiz</summary>

PRIMM nach Sentance, Waite und Kallia (2019). Im erprobten Konzept stand „erst Simulation, dann Roboter“ – das ist beim mBot2 nicht möglich. Der Vergleich Modell ↔ Wirklichkeit bleibt aber Lernziel.

</details>


## Predict: Was tut der „Wachhund“?

```text
Start
  Wiederhole unendlich oft
    Wenn  Gib Abstand cm
          Ultraschallsensor U  <  20
      Schalte RGB LED an  alle
                          Farbe rot
      Spiele Note  Viertel  a'
    sonst
      Schalte RGB LED an  alle
                          Farbe grün
```

**Predict (2 Min.)**

Was tut der mBot2? Notieren Sie Ihre Vorhersage im Arbeitsheft.

**Investigate**

- Was passiert mit 5 statt 20?
- Wo steckt die Schleife?
- Was, wenn „sonst“ fehlt?

<details>
<summary>Moderationsnotiz</summary>

Erst Vorhersage, dann am Demo-mBot2 ausführen. Investigate-Fragen im Plenum. Modify: Tandems lassen zusätzlich den Abstand auf dem Display anzeigen (Lösungsheft 2.1). Ohne „sonst“ bleibt die LED nach dem ersten Alarm rot – gute Einsicht: Ein Zustand bleibt, bis das Programm ihn ändert.

</details>


## Zwei Muster für alle Aufgaben

**1 · Messen vor Entscheiden**

- Sensorwert auf dem Display anzeigen
- „wandle … um in Zeichenkette“ (Kategorie Text)
- echte Werte notieren, dann Schwelle festlegen

**2 · Start mit A, Stopp mit B**

- Warte bis Taste A gedrückt?
- Wiederhole bis Taste B gedrückt? [ Programm ]
- Stoppe

> **!** Muster B ist zugleich der Not-Aus für die Klasse: Jedes Fahrprogramm lässt sich jederzeit anhalten.

<details>
<summary>Moderationsnotiz</summary>

Beide Muster stehen im Arbeitsheft. Sie lösen das Problem der festen Endlosschleife im Startblock und machen Schwellenwerte begründbar.

</details>


## Lernpfade: Ihre Aufgaben (30 Minuten)

| Pfad | Pflicht | Wahl |
|---|---|---|
| A | A1 Strecke messen: genau 50 cm, Strecken- vs. Zeitversion | A2 Vielecke (Drehwinkel berechnen) oder A3 Hell-Dunkel-Licht |
| B | B1 Hindernis: stoppen, zurück, drehen; tatsächlichen Abstand messen | B2 Linienfolger (Zweipunktregler) oder B3 Zufall (20 Versuche) |
| C | C1 Linienfolger als Proportionalregler, Parameter dokumentieren | C2 Verhaltensmodell (Photokinese) oder C3 eigene Unterrichtsaufgabe |

> **!** Für jede Aufgabe: vorhersagen → testen → messen → eine Sache ändern → wieder testen. Hilfekarten erst nach 3 Minuten eigenem Probieren.

<details>
<summary>Moderationsnotiz</summary>

Leitung geht herum und fragt: Was hast du vorhergesagt? Was ist passiert? Was änderst du als Nächstes – und nur das? Bei Verzug entfällt die Wahlaufgabe. Lösungskarten liegen nur am Leitungstisch.

</details>


## Gestufte Hilfen und die Debugging-Regel

**H1 · Denkanstoß**

Eine Frage, die auf den entscheidenden Gedanken lenkt.

**H2 · Werkzeug**

Die benötigten Blöcke mit ihrer Kategorie.

**H3 · Teillösung**

Ein Programmgerüst mit Lücken.

> **!** Debugging-Regel: eine Änderung → testen → notieren. Wer drei Dinge gleichzeitig ändert, weiß nicht, was gewirkt hat.

<details>
<summary>Moderationsnotiz</summary>

Doppeldecker: Die Hilfekarten liegen im Arbeitsheft-Anhang und als Schülerfassung im Unterrichtsmaterial. Diskussionsimpuls: Ab wann nimmt eine Hilfe das Lernen weg?

</details>


## Mini-Teach: Leitkarte für Erklärende (max. 4 Min.)

**1 · Ziel**

Was soll der Roboter tun? Ein Satz – und der Roboter zeigt es.

**2 · Code**

Wo ist die Schleife? Wo die Bedingung? Welcher Schwellenwert – und woher stammt er?

**3 · Mitmachen**

Das Gegenüber ändert eine Zahl, sagt voraus, was passiert – dann testen.

> **!** Feste Stationen, an denen die Erklärenden bleiben. Alle anderen rotieren zweimal (je 5 Min.) und notieren: eine Übernahme, eine Frage.

<details>
<summary>Moderationsnotiz</summary>

Hospitationsfeedback: Die Qualität hing davon ab, wer gerade erklärt. Leitkarte und feste Stationen sichern die Qualität. Stationen z. B.: A2 Vieleck, B1 Hindernis, B2 Linienfolger, C1 Regler.

</details>


## Modell und Wirklichkeit

*Wo wich Ihre Vorhersage von der Fahrt ab – und warum?*

**– · Das Modell sagt …**

- 50 cm sind 2,45 Radumdrehungen
- Stopp genau bei 15 cm Abstand
- ein Dreieck schließt sich exakt

**+ · Die Wirklichkeit zeigt …**

- Schlupf, Untergrund, Akkustand
- Reaktions- und Bremsweg
- Sensorrauschen und Licht im Raum

> **!** Auf Karten: „Sequenz, Schleife oder Bedingung stecken in meinem Fach in …“ → an die Pinnwand nach Fächern.

<details>
<summary>Moderationsnotiz</summary>

Sicherung in drei Schritten: (1) Modell und Wirklichkeit, (2) Fachbezug auf Karten, (3) Doppeldecker: Welcher Lernpfad passt zu welcher Ihrer Klassen? Optional Impuls: Der Linienfolger lernt nichts – er folgt Regeln, die Menschen festgelegt haben.

</details>


## Bis zur nächsten Sitzung

**1 · Selbstlernmodul 2**

- Wissenscheck (11 Fragen)
- ca. 15 Minuten
- Programme exportieren und sichern

**2 · Fachgruppe wählen**

- Technik · Mathematik · Physik
- Informatik · offene Gruppe
- im Moodle bis eine Woche vorher

**3 · Lehrplanbezug**

- Fachlehrplan Sachsen-Anhalt
- Wunsch-Jahrgangsstufe wählen
- Fundstelle notieren

<details>
<summary>Moderationsnotiz</summary>

Ausblick auf Sitzung 3: Erst selbst ausprobieren, dann planen – in Fachgruppen für eine Projektwoche; die Gruppe wählt eine gemeinsame Jahrgangsstufe (Voreinstellung Klasse 7). mBot2 an die Ladestation.

</details>

---

Der mBot2 im Fachunterricht · Sitzung 2 · CC BY 4.0
