<!--
author:   ITVET – Otto-von-Guericke-Universität Magdeburg
email:    itvet@ovgu.de
version:  1.0.0
language: de
narrator: Deutsch Female
comment:  Selbstlernmodul zu Sitzung 1 der Fortbildungsreihe „Der mBot2 im Fachunterricht“:
          Vorbereitung (Selbstlernphase 0) und Wissenscheck (Selbstlernphase 1).
-->

# Selbstlernmodul 1 – Den mBot2 kennenlernen

**Fortbildungsreihe „Der mBot2 im Fachunterricht“** · Sitzung 1

Dieses Modul hat zwei Teile:

| Teil | Wann? | Dauer | Inhalt |
|---|---|---|---|
| **A – Vorbereitung** | vor Sitzung 1 | ca. 15 Min. | Erwartungen, Selbsteinschätzung, Technik-Check an Ihrer Schule |
| **B – Wissenscheck und Erkundung** | nach Sitzung 1 | ca. 30 Min. | 10 Fragen mit Rückmeldung, Open Roberta ohne Roboter erkunden, Reflexion |

Die Fragen sind den Lernzielen der Sitzung zugeordnet (LZ 1.1 – 1.5). Es gibt keine Bewertung: Der Wissenscheck zeigt Ihnen und der Kursleitung, was schon sitzt und was in Sitzung 2 noch einmal aufgegriffen werden sollte.

## A1 – Wer sind Sie?

Welche Fächer unterrichten Sie?

[[tec]] Technik
[[inf]] Informatik
[[mat]] Mathematik
[[phy]] Physik
[[nawi]] Naturwissenschaften (Biologie, Chemie)
[[spr]] Sprachen oder Gesellschaftswissenschaften
[[and]] Anderes Fach

Wie vertraut sind Sie mit dem mBot2 oder ähnlichen Robotern?

[(rot)] **Rot:** Das ist alles neu für mich.
[(gelb)] **Gelb:** Ich habe schon etwas ausprobiert (z. B. Scratch, Calliope, LEGO).
[(gruen)] **Grün:** Ich kenne den mBot2 oder programmiere regelmäßig.

Was möchten Sie nach dieser Fortbildung können?

[[___ ___ ___]]

## A2 – Technik-Check an Ihrer Schule

Sie lernen den mBot2 in der Fortbildung auf vorbereiteten Geräten kennen. Damit Sie ihn danach an Ihrer Schule einsetzen können, prüfen Sie bitte schon jetzt:

