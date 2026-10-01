import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "../ui/button";
import { useSiteData } from "../../features/site-context";

const navItems = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Industries", "/industries"], ["Jobs", "/jobs"], ["Process", "/process"], ["Contact", "/contact"],
] as const;

export function PublicLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { data } = useSiteData();
  const active = (to: string) => to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-3" aria-label="BLA Enterprises home">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">BLA</span>
          <span className="min-w-0"><strong className="block truncate text-sm text-primary sm:text-base">BLA ENTERPRISES LLP</strong><span className="hidden text-[10px] uppercase tracking-[.14em] text-muted-foreground sm:block">Recruitment & Workforce Solutions</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, to]) => <Link key={to} to={to} className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${active(to) ? "bg-secondary/10 text-secondary" : "text-foreground hover:text-secondary"}`} aria-current={active(to) ? "page" : undefined}>{label}</Link>)}
          <Button asChild className="ml-2 h-11"><Link to="/hire-workforce">Hire Workforce</Link></Button>
        </nav>
        <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-4 py-3 lg:hidden" aria-label="Mobile navigation">
        {navItems.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className={`block w-full rounded-md px-3 py-3 font-semibold ${active(to) ? "bg-secondary/10 text-secondary" : "hover:bg-muted"}`} aria-current={active(to) ? "page" : undefined}>{label}</Link>)}
        <Button asChild className="mt-2 w-full"><Link to="/hire-workforce" onClick={() => setOpen(false)}>Hire Workforce</Link></Button>
      </nav>}
    </header>
    {children}
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div><span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-xs font-bold text-accent-foreground">BLA</span><h2 className="mt-4 font-bold">{data.settings.companyName}</h2><p className="mt-3 text-sm leading-6 text-background/60">{data.settings.footer}</p></div>
        <div><h3 className="font-bold">Quick Links</h3><div className="mt-4 grid gap-2">{navItems.map(([label,to]) => <Link key={to} to={to} className="text-sm text-background/60 hover:text-background">{label}</Link>)}</div></div>
        <div><h3 className="font-bold">Contact</h3><address className="mt-4 not-italic text-sm leading-7 text-background/60">Pune, Maharashtra<br/><a href={`tel:${data.settings.phone}`}>{data.settings.phone}</a><br/><a href={`mailto:${data.settings.email}`} className="break-all">{data.settings.email}</a></address></div>
        <div><h3 className="font-bold">For Employers</h3><p className="mt-4 text-sm leading-6 text-background/60">Share your requirement and start building the team your business needs.</p><Button asChild variant="outline" className="mt-4 border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"><Link to="/hire-workforce">Discuss hiring →</Link></Button></div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-background/15 px-4 pt-6 text-xs text-background/50 sm:flex-row sm:justify-between sm:px-6 lg:px-8"><span>© 2026 BLA ENTERPRISES LLP. All Rights Reserved.</span><span>Designed and Development by SOSynch Ai Tech</span><Link to="/admin" className="hover:text-background">Admin Login</Link></div>
    </footer>
  </div>;
}
