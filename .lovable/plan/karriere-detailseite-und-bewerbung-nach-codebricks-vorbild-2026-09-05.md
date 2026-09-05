# Karriere-Detailseite und Bewerbung nach Codebricks-Vorbild

## Ziel
Den Karrierebereich von Softex um den vollständigen Bewerbungsablauf aus dem Referenzprojekt erweitern, dabei aber Farben, Typografie und Seitengerüst der bestehenden Softex-Seite beibehalten.

## Umsetzung

1. **Stellendaten erweitern**
   - Das vorhandene Stellenmodell um Bereich, Standort, Arbeitsmodell, Kurzbeschreibung, Beschreibung, Benefits sowie optionale Arbeitszeit-, Gehalts- und Statusangaben ergänzen.
   - Die Stelle „Online-Tester:in für digitale Anwendungen (m/w/d)“ mit den Inhalten und Eckdaten aus dem Referenzprojekt übernehmen.
   - Die vorhandenen Softex-Stellen auf das erweiterte Modell anpassen, ohne unbelegte neue Unternehmensangaben zu erfinden.

2. **Karriere-Detailseite neu strukturieren**
   - Kopfbereich mit Bereich, Stellentitel, Kurzbeschreibung und Breadcrumb-Navigation.
   - Hauptbereich mit „Über die Position“, „Ihre Aufgaben“, „Ihr Profil“ und „Was wir bieten“.
   - Seitliche, auf großen Bildschirmen fixierte Eckdaten mit Standort, Modell, Arbeitszeit und gegebenenfalls Gehalt.
   - Beide „Jetzt bewerben“-Aktionen auf die neue Bewerbungsseite führen und die ausgewählte Stelle übergeben.
   - Rückweg zur Stellenübersicht und Softex-konforme mobile Darstellung ergänzen.

3. **Eigene Bewerbungsseite anlegen**
   - Neue Seite unter `/karriere/bewerbung` mit Vorname, Nachname, E-Mail, Telefon, Stelle und Anstellungsart.
   - Die Stelle aus der Detailseite automatisch vorauswählen; zusätzlich Initiativbewerbung und alle verfügbaren Stellen anbieten.
   - Pflichtfelder, Längen und E-Mail-Format prüfen sowie klare Lade-, Erfolgs- und Fehlerzustände anzeigen.
   - Datenschutzhinweis mit Link zur bestehenden Datenschutzerklärung integrieren.

4. **Übermittlung exakt aus dem Referenzprojekt übernehmen**
   - Formulardaten als `FormData` an dieselbe `submit-application`-Funktion senden.
   - Dieselbe Zielkennung und veröffentlichbare Zugriffskonfiguration verwenden.
   - Erfolgreiche Übermittlung bestätigen und das Formular zurücksetzen; Fehler verständlich ausgeben, ohne persönliche Daten zu protokollieren.

5. **Meta-Pixel und Metadaten**
   - Den Meta-Pixel aus dem Referenzprojekt inklusive `PageView` einbinden.
   - Bei erfolgreichem Absendeversuch das `Lead`-Event auslösen.
   - Für Karriereübersicht, jede Detailseite und die Bewerbungsseite eigene Titel, Beschreibungen, Open-Graph-Angaben und Twitter-Card-Metadaten setzen; nicht gefundene Stellen bleiben `noindex`.

6. **Abschlussprüfung**
   - Stellenübersicht, Online-Tester-Detailseite, vorausgefüllte Bewerbung, Validierung sowie Erfolgs- und Fehlerdarstellung prüfen.
   - Desktop- und Mobilansicht auf Überläufe, Lesbarkeit und Bedienbarkeit testen.
   - Build ausführen und sicherstellen, dass Navigation und Metadaten korrekt erzeugt werden.

## Technische Hinweise
- Die Umsetzung nutzt weiterhin TanStack Router und die bestehenden Softex-Komponenten und Design-Tokens; Codebricks dient als Struktur- und Funktionsreferenz, nicht als visuelle 1:1-Kopie.
- `/karriere/bewerbung` wird als konkrete Route vor `/karriere/$slug` berücksichtigt, damit sie nicht als Stellen-Slug behandelt wird.
- Die bereits im Referenzprojekt öffentlich im Browser verwendete Zugriffskonfiguration wird übernommen; private Schlüssel werden nicht in den Client eingebaut.