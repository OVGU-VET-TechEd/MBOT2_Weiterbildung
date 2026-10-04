# Sitzung 1 – Den mBot2 kennenlernen: Aufbau, EVA-Prinzip und erstes Programm

**Moderationsleitfaden für die Fortbildungsleitung** · 90 Minuten · ICT-CFT-Ebene: Wissenserwerb

Grundlage: die in der Didaktikwerkstatt Technik (SoSe 2026) erprobte Einheit „Der mBot2 – ein technisches System kennenlernen“, überarbeitet nach Erprobung, Hospitationsfeedback und Selbstreflexion der Studierenden.

---

## 1 Ziele der Sitzung

Die Teilnehmenden können …

| Nr. | Lernziel | AFB |
|---|---|---|
| LZ 1.1 | die Hauptbauteile des mBot2 benennen und ihrer Funktion zuordnen. | I |
| LZ 1.2 | das EVA-Prinzip am mBot2 erklären und auf neue Beispiele übertragen. | II |
| LZ 1.3 | den mBot2 im Tandem nach Anleitung montieren und mit einer Funktionsprüfung abnehmen. | II |
| LZ 1.4 | den mBot2 über den Open Roberta Connector verbinden und ein einfaches Programm ausführen. | II |
| LZ 1.5 | den Zeit- und Vorbereitungsaufwand für die eigene Klasse begründet einschätzen. | III |

**Kernbotschaft für die Teilnehmenden:** *Sie brauchen kein Vorwissen. Nach 90 Minuten fährt Ihr selbst gebauter Roboter mit Ihrem ersten Programm – und Sie wissen, was Ihre Klasse dafür braucht.*

## 2 Was gegenüber der Erprobung geändert wurde

| Beobachtung in der Erprobung / im Feedback | Änderung |
|---|---|
| Arbeitsblatt war vollständig ausgefüllt – die Teilnehmenden mussten nichts tun | Zuordnungsaufgabe mit Wortspeicher; Lösung erst im Lösungsheft |
| Software war mBlock; Open Roberta wurde im Feedback ausdrücklich gewünscht | durchgängig Open Roberta Lab; Connector und Token werden live gezeigt |
| Installation kam im Konzept nicht vor | Technik-Check im Selbstlernmodul 0, Phase 4 thematisiert „Weg 1 / Weg 2“ |
| Schraubendreher-Tipp „ging auf der Folie unter“ | 1-minütige Live-Demo unter der Dokumentenkamera vor Montagebeginn |
| Zusammenbau dauerte im Tandem ca. 45 Min. | 38 Min. Montagezeit + Plan B mit vormontierten Geräten ab Minute 55 |
| Ampel-Ergebnis wurde „nirgends aufgenommen“ | Ampel wird auf Flipchart gezählt, am Ende wiederholt und verglichen |
| Aufgaben wurden alle gemeinsam gelöst; Wissensträger dominierten | Tandem-Rollen mit festem Rollenwechsel; Regel „Expert:innen erklären, fassen aber nicht an“ |
| Code-Erklärung „wäre am Beamer besser“ | erstes Programm wird am Beamer Block für Block live gebaut |
| Wunsch nach garantiert funktionierenden Beispiellösungen | Lösungsheft mit Musterprogrammen und Testprotokoll |
| Erprobung mit Studierenden (5–15) | Zielgruppe jetzt Lehrkräfte; jede Phase endet mit der Doppeldecker-Frage „Was heißt das für meine Klasse?“ |

## 3 Vorbereitung

Siehe `00_Kurskonzept/03_Technik_Vorbereitung.md`. Zusätzlich für diese Sitzung:

- je Tandem: 1 originalverpackter mBot2-Bausatz, 1 Laptop mit Connector, 1 Arbeitsheft je Person
- 2–3 **vormontierte** mBot2 (Plan B) und 1 Demo-mBot2 für die Leitung
- Dokumentenkamera, Beamer, Flipchart mit vorbereiteter Ampel-Tabelle
- Ampelkarten (grün/gelb/rot) für alle
- Moodle-Kurs mit Selbstlernmodul 1 freigeschaltet

