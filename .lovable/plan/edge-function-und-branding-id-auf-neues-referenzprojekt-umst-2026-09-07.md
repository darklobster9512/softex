# Edge Function und Branding-ID auf neues Referenzprojekt umstellen

## Ziel
Die Bewerbungsseite sendet das Formular an die Edge Function des neuen Referenzprojekts `vic-automation` und verwendet die neue Branding-ID.

## Umsetzung
- In `src/routes/karriere.bewerbung.tsx` die Konstante `API_URL` ändern:
  - Von: `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application`
  - Auf: `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`
- In derselben Datei die Konstante `BRANDING_ID` ändern:
  - Von: `3d99090e-d024-4da6-9d48-36bf66d11665`
  - Auf: `c8b88da1-4d0e-468d-ac60-9206aae888ac`
- In derselben Datei die Konstante `ANON_KEY` auf den passenden Publishable Key des neuen Projekts ändern:
  - Von: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhb3Z2bmF1cGRlY2VycHZ3em1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzEwNjUsImV4cCI6MjA5NDM0NzA2NX0.uXLnpeKILEDBoC8yCcX1ZL-hdlhFPUl-bVYcoxHKu2Y`
  - Auf: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6Z2Z5dWZ0anZlenFqa29zbnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3NDg2MTksImV4cCI6MjEwNDMyNDYxOX0.4bgK_e0ODXR1Jr-WXwIViMAtx6Ok7_4omAJOsC0r8BU`

## Validierung
- Produktions-Build (`bun run build`) ausführen, um sicherzustellen, dass die Änderung keine Typfehler verursacht.
- Kurze Sichtkontrolle der Bewerbungsseite, dass das Formular weiterhin lädt.
