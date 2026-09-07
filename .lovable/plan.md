# Edge Function und Branding-ID in Bewerbungsformular aktualisieren

## Ziel
Die Bewerbungsseite sendet das Formular an die neue Edge Function und verwendet die neue Branding-ID.

## Umsetzung
- In `src/routes/karriere.bewerbung.tsx` die Konstante `API_URL` ändern:
  - Von: `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application`
  - Auf: `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`
- In derselben Datei die Konstante `BRANDING_ID` ändern:
  - Von: `3d99090e-d024-4da6-9d48-36bf66d11665`
  - Auf: `c8b88da1-4d0e-468d-ac60-9206aae888ac`

## Validierung
- Produktions-Build (`bun run build`) ausführen, um sicherzustellen, dass die Änderung keine Typfehler verursacht.
- Kurze Sichtkontrolle der Bewerbungsseite, dass das Formular weiterhin lädt.
