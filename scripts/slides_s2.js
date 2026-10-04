const { build, C } = require("./slidekit");

const meta = { title: "Sitzung 2 – Programmieren mit Open Roberta", footer: "Der mBot2 im Fachunterricht · Sitzung 2 · CC BY 4.0" };

const slides = [
  {
    type: "cover", number: "2", kicker: "FORTBILDUNGSREIHE · DER mBOT2 IM FACHUNTERRICHT",
    title: "Programmieren mit Open Roberta", subtitle: "Sequenz, Schleife, Bedingung und Sensoren",
    chips: ["Sitzung 2 von 3", "90 Minuten", "Lernpfade A · B · C"],
    notes: "Diese Folie läuft beim Ankommen. Parallel die nächste Folie zeigen: Ankommen = Verbinden.",
  },
  {
    type: "grid", title: "Ankommen = Verbinden", cols: 3, size: 15,
    lead: "Bitte verbinden Sie Ihren mBot2 schon jetzt – dann starten wir alle gleichzeitig.",
    items: [
      { badge: 1, head: "Einschalten, anschließen", body: "USB-C-Datenkabel an den Laptop" },
      { badge: 2, head: "Connector starten", body: "„Verbinden“ klicken, Token notieren" },
      { badge: 3, head: "Lab: „mBot 2“", body: "lab.open-roberta.org, System wählen" },
      { badge: 4, head: "Roboter → Verbinden", body: "Token eingeben" },
      { badge: 5, head: "Testprogramm", body: "LED grün + Ton auf Taste A" },
      { badge: 6, head: "Klappt nicht?", body: "anderes Kabel, neu einschalten, Token neu – oder Leitung fragen", warn: true },
    ],
    notes: "Feedback aus der Erprobung: Startschwierigkeiten mit Open Roberta kosteten Zeit. Deshalb wird die Verbindung vor Beginn hergestellt. Leitung geht herum.",
  },
  {
    type: "timeline", title: "Ziele und Ablauf heute",
    lead: "Ziel: Programme schreiben, die auf die Umwelt reagieren – vorhersagen, testen, verbessern.",
    phases: [
      { time: "0–8", head: "Rückblick, Lernpfad", body: "Wissenscheck 1, Lernpfad A, B oder C wählen" },
      { time: "8–18", head: "Mensch-Roboter", body: "Sequenz, Schleife, Bedingung ohne Computer" },
      { time: "18–33", head: "PRIMM am Beamer", body: "Programm „Wachhund“ vorhersagen, testen, ändern" },
      { time: "33–63", head: "Lernpfade", body: "Pflicht + Wahl, gestufte Hilfen", hl: true },
      { time: "63–75", head: "Mini-Teach", body: "Expert:innen-Stationen mit Leitkarte" },
      { time: "75–90", head: "Sicherung, Ausblick", body: "Modell und Wirklichkeit, Fachbezug, Sitzung 3" },
    ],
    notes: "Zu Beginn die zwei häufigsten Fehler aus dem Wissenscheck 1 aufgreifen (vorher in Moodle auswerten). Meist: Endlosschleife im Startblock, Funktion des Encoders.",
  },
  {
    type: "cards", title: "Welcher Lernpfad passt zu Ihnen?",
    lead: "Drei Ja/Nein-Fragen im Arbeitsheft: Blocksprache schon genutzt? Bedingung erklärbar? Textbasiert programmiert?",
    cards: [
      { badge: "A", head: "Einstieg (0–1 × ja)", body: ["Pflicht: A1 Strecke messen", "Wahl: A2 Vielecke oder A3 Hell-Dunkel-Licht"] },
      { badge: "B", head: "Sensoren (2 × ja)", body: ["Pflicht: B1 Hindernis", "Wahl: B2 Linienfolger oder B3 Zufall"] },
      { badge: "C", head: "Vertiefung (3 × ja)", body: ["Pflicht: C1 Linienfolger als Regler", "Wahl: C2 Verhaltensmodell oder C3 Unterrichtsaufgabe"], color: C.orange },
    ],
    callout: "Empfehlung + Wechselrecht: Sie dürfen jederzeit wechseln – nach oben wie nach unten.",
    notes: "Hospitationsfeedback: Lernpfade funktionieren nur, wenn alle die passenden Aufgaben bearbeiten. Deshalb Selbsteinschätzung mit Empfehlung. Leitung passt bei Bedarf an. Doppeldecker: Diese Logik lässt sich direkt auf die Klasse übertragen.",
  },
  {
    type: "cards", title: "Mensch-Roboter: Programmieren ohne Computer",
    lead: "Eine Person ist Roboter, die andere programmiert mit Befehlskarten. Auftrag: einmal um einen Stuhl herum.",
    cards: [
      { head: "Runde 1", body: ["Gehe n Schritte", "Drehe links 90°", "Drehe rechts 90°"] },
      { head: "Runde 2", body: ["zusätzlich:", "Wiederhole n mal [ … ]"] },
      { head: "Runde 3", body: ["zusätzlich:", "Wenn Hindernis vor dir, dann [ … ] sonst [ … ]"], color: C.orange },
    ],
    callout: "Danach: Wie viele Karten brauchten Sie in jeder Runde? Was kann die Wenn-Karte, was die anderen nicht können?",
    notes: "10 Minuten. Erkenntnis: Runde 2 macht das Programm kürzer (Schleife), Runde 3 lässt den Roboter auf die Umgebung reagieren (Bedingung) – das Programm funktioniert dann auch, wenn der Stuhl verschoben wird. Begriffe an die Tafel.",
  },
  {
    type: "cards", title: "Die drei Grundstrukturen in Open Roberta", size: 15,
    cards: [
      { head: "Sequenz", body: ["Anweisungen nacheinander", "Blöcke untereinander", "Beispiel: Fahre 20 cm → Drehe 90° → Fahre 20 cm"] },
      { head: "Schleife", body: ["Wiederhole n mal (Zählschleife)", "Wiederhole bis / solange …", "Wiederhole unendlich oft (Startblock)"] },
      { head: "Bedingung", body: ["Wenn … mache … sonst …", "Vergleich mit Schwellenwert", "Beispiel: Abstand < 20 → LED rot"] },
    ],
    callout: "Schwellenwert = der Grenzwert, ab dem eine Bedingung „wahr“ wird. Er wird gemessen, nicht geraten.",
    notes: "Kurz die Blöcke im Lab zeigen (Kategorie Kontrolle und Logik).",
  },
  {
    type: "grid", title: "PRIMM: erst vorhersagen, dann testen", cols: 5, size: 14,
    items: [
      { badge: "P", head: "Predict", body: "Was wird das Programm tun? Vorhersage notieren." },
      { badge: "R", head: "Run", body: "Am mBot2 ausführen und beobachten." },
      { badge: "I", head: "Investigate", body: "Warum passiert das? Was bewirkt welcher Block?" },
      { badge: "M", head: "Modify", body: "Gezielt eine Sache ändern und erneut vorhersagen." },
      { badge: "M", head: "Make", body: "Eigenes Programm für eine neue Aufgabe entwickeln.", warn: true },
    ],
    callout: "Für den mBot2 gibt es in Open Roberta keinen Simulator. Die Vorhersage übernimmt seine Rolle: Sie macht sichtbar, wo das eigene Modell nicht stimmt.",
    notes: "PRIMM nach Sentance, Waite und Kallia (2019). Im erprobten Konzept stand „erst Simulation, dann Roboter“ – das ist beim mBot2 nicht möglich. Der Vergleich Modell ↔ Wirklichkeit bleibt aber Lernziel.",
  },
  {
    type: "code", title: "Predict: Was tut der „Wachhund“?",
    code: "Start\n  Wiederhole unendlich oft\n    Wenn  Gib Abstand cm\n          Ultraschallsensor U  <  20\n      Schalte RGB LED an  alle\n                          Farbe rot\n      Spiele Note  Viertel  a'\n    sonst\n      Schalte RGB LED an  alle\n                          Farbe grün",
    side: [
      { head: "Predict (2 Min.)", body: "Was tut der mBot2? Notieren Sie Ihre Vorhersage im Arbeitsheft.", bullets: false },
      { head: "Investigate", body: ["Was passiert mit 5 statt 20?", "Wo steckt die Schleife?", "Was, wenn „sonst“ fehlt?"], fill: "FCEBDD" },
    ],
    notes: "Erst Vorhersage, dann am Demo-mBot2 ausführen. Investigate-Fragen im Plenum. Modify: Tandems lassen zusätzlich den Abstand auf dem Display anzeigen (Lösungsheft 2.1). Ohne „sonst“ bleibt die LED nach dem ersten Alarm rot – gute Einsicht: Ein Zustand bleibt, bis das Programm ihn ändert.",
  },
  {
    type: "cards", title: "Zwei Muster für alle Aufgaben",
    cards: [
      { head: "Messen vor Entscheiden", body: ["Sensorwert auf dem Display anzeigen", "„wandle … um in Zeichenkette“ (Kategorie Text)", "echte Werte notieren, dann Schwelle festlegen"] },
      { head: "Start mit A, Stopp mit B", body: ["Warte bis Taste A gedrückt?", "Wiederhole bis Taste B gedrückt? [ Programm ]", "Stoppe"], color: C.orange },
    ],
    callout: "Muster B ist zugleich der Not-Aus für die Klasse: Jedes Fahrprogramm lässt sich jederzeit anhalten.",
    notes: "Beide Muster stehen im Arbeitsheft. Sie lösen das Problem der festen Endlosschleife im Startblock und machen Schwellenwerte begründbar.",
  },
  {
    type: "table", title: "Lernpfade: Ihre Aufgaben (30 Minuten)", size: 16, rowH: 0.75,
    colW: [1.2, 5.3, 5.6],
    head: ["Pfad", "Pflicht", "Wahl"],
    rows: [
      ["A", "A1 Strecke messen: genau 50 cm, Strecken- vs. Zeitversion", "A2 Vielecke (Drehwinkel berechnen) oder A3 Hell-Dunkel-Licht"],
      ["B", "B1 Hindernis: stoppen, zurück, drehen; tatsächlichen Abstand messen", "B2 Linienfolger (Zweipunktregler) oder B3 Zufall (20 Versuche)"],
      ["C", "C1 Linienfolger als Proportionalregler, Parameter dokumentieren", "C2 Verhaltensmodell (Photokinese) oder C3 eigene Unterrichtsaufgabe"],
    ],
    callout: "Für jede Aufgabe: vorhersagen → testen → messen → eine Sache ändern → wieder testen. Hilfekarten erst nach 3 Minuten eigenem Probieren.",
    notes: "Leitung geht herum und fragt: Was hast du vorhergesagt? Was ist passiert? Was änderst du als Nächstes – und nur das? Bei Verzug entfällt die Wahlaufgabe. Lösungskarten liegen nur am Leitungstisch.",
  },
  {
    type: "cards", title: "Gestufte Hilfen und die Debugging-Regel", size: 15,
    cards: [
      { badge: "H1", head: "Denkanstoß", body: "Eine Frage, die auf den entscheidenden Gedanken lenkt.", bullets: false },
      { badge: "H2", head: "Werkzeug", body: "Die benötigten Blöcke mit ihrer Kategorie.", bullets: false },
      { badge: "H3", head: "Teillösung", body: "Ein Programmgerüst mit Lücken.", bullets: false },
    ],
    callout: "Debugging-Regel: eine Änderung → testen → notieren. Wer drei Dinge gleichzeitig ändert, weiß nicht, was gewirkt hat.",
    notes: "Doppeldecker: Die Hilfekarten liegen im Arbeitsheft-Anhang und als Schülerfassung im Unterrichtsmaterial. Diskussionsimpuls: Ab wann nimmt eine Hilfe das Lernen weg?",
  },
  {
    type: "cards", title: "Mini-Teach: Leitkarte für Erklärende (max. 4 Min.)",
    cards: [
      { head: "Ziel", body: "Was soll der Roboter tun? Ein Satz – und der Roboter zeigt es.", bullets: false },
      { head: "Code", body: "Wo ist die Schleife? Wo die Bedingung? Welcher Schwellenwert – und woher stammt er?", bullets: false },
      { head: "Mitmachen", body: "Das Gegenüber ändert eine Zahl, sagt voraus, was passiert – dann testen.", bullets: false, color: C.orange },
    ],
    callout: "Feste Stationen, an denen die Erklärenden bleiben. Alle anderen rotieren zweimal (je 5 Min.) und notieren: eine Übernahme, eine Frage.",
    size: 17,
    notes: "Hospitationsfeedback: Die Qualität hing davon ab, wer gerade erklärt. Leitkarte und feste Stationen sichern die Qualität. Stationen z. B.: A2 Vieleck, B1 Hindernis, B2 Linienfolger, C1 Regler.",
  },
  {
    type: "compare", title: "Modell und Wirklichkeit",
    lead: "Wo wich Ihre Vorhersage von der Fahrt ab – und warum?",
    left: { head: "Das Modell sagt …", body: ["50 cm sind 2,45 Radumdrehungen", "Stopp genau bei 15 cm Abstand", "ein Dreieck schließt sich exakt"] },
    right: { head: "Die Wirklichkeit zeigt …", body: ["Schlupf, Untergrund, Akkustand", "Reaktions- und Bremsweg", "Sensorrauschen und Licht im Raum"] },
    callout: "Auf Karten: „Sequenz, Schleife oder Bedingung stecken in meinem Fach in …“ → an die Pinnwand nach Fächern.",
    notes: "Sicherung in drei Schritten: (1) Modell und Wirklichkeit, (2) Fachbezug auf Karten, (3) Doppeldecker: Welcher Lernpfad passt zu welcher Ihrer Klassen? Optional Impuls: Der Linienfolger lernt nichts – er folgt Regeln, die Menschen festgelegt haben.",
  },
  {
    type: "closing", title: "Bis zur nächsten Sitzung",
    cols: [
      { head: "Selbstlernmodul 2", body: ["Wissenscheck (11 Fragen)", "ca. 15 Minuten", "Programme exportieren und sichern"] },
      { head: "Fachgruppe wählen", body: ["Technik · Mathematik · Physik", "Informatik · offene Gruppe", "im Moodle bis eine Woche vorher"] },
      { head: "Lehrplanbezug", body: ["Fachlehrplan Sachsen-Anhalt", "Klasse 7: Wo knüpft der mBot2 an?", "Fundstelle notieren"] },
    ],
    notes: "Ausblick auf Sitzung 3: Erst selbst ausprobieren, dann planen – in Fachgruppen für eine Projektwoche in Klasse 7. mBot2 an die Ladestation.",
  },
];

build(meta, slides, process.argv[2] || "S2_Folien.pptx");
