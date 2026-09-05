# Website-Plan für softex.solutions

## Zielbild

Eine eigenständige, hochwertige B2B-Website für **Softex Unternehmensberatung & Software GmbH**: selbstbewusst, technisch kompetent und zugleich menschlich. Die Referenz dient als gestalterische Leitplanke, wird aber nicht kopiert. Übernommen werden ihre Prinzipien — große visuelle Einstiege, klare Typografie, produktnahe Illustrationen, starke Kontraste und großzügige Inhaltsflächen.

Die erste Version positioniert softex.solutions rund um Unternehmensberatung, Systemanalyse sowie die Entwicklung von System- und Anwendungssoftware, Hardware und Netzwerken. Nicht belegte Kunden, Projekte, Kennzahlen oder Leistungsversprechen werden nicht erfunden.

## Analyse der Referenz

### Visuelle Grundidee
- Die Startseite beginnt mit einem dunklen, fotografischen Vollbildbereich und weißer Navigation; dadurch entsteht sofort Atmosphäre und Vertrauen.
- Darunter wechseln helle Inhaltsflächen mit dunkleren, produktähnlichen Erlebnisbereichen.
- Software wird nicht abstrakt erklärt, sondern über UI-Fragmente, Screens, Icons und kleine Interaktionen sichtbar gemacht.
- Große Freiflächen, klar begrenzte Textbreiten und wenige starke Farben sorgen trotz langer Seiten für Ruhe.
- Beweise wie Partnerlogos, Kennzahlen, Kundenstimmen und Projekte sind feste Bestandteile der Erzählung.

### Typografie und Hierarchie
- Sachliche Grotesk-Schrift mit kräftigen, kompakten Überschriften und gut lesbarem Fließtext.
- Große Seitentitel, kurze Einleitungen und deutlich kleinere Metadaten erzeugen klare Ebenen.
- Überschriften enthalten teilweise bewusste Zeilenumbrüche oder farbige Schlüsselbegriffe.
- Artikel- und Case-Study-Seiten nutzen schmale Lesespalten und einen stärker redaktionellen Rhythmus.

### Farben
- Neutrale Basis aus Weiß, sehr hellem Grau, Anthrazit und fast schwarzem Overlay.
- Leuchtendes Cyan/Blau als technischer Hauptakzent.
- Grün für positive Handlungen und einzelne warme Akzente für visuelle Spannung.
- Farbe wird gezielt eingesetzt; die großen Flächen bleiben überwiegend neutral.

### Raster und Abstände
- Breiter, zentrierter Inhaltsrahmen mit großzügigen Seitenrändern.
- Desktop meist 12-Spalten-Logik; Text und Medien stehen asymmetrisch, aber sauber ausgerichtet.
- Große vertikale Abstände zwischen Themenblöcken, engere Abstände innerhalb zusammengehöriger Inhalte.
- Wiederkehrende Wechsel aus Text, großen Bildern, Projektgittern und Beweisblöcken verhindern Monotonie.

### Seitentypen
- **Startseite:** atmosphärischer Einstieg, interaktive Leistungsdarstellung, Partner, Stimmen, Kennzahlen, Arbeiten und Kontaktimpuls.
- **Leistungen:** große Einleitung, Prozess in nummerierten Etappen, modular aufgebaute Leistungsangebote und Teamrollen.
- **Portfolio:** bildstarke Projektübersicht, Kategorien und Filter, danach ein umfangreiches Projektraster.
- **Case Study:** projektbezogene Farbwelt, große Produkt-Screens, kurze Faktenblöcke zu Geschichte, Technik und Verantwortlichkeiten.
- **Kontakt:** besonders reduzierte Gestaltung mit großem Titel, Standorten und direkter E-Mail als Hauptaktion.
- **Blog:** redaktioneller Kopf, Metadaten und eine fokussierte Langtextspalte mit klarer H2/H3-Hierarchie.

## Vorgeschlagenes Designsystem

