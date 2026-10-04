const { build, C } = require("./slidekit");

const meta = { title: "Sitzung 3 – Vom Roboter zum Unterricht", footer: "Der mBot2 im Fachunterricht · Sitzung 3 · CC BY 4.0" };

const slides = [
  {
    type: "cover", number: "3", kicker: "FORTBILDUNGSREIHE · DER mBOT2 IM FACHUNTERRICHT",
    title: "Vom Roboter zum Unterricht", subtitle: "Fachbezogene Erprobung und Planung einer Projektwoche",
    chips: ["Sitzung 3 von 3", "90 Minuten", "Klasse 5–13"],
    notes: "Begrüßung. Kernbotschaft: Erst selbst ausprobieren, dann planen. Was Sie heute am mBot2 erleben – Zeitbedarf, Stolperstellen, Aha-Momente – wird zur Grundlage Ihrer Unterrichtsplanung.",
  },
  {
    type: "cards", title: "Was Sie schon können",
    lead: "Rückblick in einem Satz: Was können Sie jetzt, was Sie vor Sitzung 1 nicht konnten?",
    cards: [
      { head: "Sitzung 1", body: ["mBot2 aufgebaut", "EVA-Prinzip erklärt", "mit Open Roberta verbunden"] },
      { head: "Sitzung 2", body: ["Schleifen und Bedingungen", "Schwellenwerte gemessen", "Fehler systematisch gesucht"] },
      { head: "Heute", body: ["Jahrgangsstufe festlegen", "Aufgabe erproben, Tagesplan entwickeln", "Übergaben abstimmen"], color: C.orange, fill: C.tintO },
    ],
    notes: "Blitzlicht reihum, ein Satz pro Person. Wer möchte, vergleicht bereits seine Selbsteinschätzung aus Sitzung 1.",
  },
  {
    type: "cards", title: "Erst selbst ausprobieren – dann planen", size: 16,
    cards: [
      { head: "Erleben vor Erklären", body: "Sie lösen die Aufgabe, die später Ihre Schülerinnen und Schüler lösen.", bullets: false },
      { head: "Erfahrung → Planung", body: "Zeitbedarf, Stolperstellen und Aha-Momente fließen direkt in den Tagesplan.", bullets: false },
      { head: "Realistische Zeiten", body: "Wer selbst gemessen und programmiert hat, schätzt den Zeitbedarf genauer.", bullets: false },
      { head: "Ein roter Faden", body: "Vier Tage, die aufeinander aufbauen – mit klaren Übergaben.", bullets: false },
    ],
    notes: "Grundprinzip aus der erprobten Planungssession. Die Erprobung hat dort auch Planungsfehler sichtbar gemacht, die am Schreibtisch unbemerkt geblieben wären (z. B. Montag sah noch den Zusammenbau vor).",
  },
  {
    type: "table", title: "Die Projektwoche – Beispiel Klasse 7", size: 16, rowH: 0.55,
    colW: [1.8, 2.2, 6.4, 1.7],
    head: ["Tag", "Fach", "Tagesziel der Schülerinnen und Schüler", "Zeit"],
    rows: [
      ["Montag", "Technik", "mBot2 geprüft; Fehler systematisch gefunden, behoben, Kontrolltest", "3–5 Std."],
      ["Dienstag", "Mathematik", "Fahrwege berechnet, verglichen, begründet, mit dem mBot2 überprüft", "4–6 Std."],
      ["Mittwoch", "Physik", "zwei Messungen mit Hypothese durchgeführt und ausgewertet", "4–6 Std."],
      ["Donnerstag", "Informatik", "eigenes Steuerprogramm mit Schleife und Bedingungen", "4–6 Std."],
      ["Freitag", "Präsentation", "Schülerinnen und Schüler präsentieren als Expert:innen (schulindividuell)", "3–4 Std."],
    ],
    callout: "Wir legen jetzt eine gemeinsame Jahrgangsstufe fest (Voreinstellung: Klasse 7). Varianten für Kl. 5/6, 9/10 und Sek II stehen im Anpassungsleitfaden.",
    notes: "Erfahrung aus der Erprobung: Ohne gemeinsame Klassenstufe planten die Gruppen für unterschiedliche Jahrgänge, Anspruch und Übergaben passten nicht zusammen. Deshalb legt die Gruppe jetzt eine gemeinsame Jahrgangsstufe fest – Ergebnis der Abfrage aus Selbstlernmodul 2 zeigen, per Handzeichen entscheiden, ohne klare Mehrheit Klasse 7. Für andere Jahrgänge die Variantentabelle aus 07_Anpassung_Jahrgangsstufen.md austeilen. Eine offene Gruppe für weitere Fächer (Deutsch, Ethik, Biologie …) ist möglich.",
  },
  {
    type: "timeline", title: "Ablauf heute",
    phases: [
      { time: "0–10", head: "Einstieg", body: "Rückblick, Wochenstruktur, Rollen, Aufgabenkarten" },
      { time: "10–40", head: "Erprobung", body: "Kernauftrag 20 Min., Rollenwechsel, Erweiterung 10 Min.", hl: true },
      { time: "40–60", head: "Planung", body: "Tagesplan mit der Planungsvorlage" },
      { time: "60–78", head: "Präsentation", body: "1 Min. Demo + 3 Min. Plan, Peer-Feedback" },
      { time: "78–85", head: "Vernetzung", body: "Übergabe-Matrix, Freitag" },
      { time: "85–90", head: "Abschluss", body: "Selbstcheck, Praxisauftrag, Evaluation" },
    ],
    notes: "Bei weniger Teilnehmenden (2–3 Gruppen) die Präsentationsphase pro Gruppe verlängern (siehe Moderationsleitfaden, Abschnitt 5).",
  },
  {
    type: "cards", title: "Rollen in Ihrer Fachgruppe",
    lead: "Wechsel nach dem Kernauftrag – damit sich alle beteiligen.",
    cards: [
      { head: "Bedienung", body: ["programmiert und startet den mBot2", "setzt die Aufgabe praktisch um"] },
      { head: "Zeit und Beobachtung", body: ["stoppt die Dauer jedes Schritts", "notiert Stolperstellen und Aha-Momente", "→ Grundlage Ihrer Zeitplanung"], color: C.orange, fill: C.tintO },
      { head: "Dokumentation", body: ["hält Ergebnisse, Messwerte, Programme fest", "bereitet die Präsentation vor"] },
    ],
    callout: "Jede Aufgabenkarte hat einen Kernauftrag (Pflicht, 20 Min.) und eine Erweiterung (optional, 10 Min.).",
    notes: "Selbstreflexion der Erprobung: Die Beteiligung war ungleich verteilt; Rollen sollen explizit benannt und gewechselt werden. Die Rolle Zeit und Beobachtung ist neu und liefert die Daten für die Zeitplanung.",
  },
  {
    type: "table", title: "Die Erprobungsaufträge", size: 16, rowH: 0.62,
    colW: [2.4, 9.7],
    head: ["Gruppe", "Kernauftrag (20 Min.)"],
    rows: [
      ["Mo · Technik", "Soll-Verhalten programmieren, genau einen reversiblen Fehler einbauen, Diagnoseauftrag schreiben, gegenseitig testen"],
      ["Di · Mathematik", "Raster 20 cm: Wege A und B von (0|0) nach (3|2) berechnen, kürzesten begründen, Weg A fahren und messen"],
      ["Mi · Physik", "Zwei Versuche mit Hypothese: Ultraschall, Reflexion oder Weg-Zeit (60 U/min, fliegender Start)"],
      ["Do · Informatik", "Hindernis-Stopp + Linienfolger kombinieren, Schwellenwert variieren, Ablaufdiagramm"],
      ["Offene Gruppe", "z. B. Deutsch: Vorgangsbeschreibung testen · Ethik: Wer entscheidet beim Ausweichen?"],
    ],
    callout: "Sicherheit: Hardware nur im ausgeschalteten Zustand verändern, keine Eingriffe am Akku, Fahrten am Boden.",
    notes: "Aufgabenkarten mit Details und Erweiterungen stehen im Arbeitsheft. Lösungen und Erwartungen im Lösungsheft.",
  },
  {
    type: "cards", title: "Impulsfragen während der Erprobung", size: 17,
    cards: [
      { head: "Zeit", body: "Welcher Schritt hat am längsten gedauert? Wie lange bräuchte Ihre Klasse?", bullets: false },
      { head: "Vorwissen", body: "Was müssen die Schülerinnen und Schüler schon können? Woher kommt das in der Woche?", bullets: false },
      { head: "Fachliches Ergebnis", body: "Was wird hier gelernt – unabhängig davon, dass der Roboter fährt?", bullets: false },
      { head: "Lernhürde", body: "Wo würden schwächere Lernende hängen bleiben? Was wäre die passende Hilfe?", bullets: false },
    ],
    notes: "Die Leitung geht herum und stellt diese Fragen. Beobachtungen für die Präsentationsphase notieren.",
  },
  {
    type: "grid", title: "Die Planungsvorlage: sieben Pflichtfelder", cols: 4, size: 15,
    items: [
      { badge: 1, head: "Lernziel", body: "fachlich und überprüfbar (Operator + Inhalt)" },
      { badge: 2, head: "Rolle des mBot2", body: "Was wird durch ihn möglich oder besser?" },
      { badge: 3, head: "Ablauf", body: "Zeiten aus der Erprobung, mindestens 20 % Puffer" },
      { badge: 4, head: "Hürde → Hilfe", body: "eine konkrete Lernhürde, eine passende Hilfe" },
      { badge: 5, head: "Vertiefung", body: "für Schnelle – fachlich, nicht „mehr vom Gleichen“" },
      { badge: 6, head: "Lernnachweis", body: "Woran sieht man den Lernzuwachs?" },
      { badge: 7, head: "Übergabe", body: "was wir brauchen, was wir weitergeben", warn: true },
      { badge: "+", head: "Lehrplanbezug", body: "Fundstelle aus dem Fachlehrplan Sachsen-Anhalt" },
    ],
    notes: "20 Minuten Planungszeit. Nach 10 Minuten prüft die Leitung bei jeder Gruppe das Lernziel: Ist es fachlich? Ist es überprüfbar?",
  },
  {
    type: "compare", title: "Ein gutes Lernziel",
    left: { head: "So eher nicht", body: ["Die SuS programmieren den mBot2.", "Die SuS haben Spaß an Technik.", "Die SuS lernen Sensoren kennen."] },
    right: { head: "So ist es überprüfbar", body: ["Die SuS berechnen Längen von Fahrwegen im Raster und begründen den kürzesten Weg.", "Die SuS stellen Messwerte im s-t-Diagramm dar und deuten die Steigung als Geschwindigkeit."] },
    callout: "Programmieren ist am Projekttag meist Mittel, nicht Ziel – außer am Informatiktag.",
    notes: "Bezug zum Wissenscheck 3, Frage 1. Operatoren: berechnen, begründen, darstellen, deuten, erklären, vergleichen.",
  },
  {
    type: "statement", title: "Ginge das auch ohne mBot2?",
    statement: "Ein Reflexionsimpuls – kein Verbot. Entscheidend ist der begründete Bezug zum fachlichen Lernziel.",
    body: ["Mehrwert z. B. durch: steuerbare, wiederholbare Bewegung; sofortige Rückmeldung; Vergleich von Modell und Messung; fächerverbindender Projektrahmen", "Unzureichend: Einsatz ohne Bezug zum Lernziel („weil der Roboter da ist“)"],
    notes: "Im Ausgangsmaterial wurde der Test „Ginge es ohne Technik?“ als hartes Kriterium verwendet. Das ist zu streng: Auch ein begründetes „Ja, aber …“ kann gute Gründe haben.",
  },
  {
    type: "cards", title: "Peer-Feedback mit der Kriterienkarte", size: 16,
    lead: "Je Gruppe: 1 Min. Live-Demo, 2–3 Min. Tagesplan. Alle anderen füllen eine Kriterienkarte aus.",
    cards: [
      { head: "Kriterien", body: ["Lernziel klar und überprüfbar", "Mehrwert begründet", "Zeiten aus der Erprobung, Puffer", "Hürde und Hilfe konkret", "Lernnachweis, Übergabe"] },
      { head: "Rückmeldung", body: ["2 × Stärke", "1 × Frage", "1 × Tipp", "konkret und auf ein Kriterium bezogen"], color: C.orange },
    ],
    notes: "Die Gruppe sammelt die Karten ein und nimmt mindestens eine Anregung in ihren Plan auf (Erwartungshorizont LZ 3.4).",
  },
  {
    type: "grid", title: "Übergaben: Die Woche als roter Faden", cols: 4, size: 15,
    items: [
      { badge: "Mo", head: "→ Dienstag", body: "geprüfte mBot2, Testprogramm, Prüfliste, Fehlerprotokoll", badgeSize: 13 },
      { badge: "Di", head: "→ Mittwoch", body: "Rasterplan, Rechnungen, gemessene Fahrabweichungen", badgeSize: 13 },
      { badge: "Mi", head: "→ Donnerstag", body: "Sensorwerte und begründete Schwellenwerte", badgeSize: 13 },
      { badge: "Do", head: "→ Freitag", body: "getestetes Steuerprogramm, Ablaufdiagramm", badgeSize: 13, warn: true },
    ],
    callout: "Verbindende Strukturen: Tages-Check-in (10 Min.), Projekttagebuch (10 Min.), Expert:innen-System. Freitag gestaltet jede Schule selbst.",
    notes: "Übergabe-Matrix gemeinsam an der Pinnwand ergänzen. Orientierung für Freitag: Format (Parcours, Science Fair, Bühne), Publikum, Foto-Einverständnisse.",
  },
  {
    type: "closing", title: "Abschluss",
    cols: [
      { head: "Wo stehe ich?", body: ["Selbsteinschätzung wiederholen", "mit Sitzung 1 vergleichen"] },
      { head: "Praxisauftrag", body: ["Tagesplan auf eigene Lerngruppe übertragen", "erproben und reflektieren", "ca. 1 Seite im Moodle-Kurs"] },
      { head: "Evaluation", body: ["5 Minuten im Selbstlernmodul 3", "Ihre Rückmeldung verbessert die Reihe"] },
    ],
    notes: "Dank. Hinweis auf die Teilnahmebescheinigung: alle drei Sitzungen, Selbstlernmodule, Praxisauftrag. Das Moodle-Forum bleibt für den Austausch geöffnet.",
  },
];

build(meta, slides, process.argv[2] || "S3_Folien.pptx");
