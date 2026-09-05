import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Building2, CircuitBoard, Network, SearchCode } from "lucide-react";
import workspaceImage from "../assets/softex-workspace.jpg";
import { ContactBand, Footer, Header } from "../components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "softex.solutions | Beratung & Software aus Hamburg" }, { name: "description", content: "Softex verbindet Unternehmensberatung, Systemanalyse und individuelle Softwareentwicklung in Hamburg." }, { property: "og:title", content: "softex.solutions | Beratung & Software" }, { property: "og:description", content: "Von der Analyse bis zur Umsetzung: Technik, die zu Ihrem Unternehmen passt." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

const capabilities = [
  [Building2, "Unternehmensberatung", "Strategie und Technik werden in eine gemeinsame, belastbare Richtung gebracht."],
  [SearchCode, "Systemanalyse", "Prozesse, Schnittstellen und Risiken werden sichtbar, bevor Entscheidungen teuer werden."],
  [CircuitBoard, "Softwareentwicklung", "Individuelle System- und Anwendungssoftware, passend zu Ihren Abläufen."],
  [Network, "Hardware & Netzwerke", "Infrastruktur, die sicher zusammenspielt und langfristig wartbar bleibt."],
] as const;

function Index() {
  return (
    <><main><section className="home-hero"><img src={workspaceImage} width={1600} height={1000} alt="Technisches Team bei der gemeinsamen Systemplanung" className="hero-image" /><div className="hero-shade" /><Header inverse /><div className="site-container hero-content"><p className="eyebrow text-signal">Hamburg · Beratung & Entwicklung</p><h1>Komplexe Systeme.<br /><span>Klare Lösungen.</span></h1><p>Wir verbinden Unternehmensberatung, Systemanalyse und Softwareentwicklung — für Technik, die im Alltag Ihres Unternehmens besteht.</p><div className="mt-8 flex flex-wrap gap-3"><a href="mailto:kontakt@softex.solutions" className="button button-action">Projekt besprechen <ArrowUpRight size={18} /></a><a href="#kompetenzen" className="button button-ghost">Kompetenzen <ArrowDown size={18} /></a></div></div></section>
    <section id="kompetenzen" className="site-container py-20 md:py-28"><div className="section-heading"><div><p className="eyebrow">Was wir verbinden</p><h2 className="section-title">Vom Geschäftsprozess<br />bis zur technischen Basis.</h2></div><p>Gute Systeme entstehen nicht in isolierten Disziplinen. Deshalb denken wir Beratung, Software und Infrastruktur zusammen.</p></div><div className="capability-grid">{capabilities.map(([Icon,title,text], i) => <article className="capability" key={title}><div className="flex items-start justify-between"><Icon size={31} strokeWidth={1.4} /><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="system-stage"><div className="site-container grid items-center gap-14 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28"><div><p className="eyebrow text-signal">Systematisch vorgehen</p><h2 className="section-title text-primary-foreground">Nicht bei der Lösung anfangen. Beim Verstehen.</h2><p className="mt-6 max-w-lg leading-7 text-primary-foreground/65">Wir ordnen Anforderungen, machen Zusammenhänge sichtbar und schaffen eine technische Grundlage, die mit Ihrem Unternehmen wachsen kann.</p><Link to="/leistungen" className="text-link mt-8">Leistungen ansehen <ArrowUpRight size={17} /></Link></div><div className="architecture" aria-label="Darstellung unseres Vorgehens"><div className="arch-core">softex<span>.solutions</span></div>{["Analyse","Architektur","Entwicklung","Einführung"].map((x,i)=><div key={x} className={`arch-node node-${i+1}`}><small>0{i+1}</small>{x}</div>)}<svg viewBox="0 0 600 420" aria-hidden="true"><path d="M118 94 L300 210 L488 88 M300 210 L490 330 M300 210 L105 330" /></svg></div></div></section>
    <section className="site-container grid gap-12 py-20 md:grid-cols-2 md:py-28"><div><p className="eyebrow">Unser Anspruch</p><h2 className="section-title">Technische Sorgfalt ist kein Detail.</h2></div><div className="prose-block"><p>Entscheidungen sollen nachvollziehbar, Systeme wartbar und Lösungen angemessen sein. Wir reduzieren unnötige Komplexität, ohne schwierige Fragen zu vereinfachen.</p><div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-7"><div><strong className="text-xl">Klar</strong><span className="block text-sm text-muted-foreground">in Analyse und Kommunikation</span></div><div><strong className="text-xl">Belastbar</strong><span className="block text-sm text-muted-foreground">in Architektur und Betrieb</span></div></div></div></section><ContactBand /></main><Footer /></>
  );
}
