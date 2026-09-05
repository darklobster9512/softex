# Bilder und Schriften lokal ausliefern

Auf Ihrem eigenen Server fehlen zwei Dinge, die bisher von externen Servern geladen werden: das Logo und die Schriftarten. Deshalb bleibt das Logo leer und der Text erscheint verzögert.

## Was geändert wird

1. **Logo lokal ablegen**
   Das Softex-Logo liegt aktuell auf einer externen Bild-Adresse, die auf Ihrem Server nicht existiert. Es wird als echte Bilddatei in den `public`-Ordner gelegt und im Kopfbereich sowie im Fußbereich von dort geladen.

2. **Startseiten-Bild prüfen**
   Das große Bild auf der Startseite liegt bereits im Projekt und wird beim Bauen mitgeliefert. Zur Sicherheit wird es zusätzlich nach `public` verschoben und direkt von dort geladen, damit es unabhängig vom Build funktioniert.

3. **Schriftarten selbst ausliefern**
   Manrope und Space Grotesk werden derzeit bei Google geladen — das verursacht die Verzögerung beim Text. Die Schriftdateien werden in `public/fonts` abgelegt, per `@font-face` mit `font-display: swap` eingebunden und die Google-Verweise entfernt. Der Text ist dann sofort sichtbar.

4. **Favicon prüfen**
   Favicon und Apple-Touch-Icon liegen bereits im `public`-Ordner und bleiben unverändert.

## Technische Details

- `src/assets/softex-logo.png.asset.json` durch `public/softex-logo.png` ersetzen; `src/components/site-shell.tsx` nutzt `src="/softex-logo.png"`.
- `src/assets/softex-workspace.jpg` nach `public/softex-workspace.jpg`; Import in `src/routes/index.tsx` durch den Pfad `/softex-workspace.jpg` ersetzen.
- WOFF2-Dateien der beiden Schriften nach `public/fonts/`; `@font-face`-Regeln oben in `src/styles.css` (vor `@theme`), `font-display: swap`.
- In `src/routes/__root.tsx` die drei Google-Fonts-Einträge (`preconnect` ×2, `stylesheet`) entfernen; optional `preload` für die beiden wichtigsten Schriftschnitte ergänzen.
- Nach den Änderungen `bun run build` ausführen und die Seiten im Preview auf korrekt geladene Bilder und Schriften prüfen.

## Hinweis

Die Vorschau in Lovable zeigt das Logo aktuell korrekt, weil dort die externe Bild-Adresse erreichbar ist. Nach der Umstellung funktioniert es in beiden Umgebungen gleich.
