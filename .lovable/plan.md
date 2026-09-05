# Team- und Karriereseite für softex.solutions

## Zielbild

Zwei neue, eigenständige Seiten im vorhandenen Designsystem (#01b0f1, Manrope/Space Grotesk, bestehende Bausteine wie PageIntro, ContactBand, Tile-/Listen-Stile):

- **Team** unter `/team`
- **Karriere** unter `/karriere`

Beide Seiten werden in Navigation (Header + mobiles Menü) und Footer verlinkt.

## Teamseite (`/team`)

1. PageIntro: kurze Positionierung („Die Menschen hinter den Systemen").
2. Team-Gitter mit 4–6 Platzhalter-Profilkarten: initialenbasierte Avatar-Flächen in Markenfarbe (keine erfundenen Fotos), Name, Rolle (z. B. Geschäftsführung/Beratung, Systemanalyse, Softwareentwicklung, Netzwerk & Infrastruktur) und ein Kurzsatz. Alle Namen sind ausdrücklich Mockups und lassen sich später 1:1 durch echte Personen ersetzen.
3. Kurzer Abschnitt „Wie wir arbeiten" (Analyse, Verantwortung, Pragmatismus — abgestimmt auf die Unternehmensseite).
4. Querverweis auf die Karriereseite plus ContactBand.

## Karriereseite (`/karriere`)

1. PageIntro: Einladung in ruhigem Ton, ohne übertriebene Versprechen.
2. Kurzblock „Was wir bieten": 3–4 sachliche Punkte (echte Projekte, kleines Team, Hamburg, flexible Arbeitsweise).
3. **Offene Stellen (Mockup-Anzeigen), jeweils als aufklappbare Stellenanzeige:**
   - Softwareentwickler/in (m/w/d) — System- & Anwendungssoftware
   - IT-Berater/in (m/w/d) — Unternehmensberatung & Systemanalyse
   - Systemadministrator/in (m/w/d) — Hardware & Netzwerke
   - Werkstudent/in (m/w/d) — Softwareentwicklung
   - Jede Anzeige mit: Titel, Kennzeichen (Vollzeit/Teilzeit, Hamburg, Einstiegslevel), Aufgaben, Anforderungen, Angebot — als klare Beispieltexte markiert.
4. Initiativbewerbung: Hinweis auf `kontakt@softex.solutions` mit Betreff-Vorschlag.
5. ContactBand zum Abschluss.

## Navigation & Verlinkung

- Header-Links: Leistungen · Unternehmen · Team · Karriere · Kontakt (mobil identisch).
- Footer-Navigation um Team und Karriere erweitern.
- Eigene `head()`-Metadaten je Seite (Titel, Description, og:title, og:description, og:type, twitter:card); ein H1 pro Seite.

## Technische Umsetzung

- Neue Dateien `src/routes/team.tsx` und `src/routes/karriere.tsx`; Nav-Erweiterung in `src/components/site-shell.tsx`.
- Stellenanzeigen als tastaturbedienbare `<details>`/Accordion-Elemente; neue Styles in `src/styles.css` im vorhandenen Token-System.
- Keine erfundenen Bewertungen, Kennzahlen oder Arbeitgeberauszeichnungen.
- Nach Umsetzung: Build-Prüfung und Sichtkontrolle Desktop + Mobil.
