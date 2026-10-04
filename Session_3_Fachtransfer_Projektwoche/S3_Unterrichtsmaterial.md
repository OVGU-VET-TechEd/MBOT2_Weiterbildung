# Unterrichtsmaterial – Projektwoche mit dem mBot2

**Zur Sitzung 3 der Fortbildungsreihe „Der mBot2 im Fachunterricht“**

Das Paket enthält für jeden Projekttag ein Schülerblatt sowie das Projekttagebuch und einen Beobachtungsbogen für Lehrkräfte. In Sitzung 3 erproben die Fachgruppen die zugehörigen Aufgaben selbst und passen die Blätter an ihren Tagesplan an.

---

## Teil A – Hinweise für die Lehrkräfte

**Ausgearbeitet für Klasse 7.** So passen Sie das Paket an andere Jahrgangsstufen an (ausführlich in `00_Kurskonzept/07_Anpassung_Jahrgangsstufen.md`):

| Tag | Klasse 5/6 | Klasse 9/10 | Sekundarstufe II |
|---|---|---|---|
| Technik | Funktionsprüfung mit Checkliste, ein Fehler mit Hilfekarten | mehrere Fehler, Fehlerbaum | Fehleranalyse mit Messwerten |
| Mathematik | Wege auf dem Raster zählen und fahren | Wege mit Diagonalen (Pythagoras) | kürzeste Wege als Graphproblem |
| Physik | hell/dunkel und nah/fern untersuchen | Geschwindigkeit aus der Steigung, Messunsicherheit | Kennlinien, Fehlerrechnung |
| Informatik | Programm mit einer Bedingung | verschachtelte Bedingungen, Ablaufdiagramm | Regelalgorithmus, Python-Code, Testfälle |
| Präsentation | Vorführung mit Erklärkarte | Science Fair mit Poster | Fachvortrag mit Diskussion |

| Merkmal | Hinweis |
|---|---|
| Klassenstufe | Beispiel: 7; Varianten siehe oben |
| Teams | 3–4 Schülerinnen und Schüler, Rollen **Bedienung – Beobachtung – Dokumentation**, täglicher Wechsel |
| Verbindende Strukturen | Tages-Check-in (10 Min.): Was haben wir gestern geschafft? Was übergibt uns der Vortag? · Projekttagebuch (10 Min. am Tagesende) · Expert:innen-System: Wer fertig ist, hilft durch Fragen, nicht durch Übernehmen |
| Kompetenzen | S1–S7 aus dem Kompetenzmodell; Schwerpunkt je Tag siehe Wochenplan |
| Leistungsbewertung | Projekttagebuch, Tagesprotokolle, Beobachtungsbogen, Präsentation am Freitag |

### Diskussionsfragen für die Fortbildung

1. **Rollenwechsel:** Wie stellen Sie sicher, dass jede Schülerin und jeder Schüler im Lauf der Woche jede Rolle einmal hatte?
2. **Projekttagebuch:** Zehn Minuten täglich – zu viel, zu wenig? Wie nutzen Sie die Einträge für die Bewertung, ohne das Schreiben zur Pflichtübung zu machen?
3. **Wenn ein Tag ausfällt:** Was tun Sie, wenn die Übergabe eines Tages fehlt (Krankheit, Technikausfall)? Welche Ersatzmaterialien halten Sie bereit?
4. **Freitag:** Wer ist das Publikum – andere Klassen, Eltern, Schulleitung? Was ändert das an der Vorbereitung?

<!-- pagebreak -->

## Teil B – Unser Wochenplan

| Tag | Fach | Heute können wir am Ende … | erledigt |
|---|---|---|---|
| Montag | Technik | … erklären, wie der mBot2 aufgebaut ist, und einen Fehler finden und beheben. | ☐ |
| Dienstag | Mathematik | … Fahrwege berechnen, vergleichen und den kürzesten begründen. | ☐ |
| Mittwoch | Physik | … mit Sensoren messen, Messwerte darstellen und Abweichungen erklären. | ☐ |
| Donnerstag | Informatik | … ein eigenes Programm mit Schleife und Bedingung schreiben. | ☐ |
| Freitag | Präsentation | … anderen zeigen und erklären, was wir gelernt haben. | ☐ |

Unser Team: ________________________________________   mBot2 Nr.: ______

