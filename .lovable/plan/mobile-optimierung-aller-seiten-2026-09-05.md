# Mobile-Optimierung aller Seiten

## Ziel

Alle öffentlichen Seiten von Softex werden für Smartphones und kleine Tablets sauber lesbar und komfortabel bedienbar. Das bestehende Erscheinungsbild, die Inhalte und die Markenfarbe bleiben unverändert.

## Umsetzung

1. **Gemeinsamer Seitenrahmen**
   - Kopfzeile auf ein stabiles mobiles Zwei-Spalten-Raster umstellen, damit Logo und Menüknopf auch bei sehr schmalen Breiten nicht kollidieren.
   - Das mobile Menü auf sichere Höhe, Scrollbarkeit, große Berührungsflächen und saubere Abstände optimieren.
   - Fußbereich, Kontaktband, lange E-Mail-Adressen und rechtliche Links gegen Überlauf absichern.

2. **Typografie und Abstände**
   - Seitentitel, Abschnittsüberschriften und Einleitungstexte auf feste mobile Größenstufen abstimmen.
   - Erzwungene Desktop-Zeilenumbrüche auf kleinen Bildschirmen neutralisieren, wo sie ungünstige Umbrüche erzeugen.
   - Vertikale Abstände kompakter und konsistent gestalten, ohne die großzügige Wirkung der Website zu verlieren.

3. **Startseite und Leistungsdarstellungen**
   - Einstieg, Aktionsknöpfe und Kompetenzbereiche für 320–430 px Breite ausrichten.
   - Die Systemgrafik mobil neu anordnen, damit Knoten, Beschriftungen und Verbindungslinien nicht überlappen.
   - Leistungs- und Prozesszeilen mit stabilen Spalten, flexiblen Textflächen und ausreichend großen Berührungszielen versehen.

4. **Unternehmen, Team und Karriereübersicht**
   - Prinzipien, Teamprofile und Stellenlisten auf eine klare einspaltige Lesereihenfolge bringen.
   - Lange Rollen- und Stellentitel umbrechen lassen, während Nummern und Pfeile stabil stehen bleiben.
   - Tags, Hinweise und Aktionszeilen so anpassen, dass nichts seitlich aus dem Bildschirm läuft.

5. **Stellendetails und Bewerbung**
   - Brotkrümelnavigation, lange Jobtitel, nummerierte Listen und Eckdaten für sehr schmale Geräte verfeinern.
   - Formularfelder, Auswahlfelder, Datenschutzhinweis, Rückmeldungen und Absendeaktion auf volle mobile Breite und gute Bedienbarkeit abstimmen.
   - Die bestehende Übermittlungslogik bleibt unverändert.

6. **Kontakt und Rechtliches**
   - Kontaktzeilen, Formular und lange Adressen/E-Mail-Links vor Überlauf schützen.
   - Impressum und Datenschutz mit gut lesbarer Zeilenlänge, mobilen Abständen und robusten Wortumbrüchen versehen.

7. **Abschließende Prüfung**
   - Jede Route auf 320 px, 390 px und Tabletbreite prüfen: Startseite, Leistungen, Unternehmen, Team, Karriere, jede Stellenansicht, Bewerbung, Kontakt, Impressum und Datenschutz.
   - Navigation, Formulare, Links und Menüzustände bedienen; horizontales Scrollen, Überlagerungen und abgeschnittene Texte ausschließen.
   - Anschließend den Produktions-Build prüfen.

## Technische Details

- Die Anpassungen erfolgen überwiegend in den bestehenden gemeinsamen CSS-Regeln und im gemeinsamen Seitenrahmen; einzelne Seiten werden nur dort geändert, wo ihre Struktur mobil eine eigene Lösung benötigt.
- Mobile Mehrfachzeilen verwenden `minmax(0, 1fr)`, schrumpfbare Textbereiche und feste Icon-Spalten.
- Bestehende Farben, Inhalte, Metadaten, Routen und Versandfunktionen werden nicht verändert.