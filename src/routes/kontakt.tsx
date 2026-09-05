import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { PageShell } from "../components/site-shell";

export const Route = createFileRoute("/kontakt")({ head: () => ({ meta: [{ title: "Kontakt | softex.solutions" }, { name: "description", content: "Kontakt zur Softex Unternehmensberatung & Software GmbH in Hamburg." }, { property: "og:title", content: "Kontakt | softex.solutions" }, { property: "og:description", content: "Sprechen Sie mit uns über Ihr technisches Vorhaben." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: Kontakt });

function Kontakt() {
  return (
    <PageShell>
      <section className="contact-page">
        <div className="site-container">
          <p className="eyebrow text-signal">Kontakt</p>
          <h1>Ein gutes System beginnt<br />mit einem guten Gespräch.</h1>
          <p className="page-lead">Schildern Sie uns kurz Ihre Ausgangslage. Wir melden uns persönlich bei Ihnen.</p>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="grid content-start gap-4">
              <a href="mailto:kontakt@softex.solutions" className="contact-tile"><Mail /><span><small>E-Mail</small>kontakt@softex.solutions</span></a>
              <div className="contact-tile"><MapPin /><span><small>Hamburg</small>Langwisch 2 · 22391 Hamburg</span></div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <p className="eyebrow text-signal">Schreiben Sie uns</p>
              <div className="mt-4">
                <div className="form-field">
                  <label htmlFor="kontakt-name">Name</label>
                  <input id="kontakt-name" name="name" type="text" autoComplete="name" placeholder="Ihr Name" />
                </div>
                <div className="form-field">
                  <label htmlFor="kontakt-mail">E-Mail</label>
                  <input id="kontakt-mail" name="email" type="email" autoComplete="email" placeholder="name@unternehmen.de" />
                </div>
                <div className="form-field">
                  <label htmlFor="kontakt-firma">Unternehmen <span className="font-normal opacity-60">(optional)</span></label>
                  <input id="kontakt-firma" name="company" type="text" autoComplete="organization" placeholder="Muster GmbH" />
                </div>
                <div className="form-field">
                  <label htmlFor="kontakt-nachricht">Nachricht</label>
                  <textarea id="kontakt-nachricht" name="message" rows={5} placeholder="Worum geht es in Ihrem Vorhaben?" />
                </div>
                <button type="submit" className="button button-action">Nachricht senden</button>
                <p className="form-note">Beispiel-Formular — es wird nichts versendet. Bitte kontaktieren Sie uns direkt per E-Mail.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
