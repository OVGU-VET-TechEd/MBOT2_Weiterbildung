# Lösungen Sitzung 1 – Den mBot2 kennenlernen

**Für die Fortbildungsleitung** · Erwartungshorizont, Musterprogramme und Testprotokoll

> **Hinweis zur Notation.** Die Musterprogramme sind in der Blocksprache NEPO von Open Roberta geschrieben, so wie die Blöcke im Lab beschriftet sind (System „mBot 2“, Stand Oktober 2026). Einrückung bedeutet „liegt innerhalb von“. Vor dem ersten Einsatz jedes Programm einmal am Gerät testen und im Testprotokoll (Abschnitt 5) abzeichnen – erst dann gilt es als „garantiert funktionierende Beispiellösung“. Falls die Auswahlliste eines Blocks anders beschriftet ist (z. B. keine Option „alle“ bei den RGB-LEDs), den Block für die einzelnen LEDs wiederholen und die Anpassung im Testprotokoll notieren.

---

## 1 Aufgabe 1 – Bauteile zuordnen

| Bauteil | EVA-Rolle | Funktion | Alltagsvergleich (Beispiel) |
|---|---|---|---|
| CyberPi | **Verarbeitung** (enthält zusätzlich Sensoren = E und Display/LED/Lautsprecher = A) | (b) | Gehirn und Gesicht |
| mBot2-Shield (mit Akku) | **Energie** und **Verbindung** | (e) | Verteilerzentrale, Rückgrat |
| Ultraschallsensor 2 | **Eingabe** | (a) | Fledermaus, Einparkhilfe |
| Quad-RGB-Sensor | **Eingabe** | (c) | Blick nach unten |
| Encoder-Motoren (2×) | **Ausgabe** (Encoder: zusätzlich Eingabe) | (d) | Beine |
| Display, RGB-LEDs, Lautsprecher | **Ausgabe** | (h) | Stimme und Mimik |
| Aluminium-Chassis | **Struktur** | (f) | Skelett |
| Kabel | **Verbindung** | (g) | Nervenbahnen |

**Denkfrage – Encoder-Motor.** Der Motor ist Aktor (Ausgabe), weil er das Rad antreibt. Der eingebaute Encoder misst gleichzeitig, wie weit sich das Rad gedreht hat, und meldet das an den CyberPi zurück (Eingabe). Erst dadurch kann der mBot2 „20 cm“ oder „90 Grad“ fahren: Er vergleicht den gemessenen Drehwinkel mit dem Sollwert und stoppt dann. Das ist ein **Regelkreis** – ein guter Anknüpfungspunkt für Technik und Physik.

**Erwartungshorizont LZ 1.1/1.2:** Erreicht, wenn mindestens 6 von 8 Zuordnungen stimmen und die Sonderrolle des CyberPi (Verarbeitung mit eingebauten Ein- und Ausgabeelementen) erkannt wird.

## 2 Aufgabe 2 – EVA im Alltag

| System | Eingabe | Verarbeitung | Ausgabe |
|---|---|---|---|
| Fußgängerampel mit Taster | Taster, ggf. Induktionsschleife/Kamera für Autos | Steuergerät mit Ampelprogramm (Zeiten, Reihenfolge) | Lampen (rot/gelb/grün), Signalton für Blinde |
| Saugroboter | Stoßsensor, Abgrundsensor, Abstandssensor, Kamera/Laser, Akkustand | Mikrocontroller mit Navigationsprogramm, Karte | Antriebsmotoren, Bürstenmotor, Saugmotor, Statuslicht, Ton |

**Beispiele aus Fächern:** Physik – Temperaturregelung im Wasserkocher; Biologie – Reflexbogen (Rezeptor – Rückenmark – Muskel) als Analogie (Grenzen des Modells besprechen); Mathematik – Taschenrechner.

## 3 Aufgabe 3 – Zusammenbau

Funktionsprüfung bestanden, wenn: Display leuchtet nach dem Einschalten, Räder drehen frei, Ultraschallsensor-LEDs leuchten. Die eigentliche Fahrprüfung erfolgt mit dem Programm „Fahren“ (Aufgabe 5a).

