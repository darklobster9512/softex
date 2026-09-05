# Seitentitel, Beschreibungen, Favicon, Platzhalter-Hinweise

## Ziel
Jede Seite bekommt einen aussagekräftigen, einzigartigen Titel und eine passende Beschreibung für Google, das hochgeladene Softex-Zeichen wird zum Favicon, und alle Hinweise auf Demo-/Beispielinhalte verschwinden.

## 1. Titel & Beschreibungen
- Karriere-Übersicht hat aktuell gar keine eigenen Angaben und erbt nur den allgemeinen Seitentitel — sie bekommt eigene: "Karriere & offene Stellen in Hamburg | softex.solutions" plus passende Beschreibung.
- Alle übrigen Seiten (Start, Leistungen, Unternehmen, Team, Kontakt, Bewerbung, Stellendetail, Impressum, Datenschutz) werden auf einheitliches Muster geschärft: Thema + Ort + Firmenname, Beschreibung unter 160 Zeichen, konkret statt allgemein.
- Jede Seite bekommt zusätzlich die Adressangabe für Suchmaschinen (kanonische Adresse) und die Social-Angaben (og:title, og:description, og:url), damit Google und geteilte Links die richtige Seite zeigen.
- Startseite erhält strukturierte Firmendaten (Name, Adresse Hamburg, E-Mail) für Googles Firmenanzeige.

## 2. Favicon
- Das hochgeladene Softex-Zeichen wird als quadratisches Icon in den öffentlichen Ordner gelegt und ersetzt das bisherige `public/favicon.png`.
- Verweise im Seitenkopf werden ergänzt (Icon + Apple-Touch-Icon), damit Browser und Google es zuverlässig laden.
- Damit Google es in den Suchergebnissen anzeigt, braucht es zusätzlich eine Veröffentlichung; Google übernimmt das Icon erst beim nächsten Crawl.

## 3. Auffindbarkeit
- Es gibt bisher keine Seitenübersicht für Suchmaschinen. Es wird eine `sitemap.xml` mit allen öffentlichen Seiten (inkl. Stellenanzeigen) erzeugt und in `robots.txt` verlinkt.

## 4. Demo-/Platzhalter-Hinweise entfernen
- Team-Seite: der Hinweis "Die gezeigten Teamprofile sind Beispiel-Platzhalter…" wird entfernt.
- Der zugehörige Stil `.mockup-note` wird aus der Gestaltung entfernt.
- Zusätzlich wird der ganze Text der Website nach weiteren Formulierungen wie "Beispiel", "Platzhalter", "Muster" durchsucht und bereinigt.

## Technische Details
- Metadaten je Route über `head()` in `src/routes/*.tsx`; `canonical` nur auf Blattrouten, relative Pfade (noch keine Domain hinterlegt), kein `og:image` auf `__root`.
- Favicon: Upload mit `magick` auf 64x64 skaliert nach `public/favicon.png` (echte Datei, kein Asset-Pointer), Link in `src/routes/__root.tsx`.
- Sitemap als Serverroute `src/routes/sitemap[.]xml.tsx` mit `Content-Type: application/xml`, Stellen aus derselben Datenquelle wie `karriere.$slug`.
- Abschluss: `bun run build` zur Kontrolle.
