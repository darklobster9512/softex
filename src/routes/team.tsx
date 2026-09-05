import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactBand, PageIntro, PageShell } from "../components/site-shell";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team: Beratung, Analyse & Entwicklung | softex.solutions" },
      { name: "description", content: "Das Team der Softex Unternehmensberatung & Software GmbH aus Hamburg: Beratung, Systemanalyse und Entwicklung aus einem Team." },
      { property: "og:title", content: "Team: Beratung, Analyse & Entwicklung | softex.solutions" },
      { property: "og:description", content: "Die Menschen hinter Beratung, Systemanalyse und Softwareentwicklung bei Softex." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

const members = [
  ["IL", "Istvan Limperger", "Geschäftsführung & Unternehmensberatung", "Verantwortet die strategische Ausrichtung und verbindet betriebswirtschaftliche Fragen mit technischen Entscheidungen."],
  ["SB", "Sandra Bergmann", "Systemanalyse", "Macht Prozesse, Schnittstellen und Abhängigkeiten sichtbar, bevor Lösungen entstehen."],
  ["MK", "Jonas Krämer", "Softwareentwicklung", "Entwickelt individuelle System- und Anwendungssoftware mit Fokus auf Wartbarkeit."],
  ["MK", "Mira Köhler", "Softwareentwicklung", "Setzt Anforderungen in klare, robuste Anwendungen um und begleitet die Einführung."],
  ["TW", "Tobias Wendt", "Hardware & Netzwerke", "Plant und betreut Infrastrukturen, die im Alltag verlässlich zusammenspielen."],
  ["AL", "Aylin Larsen", "Beratung & Projektleitung", "Hält Anforderungen, Zeitrahmen und Beteiligte über das gesamte Vorhaben zusammen."],
] as const;

function Team() {
  return (
    <PageShell>
      <PageIntro eyebrow="Unser Team" title="Die Menschen hinter den Systemen.">
        Beratung, Analyse, Entwicklung und Infrastruktur kommen bei uns aus einem Team — mit kurzen Wegen und klarer Verantwortung.
      </PageIntro>
      <section className="site-container py-20 md:py-28">
        <div className="section-heading"><div><p className="eyebrow">Wer Sie begleitet</p><h2 className="section-title">Kompakt besetzt,<br />eng verzahnt.</h2></div><p>Statt anonymer Bereiche arbeiten bei uns feste Ansprechpartnerinnen und Ansprechpartner — von der ersten Analyse bis zum laufenden Betrieb.</p></div>
        <div className="team-grid">
          {members.map(([initials, name, role, text]) => (
            <article className="member-card" key={name}>
              <div className="member-avatar" aria-hidden="true">{initials}</div>
              <h3>{name}</h3>
              <p className="member-role">{role}</p>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="site-container grid gap-10 md:grid-cols-3">
          {[["01", "Analytisch", "Wir stellen Fragen, bevor wir Empfehlungen geben — und dokumentieren, warum Entscheidungen fallen."], ["02", "Verantwortlich", "Jedes Vorhaben hat eine klare fachliche Verantwortung, die Sie immer erreichen."], ["03", "Pragmatisch", "Wir lösen das Problem, das es gibt — nicht das, das sich am aufwendigsten verkaufen ließe."]].map(([n, t, p]) => <article key={n} className="principle"><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}
        </div>
        <div className="site-container mt-16 flex flex-col gap-5 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-2xl font-semibold md:text-3xl">Sie möchten Teil dieses Teams werden?</h2>
          <Link to="/karriere" className="text-link shrink-0">Offene Stellen ansehen <ArrowUpRight size={17} /></Link>
        </div>
      </section>
      <ContactBand />
    </PageShell>
  );
}
