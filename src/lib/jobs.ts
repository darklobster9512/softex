export interface Job {
  slug: string;
  title: string;
  tags: string[];
  standort: string;
  modell: string;
  bereich: string;
  kurzbeschreibung: string;
  beschreibung: string;
  aufgaben: string[];
  profil: string[];
  benefits: string[];
  arbeitszeit?: string;
  gehalt?: string;
  status?: "Sofort verfügbar" | "Bald verfügbar";
}

export const jobs: Job[] = [
  {
    slug: "online-tester",
    title: "Online-Tester:in für digitale Anwendungen (m/w/d)",
    tags: ["Minijob oder Teilzeit", "Remote", "Quereinstieg"],
    standort: "Remote (Deutschland)",
    modell: "Minijob · Teilzeit · flexibel",
    bereich: "Quality",
    arbeitszeit: "5–25 Std./Woche, freie Einteilung",
    gehalt: "29 € / Stunde",
    status: "Sofort verfügbar",
    kurzbeschreibung: "Sie prüfen Webseiten und Apps aus Nutzersicht und liefern strukturiertes Feedback — ortsunabhängig, in Ihrem Tempo, ohne Vorkenntnisse.",
    beschreibung: "Für ausgewählte Kundenprojekte suchen wir Menschen, die digitale Anwendungen mit wachem Blick durchgehen und ihre Beobachtungen sauber dokumentieren. Sie bekommen von uns klare Testanleitungen und arbeiten die Aufgaben selbstständig ab — wann und wo Sie mögen. Ideal als Nebentätigkeit neben Studium, Familie oder Hauptjob.",
    aufgaben: ["Durchlaufen definierter Testszenarien in Webseiten und mobilen Apps", "Bewertung von Nutzerführung, Verständlichkeit und Bedienbarkeit", "Nachvollziehbare Dokumentation von Fehlern, Auffälligkeiten und Eindrücken", "Formulieren konkreter Verbesserungsvorschläge für die Produktteams"],
    profil: ["Sorgfältige, verlässliche Arbeitsweise und ein Auge fürs Detail", "Sicherer Umgang mit Smartphone, Tablet oder PC", "Stabile Internetverbindung und ein eigenes Testgerät", "Deutschkenntnisse mind. B2 — keine formale Ausbildung nötig"],
    benefits: ["Vollständig remote, Zeiten frei wählbar (auch abends und am Wochenende)", "Kurze, verständliche Einarbeitung mit Beispiel-Tests", "Feste Stundenvergütung — transparent und zuverlässig", "Unkomplizierte Zusammenarbeit, direkter Draht zum Projektteam"],
  },
  {
    slug: "softwareentwickler",
    title: "Softwareentwickler/in (m/w/d) — System- & Anwendungssoftware",
    tags: ["Vollzeit", "Hamburg", "Berufserfahren"],
    standort: "Hamburg",
    modell: "Festanstellung · Vollzeit",
    bereich: "Softwareentwicklung",
    kurzbeschreibung: "Sie entwickeln individuelle System- und Anwendungssoftware und begleiten Lösungen von der Konzeption bis zur langfristigen Weiterentwicklung.",
    beschreibung: "In enger Zusammenarbeit mit Beratung und Kundenteams übersetzen Sie fachliche Anforderungen in nachvollziehbare, wartbare Softwarelösungen.",
    aufgaben: ["Entwicklung individueller System- und Anwendungssoftware für unsere Kunden", "Umsetzung von Anforderungen aus Analyse und Konzeption", "Wartung und Weiterentwicklung bestehender Lösungen", "Enge Zusammenarbeit mit Beratung und Kundenteams"],
    profil: ["Mehrjährige Erfahrung in der Softwareentwicklung", "Sicherer Umgang mit mindestens einer modernen Programmiersprache", "Verständnis für Architektur, Schnittstellen und saubere Dokumentation", "Strukturierte, eigenverantwortliche Arbeitsweise"],
    benefits: ["Echte Projekte vom ersten Tag an", "Kurze Wege und feste Ansprechpartner", "Arbeitsplatz in Hamburg", "Flexible Arbeitszeiten nach Absprache"],
  },
  {
    slug: "it-berater",
    title: "IT-Berater/in (m/w/d) — Unternehmensberatung & Systemanalyse",
    tags: ["Vollzeit oder Teilzeit", "Hamburg", "Berufserfahren"],
    standort: "Hamburg",
    modell: "Festanstellung · Vollzeit oder Teilzeit",
    bereich: "Beratung",
    kurzbeschreibung: "Sie analysieren Geschäftsprozesse und Systemlandschaften und entwickeln gemeinsam mit unseren Kunden belastbare Lösungen.",
    beschreibung: "Sie verbinden fachliche Anforderungen mit technischem Verständnis und begleiten Entscheidungen von der Analyse bis zur umsetzbaren Empfehlung.",
    aufgaben: ["Analyse von Geschäftsprozessen und bestehenden Systemlandschaften", "Ableitung belastbarer technischer und organisatorischer Empfehlungen", "Begleitung von Entscheidungen zwischen Fachbereich und Technik", "Vorbereitung und Moderation von Workshops beim Kunden"],
    profil: ["Erfahrung in IT-Beratung, Systemanalyse oder vergleichbarer Rolle", "Gespür für Organisation, Kommunikation und technische Zusammenhänge", "Souveränes Auftreten und klare schriftliche Ausdrucksweise", "Interesse an langfristigen, nachvollziehbaren Lösungen"],
    benefits: ["Echte Projekte vom ersten Tag an", "Kurze Wege und feste Ansprechpartner", "Arbeitsplatz in Hamburg", "Flexible Arbeitszeiten nach Absprache"],
  },
  {
    slug: "systemadministrator",
    title: "Systemadministrator/in (m/w/d) — Hardware & Netzwerke",
    tags: ["Vollzeit", "Hamburg", "Berufserfahren"],
    standort: "Hamburg",
    modell: "Festanstellung · Vollzeit",
    bereich: "Infrastruktur",
    kurzbeschreibung: "Sie planen, betreiben und sichern Hardware- und Netzwerkumgebungen für unsere Kunden in Hamburg.",
    beschreibung: "Sie sorgen für stabile, nachvollziehbar dokumentierte Infrastrukturen und lösen Störungen strukturiert im direkten Austausch mit unseren Kunden.",
    aufgaben: ["Planung, Aufbau und Betrieb von Hardware- und Netzwerkumgebungen", "Pflege und Absicherung bestehender Infrastrukturen", "Störungssuche und strukturierte Fehlerbehebung im Kundenumfeld", "Dokumentation und Übergabe wartbarer Umgebungen"],
    profil: ["Abgeschlossene Ausbildung im IT-Umfeld oder vergleichbare Erfahrung", "Fundierte Kenntnisse in Netzwerktechnik und Systemadministration", "Sorgfältige, serviceorientierte Arbeitsweise", "Führerschein Klasse B von Vorteil"],
    benefits: ["Echte Projekte vom ersten Tag an", "Kurze Wege und feste Ansprechpartner", "Arbeitsplatz in Hamburg", "Flexible Arbeitszeiten nach Absprache"],
  },
  {
    slug: "werkstudent",
    title: "Werkstudent/in (m/w/d) — Softwareentwicklung",
    tags: ["Teilzeit", "Hamburg", "Studierende"],
    standort: "Hamburg",
    modell: "Werkstudium · Teilzeit",
    bereich: "Softwareentwicklung",
    arbeitszeit: "Ca. 15–20 Std./Woche",
    kurzbeschreibung: "Sie arbeiten an realen Softwareprojekten mit und übernehmen Schritt für Schritt eigene Aufgaben.",
    beschreibung: "Mit einer erfahrenen Ansprechperson an Ihrer Seite erhalten Sie Einblick in Analyse, Umsetzung, Tests und Dokumentation unserer Kundenprojekte.",
    aufgaben: ["Mitarbeit an realen Kundenprojekten in der Softwareentwicklung", "Umsetzung eigener Teilaufgaben mit erfahrener Ansprechperson", "Unterstützung bei Tests, Dokumentation und Qualitätssicherung", "Einblick in Analyse, Konzeption und Projektablauf"],
    profil: ["Laufendes Studium der Informatik oder eines verwandten Fachs", "Erste praktische Programmiererfahrung", "Lust, Verantwortung zu übernehmen und Fragen zu stellen", "Ca. 15–20 Stunden pro Woche, flexibel planbar"],
    benefits: ["Echte Projekte vom ersten Tag an", "Kurze Wege und feste Ansprechpartner", "Arbeitsplatz in Hamburg", "Flexible Arbeitszeiten nach Absprache"],
  },
];

export const getJob = (slug: string) => jobs.find((job) => job.slug === slug);
