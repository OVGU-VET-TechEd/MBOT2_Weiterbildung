#!/bin/zsh
# Erzeugt SCORM-1.2-Pakete der drei LiaScript-Selbstlernmodule für Moodle (ab 4.x).
# Einstellungen entsprechen dem Moodle-Preset des LiaScript-Exporters: SCORM 1.2 mit eingebettetem Markdown.
# Voraussetzung: npm install -g @liascript/exporter  (oder npx, siehe unten)
set -e
cd "$(dirname "$0")/.."
mkdir -p moodle
TMP=$(mktemp -d)
typeset -A DUR
DUR=(S1 PT0H45M0S S2 PT0H30M0S S3 PT0H30M0S)
for md in Session_*/S?_Selbstlernmodul.md; do
  s=$(basename "$md" | cut -c1-2)
  # Jedes Modul einzeln aus einem leeren Ordner exportieren, damit keine Folien/Word-Dateien ins Paket gelangen
  mkdir -p "$TMP/$s" && cp "$md" "$TMP/$s/"
  npx --yes @liascript/exporter -i "$TMP/$s/$(basename "$md")" -f scorm1.2 --scorm-embed \
    --scorm-organization "OVGU-Magdeburg-ITVET" --scorm-typicalDuration "${DUR[$s]}" \
    -o "moodle/${s}_Selbstlernmodul_SCORM" > /dev/null
  echo "geschrieben: moodle/${s}_Selbstlernmodul_SCORM.zip"
done
rm -rf "$TMP"
