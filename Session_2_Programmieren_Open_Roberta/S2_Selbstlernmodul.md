<!--
author:   ITVET – Otto-von-Guericke-Universität Magdeburg
email:    itvet@ovgu.de
version:  1.0.0
language: de
narrator: Deutsch Female
comment:  Selbstlernmodul zu Sitzung 2 der Fortbildungsreihe „Der mBot2 im Fachunterricht“:
          Wissenscheck (Schleife, Bedingung, Sensoren, Debugging) und Vorbereitung auf Sitzung 3.
-->

# Selbstlernmodul 2 – Programmieren mit Open Roberta

**Fortbildungsreihe „Der mBot2 im Fachunterricht“** · nach Sitzung 2 · ca. 30 Minuten

| Teil | Dauer | Inhalt |
|---|---|---|
| **A – Wissenscheck** | 15 Min. | 11 Fragen mit Rückmeldung zu LZ 2.1 – 2.5 |
| **B – Vorbereitung auf Sitzung 3** | 15 Min. | Fachgruppe wählen, Lehrplanbezug suchen, Projektwoche kennenlernen |

## A1 – Das Wichtigste in Kürze

| Begriff | Bedeutung | NEPO-Block |
|---|---|---|
| Sequenz | Anweisungen nacheinander | Blöcke untereinander |
| Zählschleife | feste Anzahl Wiederholungen | Wiederhole *n* mal |
| bedingte Schleife | wiederholen, bis/solange eine Bedingung gilt | Wiederhole bis … / solange … |
| Endlosschleife | immer wieder (beim mBot2 fest im Startblock) | Wiederhole unendlich oft |
| Verzweigung | je nach Bedingung das eine oder das andere | Wenn … mache … sonst … |
| Schwellenwert | Grenzwert, ab dem eine Bedingung „wahr“ wird | Vergleiche (<, >, =) |

**PRIMM:** Predict – Run – Investigate – Modify – Make. Erst vorhersagen, dann testen, dann untersuchen, ändern und selbst entwickeln.

**Debugging-Regel:** eine Änderung → testen → notieren.

## A2 – Wissenscheck

**Frage 1** · LZ 2.1
Welche Struktur liegt bei „Wiederhole 4 mal [Fahre 30 cm; Drehe links 90 Grad]“ vor?

[( )] Verzweigung
[(X)] Zählschleife
[( )] Endlosschleife
[( )] bedingte Schleife
****************************************
Eine **Zählschleife** wiederholt eine feste Anzahl von Malen.
****************************************

**Frage 2** · LZ 2.1 / 2.4
Ein Programm lautet: *Wiederhole unendlich oft [ Wenn Abstand < 15 → Stoppe ]*. Der mBot2 bewegt sich nicht. Warum?

[( )] Der Schwellenwert 15 ist zu klein.
[( )] Der Ultraschallsensor ist nicht angeschlossen.
[(X)] Es gibt keinen Fahrbefehl – im Programm steht nur, wann gestoppt werden soll.
[( )] Die Endlosschleife verhindert jede Bewegung.
****************************************
Der „sonst“-Zweig mit „Fahre vorwärts …“ fehlt. Ein Klassiker: Die Bedingung beschreibt nur die Ausnahme, nicht den Normalfall.
****************************************

**Frage 3** · LZ 2.2 (Vorhersage)
Was fährt der mBot2 bei *Wiederhole 3 mal [ Fahre 20 cm; Drehe links 120 Grad ]*?

[( )] Eine gerade Strecke von 60 cm
[(X)] Ein gleichseitiges Dreieck mit 20 cm Seitenlänge
[( )] Ein Dreieck mit spitzen Winkeln von 120°
[( )] Einen Halbkreis
****************************************
3 × 120° = 360°: Der Roboter dreht sich um die **Außenwinkel**; die Innenwinkel des Dreiecks betragen 60°.
****************************************

**Frage 4** · LZ 2.2
Warum beginnt PRIMM mit der **Vorhersage**, bevor das Programm läuft?

