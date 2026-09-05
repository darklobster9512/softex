# Kontaktseite hell + Mockup-Kontaktformular

## Zielbild

Die Kontaktseite wechselt vom dunklen Anthrazit-Hintergrund zur hellen Gestaltung der übrigen Seiten (PageIntro auf heller Surface-Fläche) und erhält ein **Mockup-Kontaktformular ohne Funktion** — kein Versand, kein Backend.

## Umsetzung

### 1. Helle Kontaktseite
- Der dunkle `contact-page`-Bereich wird hell: großer Titel und Einladung wie auf den anderen Seiten (helle Fläche, dunkle Schrift, Akzent #01b0f1).
- Die Kontakt-Kacheln (E-Mail, Adresse) werden helle Karten mit feinem Rahmen statt dunkler Flächen; Hover-Akzent in Markenfarbe.

### 2. Mockup-Kontaktformular
Zweispaltiger Bereich auf der Seite:

- **Links:** Kontaktdaten (E-Mail `kontakt@softex.solutions`, Adresse Langwisch 2, 22391 Hamburg) als helle Kacheln.
- **Rechts:** Formular mit den Feldern:
  - Name
  - E-Mail
  - Unternehmen (optional)
  - Nachricht
  - Button „Nachricht senden"
- Das Formular ist sichtbar ausgestaltet, aber **bewusst ohne Funktion**: keine Eingaben werden gesendet, kein Formular-Dienst angebunden. Hinweis darunter: „Beispiel-Formular — bitte direkt per E-Mail kontaktieren."
- Felder sind tastaturbedienbar und sauber beschriftet (Labels, Fokus-Rahmen in Markenfarbe).

### 3. Technik
- Änderungen in `src/routes/kontakt.tsx` und den zugehörigen Stilen in `src/styles.css` (Tokens, keine hartcodierten Farben).
- Metadaten der Seite bleiben bestehen.
- Abschluss: Build-Prüfung und Sichtkontrolle Desktop + Mobil.