<!-- pagebreak -->

## Teil C – Montag: Fehlerprotokoll

**So sucht ein Profi einen Fehler:** Beobachten → Vermuten → Testen → **eine** Sache ändern → Kontrolltest.

So soll der mBot2 funktionieren (Soll): __________________________________________

Das beobachten wir (Ist): __________________________________________

| Versuch | Unsere Vermutung | Unser Test | Ergebnis |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**Die Ursache war:** ______________________________ **Kontrolltest bestanden:** ☐

<!-- pagebreak -->

## Teil D – Dienstag: Fahrwege im Raster

Ein Kästchen = 20 cm. Start S (0|0), Ziel Z (3|2). Der mBot2 schaut am Start nach rechts (x-Richtung).

**1. Zeichnet Weg A** über (3|0) und **Weg B** über (0|3) und (3|3) in ein Koordinatensystem auf Karopapier.

**2. Berechnet:**

| | Teilstrecken (cm) | Drehungen (Richtung, Grad) | Gesamt (cm) |
|---|---|---|---|
| Weg A | | | |
| Weg B | | | |

**3. Begründet:** Welcher Weg ist kürzer? Kann es einen noch kürzeren Weg geben?

[[LINIEN:3]]

**4. Testet Weg A mit dem mBot2.** Wo kommt er an? Abweichung vom Ziel: ______ cm
War es ein **Planungsfehler** oder eine **Fahrungenauigkeit**? ______________________________

<!-- pagebreak -->

## Teil E – Mittwoch: Messprotokoll

**Versuch:** ☐ Ultraschall ☐ Reflexion ☐ Bewegung (Weg-Zeit)

**Unsere Hypothese (Ich vermute, dass …):**

[[LINIEN:2]]

| Messung | eingestellt / Maßband | Messwert mBot2 bzw. Zeit | Abweichung |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

**Diagramm** (bei Bewegung: Zeit t waagerecht, Weg s senkrecht) – auf Millimeterpapier zeichnen und einkleben.

**Stimmt unsere Hypothese? Woher kommen die Abweichungen?**

[[LINIEN:3]]

**Für morgen (Informatik) übergeben wir:** Schwellenwert Abstand: ______ cm · Schwellenwert hell/dunkel: ______ %

<!-- pagebreak -->

## Teil F – Donnerstag: Unser Steuerprogramm

**Aufgabe:** Der mBot2 folgt einer Linie und hält vor Hindernissen an. Start mit Taste A, Stopp mit Taste B.

**1. Ablaufplan** – ergänzt die Lücken:

```
Start → warte auf Taste A
  WIEDERHOLE bis Taste B gedrückt:
     WENN Abstand < ______ cm
        DANN  ______________________________
        SONST WENN Boden dunkel (< ______ %)
                 DANN lenke ______________
                 SONST lenke ______________
→ Stopp
```

**2. Unsere Testfahrten**

| Test | Was haben wir geändert? | Was ist passiert? |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

**3. Warum muss die Hindernis-Bedingung zuerst geprüft werden?**

[[LINIEN:2]]

<!-- pagebreak -->

## Teil G – Projekttagebuch (täglich 10 Minuten)

| Tag | Das habe ich heute gelernt | Das war schwierig – so haben wir es gelöst | Meine Rolle heute |
|---|---|---|---|
| Mo | | | |
| Di | | | |
| Mi | | | |
| Do | | | |
| Fr | | | |

**Am Freitag:** Was war für mich das Wichtigste in dieser Woche?

[[LINIEN:3]]

<!-- pagebreak -->

## Teil H – Beobachtungsbogen für Lehrkräfte

Team: ______  Tag: ______  Beobachtet von: ______

| Kriterium | ++ | + | o | – | Notiz |
|---|---|---|---|---|---|
| geht bei Problemen systematisch vor (vermuten, testen, eine Änderung) | | | | | |
| begründet Entscheidungen fachlich (Rechnung, Messwert, Schwellenwert) | | | | | |
| dokumentiert nachvollziehbar (Protokoll, Tagebuch) | | | | | |
| arbeitet in der Rolle und unterstützt das Team | | | | | |
| erklärt Ergebnisse verständlich (Fachbegriffe) | | | | | |

**Besonderheiten / Förderbedarf:**

[[LINIEN:3]]
