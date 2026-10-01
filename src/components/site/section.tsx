import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function SectionTitle({ kicker, title, copy, align = "center" }: { kicker: string; title: string; copy?: string; align?: "center" | "left" }) {
  return <div className={align === "center" ? "mx-auto mb-12 max-w-2xl text-center" : "mb-8 max-w-2xl"}><p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-accent">{kicker}</p><h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">{title}</h2>{copy && <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>}</div>;
}

export function PageHero({ eyebrow, title, copy, image, alt, children }: { eyebrow: string; title: string; copy: string; image: string; alt: string; children?: React.ReactNode }) {
  return <section className="relative isolate min-h-[530px] overflow-hidden bg-primary text-primary-foreground"><img src={image} alt={alt} width={800} height={600} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high"/><div className="absolute inset-0 bg-hero-overlay"/><div className="relative mx-auto flex min-h-[530px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div className="max-w-3xl animate-fade-up"><p className="mb-5 border-l-2 border-accent pl-3 text-xs font-bold uppercase tracking-[.18em]">{eyebrow}</p><h1 className="text-4xl font-bold leading-[1.08] sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">{copy}</p>{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}</div></div></section>;
}

export function CtaBand({ title, copy, label, to = "/contact" }: { title: string; copy: string; label: string; to?: "/contact" | "/jobs" | "/hire-workforce" }) {
  return <section className="bg-primary py-14 text-primary-foreground"><div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8"><div><h2 className="text-3xl font-bold">{title}</h2><p className="mt-3 max-w-2xl text-primary-foreground/70">{copy}</p></div><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to={to}>{label}<ArrowRight /></Link></Button></div></section>;
}

export function StatBand({ stats }: { stats: { value: string; label: string }[] }) {
  return <section className="bg-primary py-12 text-primary-foreground"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">{stats.map((stat) => <div key={stat.label}><strong className="block text-4xl sm:text-5xl">{stat.value}</strong><span className="mt-2 block text-xs uppercase tracking-wider text-primary-foreground/65">{stat.label}</span></div>)}</div></section>;
}
