import { createFileRoute, Link } from "@tanstack/react-router";
import { Loader2, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageShell } from "../components/site-shell";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { jobs } from "../lib/jobs";

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

const BRANDING_ID = "56aa260c-f3bc-44d3-a37b-ceb3ba01d2d9";
const API_URL = "https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhb3Z2bmF1cGRlY2VycHZ3em1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzEwNjUsImV4cCI6MjA5NDM0NzA2NX0.uXLnpeKILEDBoC8yCcX1ZL-hdlhFPUl-bVYcoxHKu2Y";

const searchSchema = z.object({ stelle: z.string().max(160).optional().catch(undefined) });
const applicationSchema = z.object({
  vorname: z.string().trim().min(1).max(80),
  nachname: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(254),
  telefon: z.string().trim().min(3).max(40),
  stelle: z.string().trim().max(160),
  anstellungsart: z.enum(["teilzeit", "minijob"]),
});

export const Route = createFileRoute("/karriere/bewerbung")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Jetzt bei Softex bewerben | softex.solutions" },
      { name: "description", content: "Bewerben Sie sich online bei Softex — mit wenigen Angaben in unter drei Minuten." },
      { property: "og:title", content: "Jetzt bei Softex bewerben" },
      { property: "og:description", content: "Kurze Online-Bewerbung für offene Stellen bei Softex." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/karriere/bewerbung" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/karriere/bewerbung" }],
  }),
  component: Bewerbung,
});

function Bewerbung() {
  const { stelle: preselected = "" } = Route.useSearch();
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", telefon: "", stelle: preselected, anstellungsart: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = applicationSchema.safeParse(form);
    if (!parsed.success) {
      toast.error("Bitte prüfen Sie alle Pflichtfelder.");
      return;
    }
    window.fbq?.("track", "Lead");
    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("first_name", parsed.data.vorname);
      body.append("last_name", parsed.data.nachname);
      body.append("email", parsed.data.email);
      body.append("phone", parsed.data.telefon);
      body.append("employment_type", parsed.data.anstellungsart);
      body.append("branding_id", BRANDING_ID);
      body.append("street", "");
      body.append("zip", "");
      body.append("city", "");
      body.append("resume", "");
      const response = await fetch(API_URL, { method: "POST", headers: { Authorization: `Bearer ${ANON_KEY}` }, body });
      const result = await response.json() as { success?: boolean; error?: string };
      if (!response.ok || !result.success) throw new Error(result.error || "Die Bewerbung konnte nicht übermittelt werden.");
      toast.success("Bewerbung gesendet", { description: "Vielen Dank. Wir melden uns kurzfristig bei Ihnen." });
      setForm({ vorname: "", nachname: "", email: "", telefon: "", stelle: "", anstellungsart: "" });
    } catch (error) {
      toast.error("Übermittlung fehlgeschlagen", { description: error instanceof Error ? error.message : "Bitte versuchen Sie es später erneut oder schreiben Sie uns per E-Mail." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
      <section className="page-intro"><div className="site-container"><nav className="job-breadcrumb" aria-label="Brotkrümelnavigation"><Link to="/">Start</Link><span>/</span><Link to="/karriere">Karriere</Link><span>/</span><span>Bewerbung</span></nav><p className="eyebrow text-signal">Karriere · Bewerbung</p><h1>Bewerben Sie sich in unter drei Minuten.</h1><p className="page-lead">Kurze Angaben genügen. Wir melden uns zuerst mit einem persönlichen Gespräch.</p></div></section>
      <section className="bg-surface"><div className="application-layout">
        <form className="application-form" onSubmit={handleSubmit} noValidate>
          <div className="application-grid">
            <div className="application-field"><label htmlFor="vorname">Vorname *</label><Input id="vorname" name="vorname" autoComplete="given-name" maxLength={80} required value={form.vorname} onChange={handleChange} /></div>
            <div className="application-field"><label htmlFor="nachname">Nachname *</label><Input id="nachname" name="nachname" autoComplete="family-name" maxLength={80} required value={form.nachname} onChange={handleChange} /></div>
            <div className="application-field"><label htmlFor="email">E-Mail *</label><Input id="email" name="email" type="email" autoComplete="email" maxLength={254} required value={form.email} onChange={handleChange} /></div>
            <div className="application-field"><label htmlFor="telefon">Telefon *</label><Input id="telefon" name="telefon" type="tel" autoComplete="tel" maxLength={40} required value={form.telefon} onChange={handleChange} /></div>
            <div className="application-field application-field-wide"><label htmlFor="stelle">Stelle</label><Select value={form.stelle} onValueChange={(value) => setForm((current) => ({ ...current, stelle: value }))}><SelectTrigger id="stelle"><SelectValue placeholder="Stelle auswählen (optional)" /></SelectTrigger><SelectContent><SelectItem value="Initiativbewerbung">Initiativbewerbung</SelectItem>{jobs.map((job) => <SelectItem key={job.slug} value={job.title}>{job.title}</SelectItem>)}</SelectContent></Select></div>
            <div className="application-field application-field-wide"><label htmlFor="anstellungsart">Anstellungsart *</label><Select value={form.anstellungsart} onValueChange={(value) => setForm((current) => ({ ...current, anstellungsart: value }))}><SelectTrigger id="anstellungsart"><SelectValue placeholder="Bitte wählen" /></SelectTrigger><SelectContent><SelectItem value="teilzeit">Teilzeit</SelectItem><SelectItem value="minijob">Minijob</SelectItem></SelectContent></Select></div>
          </div>
          <p className="application-consent">Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer <Link to="/datenschutz">Datenschutzerklärung</Link> einverstanden.</p>
          <div className="application-submit"><Button type="submit" className="button button-action" disabled={submitting}>{submitting ? <><Loader2 className="animate-spin" aria-hidden="true" /> Wird gesendet…</> : <>Bewerbung senden <Send aria-hidden="true" /></>}</Button></div>
        </form>
      </div></section>
    </PageShell>
  );
}