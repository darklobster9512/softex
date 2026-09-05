export interface Job {
  slug: string;
  title: string;
  tags: string[];
  aufgaben: string[];
  profil: string[];
}

export const jobs: Job[] = [
  {
    slug: "softwareentwickler",
    title: "Softwareentwickler/in (m/w/d) — System- & Anwendungssoftware",
    tags: ["Vollzeit", "Hamburg", "Berufserfahren"],
    aufgaben: ["Entwicklung individueller System- und Anwendungssoftware für unsere Kunden", "Umsetzung von Anforderungen aus Analyse und Konzeption", "Wartung und Weiterentwicklung bestehender Lösungen", "Enge Zusammenarbeit mit Beratung und Kundenteams"],
    profil: ["Mehrjährige Erfahrung in der Softwareentwicklung", "Sicherer Umgang mit mindestens einer modernen Programmiersprache", "Verständnis für Architektur, Schnittstellen und saubere Dokumentation", "Strukturierte, eigenverantwortliche Arbeitsweise"],
  },
  {
    slug: "it-berater",
    title: "IT-Berater/in (m/w/d) — Unternehmensberatung & Systemanalyse",
    tags: ["Vollzeit oder Teilzeit", "Hamburg", "Berufserfahren"],
    aufgaben: ["Analyse von Geschäftsprozessen und bestehenden Systemlandschaften", "Ableitung belastbarer technischer und organisatorischer Empfehlungen", "Begleitung von Entscheidungen zwischen Fachbereich und Technik", "Vorbereitung und Moderation von Workshops beim Kunden"],
    profil: ["Erfahrung in IT-Beratung, Systemanalyse oder vergleichbarer Rolle", "Gespür für Organisation, Kommunikation und technische Zusammenhänge", "Souveränes Auftreten und klare schriftliche Ausdrucksweise", "Interesse an langfristigen, nachvollziehbaren Lösungen"],
  },
  {
    slug: "systemadministrator",
    title: "Systemadministrator/in (m/w/d) — Hardware & Netzwerke",
    tags: ["Vollzeit", "Hamburg", "Berufserfahren"],
    aufgaben: ["Planung, Aufbau und Betrieb von Hardware- und Netzwerkumgebungen", "Pflege und Absicherung bestehender Infrastrukturen", "Störungssuche und strukturierte Fehlerbehebung im Kundenumfeld", "Dokumentation und Übergabe wartbarer Umgebungen"],
    profil: ["Abgeschlossene Ausbildung im IT-Umfeld oder vergleichbare Erfahrung", "Fundierte Kenntnisse in Netzwerktechnik und Systemadministration", "Sorgfältige, serviceorientierte Arbeitsweise", "Führerschein Klasse B von Vorteil"],
  },
  {
    slug: "werkstudent",
    title: "Werkstudent/in (m/w/d) — Softwareentwicklung",
    tags: ["Teilzeit", "Hamburg", "Studierende"],
    aufgaben: ["Mitarbeit an realen Kundenprojekten in der Softwareentwicklung", "Umsetzung eigener Teilaufgaben mit erfahrener Ansprechperson", "Unterstützung bei Tests, Dokumentation und Qualitätssicherung", "Einblick in Analyse, Konzeption und Projektablauf"],
    profil: ["Laufendes Studium der Informatik oder eines verwandten Fachs", "Erste praktische Programmiererfahrung", "Lust, Verantwortung zu übernehmen und Fragen zu stellen", "Ca. 15–20 Stunden pro Woche, flexibel planbar"],
  },
];

export const getJob = (slug: string) => jobs.find((job) => job.slug === slug);