- [ ] Wie viele mBot2 gibt es an meiner Schule, und wo sind sie?
- [ ] Sind die mBot2 bereits montiert? Sind die Akkus geladen?
- [ ] Welche Laptops oder PCs stehen für eine Klasse zur Verfügung?
- [ ] Darf ich auf diesen Geräten Programme installieren (Open Roberta Connector)? Wenn nein: Wer ist zuständig?
- [ ] Ist [lab.open-roberta.org](https://lab.open-roberta.org) im Schulnetz erreichbar?

> **Warum das wichtig ist:** In der Erprobung dieser Fortbildung zeigte sich, dass eine Installation während der Stunde etwa die Hälfte der Unterrichtszeit kosten kann. Außerdem fehlten auf zentral verwalteten Geräten oft die nötigen Rechte.

Was haben Sie herausgefunden?

[[___ ___ ___]]

## B1 – Das Wichtigste in Kürze

**Das EVA-Prinzip:** Der mBot2 nimmt mit Sensoren wahr (**Eingabe**), der CyberPi entscheidet nach dem Programm (**Verarbeitung**), Motoren, LEDs, Display und Lautsprecher handeln (**Ausgabe**).

| Bauteil | Rolle |
|---|---|
| CyberPi | Verarbeitung; enthält zusätzlich Lichtsensor, Mikrofon, Lagesensor, Joystick, Tasten A/B, Display, RGB-LEDs, Lautsprecher |
| mBot2-Shield | Energie (eingebauter Akku, Laden per USB-C) und Verbindung zu Motoren und Sensoren |
| Ultraschallsensor 2 | Eingabe: Abstand |
| Quad-RGB-Sensor | Eingabe: Helligkeit und Farbe am Boden (vier Einzelsensoren) |
| Encoder-Motoren | Ausgabe: Antrieb; der Encoder misst die Drehung (Eingabe) |

**Verbinden:** Connector starten → Verbinden → Token → Lab: „mBot 2“ → Roboter → Verbinden.

**Startblock = Endlosschleife:** Alles im Startblock läuft immer wieder. Mit „Warte bis Taste A gedrückt?“ starten Sie jeden Durchlauf auf Knopfdruck.

## B2 – Wissenscheck

**Frage 1** · LZ 1.1
Welches Bauteil des mBot2 führt das Programm aus?

[( )] Das mBot2-Shield
[(X)] Der CyberPi
[( )] Der Quad-RGB-Sensor
[( )] Der Encoder im Motor
****************************************
Richtig: Der **CyberPi** ist die Steuereinheit (Mikrocontroller). Das Shield verteilt Strom und Signale und enthält den Akku.
****************************************

**Frage 2** · LZ 1.1
Wie wird der mBot2 mit Energie versorgt?

[( )] Mit vier AA-Batterien im Batteriefach unter dem Chassis
[(X)] Mit einem im mBot2-Shield eingebauten Akku, der per USB-C geladen wird
[( )] Ausschließlich über das USB-Kabel am Laptop
[( )] Mit einer Knopfzelle im CyberPi
****************************************
Richtig ist der **eingebaute Akku im Shield**. Vorsicht bei Material aus dem Internet: Der mBot der ersten Generation (Steuerplatine mCore) nutzte AA-Batterien und hatte andere Anschlüsse. Viele frei verfügbare Anleitungen beziehen sich noch auf dieses ältere Modell.
****************************************

**Frage 3** · LZ 1.2
Welche dieser Bauteile gehören zur **Eingabe**? (Mehrere Antworten möglich)

[[X]] Ultraschallsensor 2
[[X]] Quad-RGB-Sensor
[[X]] Taste A am CyberPi
[[ ]] RGB-LEDs am CyberPi
[[ ]] Lautsprecher am CyberPi
****************************************
Eingabe sind alle Bauteile, die Informationen aus der Umwelt aufnehmen – auch eine Taste. LEDs und Lautsprecher geben etwas aus.
****************************************

**Frage 4** · LZ 1.2 (Transfer)
Eine automatische Schiebetür öffnet sich, wenn ein Bewegungsmelder eine Person erkennt. Welche Rolle hat der **Elektromotor**, der die Tür bewegt?

[( )] Eingabe
[( )] Verarbeitung
[(X)] Ausgabe
[( )] Energie
****************************************
Der Motor wirkt auf die Umwelt – er ist ein **Aktor** und damit Ausgabe. Der Bewegungsmelder ist Eingabe, die Türsteuerung Verarbeitung.
****************************************

**Frage 5** · LZ 1.2
Warum kann der mBot2 eine Strecke von genau 20 cm fahren, statt nur „2 Sekunden lang“?

[( )] Weil der Ultraschallsensor die gefahrene Strecke misst
[(X)] Weil die Encoder die Drehung der Räder messen und der CyberPi stoppt, wenn die Sollstrecke erreicht ist
[( )] Weil der Quad-RGB-Sensor die Bodenmarkierungen zählt
[( )] Weil die Motoren immer gleich schnell laufen
****************************************
Der **Encoder** meldet den Drehwinkel zurück. Aus Raddurchmesser (6,5 cm) und Drehwinkel berechnet der CyberPi die Strecke. Das ist ein einfacher **Regelkreis**: Soll und Ist werden verglichen.
****************************************

**Frage 6** · LZ 1.3
Ihr mBot2 fährt im Kreis, obwohl „Fahre vorwärts“ programmiert ist. Was prüfen Sie **zuerst**?

[( )] Ob die Firmware aktuell ist
[(X)] Ob beide Motorkabel fest eingesteckt sind (links EM1, rechts EM2)
[( )] Ob der Ultraschallsensor richtig herum montiert ist
[( )] Ob der Token korrekt eingegeben wurde
****************************************
Wenn nur ein Rad angetrieben wird, fährt der Roboter im Kreis. Ein loses Motorkabel ist dafür die häufigste Ursache. Ein falscher Token würde dagegen verhindern, dass überhaupt ein Programm ankommt.
****************************************

**Frage 7** · LZ 1.4
In welcher Reihenfolge verbinden Sie den mBot2 mit Open Roberta?

[( )] Lab öffnen → Programm übertragen → Connector starten → Token eingeben
[(X)] Connector starten → „Verbinden“ → Token im Lab unter „Roboter → Verbinden“ eingeben → Programm übertragen
[( )] Token im Lab erzeugen → im Connector eingeben → Programm übertragen
[( )] Programm per Bluetooth senden → Connector bestätigt automatisch
****************************************
Der **Connector** erzeugt den Token, das **Lab** braucht ihn, um zu wissen, an welchen Roboter das Programm gehen soll.
****************************************

**Frage 8** · LZ 1.4
Sie legen nur den Block „Fahre vorwärts Tempo U/min 30 Strecke cm 20“ in den Startblock und starten. Was passiert?

[( )] Der mBot2 fährt 20 cm und bleibt dann stehen.
[(X)] Der mBot2 fährt immer wieder 20 cm weiter, bis Sie ihn ausschalten.
[( )] Nichts – ohne „Warte“-Block startet kein Programm.
[( )] Open Roberta meldet einen Fehler, weil die Schleife fehlt.
****************************************
Beim mBot2 enthält der Startblock **immer** eine Endlosschleife. Der Block wird deshalb ohne Pause wiederholt. Mit „Warte bis Taste A gedrückt?“ am Anfang steuern Sie jeden Durchlauf selbst.
****************************************

**Frage 9** · LZ 1.4 (Vorhersage)
Ein Programm lautet: *Fahre vorwärts 30 cm → Drehe links 90 Grad → Fahre vorwärts 30 cm*. Wo steht der mBot2 am Ende (bei idealer Ausführung)?

[( )] 60 cm vor dem Startpunkt, Blick nach vorn
[(X)] 30 cm vor und 30 cm links vom Startpunkt, Blick nach links
[( )] 30 cm vor und 30 cm rechts vom Startpunkt, Blick nach rechts
[( )] wieder am Startpunkt
****************************************
Zeichnen hilft: erst 30 cm geradeaus, dann Vierteldrehung nach links, dann 30 cm in die neue Richtung. „Bei idealer Ausführung“ – in Wirklichkeit weicht der Endpunkt meist etwas ab. Das ist ein Thema von Sitzung 2.
****************************************

**Frage 10** · LZ 1.5 (Beurteilung)
Eine Kollegin plant für eine **45-Minuten-Stunde** in Klasse 7: mBot2 auspacken und zusammenbauen, Connector installieren, erstes Programm schreiben. Wie beurteilen Sie die Planung?

[( )] Realistisch, wenn die Schülerinnen und Schüler motiviert sind
[( )] Realistisch, wenn sie in Dreiergruppen arbeiten
[(X)] Unrealistisch: Montage braucht etwa eine Doppelstunde, und die Installation sollte vorab durch die Lehrkraft erfolgen
[( )] Unrealistisch, weil Klasse 7 noch nicht programmieren kann
****************************************
Schon Erwachsene brauchten im Tandem rund 40–45 Minuten für die Montage. Die Installation gehört in die Vorbereitung. Programmieren können Siebtklässler mit Blocksprachen dagegen sehr gut.
****************************************

## B3 – Open Roberta ohne Roboter erkunden

Sie brauchen dafür keinen mBot2 – nur einen Browser.

1. Öffnen Sie [lab.open-roberta.org](https://lab.open-roberta.org) und wählen Sie **„mBot 2“**.
2. Klicken Sie sich durch die Blockkategorien links (Aktion, Sensoren, Kontrolle, Logik, Mathematik …). Welche Kategorie überrascht Sie?
3. Bauen Sie das folgende Programm nach – **ohne** es auszuführen:

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Wiederhole 4 mal
      Fahre vorwärts  Tempo U/min 40  Strecke cm 30
      Drehe links     Tempo U/min 40  Grad 90
```

Welche Figur fährt der mBot2 nach einem Druck auf Taste A?

[[Quadrat]]
[[?]] Wie oft wird gefahren und gedreht, und um wie viel Grad insgesamt?
****************************************
Ein **Quadrat** mit 30 cm Seitenlänge: 4 × (Strecke + Vierteldrehung) = 360°. Die innere Schleife „Wiederhole 4 mal“ ist eine **Zählschleife** – das ist eines der Themen von Sitzung 2.
****************************************

Ändern Sie das Programm gedanklich so, dass ein **gleichseitiges Dreieck** entsteht. Um wie viel Grad muss sich der mBot2 an jeder Ecke drehen?

[[120]]
[[?]] Der Roboter dreht sich um den **Außenwinkel**, nicht um den Innenwinkel.
****************************************
**120 Grad.** Der Innenwinkel eines gleichseitigen Dreiecks beträgt 60°, der Roboter muss sich aber um den Außenwinkel 180° − 60° = 120° drehen. Diese typische Fehlvorstellung tritt auch bei Schülerinnen und Schülern auf – ein schöner Anlass für Mathematik.
****************************************

## B4 – Reflexion

Welche Erfahrung aus Sitzung 1 nehmen Sie für Ihren Unterricht mit?

[[___ ___ ___]]

Was ist noch unklar und sollte zu Beginn von Sitzung 2 aufgegriffen werden?

[[___ ___ ___]]

**Ausblick auf Sitzung 2:** Sie programmieren den mBot2 so, dass er auf seine Umwelt reagiert – mit Schleifen, Bedingungen und Sensorwerten. Ihre mBot2 sind dann schon fertig montiert und geladen.
