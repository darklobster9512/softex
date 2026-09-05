# Karriere-Stellen mit Detailansicht

## Zielbild

Jede Stellenanzeige auf der Karriereseite wird klickbar und führt auf eine eigene Detailseite. Dort steht die vollständige Anzeige mit einem gut sichtbaren **„Jetzt bewerben"-Button ohne Funktion** (kein Formular, kein Link).

## Umsetzung

### 1. Karriere-Übersicht (`/karriere`)
- Die aufklappbaren `<details>`-Anzeigen werden zu schlichten **Listenzeilen mit Weiterleitung**: Nummer, Titel, Kennzeichen (Vollzeit/Hamburg/etc.) und Pfeil.
- Klick führt zur Detailseite der jeweiligen Stelle.
- Der Hinweis „Mockup" bleibt erhalten.

### 2. Detailseiten (`/karriere/<stellenname>`)
- Eine dynamische Route, z. B. `/karriere/softwareentwickler`, `/karriere/it-berater`, `/karriere/systemadministrator`, `/karriere/werkstudent`.
- Aufbau je Stelle:
  1. PageIntro mit Titel der Position und Kennzeichen (Vollzeit, Hamburg, Einstiegslevel).
  2. Aufgaben und Profil als zwei klar strukturierte Blöcke.
  3. **„Jetzt bewerben"-Button** in Markenfarbe, bewusst ohne Funktion — kein Formular, kein E-Mail-Link, keine Aktion.
  4. Rückverweis „Alle Stellen ansehen" zurück zur Übersicht.
  5. ContactBand zum Abschluss.
- Eigene Seitentitel/Beschreibungen (Metadaten) pro Stelle.

### 3. Technik
- Die vier Stellen liegen in einer gemeinsamen Datendatei, aus der Übersicht und Detailseiten lesen — Inhalte nur einmal pflegen.
- Unbekannte Stellen-URLs zeigen eine saubere „Nicht gefunden"-Ansicht.
- Nach Umsetzung: Build-Prüfung und Sichtkontrolle Desktop + Mobil.
