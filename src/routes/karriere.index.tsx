import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ContactBand, PageIntro, PageShell } from "../components/site-shell";
import { jobs } from "../lib/jobs";

export const Route = createFileRoute("/karriere/")({
  head: () => ({
    meta: [
      { title: "Karriere | softex.solutions" },
      { name: "description", content: "Offene Stellen bei Softex in Hamburg: Beratung, Softwareentwicklung und Infrastruktur. Bewerbung per E-Mail an kontakt@softex.solutions." },
      { property: "og:title", content: "Karriere | softex.solutions" },
      { property: "og:description", content: "Arbeiten an Systemen, die im Alltag bestehen: offene Stellen bei Softex in Hamburg." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Karriere,
});

function Karriere() {
  return (
    <PageShell>
      <PageIntro eyebrow="Karriere" title="Arbeiten an Systemen, die im Alltag bestehen.">
        Wir suchen Menschen, die Technik verstehen und Verantwortung mögen — in einem Team, das Beratung, Entwicklung und Infrastruktur zusammendenkt.
      </PageIntro>
      <section className="site-container py-20 md:py-28">
        <div className="section-heading"><div><p className="eyebrow">Was wir bieten</p><h2 className="section-title">Kleines Team,<br />echte Verantwortung.</h2></div><p>Bei uns arbeiten Sie direkt an Projekten und Entscheidungen — nicht an Folien für andere.</p></div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
          {["Echte Projekte vom ersten Tag an", "Kurze Wege und feste Ansprechpartner", "Arbeitsplatz in Hamburg", "Flexible Arbeitszeiten nach Absprache"].map((text) => <div key={text} className="bg-background p-6 text-sm font-semibold leading-6">{text}</div>)}
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="site-container">
          <div className="section-heading"><div><p className="eyebrow">Offene Stellen</p><h2 className="section-title">Aktuelle Stellenangebote.</h2></div><p>Klicken Sie eine Position an, um Aufgaben, Anforderungen und Eckdaten zu lesen.</p></div>
          <div className="job-list">
            {jobs.map((job, i) => (
              <Link key={job.slug} to="/karriere/$slug" params={{ slug: job.slug }} className="job-row">
                <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="job-head">
                  <span className="job-title">{job.title}</span>
                  <span className="job-tags">{job.tags.map((tag) => <span key={tag} className="job-tag">{tag}</span>)}</span>
                </span>
                <ArrowRight className="job-chevron" size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="site-container grid gap-10 py-20 md:grid-cols-2 md:py-28">
        <h2 className="section-title">Nichts Passendes dabei?</h2>
        <div className="prose-block">
          <p>Initiativbewerbungen sind willkommen. Schreiben Sie uns kurz, womit Sie sich auskennen und woran Sie arbeiten möchten — Betreff: „Initiativbewerbung".</p>
          <Link className="button button-dark mt-8" to="/karriere/bewerbung" search={{ stelle: "Initiativbewerbung" }}>Initiativ bewerben <ArrowUpRight size={17} /></Link>
        </div>
      </section>
      <ContactBand />
    </PageShell>
  );
}
