const { build, C } = require("./slidekit");

const meta = { title: "Sitzung 1 – Den mBot2 kennenlernen", footer: "Der mBot2 im Fachunterricht · Sitzung 1 · CC BY 4.0" };

const slides = [
  {
    type: "cover", number: "1", kicker: "FORTBILDUNGSREIHE · DER mBOT2 IM FACHUNTERRICHT",
    title: "Den mBot2 kennenlernen", subtitle: "Aufbau, EVA-Prinzip und erstes Programm",
    chips: ["Sitzung 1 von 3", "90 Minuten", "Open Roberta Lab"],
    notes: "Begrüßung. Kurz vorstellen: Leitung, Ablauf der Reihe. Kernbotschaft: Sie brauchen kein Vorwissen – nach 90 Minuten fährt Ihr selbst gebauter Roboter mit Ihrem ersten Programm, und Sie wissen, was Ihre Klasse dafür braucht.",
  },
  {
    type: "cards", title: "Die Fortbildungsreihe im Überblick",
    lead: "Jede Sitzung folgt dem Dreischritt Erleben → Reflektieren → Übertragen.", size: 16,
    cards: [
      { head: "Sitzung 1 · heute", body: ["mBot2 aufbauen und als System verstehen", "EVA-Prinzip", "mit Open Roberta verbinden", "erstes Programm"], fill: C.tintO, color: C.orange },
      { head: "Sitzung 2", body: ["Sequenz, Schleife, Bedingung", "Sensorwerte und Schwellenwerte", "Lernpfade A/B/C", "Mini-Teach"] },
      { head: "Sitzung 3", body: ["Erprobung in Fachgruppen", "Tagesplan für eine Projektwoche (Kl. 5–13)", "Peer-Feedback, Übergaben"] },
    ],
    callout: "Pädagogischer Doppeldecker: Sie erleben heute selbst die Methoden, die Sie später in Ihrer Klasse einsetzen können.",
    notes: "Überblick über die drei Sitzungen und die Selbstlernphasen dazwischen. Den Doppeldecker erklären: Wir fragen am Ende jeder Phase, was das für Ihre Klasse bedeutet.",
  },
  {
    type: "timeline", title: "Ziele und Ablauf heute",
    lead: "Ziel: Den mBot2 selbstständig in Betrieb nehmen und das Zusammenspiel von Sensor, Steuerung und Aktor erklären.",
    phases: [
      { time: "0–10", head: "Ankommen", body: "Ampel-Abfrage, Tandems bilden" },
      { time: "10–24", head: "EVA und Bauteile", body: "Leitfrage, Bauteile zuordnen (Arbeitsheft Aufgabe 1)" },
      { time: "24–62", head: "Montage im Tandem", body: "Rollen, 9 Bauschritte, Funktionsprüfung", hl: true },
      { time: "62–80", head: "Open Roberta", body: "Verbinden, erstes Programm vorhersagen und testen" },
      { time: "80–90", head: "Reflexion", body: "Was bedeutet das für meine Klasse? Ausblick" },
    ],
    notes: "Ablauf kurz zeigen. Die Montage ist der größte Block – in der Erprobung brauchten Tandems rund 45 Minuten. Deshalb liegen vormontierte Geräte als Plan B bereit.",
  },
  {
    type: "cards", title: "Wo stehen Sie?",
    lead: "Halten Sie die Ampelkarte hoch, die am besten passt. Wir zählen und vergleichen am Ende.",
    cards: [
      { badge: "", color: "3A9D5D", head: "Grün", body: "Ich kenne den mBot2 oder ähnliche Roboter und habe schon programmiert.", bullets: false },
      { badge: "", color: "E0B020", head: "Gelb", body: "Ich habe schon etwas ausprobiert, z. B. Scratch, Calliope oder LEGO.", bullets: false },
      { badge: "", color: "C8453B", head: "Rot", body: "Das ist alles neu für mich.", bullets: false },
    ],
    callout: "Tandems: möglichst Grün oder Gelb zusammen mit Rot. Erfahrene erklären – fassen aber nicht an.",
    size: 18,
    notes: "Ergebnis als Strichliste auf dem Flipchart festhalten (Feedback aus der Erprobung: Das Ergebnis wurde nirgends aufgenommen). Danach heterogene Tandems bilden. Doppeldecker-Hinweis: Die Ampel ist eine schnelle Diagnose, die auch in der Klasse funktioniert – aber nur, wenn das Ergebnis sichtbar weiterverwendet wird.",
  },
  {
    type: "eva", title: "Das EVA-Prinzip",
    lead: "Leitfrage: Was muss ein Roboter besitzen, um wahrnehmen, entscheiden und handeln zu können?",
    cols: [
      { head: "Eingabe", verb: "WAHRNEHMEN", color: C.e, body: "Sensoren erfassen die Umwelt: Abstand, Helligkeit, Farbe, Geräusch, Neigung, Tastendruck." },
      { head: "Verarbeitung", verb: "ENTSCHEIDEN", color: C.v, body: "Der CyberPi führt das Programm aus und entscheidet, was passieren soll." },
      { head: "Ausgabe", verb: "HANDELN", color: C.a, body: "Motoren bewegen, LEDs leuchten, Lautsprecher tönen, das Display zeigt an." },
    ],
    callout: "Dazu kommen Energie (Akku im Shield) und Struktur/Verbindung (Chassis, Kabel).",
    notes: "Erst Antworten auf die Leitfrage sammeln und den drei Spalten zuordnen, dann diese Folie zeigen. Am Demo-mBot2 unter der Dokumentenkamera zeigen: Wo nimmt er wahr, wo entscheidet er, wo handelt er? Danach Arbeitsheft Aufgabe 1 (8 Min.).",
  },
  {
    type: "grid", title: "Die Bauteile des mBot2", cols: 3,
    lead: "Lösung zu Aufgabe 1 – erst nach der Tandemphase zeigen.",
    items: [
      { badge: "V", color: C.v, head: "CyberPi", body: "führt das Programm aus; enthält zusätzlich Display, LEDs, Lautsprecher, Licht- und Lagesensor, Mikrofon, Tasten" },
      { badge: "E", color: C.e, head: "Ultraschallsensor 2", body: "misst mit Schallwellen den Abstand zu Hindernissen" },
      { badge: "E", color: C.e, head: "Quad-RGB-Sensor", body: "vier Einzelsensoren erkennen hell/dunkel und Farben am Boden" },
      { badge: "A", color: C.a, head: "Encoder-Motoren", body: "treiben die Räder an; der Encoder misst dabei die Drehung (auch Eingabe!)" },
      { badge: "⚡", color: C.n, head: "mBot2-Shield", body: "eingebauter Akku (Laden per USB-C); verbindet CyberPi, Motoren und Sensoren" },
      { badge: "S", color: C.n, head: "Chassis und Kabel", body: "Aluminiumrahmen trägt alles; Motor- und mBuild-Kabel übertragen Strom und Signale" },
    ],
    notes: "Kurze Plenumskontrolle (2 Min.). Denkfrage aus dem Arbeitsheft aufgreifen: Warum ist der Encoder-Motor Ausgabe und Eingabe zugleich? Antwort: Er treibt an und meldet die Drehung zurück – so kann der mBot2 genau 20 cm fahren (Regelkreis). Achtung: Viele Internet-Anleitungen beschreiben noch den alten mBot mit mCore und AA-Batterien.",
  },
  {
    type: "cards", title: "Montage im Tandem: Rollen und Regeln",
    cards: [
      { head: "Navigator:in", body: ["liest jeden Schritt aus der Originalanleitung vor", "sucht die richtigen Schrauben heraus", "prüft das Ergebnis"] },
      { head: "Monteur:in", body: ["schraubt und steckt", "baut nur, was vorgelesen wurde", "Rollenwechsel nach Schritt 5"] },
      { head: "Erfahrene", body: ["erklären durch Fragen und Zeigen", "fassen nicht an", "haben Zusatzaufgaben im Arbeitsheft"], color: C.orange },
    ],
    callout: "Schraubendreher-Tipp: Das Bit lässt sich umstecken – Kreuzseite und Sechskantseite. Schrauben vorher nach Größe sortieren.",
    notes: "Jetzt die Live-Demo unter der Dokumentenkamera: Bit umstecken, Schrauben sortieren (1 Minute). Feedback aus der Erprobung: Der Tipp auf der Folie allein ging unter. Doppeldecker: Rollen mit festem Wechsel verhindern, dass eine Person alles macht.",
  },
  {
    type: "grid", title: "Die 9 Bauschritte", cols: 3, size: 15,
    items: [
      { badge: 1, head: "Räder und Motorkabel", body: "Reifen auf die Radnaben, Motorkabel an beide Motoren" },
      { badge: 2, head: "Motoren ans Chassis", body: "beide Encoder-Motoren festschrauben · M4×8" },
      { badge: 3, head: "Räder anbringen", body: "Räder auf die Motorachsen · M2,5×12" },
      { badge: 4, head: "Stützrad und Quad-RGB", body: "Mini-Rad und Quad-RGB-Sensor unten · M4×14" },
      { badge: 5, head: "Quad-RGB verkabeln", body: "10-cm-Kabel, nicht 20 cm! → Zwischencheck", warn: true },
      { badge: 6, head: "Ultraschallsensor 2", body: "vorn anbauen, 10-cm-Kabel · M4×14" },
      { badge: 7, head: "Shield aufsetzen", body: "mBot2-Shield oben festschrauben · M4×25" },
      { badge: 8, head: "Verkabeln", body: "linker Motor → EM1, rechter Motor → EM2", warn: true },
      { badge: 9, head: "CyberPi aufstecken", body: "Funktionsprüfung: Display leuchtet, Räder drehen frei" },
    ],
    notes: "Reihenfolge wie in der Originalanleitung. Leitung geht herum. Zwischencheck nach Schritt 5 aktiv einfordern. Ab Minute 55: Tandems, die noch nicht bei Schritt 7 sind, bekommen einen vormontierten mBot2 und bauen ihren eigenen später fertig. Schnelle Tandems: Arbeitsheft Aufgabe 2.",
  },
  {
    type: "grid", title: "Den mBot2 mit Open Roberta verbinden", cols: 3, size: 15,
    items: [
      { badge: 1, head: "Einschalten, anschließen", body: "Schalter am Shield; USB-C-Datenkabel an den Laptop" },
      { badge: 2, head: "Connector starten", body: "Open Roberta Connector findet den mBot2" },
      { badge: 3, head: "Verbinden → Token", body: "Der Connector zeigt einen Token (z. B. 7GH2KQ9X)" },
      { badge: 4, head: "Lab öffnen", body: "lab.open-roberta.org → System „mBot 2“ wählen" },
      { badge: 5, head: "Roboter → Verbinden", body: "Token eingeben, bestätigen" },
      { badge: 6, head: "Programm übertragen", body: "Play-Knopf unten rechts" },
    ],
    callout: "Für den mBot2 gibt es in Open Roberta keinen Simulator. Programme werden direkt am Gerät getestet – deshalb sagen wir vorher voraus, was passieren wird.",
    notes: "Live am Beamer zeigen, Schritt für Schritt. Die Installation des Connectors braucht Administratorrechte – Thema für die Reflexion am Ende (Weg 1 / Weg 2). Bei Problemen: Datenkabel? Richtiges System „mBot 2“ gewählt? Token neu erzeugen.",
  },
  {
    type: "statement", title: "Merksatz",
    statement: "Beim mBot2 ist der Startblock eine Endlosschleife. Alles darin läuft immer wieder.",
    code: "Start\n  Wiederhole unendlich oft\n    Warte bis  Taste A gedrückt?\n    … Ihr Programm …",
    body: ["Die Schleife lässt sich nicht entfernen.", "„Warte bis Taste A gedrückt?“ als erster Block: Jeder Durchlauf startet erst auf Knopfdruck.", "Auch eine gute Sicherheitsregel für die Klasse."],
    notes: "Am Beamer zeigen: Ein Fahrbefehl ohne Warte-Block wird endlos wiederholt. Das ist die häufigste Überraschung beim Einstieg mit Open Roberta und dem mBot2.",
  },
  {
    type: "code", title: "Erstes Programm: erst vorhersagen, dann testen",
    code: "Start\n  Wiederhole unendlich oft\n    Warte bis  Taste A gedrückt?\n    Fahre vorwärts  Tempo U/min 30\n                    Strecke cm 20\n    Drehe rechts    Tempo U/min 30\n                    Grad 180\n    Fahre vorwärts  Tempo U/min 30\n                    Strecke cm 10",
    side: [
      { head: "Vorhersage (Tandem, 1 Min.)", body: "Wo steht der mBot2 am Ende? In welche Richtung schaut er? Skizzieren Sie Start und Ende.", bullets: false },
      { head: "Dann testen", body: "Auf dem Boden fahren lassen. Stimmt die Vorhersage? Was weicht ab?", bullets: false, fill: C.tintO },
    ],
    notes: "Block für Block am Beamer bauen und dabei laut erklären (Feedback: Code-Erklärung am Beamer). Erst Vorhersage einholen, dann ausführen. Lösung: 10 cm vor dem Start, Blick zurück zum Start. Abweichungen (Drehung nicht genau 180°) nicht wegerklären – Vorgriff auf Sitzung 2: Modell und Wirklichkeit.",
  },
  {
    type: "cards", title: "Ihre Aufgaben (11 Minuten)",
    cards: [
      { head: "Pflicht: Fahren", body: ["Programm von der letzten Folie", "erst vorhersagen, dann testen", "Fahrtests auf dem Boden"], color: C.orange },
      { head: "Wahl: Licht, Klang, Text", body: ["LEDs rot – grün – blau", "Dreiklang c′ – e′ – g′", "„Hallo“ und „Wie geht es dir?“"] },
      { head: "Zusatz: Begrüßung", body: ["fährt 30 cm auf Sie zu", "leuchtet grün, spielt eine Note", "zeigt „Hallo!“"] },
    ],
    callout: "Hilfreiche Blöcke stehen im Arbeitsheft (Aufgabe 5). Erst Tandem, dann Nachbartandem, dann Leitung.",
    notes: "Leitung hilft vor allem bei Verbindungsproblemen (Plan B: Technik-Vorbereitung Abschnitt 4). Musterlösungen im Lösungsheft – vor der Sitzung getestet.",
  },
  {
    type: "compare", title: "Was bedeutet das für Ihre Klasse?",
    lead: "Wer richtet die Technik ein? Zwei Wege aus der Erprobung:",
    left: { head: "Weg 2: mit der Klasse einrichten", body: ["Installation wird Teil der Stunde", "kostet etwa die Hälfte der Zeit", "Aufgaben stark kürzen (z. B. nur Fahren)", "Rechte auf Schulgeräten oft nicht vorhanden"] },
    right: { head: "Weg 1: vorab einrichten (empfohlen)", body: ["Lehrkraft installiert und testet vorher", "Rechte rechtzeitig mit der IT klären", "die Stunde gehört den Lernzielen", "Plan B: vormontierte, verbundene Geräte"] },
    callout: "Arbeitsheft Aufgabe 6: Zeitbedarf Montage? Was muss an Ihrer Schule vorbereitet werden? Welche Methode übernehmen Sie?",
    notes: "Blitzlicht: je Tandem ein Satz. Dann die drei Reflexionsfragen. Kernsatz: Technik-Vorbereitung ist Unterrichtszeit. Danach Ampel erneut und Ergebnis neben das erste auf das Flipchart schreiben.",
  },
  {
    type: "closing", title: "Bis zur nächsten Sitzung",
    cols: [
      { head: "Selbstlernmodul 1", body: ["Wissenscheck (10 Fragen)", "Open Roberta ohne Roboter erkunden", "ca. 30 Minuten im Moodle-Kurs"] },
      { head: "Ihre mBot2", body: ["bleiben montiert", "beschriften (Nr. am Shield)", "an die Ladestation"] },
      { head: "Sitzung 2", body: ["Schleifen und Bedingungen", "Sensoren und Schwellenwerte", "Lernpfade für jedes Vorwissen"] },
    ],
    notes: "Abschluss. Auf das Selbstlernmodul hinweisen: Die Ergebnisse des Wissenschecks werden zu Beginn von Sitzung 2 aufgegriffen. Dank.",
  },
];

build(meta, slides, process.argv[2] || "S1_Folien.pptx");
