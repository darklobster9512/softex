import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ContactBand, PageShell } from "../components/site-shell";
import { getJob } from "../lib/jobs";

export const Route = createFileRoute("/karriere/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return job;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Karriere bei softex.solutions` },
          { name: "description", content: `Stellenanzeige: ${loaderData.title} bei Softex in Hamburg.` },
          { property: "og:title", content: `${loaderData.title} | softex.solutions` },
          { property: "og:description", content: "Offene Stelle bei Softex in Hamburg." },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Stelle nicht gefunden | softex.solutions" },
          { name: "robots", content: "noindex" },
        ],
  }),
  notFoundComponent: JobNotFound,
  component: JobDetail,
});

function JobDetail() {
  const job = Route.useLoaderData();
  return (
    <PageShell>
      <section className="page-intro">
        <div className="site-container">
          <p className="eyebrow">Offene Stelle</p>
          <h1>{job.title}</h1>
          <div className="job-tags mt-6">{job.tags.map((tag) => <span key={tag} className="job-tag">{tag}</span>)}</div>
          <div className="mt-10"><button type="button" className="button button-action">Jetzt bewerben</button></div>
        </div>
      </section>
      <section className="site-container grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h2 className="job-section-title">Ihre Aufgaben</h2>
          <ul className="job-detail-list">{job.aufgaben.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h2 className="job-section-title">Ihr Profil</h2>
          <ul className="job-detail-list">{job.profil.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="site-container border-t border-border py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <button type="button" className="button button-action">Jetzt bewerben</button>
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