### 1. Farbrollen
- **Canvas:** gebrochenes Weiß für lange Inhaltsseiten.
- **Ink:** tiefes Anthrazit statt reinem Schwarz für Text und dunkle Flächen.
- **Surface:** kühles Hellgrau für Filter, Tabellen, Prozessschritte und Sekundärbereiche.
- **Signal:** klares Cyan als Hauptakzent für Links, aktive Zustände und Schlüsselwörter.
- **Action:** kontrastreiches Grün ausschließlich für primäre Handlungen.
- **Warm accent:** Gelb oder Koralle sparsam für Marker, Zahlen und kleine Illustrationsdetails.
- Alle Rollen werden als semantische Tokens angelegt und auf ausreichenden Kontrast geprüft.

### 2. Typografie
- Markante groteske Display-Schrift für H1–H3; neutrale, sehr lesbare Sans-Serif für Fließtext und UI.
- H1 groß und kompakt, aber nicht viewport-basiert skaliert; feste responsive Größenstufen.
- Fließtext auf etwa 60–72 Zeichen pro Zeile begrenzen.
- Metadaten, Filter und Labels kleiner, aber mit ausreichend Kontrast; keine übermäßige Versalschrift.
- Keine negative Laufweite.

### 3. Layoutsystem
- Maximalbreite etwa 1200–1280 px mit klaren Seitenrändern.
- 12 Spalten auf Desktop, 6 auf Tablet, 4 auf Mobil.
- Drei feste Abschnittsabstände: kompakt, regulär und großzügig.
- Bild- und Medienformate erhalten stabile Seitenverhältnisse, damit Seiten beim Laden nicht springen.
- Keine verschachtelten Kartenlandschaften; größere Themen bleiben offene Seitenabschnitte.

### 4. Wiederverwendbare Bausteine
- Transparente Navigation über dunklem Einstieg, danach kontrastreiche feste Variante beim Scrollen.
- Vollbreiter Einstieg mit Foto oder Video, dunklem Overlay, H1 und kurzer Positionierung.
- Abschnittskopf mit Titel, kurzer Erklärung und optionaler Aktion.
- Produkt-Demo-Bühne mit echten UI-Screens oder eigens gestalteten Interface-Fragmenten.
- Prozessleiste mit großen Nummern und verbundenen Etappen.
- Projektkarte mit großem Bild, Titel, Kurzbeschreibung und Kategorien.
- Filterleiste für Projekttyp, Technologie und Jahr.
- Kundenstimme ohne dekorative Kartenverschachtelung, mit Person, Rolle und Prüfsiegel.
- Kennzahlenband, Partnerlogo-Reihe, kompakte CTA-Zeile und umfangreicher Footer.
- Blog-Leselayout mit Inhaltsbreite, Bildunterschriften, Zitat- und Hinweisstil.

## Seitenaufbau für softex.solutions

### Startseite
1. Filmischer Einstieg mit „softex.solutions“ als klarer erster Blickfang und einer Positionierung rund um Beratung und maßgeschneiderte Software.
2. Vier Kompetenzfelder: Unternehmensberatung, Systemanalyse, Softwareentwicklung sowie Hardware & Netzwerke.
3. Ein produktnaher Prozess von Analyse über Konzeption und Entwicklung bis zur Einführung.
4. Vertrauensbereich über Arbeitsweise und technische Sorgfalt — ohne erfundene Logos, Kennzahlen oder Referenzen.
5. Klarer Kontaktabschluss mit `kontakt@softex.solutions`.

### Leistungen
1. Heller oder farbiger Seiteneinstieg statt identischer Startseiten-Kopie.
2. Vier klare Kategorien entsprechend dem Unternehmensgegenstand.
3. Nummerierter Prozess mit wechselndem Text-Bild-Rhythmus.
4. Konkrete Ergebnisse je Leistung, sachlich formuliert und ohne unbestätigte Branchenbehauptungen.
5. Kontaktaktion für ein Erstgespräch per E-Mail.

### Unternehmen
1. Prägnante Vorstellung der Softex Unternehmensberatung & Software GmbH.
2. Arbeitsweise mit Fokus auf Analyse, belastbare Lösungen und langfristige Nutzbarkeit.
3. Rechtliche Firmendaten kompakt und transparent verlinkt.
4. Kontaktabschluss.