## 4 Verlaufsplan

| Zeit | Phase | Inhalt und Handlung der Leitung | Sozialform / Medien | LZ |
|---|---|---|---|---|
| 0–10 | **Ankommen und Aktivieren** | Begrüßung, Ziele (Folie 2–3). Ampel-Abfrage „Wie vertraut ist Ihnen der mBot2?“ – Ergebnis als Strichliste auf dem Flipchart festhalten. Tandems bilden: möglichst grün/gelb mit rot. Leitfrage stellen: *Was muss ein Roboter besitzen, um wahrnehmen, entscheiden und handeln zu können?* | Plenum, Ampelkarten, Flipchart | – |
| 10–16 | **Input: EVA-Prinzip** | Antworten auf die Leitfrage sammeln und in die drei Spalten Eingabe – Verarbeitung – Ausgabe sortieren. Am Demo-mBot2 unter der Dokumentenkamera zeigen: Wo nimmt er wahr? Wo entscheidet er? Wo handelt er? | Lehrvortrag mit Demo, Folie 4–5 | 1.2 |
| 16–24 | **Erarbeitung: Bauteile** | Tandems öffnen den Bausatz, legen die Hauptbauteile aus und bearbeiten Arbeitsheft Aufgabe 1 (Zuordnung mit Wortspeicher). 2 Min. Plenumskontrolle mit Folie 6. | Tandem, Arbeitsheft | 1.1, 1.2 |
| 24–26 | **Live-Demo Montage** | Schraubendreher-Bit umstecken zeigen. Rollen erklären: *Monteur:in* schraubt, *Navigator:in* liest die Anleitung vor und prüft. Rollenwechsel nach Schritt 5. Regel für Erfahrene: erklären, nicht anfassen. | Dokumentenkamera, Folie 7–8 | 1.3 |
| 26–62 | **Montage im Tandem** | Leitung geht herum. **Zwischencheck nach Schritt 5**: richtige Kabel (10 cm) am Quad-RGB-Sensor? **Ab Min. 55**: Tandems, die noch nicht bei Schritt 7 sind, erhalten einen vormontierten mBot2 und bauen ihren eigenen in der Selbstlernphase oder in S2 fertig. Schnelle Tandems: Arbeitsheft Aufgabe 2 (EVA im Alltag) und Expert:innen-Karte. Abschluss: Funktionsprüfung (Einschalten, CyberPi-Display leuchtet, Räder drehen frei). | Tandem, Originalanleitung, Arbeitsheft Aufg. 3 | 1.3 |
| 62–69 | **Demo: Open Roberta** | Am Beamer: Connector starten → Verbinden → Token → Lab: „mBot 2“ wählen → Roboter → Verbinden. Startblock zeigen: **Die Endlosschleife ist immer da.** Programm „Fahren“ Block für Block bauen, Vorhersage einholen („Wo steht er am Ende?“), dann ausführen. Muster „Warte bis Taste A gedrückt?“ einführen. | Lehrvortrag am Beamer, Folie 9–11 | 1.4 |
| 69–80 | **Erprobung: erste Programme** | Tandems verbinden ihren mBot2. Pflicht: Programm „Fahren“ (mit Vorhersage). Danach Wahl: Licht, Klang oder Text. Zusatz: „Begrüßungsroboter“. Fahrtests auf dem Boden. Leitung hilft bei Verbindungsproblemen (Plan B, Technik-Vorbereitung Abschnitt 4). | Tandem, Arbeitsheft Aufg. 4–5 | 1.4 |
| 80–86 | **Sicherung und Doppeldecker-Reflexion** | Blitzlicht: je Tandem ein Satz zu „Was war schwieriger/leichter als erwartet?“ Dann Leitfrage: *Was bedeutet das für Ihre Klasse?* – drei Impulse (Folie 12, Arbeitsheft Aufg. 6). Ampel erneut, Ergebnis neben das erste auf das Flipchart. | Plenum, Ampel, Flipchart | 1.5 |
| 86–90 | **Ausblick und Abschluss** | Ausblick S2. Selbstlernmodul 1 (ca. 30 Min.): Wissenscheck + Open Roberta ohne Roboter erkunden. **mBot2 bleiben montiert**, werden beschriftet und an die Ladestation gegeben. | Plenum, Folie 13 | – |