[( )] Damit die Lernenden Zeit haben, den Roboter zu verbinden
[(X)] Weil die Vorhersage das eigene Verständnis sichtbar macht – Abweichungen zeigen, wo das mentale Modell nicht stimmt
[( )] Weil es für den mBot2 keinen Simulator gibt und man sonst nichts tun könnte
[( )] Weil Vorhersagen benotet werden können
****************************************
Die Vorhersage zwingt zum **Lesen und Verstehen** von Code, bevor man ihn ausprobiert. Ohne Vorhersage wird „blind“ ausprobiert. Der fehlende Simulator ist ein Anlass, aber nicht der Grund.
****************************************

**Frage 5** · LZ 2.3
Der Quad-RGB-Sensor misst auf Schwarz 12 % und auf Weiß 78 % Helligkeit. Welcher Schwellenwert ist für den Linienfolger am besten begründet?

[( )] 12
[(X)] 45
[( )] 78
[( )] 100
****************************************
Der **Mittelwert** (12 + 78) ÷ 2 = 45 hat zu beiden Messwerten den größten Abstand. Kleine Schwankungen führen dann nicht zu Fehlentscheidungen.
****************************************

**Frage 6** · LZ 2.3
Warum sollten Schwellenwerte im Raum gemessen statt aus dem Arbeitsblatt übernommen werden? (Mehrere Antworten möglich)

[[X]] Raumlicht und Untergrund beeinflussen die Messwerte.
[[X]] Verschiedene Klebebänder und Papiere reflektieren unterschiedlich.
[[ ]] Weil jeder mBot2 eine andere Programmiersprache verwendet
[[X]] Weil die Lernenden so erleben, dass Entscheidungen auf Daten beruhen
****************************************
Messen vor Entscheiden ist zugleich ein **Lernziel**: Der Schwellenwert ist eine begründete Entscheidung auf Grundlage von Daten.
****************************************

**Frage 7** · LZ 2.4
Ihr Linienfolger verliert in engen Kurven die Linie. Was ist der beste nächste Schritt?

[( )] Tempo, Schwellenwert und Lenkung gleichzeitig ändern, um Zeit zu sparen
[(X)] Nur das Tempo verringern, testen und das Ergebnis notieren
[( )] Das Programm löschen und neu beginnen
[( )] Einen anderen mBot2 nehmen
****************************************
**Eine Änderung pro Test** – sonst weiß man nicht, welche Änderung gewirkt hat. Diese Debugging-Regel ist auch für Schülerinnen und Schüler die wichtigste.
****************************************

**Frage 8** · LZ 2.3 / 2.4
Der Schwellenwert im Programm „Hindernis“ ist 15 cm, bei Tempo 100 U/min steht der mBot2 aber erst 9 cm vor der Wand. Welche Erklärung ist am besten?

[( )] Der Ultraschallsensor ist defekt.
[(X)] Zwischen Messung, Entscheidung und Stillstand fährt der Roboter weiter (Reaktions- und Bremsweg).
[( )] Der Wert 15 wird intern in Zoll umgerechnet.
[( )] Die Endlosschleife ist zu langsam programmiert.
****************************************
Wie im Straßenverkehr: **Reaktionsweg + Bremsweg**. Je höher das Tempo, desto größer die Differenz. Ein schöner Anlass für Physik.
****************************************

**Frage 9** · LZ 2.5
Ein Schüler ohne Programmiererfahrung möchte unbedingt mit Pfad C beginnen, „weil das die schwerste Aufgabe ist“. Was ist didaktisch am sinnvollsten?

[( )] Den Wunsch ablehnen: Pfade werden zugewiesen.
[( )] Den Wunsch erfüllen und keine Hilfe anbieten, damit er die Folgen erlebt
[(X)] Auf die Empfehlung verweisen, mit der Pflichtaufgabe von Pfad A oder B beginnen lassen und den Wechsel nach oben ausdrücklich anbieten
[( )] Pfade abschaffen, damit sich niemand vergleicht
****************************************
**Empfehlung + Wechselrecht** verbindet Orientierung mit Selbstbestimmung. Ein erfolgreicher Einstieg hält die Motivation hoch, der Weg „nach oben“ bleibt offen.
****************************************

