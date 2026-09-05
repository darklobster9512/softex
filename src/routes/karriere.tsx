import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ContactBand, PageIntro, PageShell } from "../components/site-shell";

export const Route = createFileRoute("/karriere")({
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

const jobs = [
  {
    title: "Softwareentwickler/in (m/w/d) — System- & Anwendungssoftware",
    tags: ["Vollzeit", "Hamburg", "Berufserfahren"],
    aufgaben: ["Entwicklung individueller System- und Anwendungssoftware für unsere Kunden", "Umsetzung von Anforderungen aus Analyse und Konzeption", "Wartung und Weiterentwicklung bestehender Lösungen", "Enge Zusammenarbeit mit Beratung und Kundenteams"],
    profil: ["Mehrjährige Erfahrung in der Softwareentwicklung", "Sicherer Umgang mit mindestens einer modernen Programmiersprache", "Verständnis für Architektur, Schnittstellen und saubere Dokumentation", "Strukturierte, eigenverantwortliche Arbeitsweise"],
  },
  {
    title: "IT-Berater/in (m/w/d) — Unternehmensberatung & Systemanalyse",
    tags: ["Vollzeit oder Teilzeit", "Hamburg", "Berufserfahren"],
    aufgaben: ["Analyse von Geschäftsprozessen und bestehenden Systemlandschaften", "Ableitung belastbarer technischer und organisatorischer Empfehlungen", "Begleitung von Entscheidungen zwischen Fachbereich und Technik", "Vorbereitung und Moderation von Workshops beim Kunden"],
    profil: ["Erfahrung in IT-Beratung, Systemanalyse oder vergleichbarer Rolle", "Gespür für Organisation, Kommunikation und technische Zusammenhänge", "Souveränes Auftreten und klare schriftliche Ausdrucksweise", "Interesse an langfristigen, nachvollziehbaren Lösungen"],
  },
  {
    title: "Systemadministrator/in (m/w/d) — Hardware & Netzwerke",
    tags: ["Vollzeit", "Hamburg", "Berufserfahren"],
    aufgaben: ["Planung, Aufbau und Betrieb von Hardware- und Netzwerkumgebungen", "Pflege und Absicherung bestehender Infrastrukturen", "Störungssuche und strukturierte Fehlerbehebung im Kundenumfeld", "Dokumentation und Übergabe wartbarer Umgebungen"],
    profil: ["Abgeschlossene Ausbildung im IT-Umfeld oder vergleichbare Erfahrung", "Fundierte Kenntnisse in Netzwerktechnik und Systemadministration", "Sorgfältige, serviceorientierte Arbeitsweise", "Führerschein Klasse B von Vorteil"],
  },
  {
    title: "Werkstudent/in (m/w/d) — Softwareentwicklung",
    tags: ["Teilzeit", "Hamburg", "Studierende"],
    aufgaben: ["Mitarbeit an realen Kundenprojekten in der Softwareentwicklung", "Umsetzung eigener Teilaufgaben mit erfahrener Ansprechperson", "Unterstützung bei Tests, Dokumentation und Qualitätssicherung", "Einblick in Analyse, Konzeption und Projektablauf"],
    profil: ["Laufendes Studium der Informatik oder eines verwandten Fachs", "Erste praktische Programmiererfahrung", "Lust, Verantwortung zu übernehmen und Fragen zu stellen", "Ca. 15–20 Stunden pro Woche, flexibel planbar"],
  },
] as const;

function JobPosting({ job, index }: { job: (typeof jobs)[number]; index: number }) {
  return (
    <details className="job-posting" name="stellen">
      <summary>
        <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="job-head">
          <span className="job-title">{job.title}</span>
          <span className="job-tags">{job.tags.map((tag) => <span key={tag} className="job-tag">{tag}</span>)}</span>
        </span>
        <ChevronDown className="job-chevron" size={20} aria-hidden="true" />
      </summary>
      <div className="job-body">
        <div><h3>Ihre Aufgaben</h3><ul>{job.aufgaben.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><h3>Ihr Profil</h3><ul>{job.profil.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <p className="job-apply">Bewerbung per E-Mail an <a href={`mailto:kontakt@softex.solutions?subject=${encodeURIComponent(`Bewerbung: ${job.title}`)}`}>kontakt@softex.solutions</a></p>
      </div>
    </details>
  );
}

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
          <div className="section-heading"><div><p className="eyebrow">Offene Stellen</p><h2 className="section-title">Aktuelle Stellenangebote.</h2></div><p>Klicken Sie eine Position an, um Aufgaben und Anforderungen zu sehen. Alle Angaben sind Beispiel-Texte und können angepasst werden.</p></div>
          <div className="job-list">
            {jobs.map((job, i) => <JobPosting key={job.title} job={job} index={i} />)}
          </div>
          <p className="mockup-note">Hinweis: Diese Stellenanzeigen sind Mockups zur Veranschaulichung des Formats.</p>
        </div>
      </section>
      <section className="site-container grid gap-10 py-20 md:grid-cols-2 md:py-28">
        <h2 className="section-title">Nichts Passendes dabei?</h2>
        <div className="prose-block">
          <p>Initiativbewerbungen sind willkommen. Schreiben Sie uns kurz, womit Sie sich auskennen und woran Sie arbeiten möchten — Betreff: „Initiativbewerbung".</p>
          <a className="button button-dark mt-8" href="mailto:kontakt@softex.solutions?subject=Initiativbewerbung">Initiativ bewerben <ArrowUpRight size={17} /></a>
        </div>
      </section>
      <ContactBand />
    </PageShell>
  );
}
