Vite allowed host für softex.solutions konfigurieren

Ziel
- Vite akzeptiert im Entwicklungsbetrieb den Host `softex.solutions` ohne "blocked host"-Fehler.

Schritte
1. `vite.config.ts` öffnen.
2. Zusätzliche Vite-Konfiguration unter `vite.server.allowedHosts` ergänzen:
   ```ts
   export default defineConfig({
     tanstackStart: {
       server: { entry: "server" },
     },
     vite: {
       server: {
         allowedHosts: ["softex.solutions"],
       },
     },
   });
   ```
3. Build mit `bun run build` prüfen, um sicherzustellen, dass die Ergänzung das Bundling nicht stört.

Hinweis
- `allowedHosts` erlaubt eingehende Dev-Server-Anfragen mit diesem Host-Header. Es ersetzt nicht DNS/Hosting-Einstellungen für die öffentliche Domain.
