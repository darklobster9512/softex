# Navbar-Link und Bewerbungsseite-Abstand

## Ziel

Zwei kleine UX-Verbesserungen an der bestehenden Softex-Website.

## Umsetzung

1. **„Projekt anfragen" in der Navigation zur Kontaktseite führen**
   - In `src/components/site-shell.tsx` den `mailto:`-Link im Header und im mobilen Menü durch `<Link to="/kontakt">` ersetzen.
   - Beschriftung und Icon beibehalten.

2. **Abstand auf `/karriere/bewerbung` verringern**
   - Den vertikalen Abstand zwischen dem Einleitungstext („Kurze Angaben genügen …") und dem Formularbereich reduzieren.
   - Anpassung über die bestehenden Utility-Klassen oder einen gezielten CSS-Regel in `src/styles.css`, ohne das mobile Layout zu beschädigen.

## Abschlussprüfung

- Vorschau auf Desktop und Mobil prüfen: Navbar-Link führt zu `/kontakt`, Formular rückt näher an den Text heran.
- Produktions-Build ausführen.
