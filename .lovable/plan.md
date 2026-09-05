# Branding-ID in Bewerbungsformular aktualisieren

## Ziel
Die an die Edge Function übermittelte Branding-ID wird auf den neuen Wert `3d99090e-d024-4da6-9d48-36bf66d11665` umgestellt.

## Umsetzung
- In `src/routes/karriere.bewerbung.tsx` die Konstante `BRANDING_ID` von `56aa260c-f3bc-44d3-a37b-ceb3ba01d2d9` auf `3d99090e-d024-4da6-9d48-36bf66d11665` ändern.
- Keine weiteren Stellen im Code betroffen; die ID wird ausschließlich als FormData-Feld `branding_id` an die Edge Function gesendet.

## Validierung
- Produktions-Build (`bun run build`) ausführen, um sicherzustellen, dass die Änderung keine Typfehler verursacht.
- Kurze Sichtkontrolle der Bewerbungsseite, dass das Formular weiterhin lädt.
