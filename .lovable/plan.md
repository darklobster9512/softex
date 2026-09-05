# Abstand auf /karriere/bewerbung entfernen

Den visuellen Abstand zwischen dem Einleitungstext "Kurze Angaben genügen. Wir melden uns zuerst mit einem persönlichen Gespräch." und der Bewerbungsformular-Card auf Desktop und Mobile entfernen.

## Vorgehen

1. **Seite markieren**
   - In `src/routes/karriere.bewerbung.tsx` die Klasse `page-intro-tight` am ersten `<section className="page-intro">` ergänzen.

2. **CSS anpassen**
   - `.page-intro-tight` bekommt `padding-bottom: 0`.
   - `.application-layout` bekommt den oberen Innenabstand auf `0` gesetzt, da diese Klasse ausschließlich auf der Bewerbungsseite verwendet wird:
     - Desktop: `padding-block: 0 6rem` (bisher `2rem 6rem`)
     - Tablet/>=768px: `padding-block: 0 7rem` (bisher `3rem 7rem`)
     - Mobile <=767px: `padding-block: 0 4rem` (bisher `1.5rem 4rem`)

3. **Validierung**
   - `bun run build` ausführen.
   - Mit Playwright die Seite `/karriere/bewerbung` in Desktop- und Mobile-Viewport öffnen und Screenshots prüfen, dass Text und Formular-Card direkt aneinanderstoßen.

## Technische Details

- Der Text liegt in `.page-intro > .page-lead`. Die Card liegt in `.application-layout > .application-form`.
- Der Abstand setzt sich aktuell aus `padding-bottom` von `.page-intro` und `padding-top` von `.application-layout` zusammen.
- `.application-layout` wird nur in `src/routes/karriere.bewerbung.tsx` verwendet, daher ist eine globale Reduktion des oberen Paddings dort unbedenklich.