**Zeitreserve:** Die Phase 80–86 kann bei Verzug auf 3 Minuten gekürzt werden (nur Ampel + ein Reflexionsimpuls). Nicht kürzen: Live-Demo Open Roberta – sie verhindert, dass später jedes Tandem einzeln betreut werden muss.

## 5 Differenzierung

| Ausgangslage | Maßnahme |
|---|---|
| Neu im Thema (Ampel rot) | Tandem mit erfahrener Person; Navigator:in-Rolle zuerst (lesen, prüfen, verstehen), dann Monteur:in |
| Etwas Erfahrung (gelb) | Standardablauf; bei Zeit Aufgabe 2 und Zusatzaufgabe „Begrüßungsroboter“ |
| Erfahren (grün) | Expert:innen-Karte: Hilfe geben nur durch Fragen und Zeigen in der Anleitung; Zusatz: Liste typischer Montagefehler für die eigene Klasse anlegen |

## 6 Typische Stolperstellen

| Stolperstelle | Hinweis |
|---|---|
| Falsches Kabel am Quad-RGB-Sensor | 10-cm-Kabel verwenden, nicht 20 cm (Schritt 5). Beim Zwischencheck aktiv nachfragen. |
| Motoren vertauscht oder lose | linker Motor → **EM1**, rechter Motor → **EM2**. Vertauschte Kabel führen zu falscher Fahr- oder Drehrichtung; ein loses Kabel lässt den mBot2 im Kreis fahren. |
| Schrauben vertauscht | Schraubenlängen stehen in der Anleitung (M4×8, M2,5×12, M4×14, M4×25). Schrauben vorher nach Größe sortieren lassen. |
| Programm läuft endlos | gewollt: Startblock = Endlosschleife. Mit „Warte bis Taste A gedrückt?“ steuern. |
| Roboter fährt vom Tisch | Fahrtests nur auf dem Boden. |
| Ladekabel statt Datenkabel | Original-Kabel aus dem Bausatz verwenden. |

## 7 Diskussionsimpulse (für Phase 80–86 oder als Vertiefung im Moodle-Forum)

1. **Zusammenbau im Unterricht – ja oder nein?** Pro: Systemverständnis, Motivation, Bezug zum Technikunterricht. Contra: etwa eine Doppelstunde Zeit, Teileverlust, Heterogenität im Tempo. Alternative: Ein Expert:innen-Team baut für die Klasse, die anderen erarbeiten parallel die Bauteil-Steckbriefe.
2. **Heterogenität beim Bauen.** Ein Team ist nach 20 Minuten fertig, ein anderes steckt bei Schritt 2. Welche Aufgaben, Rollen oder Hilfen halten Sie bereit?
3. **Wissensträger in der Gruppe.** Wie verhindern Sie, dass erfahrene Schülerinnen und Schüler alles allein machen? (Rollen, Rollenwechsel, „erklären statt übernehmen“)
4. **Wer richtet die Technik ein?** Weg 1: Die Lehrkraft installiert und testet vorab (empfohlen). Weg 2: Die Installation wird Teil der Stunde – dann halbiert sich die Zeit für die eigentlichen Aufgaben. Was ist an Ihrer Schule realistisch?

## 8 Material dieser Sitzung

- `S1_Folien.pptx` – Präsentation mit Moderationsnotizen
- `S1_Arbeitsheft.md` / `.docx` – Arbeitsheft der Teilnehmenden
- `S1_Loesungen.md` / `.docx` – Lösungen, Musterprogramme, Testprotokoll
- `S1_Selbstlernmodul.md` – LiaScript: Vorbereitung (Selbstlernphase 0) und Wissenscheck (Selbstlernphase 1)
- `S1_Unterrichtsmaterial_Klasse7.md` / `.docx` – Arbeitsblatt und Rollenkarten für die eigene Klasse
