import { createFileRoute } from "@tanstack/react-router";
import { Building2, CircuitBoard, Network, SearchCode } from "lucide-react";
import { ContactBand, PageIntro, PageShell } from "../components/site-shell";

export const Route = createFileRoute("/leistungen")({ head: () => ({ meta: [{ title: "Leistungen | softex.solutions" }, { name: "description", content: "Unternehmensberatung, Systemanalyse, Softwareentwicklung, Hardware und Netzwerke aus Hamburg." }, { property: "og:title", content: "Leistungen | softex.solutions" }, { property: "og:description", content: "Technologieberatung und Umsetzung aus einer Hand." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: Leistungen });

const services = [
  [Building2, "Unternehmensberatung", "Technische Entscheidungen werden zu tragfähigen Geschäftsentscheidungen — klar priorisiert und nachvollziehbar dokumentiert."],
  [SearchCode, "Systemanalyse", "Bestehende Abläufe, Schnittstellen und Abhängigkeiten werden sichtbar. Daraus entsteht ein belastbares Zielbild."],
  [CircuitBoard, "System- & Anwendungssoftware", "Individuelle Lösungen werden passend zu Prozessen, Nutzern und bestehender Systemlandschaft konzipiert und entwickelt."],
  [Network, "Hardware & Netzwerke", "Technische Infrastruktur wird als Teil des Gesamtsystems betrachtet — sicher, wartbar und auf den tatsächlichen Bedarf ausgelegt."],
] as const;

function Leistungen() { return <PageShell><PageIntro eyebrow="Leistungen" title="Technik, die zum Unternehmen passt.">Von der ersten Analyse bis zur Einführung verbinden wir strategische Beratung mit konsequenter technischer Umsetzung.</PageIntro><section className="site-container py-20 md:py-28"><div className="service-list">{services.map(([Icon, title, text], i) => <article key={title} className="service-row"><span className="service-number">0{i + 1}</span><Icon className="text-signal" size={30} strokeWidth={1.5} /><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></section><section className="bg-ink py-20 text-primary-foreground md:py-28"><div className="site-container"><p className="eyebrow text-signal">Unser Vorgehen</p><h2 className="section-title max-w-3xl">Vom unklaren Problem zur belastbaren Lösung.</h2><div className="mt-14 grid gap-px bg-primary-foreground/15 md:grid-cols-4">{["Verstehen", "Strukturieren", "Umsetzen", "Weiterentwickeln"].map((x, i) => <div key={x} className="bg-ink p-7"><span className="text-sm text-signal">0{i + 1}</span><h3 className="mt-12 text-xl font-semibold">{x}</h3></div>)}</div></div></section><ContactBand /></PageShell>; }
