import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Clock3, Euro, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { ContactBand, PageShell } from "../components/site-shell";
import { getJob } from "../lib/jobs";

export const Route = createFileRoute("/karriere/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return job;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Karriere bei softex.solutions` },
          { name: "description", content: loaderData.kurzbeschreibung },
          { property: "og:title", content: `${loaderData.title} | softex.solutions` },
          { property: "og:description", content: loaderData.kurzbeschreibung },
          { property: "og:type", content: "website" },
          { property: "og:url", content: `/karriere/${params.slug}` },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Stelle nicht gefunden | softex.solutions" },
          { name: "robots", content: "noindex" },
        ],
    links: loaderData ? [{ rel: "canonical", href: `/karriere/${params.slug}` }] : [],
  }),
  notFoundComponent: JobNotFound,
  component: JobDetail,
});

function JobDetail() {
  const job = Route.useLoaderData();
  return (
    <PageShell>
      <section className="page-intro job-hero">
        <div className="site-container">
          <nav className="job-breadcrumb" aria-label="Brotkrümelnavigation"><Link to="/">Start</Link><span>/</span><Link to="/karriere">Karriere</Link><span>/</span><span>{job.bereich}</span></nav>
          <p className="eyebrow text-signal">Karriere · {job.bereich}</p>
          <h1>{job.title}</h1>
          <p className="page-lead">{job.kurzbeschreibung}</p>
        </div>
      </section>
      <section className="job-detail-stage">
        <div className="site-container job-detail-layout">
          <div className="job-detail-copy">
            <div className="job-copy-section"><p className="eyebrow text-signal">Über die Position</p><p className="job-description">{job.beschreibung}</p></div>
            {[{ title: "Ihre Aufgaben", items: job.aufgaben }, { title: "Ihr Profil", items: job.profil }, { title: "Was wir bieten", items: job.benefits }].map((section, index) => (
              <div className="job-copy-section" key={section.title}><p className="job-section-index">0{index + 1}</p><h2>{section.title}</h2><ul className="job-detail-list">{section.items.map((item, itemIndex) => <li key={item}><span>— {String(itemIndex + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ul></div>
            ))}
          </div>
          <aside className="job-facts">
            <p className="eyebrow text-signal">Eckdaten</p>
            <ul>
              <li><MapPin aria-hidden="true" /><span><small>Standort</small>{job.standort}</span></li>
              <li><BriefcaseBusiness aria-hidden="true" /><span><small>Modell</small>{job.modell}</span></li>
              {job.arbeitszeit && <li><Clock3 aria-hidden="true" /><span><small>Arbeitszeit</small>{job.arbeitszeit}</span></li>}
              {job.gehalt && <li><Euro aria-hidden="true" /><span><small>Vergütung</small>{job.gehalt}</span></li>}
            </ul>
            <Button asChild className="button button-action job-apply-button"><Link to="/karriere/bewerbung" search={{ stelle: job.title }}>Jetzt bewerben <ArrowRight aria-hidden="true" /></Link></Button>
            <p className="job-contact">Direkter Kontakt: <a href="mailto:kontakt@softex.solutions">kontakt@softex.solutions</a></p>
          </aside>
        </div>
      </section>
      <section className="site-container border-t border-border py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Button asChild className="button button-action"><Link to="/karriere/bewerbung" search={{ stelle: job.title }}>Jetzt bewerben <ArrowRight aria-hidden="true" /></Link></Button>
          <Link to="/karriere" className="text-link"><ArrowLeft size={17} /> Alle Stellen ansehen</Link>
        </div>
      </section>
      <ContactBand />
    </PageShell>
  );
}

function JobNotFound() {
  return (
    <PageShell>
      <section className="page-intro">
        <div className="site-container">
          <p className="eyebrow">Karriere</p>
          <h1>Diese Stelle wurde nicht gefunden.</h1>
          <p className="page-lead">Vielleicht wurde die Position bereits besetzt. Alle aktuellen Angebote finden Sie in der Übersicht.</p>
          <div className="mt-10"><Link to="/karriere" className="button button-dark">Alle Stellen ansehen <ArrowLeft size={17} /></Link></div>
        </div>
      </section>
    </PageShell>
  );
}
