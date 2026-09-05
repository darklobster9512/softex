import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import softexLogo from "@/assets/softex-logo.png.asset.json";

const links = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/unternehmen", label: "Unternehmen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="brand" aria-label="Softex Startseite">
      <img src={softexLogo.url} alt="Softex" />
    </Link>
  );
}

export function Header({ inverse = false }: { inverse?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${inverse ? "site-header-inverse" : "site-header-solid"}`}>
      <div className="site-container flex h-20 items-center justify-between">
        <Brand inverse={inverse} />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Hauptnavigation">
          {links.map((link) => <Link key={link.to} to={link.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{link.label}</Link>)}
          <a href="mailto:kontakt@softex.solutions" className="button button-action">Projekt anfragen <ArrowUpRight size={17} /></a>
        </nav>
        <button className="icon-button md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="mobile-nav md:hidden" aria-label="Mobile Navigation">
        {links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <a href="mailto:kontakt@softex.solutions">Projekt anfragen <ArrowUpRight size={18} /></a>
      </nav>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><Brand inverse /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/65">Beratung und Softwareentwicklung für Systeme, die im Alltag bestehen.</p></div>
        <div><p className="footer-label">Navigation</p><div className="mt-4 grid gap-3 text-sm"><Link to="/leistungen">Leistungen</Link><Link to="/unternehmen">Unternehmen</Link><Link to="/kontakt">Kontakt</Link></div></div>
        <div><p className="footer-label">Kontakt</p><a className="mt-4 inline-flex items-center gap-2 text-sm text-signal" href="mailto:kontakt@softex.solutions">kontakt@softex.solutions <ArrowUpRight size={15} /></a><p className="mt-3 text-sm text-primary-foreground/65">Langwisch 2 · 22391 Hamburg</p></div>
      </div>
      <div className="border-t border-primary-foreground/10"><div className="site-container flex flex-col gap-3 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Softex Unternehmensberatung & Software GmbH</span><span className="flex gap-5"><Link to="/impressum">Impressum</Link><Link to="/datenschutz">Datenschutz</Link></span></div></div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="site-container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-lead">{children}</p></div></section>;
}

export function ContactBand() {
  return <section className="bg-action py-16 text-action-foreground md:py-20"><div className="site-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-action-foreground/70">Nächster Schritt</p><h2 className="max-w-2xl text-3xl font-semibold md:text-5xl">Lassen Sie uns Ihr Vorhaben strukturiert angehen.</h2></div><a className="button button-dark shrink-0" href="mailto:kontakt@softex.solutions">kontakt@softex.solutions <ArrowUpRight size={18} /></a></div></section>;
}
