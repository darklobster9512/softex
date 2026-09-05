# Kontaktseite im 50/50-Layout

## Ziel
Die Kontaktseite wird als ruhige, professionelle Unternehmensseite überarbeitet und gestalterisch an die bestehenden Seiten von softex.solutions angeglichen.

## Umsetzung
- Den oberen Seitenbereich wie auf den übrigen Inhaltsseiten aufbauen: heller Hintergrund, Eyebrow, große klare Überschrift und kurze Einleitung.
- Darunter ein echtes 50/50-Raster auf Desktop:
  - links die direkte Kontaktaufnahme mit E-Mail, Adresse und einem kurzen persönlichen Gesprächseinstieg;
  - rechts das Kontaktformular mit Name, E-Mail, Unternehmen und Nachricht.
- Visuelle Unruhe reduzieren: keine großen kachelartigen Blöcke, stattdessen klare Linien, großzügige Abstände und eine eindeutige typografische Hierarchie.
- Formularfelder, Fokuszustände und Senden-Schaltfläche an das bestehende Designsystem mit Anthrazit, hellen Flächen und der Markenfarbe `#01b0f1` angleichen.
- Den bestehenden Hinweis beibehalten, dass das Formular ein Mockup ist und nichts versendet.
- Auf Mobilgeräten die beiden Hälften sauber untereinander anordnen.

## Technische Details
- Änderungen auf `src/routes/kontakt.tsx` und die zugehörigen Kontakt-Stile in `src/styles.css` begrenzen.
- Bestehende Seitennavigation, Metadaten und Kontaktdaten unverändert lassen.
- Anschließend Darstellung auf Desktop und Mobil sowie den Build prüfen.