**Häufige Fehler:** 20-cm- statt 10-cm-Kabel am Quad-RGB-Sensor; Motoren an EM1/EM2 vertauscht (falsche Fahr- oder Drehrichtung) oder ein Motorkabel lose (mBot2 fährt im Kreis); Schrauben M4×14 und M4×25 verwechselt.

## 4 Aufgabe 5 – Musterprogramme

### 4.1 Testprogramm für den Verbindungscheck (Leitung, vor der Sitzung)

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Schalte RGB LED an  alle  Farbe grün
    Spiele Note  Viertel  c'
    Zeige Text  "OK"  in Spalte 0  in Zeile 0
    Warte ms 1000
    Schalte RGB LED aus  alle
    Lösche Bildschirm
```

### 4.2 Aufgabe 5a – Fahren

Programm wie im Arbeitsheft.

**Lösung der Vorhersage:** Der mBot2 fährt 20 cm geradeaus, dreht sich auf der Stelle um 180° und fährt 10 cm zurück. Er steht am Ende **10 cm vor dem Startpunkt** (in ursprünglicher Fahrtrichtung) und **schaut zum Startpunkt zurück**. Danach wartet er wegen der Endlosschleife auf den nächsten Druck auf Taste A.

**Typische Abweichungen:** Drehung nicht genau 180° (Reifenschlupf, Untergrund, Teppich), Endpunkt seitlich versetzt. Diese Abweichungen nicht „wegerklären“, sondern als Vorgriff auf Sitzung 2 nutzen: *Modell und Wirklichkeit*.

### 4.3 Aufgabe 5b – Licht

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Schalte RGB LED an  1  Farbe rot
    Schalte RGB LED an  2  Farbe grün
    Schalte RGB LED an  3  Farbe blau
    Warte ms 3000
    Schalte RGB LED aus  alle
```

### 4.4 Aufgabe 5b – Klang

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Spiele Note  Halbe  c'
    Spiele Note  Halbe  e'
    Spiele Note  Halbe  g'
```

### 4.5 Aufgabe 5b – Text

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Lösche Bildschirm
    Zeige Text  "Hallo"  in Spalte 0  in Zeile 0
    Warte ms 2000
    Zeige Text in neuer Zeile  "Wie geht es dir?"
```

### 4.6 Aufgabe 5c – Begrüßungsroboter

```
Start
  Wiederhole unendlich oft
    Warte bis  Taste A gedrückt?
    Fahre vorwärts  Tempo U/min 40  Strecke cm 30
    Schalte RGB LED an  alle  Farbe grün
    Spiele Note  Viertel  g'
    Lösche Bildschirm
    Zeige Text  "Hallo!"  in Spalte 0  in Zeile 0
    Warte ms 2000
    Schalte RGB LED aus  alle
```

## 5 Testprotokoll der Leitung

Jedes Musterprogramm vor der ersten Durchführung einmal am Gerät testen.

| Programm | getestet am | mBot2 Nr. | Ergebnis / Anpassung | Kürzel |
|---|---|---|---|---|
| 4.1 Verbindungscheck | | | | |
| 4.2 Fahren | | | | |
| 4.3 Licht | | | | |
| 4.4 Klang | | | | |
| 4.5 Text | | | | |
| 4.6 Begrüßungsroboter | | | | |

## 6 Aufgabe 6 – Erwartungshorizont der Reflexion (LZ 1.5)

Eine Reflexion erfüllt LZ 1.5, wenn sie mindestens zwei der folgenden Punkte **begründet** anspricht:

- **Zeitbedarf Montage:** etwa eine Doppelstunde im Zweier- oder Dreierteam, abhängig von Erfahrung; Entscheidung, ob die Montage Lernziel ist (Technik) oder ausgelagert wird.
- **Technische Vorbereitung:** Connector-Installation und Rechte, Ladezustand, Verbindungstest jedes Geräts, Plan B.
- **Heterogenität:** Rollen, Rollenwechsel, Zusatzaufgaben, Expert:innen-Regel.
- **Methodentransfer:** z. B. Vorhersage vor dem Test, Ampel zur Selbsteinschätzung mit sichtbarer Auswertung.

Nicht ausreichend: rein affektive Aussagen („hat Spaß gemacht“) ohne Konsequenz für die Planung.
