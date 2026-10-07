#!/bin/zsh
# Erzeugt alle Foliensätze (.pptx) und Word-Fassungen (.docx) aus den Quellen.
# Voraussetzung: Node.js mit den Paketen pptxgenjs und docx (npm install pptxgenjs docx),
# bei abweichendem Installationsort NODE_PATH setzen.
set -e
cd "$(dirname "$0")/.."
S1=Session_1_Aufbau_und_EVA
S2=Session_2_Programmieren_Open_Roberta
S3=Session_3_Fachtransfer_Projektwoche

node scripts/slides_s1.js "$S1/S1_Folien.pptx"
node scripts/slides_s2.js "$S2/S2_Folien.pptx"
node scripts/slides_s3.js "$S3/S3_Folien.pptx"

for dir in $S1 $S2 $S3; do
  for md in "$dir"/*_Arbeitsheft.md "$dir"/*_Loesungen.md "$dir"/*_Unterrichtsmaterial.md; do
    node scripts/md2docx.js "$md" "${md%.md}.docx"
  done
done

# Unterlagen für die Anerkennung durch das LISA (ohne Verfahrensbeschreibung und E-Mail-Entwurf)
for md in 00_Kurskonzept/08_LISA_Anerkennung/0[1-4]_*.md; do
  node scripts/md2docx.js "$md" "${md%.md}.docx"
done

python3 scripts/qa_check.py
python3 scripts/fit_check.py $S1/S1_Folien.pptx $S2/S2_Folien.pptx $S3/S3_Folien.pptx
