import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { PageShell } from "../components/site-shell";

export const Route = createFileRoute("/kontakt")({ head: () => ({ meta: [{ title: "Kontakt | softex.solutions" }, { name: "description", content: "Kontakt zur Softex Unternehmensberatung & Software GmbH in Hamburg." }, { property: "og:title", content: "Kontakt | softex.solutions" }, { property: "og:description", content: "Sprechen Sie mit uns über Ihr technisches Vorhaben." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: Kontakt });

function Kontakt() {
  return (
    <PageShell>
      <section className="contact-intro">
        <div className="site-container">
          <p className="eyebrow text-signal">Kontakt</p>
          <h1>Ein gutes System beginnt<br />mit einem guten Gespräch.</h1>
          <p className="page-lead">Schildern Sie uns Ihre Ausgangslage. Wir hören zu, stellen die richtigen Fragen und melden uns persönlich bei Ihnen.</p>
        </div>
      </section>

      <section className="contact-workspace">
        <div className="site-container contact-layout">
          <div className="contact-direct">
            <p className="eyebrow text-signal">Direkter Kontakt</p>
            <h2>Persönlich erreichbar.<br />Verbindlich im Austausch.</h2>
            <p className="contact-copy">Sie möchten ein Vorhaben besprechen oder prüfen, ob wir fachlich zusammenpassen? Schreiben Sie uns direkt oder nutzen Sie das Formular.</p>

            <div className="contact-list">
              <a href="mailto:kontakt@softex.solutions" className="contact-row">
                <Mail aria-hidden="true" />
                <span><small>E-Mail</small>kontakt@softex.solutions</span>
                <ArrowUpRight className="contact-row-arrow" aria-hidden="true" />
              </a>
              <div className="contact-row">
                <MapPin aria-hidden="true" />
                <span><small>Standort Hamburg</small>Langwisch 2 · 22391 Hamburg</span>
              </div>
            </div>
          </div>

          <div className="contact-form-column">
            <p className="eyebrow text-signal">Nachricht senden</p>
            <h2>Worum geht es?</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-grid">
                <div className="form-field">
                  <label htmlFor="kontakt-name">Name</label>
                  <input id="kontakt-name" name="name" type="text" autoComplete="name" placeholder="Ihr Name" />
                </div>
                <div className="form-field">
                  <label htmlFor="kontakt-mail">E-Mail</label>
                  <input id="kontakt-mail" name="email" type="email" autoComplete="email" placeholder="name@unternehmen.de" />
                </div>
                <div className="form-field form-field-wide">
                  <label htmlFor="kontakt-firma">Unternehmen <span className="font-normal opacity-60">(optional)</span></label>
                  <input id="kontakt-firma" name="company" type="text" autoComplete="organization" placeholder="Muster GmbH" />
                </div>
                <div className="form-field form-field-wide">
                  <label htmlFor="kontakt-nachricht">Nachricht</label>
                  <textarea id="kontakt-nachricht" name="message" rows={5} placeholder="Worum geht es in Ihrem Vorhaben?" />
                </div>
              </div>
              <div className="contact-form-footer">
                <button type="submit" className="button button-action">Nachricht senden <ArrowUpRight size={16} aria-hidden="true" /></button>
                <p className="form-note">Beispiel-Formular — es wird nichts versendet. Bitte kontaktieren Sie uns direkt per E-Mail.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
