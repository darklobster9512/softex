# Bewerbungsseite: Abstand und seriöses Desktop-Layout

Die Seite /karriere/bewerbung wirkt auf Desktop unseriös: Die Formular-Card klebt ohne Abstand direkt am Einleitungstext, ist eine flache weiße Fläche ohne Kontur und die Mobile-Optimierung hat die oberen Abstände komplett entfernt. Ziel: natürlicher Abstand zwischen Text und Formular sowie ein hochwertigeres Erscheinungsbild auf Desktop und Mobile.

## Änderungen (nur src/styles.css)

1. **Natürlicher Abstand wiederherstellen**
   - `.application-layout` bekommt wieder oberes Padding:
     - Desktop: `padding-block: 2.5rem 7rem`
     - Tablet: `padding-block: 2rem 7rem`
     - Mobile: `padding-block: 1.5rem 4rem`
   - Dadurch steht die Card mit klarem Abstand unter dem Satz „Kurze Angaben genügen …".

2. **Formular-Card hochwertiger gestalten**
   - Abgerundete Ecken (`border-radius: .5rem`) statt harter Kante.
   - Dezenter Schatten (`--shadow-elegant`-Stil: weicher Schatten in Markenfarbe mit geringer Deckkraft), damit die Card von der Fläche abgehoben wirkt.
   - Eingabefelder bekommen `border-radius: .35rem` und auf Desktop etwas großzügigeres Padding in der Card (bestehende 3rem bleiben).
   - Card-Hintergrund bleibt `--card`, Rahmen bleibt `--border` — kein hartes Weiß auf hellem Grund ohne Tiefe.

3. **Intro-Bereich auf Desktop**
   - `.page-intro-tight` bleibt, bekommt aber etwas unteren Abstand zurück (`padding-bottom: 1rem`), damit Eyebrow, H1 und Lead nicht am Rand kleben.
   - Keine inhaltlichen Änderungen, keine neue Animation.

## Keine Änderungen an

- Formularlogik, Felder, Submit-Verhalten, Meta-Pixel (`src/routes/karriere.bewerbung.tsx` bleibt unverändert).
- Anderen Seiten und Breakpoints außer den genannten Abständen.

## Verifikation

- Playwright-Screenshots Desktop (1280px) und Mobile (390px) von /karriere/bewerbung aufnehmen und prüfen: Abstand sichtbar, Card mit Kontur/Schatten, kein horizontaler Überlauf.
- `bun run build` muss fehlerfrei durchlaufen.
