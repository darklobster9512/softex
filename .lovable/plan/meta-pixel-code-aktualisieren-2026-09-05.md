Meta Pixel Code aktualisieren

Ziel: Den bestehenden Meta Pixel Code in `src/routes/__root.tsx` durch den neuen Code ersetzen, inklusive Pixel-ID-Wechsel und noscript-Fallback.

Aktueller Stand: In `src/routes/__root.tsx` ist im `head()`-Block ein `scripts`-Eintrag mit der alten Pixel-ID `1055052437112922` und ohne `<noscript>`-Fallback hinterlegt.

Geplante Änderung:
- In `src/routes/__root.tsx` den `scripts`-Eintrag im `head()`-Block aktualisieren.
- Pixel-ID von `1055052437112922` auf `1041951465362957` ändern.
- Den vollständigen neuen Meta Pixel Code inklusive `<!-- Meta Pixel Code -->`-Kommentar, formatiertem Script und `<noscript><img ... /></noscript>`-Fallback einfügen.
- Anschließend `bun run build` ausführen, um sicherzustellen, dass der Build weiterhin fehlerfrei durchläuft.

Hinweis: Da sich der Head-Inhalt ändert, wird die Aktualisierung erst nach dem nächsten Publish an der Live-URL sichtbar.