### Kontakt
1. Großer, ruhiger Titel und eine klare Einladung.
2. Direkte Kontaktmöglichkeit über `kontakt@softex.solutions`.
3. Geschäftsanschrift: Langwisch 2, 22391 Hamburg.
4. Kein funktionsloses Formular in der ersten Version; Kontakt läuft verlässlich per E-Mail.

### Impressum
1. Softex Unternehmensberatung & Software GmbH.
2. Langwisch 2, 22391 Hamburg.
3. Amtsgericht Hamburg, HRB 163770.
4. Geschäftsführer: Istvan Limperger.
5. Kontakt: `kontakt@softex.solutions`.

### Datenschutz
Eine separate, klar strukturierte Seite als Platzhalter für die rechtlich zu prüfende Datenschutzerklärung. Es werden keine zusätzlichen Analyse-, Tracking- oder Formular-Dienste eingebaut, solange deren rechtliche Angaben nicht vorliegen.

## Bild- und Illustrationsstil
- Echte Produktoberflächen, Prozessdetails und Teamsituationen statt beliebiger Stockfotos.
- Einstiegsbilder dürfen atmosphärisch sein, müssen das Arbeitsumfeld aber klar erkennen lassen.
- Projektbilder werden groß, scharf und möglichst unbeschnitten gezeigt.
- Illustrationen orientieren sich an Software-Bausteinen: Cursor, Fenster, Statuspunkte, Diagramme, Nutzerchips und Verbindungslinien.
- Einheitliche Perspektive, Schattenlogik und Akzentfarben für alle eigens erstellten UI-Motive.

## Bewegung und Interaktion
- Ruhige Einblendungen und leichte Verschiebungen beim Eintritt in den sichtbaren Bereich.
- Produkt-Demos reagieren gezielt auf Klick oder Hover, ohne den Inhalt zu verdecken.
- Filterwechsel und Projektbilder erhalten kurze, funktionale Übergänge.
- Navigation wechselt beim Scrollen kontrolliert ihren Kontrast.
- Alle Bewegungen respektieren „Bewegung reduzieren“; keine dauerhaften dekorativen Animationen.

## Responsive Verhalten
- Navigation wird mobil zu einem klaren Vollbildmenü.
- Zweispaltige Bereiche stapeln sich in inhaltlich sinnvoller Reihenfolge.
- Projektfilter werden horizontal scrollbar oder in einem kompakten Auswahlmenü gebündelt.
- Große Screens bleiben in stabilen Seitenverhältnissen sichtbar und werden nicht unleserlich verkleinert.
- Typografie, Abstände und Aktionen werden über feste Breakpoints abgestuft; keine Überlagerungen.

## Qualitätskriterien
- Eigenständige Marke statt visueller Kopie der Referenz.
- Ein H1 pro Seite, klare Überschriftenfolge und individuelle Seitentitel/Beschreibungen.
- Tastaturbedienbare Navigation, Filter, Formulare und Demos.
- Kontrast mindestens WCAG AA, sichtbare Fokuszustände und aussagekräftige Alternativtexte.
- Bilder in modernen Formaten, bedarfsgerecht geladen; erster sichtbarer Bereich priorisiert.
- Prüfung auf Desktop, Tablet und Mobil sowie mit reduzierter Bewegung.

## Umsetzungsreihenfolge
1. Farb-, Typografie-, Raster- und Bewegungs-Tokens für softex.solutions definieren.
2. Navigation, Footer und wiederverwendbare Inhaltsbausteine erstellen.
3. Startseite als visuelle Referenz für das gesamte System umsetzen.
4. Leistungen, Unternehmen, Kontakt, Impressum und Datenschutz als eigene Seiten ableiten.
5. Passende, eigenständige Medien und Software-Visuals lokal einpflegen.
6. Responsivität, Zugänglichkeit, Ladezeit und individuelle Metadaten abschließend prüfen.

## Technische Leitplanken
- Umsetzung innerhalb des vorhandenen React-/Tailwind-Systems mit semantischen Design-Tokens.
- Jede Inhaltsseite erhält eine eigene Seitenstruktur und Metadaten.
- Interaktionen werden komponentenbasiert aufgebaut; Animationen bleiben leichtgewichtig und zweckgebunden.
- Medien werden lokal im Projekt verwaltet, nicht von fremden Websites eingebunden.
