<!--
author:   ITVET – Otto-von-Guericke-Universität Magdeburg
email:    itvet@ovgu.de
version:  1.0.0
language: de
mode:     Presentation
comment:  Sitzung 1 – Den mBot2 kennenlernen – Foliensatz der Fortbildungsreihe „Der mBot2 im Fachunterricht“.
          Automatisch erzeugt aus slides_s1.js (scripts/slides2lia.js), bitte dort ändern.
logo:     https://raw.githubusercontent.com/OVGU-VET-TechEd/MBOT2_Weiterbildung/main/assets/ovgu_fhw_logo.png

@style
/* Corporate Design der OVGU: Hausfarbe Dunkelrot, Fakultätsfarbe FHW Orange */
.lia-content h1, .lia-content h2 { color: #7a003f; }
.lia-content blockquote { border-left: 4px solid #ef7d00; background: #fdf0e3; }
.lia-content table th { background: #7a003f; color: #fff; }
@end
-->

# Sitzung 1 – Den mBot2 kennenlernen

**FORTBILDUNGSREIHE · DER mBOT2 IM FACHUNTERRICHT**

### Aufbau, EVA-Prinzip und erstes Programm

`Sitzung 1 von 3` · `90 Minuten` · `Open Roberta Lab`

<details>
<summary>Moderationsnotiz</summary>

Begrüßung. Kurz vorstellen: Leitung, Ablauf der Reihe. Kernbotschaft: Sie brauchen kein Vorwissen – nach 90 Minuten fährt Ihr selbst gebauter Roboter mit Ihrem ersten Programm, und Sie wissen, was Ihre Klasse dafür braucht.

</details>


## Die Fortbildungsreihe im Überblick

*Jede Sitzung folgt dem Dreischritt Erleben → Reflektieren → Übertragen.*

**1 · Sitzung 1 · heute**

- mBot2 aufbauen und als System verstehen
- EVA-Prinzip
- mit Open Roberta verbinden
- erstes Programm

**2 · Sitzung 2**

- Sequenz, Schleife, Bedingung
- Sensorwerte und Schwellenwerte
- Lernpfade A/B/C
- Mini-Teach

**3 · Sitzung 3**

- Erprobung in Fachgruppen
- Tagesplan für eine Projektwoche (Kl. 5–13)
- Peer-Feedback, Übergaben

> **!** Pädagogischer Doppeldecker: Sie erleben heute selbst die Methoden, die Sie später in Ihrer Klasse einsetzen können.

<details>
<summary>Moderationsnotiz</summary>

Überblick über die drei Sitzungen und die Selbstlernphasen dazwischen. Den Doppeldecker erklären: Wir fragen am Ende jeder Phase, was das für Ihre Klasse bedeutet.

</details>


## Ziele und Ablauf heute

*Ziel: Den mBot2 selbstständig in Betrieb nehmen und das Zusammenspiel von Sensor, Steuerung und Aktor erklären.*

|  | Minute | Phase | Inhalt |
|---|---|---|---|
| 1 | 0–10 | Ankommen | Ampel-Abfrage, Tandems bilden |
| 2 | 10–24 | EVA und Bauteile | Leitfrage, Bauteile zuordnen (Arbeitsheft Aufgabe 1) |
| 3 | 24–62 | **Montage im Tandem** | Rollen, 9 Bauschritte, Funktionsprüfung |
| 4 | 62–80 | Open Roberta | Verbinden, erstes Programm vorhersagen und testen |
| 5 | 80–90 | Reflexion | Was bedeutet das für meine Klasse? Ausblick |

<details>
<summary>Moderationsnotiz</summary>

Ablauf kurz zeigen. Die Montage ist der größte Block – in der Erprobung brauchten Tandems rund 45 Minuten. Deshalb liegen vormontierte Geräte als Plan B bereit.

</details>


## Wo stehen Sie?

*Halten Sie die Ampelkarte hoch, die am besten passt. Wir zählen und vergleichen am Ende.*

**Grün**

Ich kenne den mBot2 oder ähnliche Roboter und habe schon programmiert.

**Gelb**

Ich habe schon etwas ausprobiert, z. B. Scratch, Calliope oder LEGO.

**Rot**

Das ist alles neu für mich.

> **!** Tandems: möglichst Grün oder Gelb zusammen mit Rot. Erfahrene erklären – fassen aber nicht an.

<details>
<summary>Moderationsnotiz</summary>

Ergebnis als Strichliste auf dem Flipchart festhalten (Feedback aus der Erprobung: Das Ergebnis wurde nirgends aufgenommen). Danach heterogene Tandems bilden. Doppeldecker-Hinweis: Die Ampel ist eine schnelle Diagnose, die auch in der Klasse funktioniert – aber nur, wenn das Ergebnis sichtbar weiterverwendet wird.

</details>


## Das EVA-Prinzip

*Leitfrage: Was muss ein Roboter besitzen, um wahrnehmen, entscheiden und handeln zu können?*

| Eingabe → | Verarbeitung → | Ausgabe |
|---|---|---|
| **WAHRNEHMEN** | **ENTSCHEIDEN** | **HANDELN** |
| Sensoren erfassen die Umwelt: Abstand, Helligkeit, Farbe, Geräusch, Neigung, Tastendruck. | Der CyberPi führt das Programm aus und entscheidet, was passieren soll. | Motoren bewegen, LEDs leuchten, Lautsprecher tönen, das Display zeigt an. |

> **!** Dazu kommen Energie (Akku im Shield) und Struktur/Verbindung (Chassis, Kabel).

<details>
<summary>Moderationsnotiz</summary>

Erst Antworten auf die Leitfrage sammeln und den drei Spalten zuordnen, dann diese Folie zeigen. Am Demo-mBot2 unter der Dokumentenkamera zeigen: Wo nimmt er wahr, wo entscheidet er, wo handelt er? Danach Arbeitsheft Aufgabe 1 (8 Min.).

</details>


## Die Bauteile des mBot2

*Lösung zu Aufgabe 1 – erst nach der Tandemphase zeigen.*

|  | Element | Erläuterung |
|---|---|---|
| V | **CyberPi** | führt das Programm aus; enthält zusätzlich Display, LEDs, Lautsprecher, Licht- und Lagesensor, Mikrofon, Tasten |
| E | **Ultraschallsensor 2** | misst mit Schallwellen den Abstand zu Hindernissen |
| E | **Quad-RGB-Sensor** | vier Einzelsensoren erkennen hell/dunkel und Farben am Boden |
| A | **Encoder-Motoren** | treiben die Räder an; der Encoder misst dabei die Drehung (auch Eingabe!) |
| ⚡ | **mBot2-Shield** | eingebauter Akku (Laden per USB-C); verbindet CyberPi, Motoren und Sensoren |
| S | **Chassis und Kabel** | Aluminiumrahmen trägt alles; Motor- und mBuild-Kabel übertragen Strom und Signale |

<details>
<summary>Moderationsnotiz</summary>

Kurze Plenumskontrolle (2 Min.). Denkfrage aus dem Arbeitsheft aufgreifen: Warum ist der Encoder-Motor Ausgabe und Eingabe zugleich? Antwort: Er treibt an und meldet die Drehung zurück – so kann der mBot2 genau 20 cm fahren (Regelkreis). Achtung: Viele Internet-Anleitungen beschreiben noch den alten mBot mit mCore und AA-Batterien.

</details>


## Montage im Tandem: Rollen und Regeln

**1 · Navigator:in**

- liest jeden Schritt aus der Originalanleitung vor
- sucht die richtigen Schrauben heraus
- prüft das Ergebnis

**2 · Monteur:in**

- schraubt und steckt
- baut nur, was vorgelesen wurde
- Rollenwechsel nach Schritt 5

**3 · Erfahrene**

- erklären durch Fragen und Zeigen
- fassen nicht an
- haben Zusatzaufgaben im Arbeitsheft

> **!** Schraubendreher-Tipp: Das Bit lässt sich umstecken – Kreuzseite und Sechskantseite. Schrauben vorher nach Größe sortieren.

<details>
<summary>Moderationsnotiz</summary>

Jetzt die Live-Demo unter der Dokumentenkamera: Bit umstecken, Schrauben sortieren (1 Minute). Feedback aus der Erprobung: Der Tipp auf der Folie allein ging unter. Doppeldecker: Rollen mit festem Wechsel verhindern, dass eine Person alles macht.

</details>


## Die 9 Bauschritte

|  | Element | Erläuterung |
|---|---|---|
| 1 | **Räder und Motorkabel** | Reifen auf die Radnaben, Motorkabel an beide Motoren |
| 2 | **Motoren ans Chassis** | beide Encoder-Motoren festschrauben · M4×8 |
| 3 | **Räder anbringen** | Räder auf die Motorachsen · M2,5×12 |
| 4 | **Stützrad und Quad-RGB** | Mini-Rad und Quad-RGB-Sensor unten · M4×14 |
| 5 | ⚠ **Quad-RGB verkabeln** | 10-cm-Kabel, nicht 20 cm! → Zwischencheck |
| 6 | **Ultraschallsensor 2** | vorn anbauen, 10-cm-Kabel · M4×14 |
| 7 | **Shield aufsetzen** | mBot2-Shield oben festschrauben · M4×25 |
| 8 | ⚠ **Verkabeln** | linker Motor → EM1, rechter Motor → EM2 |
| 9 | **CyberPi aufstecken** | Funktionsprüfung: Display leuchtet, Räder drehen frei |

<details>
<summary>Moderationsnotiz</summary>

Reihenfolge wie in der Originalanleitung. Leitung geht herum. Zwischencheck nach Schritt 5 aktiv einfordern. Ab Minute 55: Tandems, die noch nicht bei Schritt 7 sind, bekommen einen vormontierten mBot2 und bauen ihren eigenen später fertig. Schnelle Tandems: Arbeitsheft Aufgabe 2.

</details>


## Den mBot2 mit Open Roberta verbinden

|  | Element | Erläuterung |
|---|---|---|
| 1 | **Einschalten, anschließen** | Schalter am Shield; USB-C-Datenkabel an den Laptop |
| 2 | **Connector starten** | Open Roberta Connector findet den mBot2 |
| 3 | **Verbinden → Token** | Der Connector zeigt einen Token (z. B. 7GH2KQ9X) |
| 4 | **Lab öffnen** | lab.open-roberta.org → System „mBot 2“ wählen |
| 5 | **Roboter → Verbinden** | Token eingeben, bestätigen |
| 6 | **Programm übertragen** | Play-Knopf unten rechts |

> **!** Für den mBot2 gibt es in Open Roberta keinen Simulator. Programme werden direkt am Gerät getestet – deshalb sagen wir vorher voraus, was passieren wird.

<details>
<summary>Moderationsnotiz</summary>

Live am Beamer zeigen, Schritt für Schritt. Die Installation des Connectors braucht Administratorrechte – Thema für die Reflexion am Ende (Weg 1 / Weg 2). Bei Problemen: Datenkabel? Richtiges System „mBot 2“ gewählt? Token neu erzeugen.

</details>


## Merksatz

> ### Beim mBot2 ist der Startblock eine Endlosschleife. Alles darin läuft immer wieder.

```text
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    … Ihr Programm …
```

- Die Schleife lässt sich nicht entfernen.
- „Warte bis Taste A gedrückt?“ als erster Block: Jeder Durchlauf startet erst auf Knopfdruck.
- Auch eine gute Sicherheitsregel für die Klasse.

<details>
<summary>Moderationsnotiz</summary>

Am Beamer zeigen: Ein Fahrbefehl ohne Warte-Block wird endlos wiederholt. Das ist die häufigste Überraschung beim Einstieg mit Open Roberta und dem mBot2.

</details>


## Erstes Programm: erst vorhersagen, dann testen

```text
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Fahre vorwärts  Tempo U/min 30
                    Strecke cm 20
    Drehe rechts    Tempo U/min 30
                    Grad 180
    Fahre vorwärts  Tempo U/min 30
                    Strecke cm 10
```

**Vorhersage (Tandem, 1 Min.)**

Wo steht der mBot2 am Ende? In welche Richtung schaut er? Skizzieren Sie Start und Ende.

**Dann testen**

Auf dem Boden fahren lassen. Stimmt die Vorhersage? Was weicht ab?

<details>
<summary>Moderationsnotiz</summary>

Block für Block am Beamer bauen und dabei laut erklären (Feedback: Code-Erklärung am Beamer). Erst Vorhersage einholen, dann ausführen. Lösung: 10 cm vor dem Start, Blick zurück zum Start. Abweichungen (Drehung nicht genau 180°) nicht wegerklären – Vorgriff auf Sitzung 2: Modell und Wirklichkeit.

</details>


## Ihre Aufgaben (11 Minuten)

**1 · Pflicht: Fahren**

- Programm von der letzten Folie
- erst vorhersagen, dann testen
- Fahrtests auf dem Boden

**2 · Wahl: Licht, Klang, Text**

- LEDs rot – grün – blau
- Dreiklang c′ – e′ – g′
- „Hallo“ und „Wie geht es dir?“

**3 · Zusatz: Begrüßung**

- fährt 30 cm auf Sie zu
- leuchtet grün, spielt eine Note
- zeigt „Hallo!“

> **!** Hilfreiche Blöcke stehen im Arbeitsheft (Aufgabe 5). Erst Tandem, dann Nachbartandem, dann Leitung.

<details>
<summary>Moderationsnotiz</summary>

Leitung hilft vor allem bei Verbindungsproblemen (Plan B: Technik-Vorbereitung Abschnitt 4). Musterlösungen im Lösungsheft – vor der Sitzung getestet.

</details>


## Was bedeutet das für Ihre Klasse?

*Wer richtet die Technik ein? Zwei Wege aus der Erprobung:*

**– · Weg 2: mit der Klasse einrichten**

- Installation wird Teil der Stunde
- kostet etwa die Hälfte der Zeit
- Aufgaben stark kürzen (z. B. nur Fahren)
- Rechte auf Schulgeräten oft nicht vorhanden

**+ · Weg 1: vorab einrichten (empfohlen)**

- Lehrkraft installiert und testet vorher
- Rechte rechtzeitig mit der IT klären
- die Stunde gehört den Lernzielen
- Plan B: vormontierte, verbundene Geräte

> **!** Arbeitsheft Aufgabe 6: Zeitbedarf Montage? Was muss an Ihrer Schule vorbereitet werden? Welche Methode übernehmen Sie?

<details>
<summary>Moderationsnotiz</summary>

Blitzlicht: je Tandem ein Satz. Dann die drei Reflexionsfragen. Kernsatz: Technik-Vorbereitung ist Unterrichtszeit. Danach Ampel erneut und Ergebnis neben das erste auf das Flipchart schreiben.

</details>


## Bis zur nächsten Sitzung

**1 · Selbstlernmodul 1**

- Wissenscheck (10 Fragen)
- Open Roberta ohne Roboter erkunden
- ca. 30 Minuten im Moodle-Kurs

**2 · Ihre mBot2**

- bleiben montiert
- beschriften (Nr. am Shield)
- an die Ladestation

**3 · Sitzung 2**

- Schleifen und Bedingungen
- Sensoren und Schwellenwerte
- Lernpfade für jedes Vorwissen

<details>
<summary>Moderationsnotiz</summary>

Abschluss. Auf das Selbstlernmodul hinweisen: Die Ergebnisse des Wissenschecks werden zu Beginn von Sitzung 2 aufgegriffen. Dank.

</details>

---

Der mBot2 im Fachunterricht · Sitzung 1 · CC BY 4.0
