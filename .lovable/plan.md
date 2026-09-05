# Team-Seite: Rollen und Namen aktualisieren

## Ziel
Auf der Team-Seite (`/team`) zwei Einträge im `members`-Array korrigieren:

1. **Tobias Wendt**  
   Rolle ändern von `Hardware & Netzwerke` zu `Projektleiter`.

2. **Aylin Larsen**  
   Name auf einen deutschen Namen (`Anna Lehmann`) ändern.  
   Rolle ändern von `Beratung & Projektleitung` zu `Recruiter`.  
   Initialen bleiben passend bei `AL`.

## Technische Umsetzung
- Datei: `src/routes/team.tsx`, Zeilen 26–27 im `members`-Array.
- Keine weiteren Seiten oder Komponenten betroffen.
- Nach der Änderung Build-Prüfung (`bun run build`) und Sichtkontrolle der Team-Seite.