**Frage 10** · LZ 2.1 (Einordnung)
Ist der Linienfolger aus Pfad B ein lernendes KI-System?

[( )] Ja, weil er sich selbstständig an die Linie anpasst
[(X)] Nein, er folgt festen, von Menschen programmierten Regeln; er lernt nichts aus Daten
[( )] Ja, weil er Sensoren benutzt
[( )] Nein, weil er keinen Internetzugang hat
****************************************
Er ist **regelbasiert**. „Reagiert auf die Umwelt“ ist nicht dasselbe wie „lernt“. Diese Unterscheidung hilft Schülerinnen und Schülern, über KI differenziert zu sprechen.
****************************************

**Frage 11** · LZ 2.2
Um wie viel Grad muss sich der mBot2 an jeder Ecke drehen, um ein regelmäßiges **Fünfeck** zu fahren?

[[72]]
[[?]] Insgesamt dreht er sich einmal ganz herum.
****************************************
360° ÷ 5 = **72°**.
****************************************

## B1 – Was Sie in Sitzung 3 erwartet

In Sitzung 3 planen Sie in **Fachgruppen** eine mBot2-Projektwoche für eine **Klasse 7**. Jede Gruppe erprobt zuerst selbst eine Aufgabe am mBot2 (30 Min.) und entwickelt daraus einen Tagesplan (20 Min.). Die Tage bauen aufeinander auf:

| Tag | Fach | Tagesziel der Schülerinnen und Schüler |
|---|---|---|
| Montag | Technik | mBot2 geprüft; Fehler systematisch gefunden und behoben |
| Dienstag | Mathematik | Fahrwege berechnet, verglichen und mit dem mBot2 überprüft |
| Mittwoch | Physik | Messungen mit Sensoren durchgeführt und ausgewertet |
| Donnerstag | Informatik | eigenes Steuerprogramm mit Schleife und Bedingung entwickelt |
| Freitag | Präsentation | Ergebnisse vorgestellt (schulindividuell) |

**Warum Klasse 7 für alle?** In der Erprobung planten die Gruppen für unterschiedliche Klassenstufen. Die Planungen waren dadurch kaum vergleichbar, und die Übergaben zwischen den Tagen passten nicht. Eine gemeinsame Referenz-Lerngruppe löst das. Die Übertragung auf Ihre eigene Lerngruppe folgt im Praxisauftrag.

## B2 – Ihre Wahl

In welcher Fachgruppe möchten Sie in Sitzung 3 arbeiten?

[(tec)] Montag – Technik: Funktionsprüfung und Fehlersuche
[(mat)] Dienstag – Mathematik: Fahrwege planen und vergleichen
[(phy)] Mittwoch – Physik: Messen mit Sensoren
[(inf)] Donnerstag – Informatik: Steuerprogramm mit Schleife und Bedingung
[(off)] Offene Gruppe: eigenes Fach (z. B. Deutsch, Ethik, Biologie, Geografie)

Suchen Sie im **Fachlehrplan Ihres Fachs für Sachsen-Anhalt** (Klassenstufe 7 bzw. Doppeljahrgang 7/8) eine Kompetenz oder ein Thema, an das der mBot2 anknüpfen kann. Notieren Sie die Fundstelle und warum sie passt.

[[___ ___ ___]]

Haben Sie in Pfad C die Aufgabe C3 bearbeitet? Dann bringen Sie Ihren Entwurf mit – er ist ein guter Ausgangspunkt.

## B3 – Reflexion

Welche Programmieraufgabe aus Sitzung 2 würden Sie in Ihrer Klasse als Erstes einsetzen – und was würden Sie daran ändern?

[[___ ___ ___]]
