# Telefonnummer 040 573077460 einfügen

## Ziel
Die Telefonnummer **040 573077460** wird an drei Stellen ergänzt und ist überall als `tel:`-Link anklickbar.

## Umsetzung

### 1. Footer (`src/components/site-shell.tsx`)
Im Footer-Bereich „Kontakt" unterhalb der E-Mail-Adresse eine Zeile mit der Telefonnummer ergänzen:
- Icon `Phone` aus `lucide-react` importieren.
- Link: `<a href="tel:+4940573077460">040 573077460</a>`
- Darstellung wie die E-Mail-Zeile (Signal-Farbe, kleines Pfeil-Icon optional).

### 2. Kontaktseite (`src/routes/kontakt.tsx`)
In der linken Spalte „Direkter Kontakt" innerhalb von `.contact-list` eine weitere `.contact-row` ergänzen:
- Icon `Phone` importieren.
- Label „Telefon".
- Verlinkte Nummer `040 573077460` mit `href="tel:+4940573077460"`.
- Pfeil-Icon wie bei der E-Mail-Zeile.

### 3. Impressum (`src/routes/impressum.tsx`)
Im Abschnitt „Kontakt" die Telefonnummer ergänzen:
- Zeile `<p>Telefon: <a href="tel:+4940573077460">040 573077460</a></p>`
- Optional: Beschreibung/meta description um „Telefon" erweitern, damit die Nummer auch in Suchsnippets auftauchen kann.

## Technische Details
- `tel:`-Link verwendet die internationale Schreibweise `+4940573077460` (ohne Leerzeichen).
- Angezeigt wird die lesbare Form `040 573077460`.
- Keine Änderung an Styling-Logik; bestehende Klassen (`.contact-row`, Signal-Farbe, Footer-Textstile) werden wiederverwendet.
- Abschluss: Build-Prüfung mit `bun run build` und Sichtkontrolle der drei Stellen.
