import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [
    { title: "Admin Login | BLA ENTERPRISES LLP" },
    { name: "description", content: "Demo content management login for BLA ENTERPRISES LLP." },
    { property: "og:title", content: "Admin Login | BLA ENTERPRISES LLP" },
    { property: "og:description", content: "Demo content management login for BLA ENTERPRISES LLP." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ]}), component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate(); const [error, setError] = useState(""); const [show, setShow] = useState(false);
  useEffect(() => { if (window.localStorage.getItem("bla-admin-demo") === "active") navigate({ to: "/admin/dashboard", replace: true }); }, [navigate]);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const f = new FormData(e.currentTarget); if (f.get("email") === "admin@blaenterprises.com" && f.get("password") === "Admin@123") { window.localStorage.setItem("bla-admin-demo", "active"); navigate({ to: "/admin/dashboard", replace: true }); } else setError("The email or password does not match the demo credentials."); };
  return <main className="grid min-h-screen lg:grid-cols-[.9fr_1.1fr]">
    <section className="hidden bg-primary p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between"><Link to="/" className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-md bg-accent text-sm font-bold text-accent-foreground">BLA</span><span className="font-bold">BLA ENTERPRISES LLP</span></Link><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-accent">Content workspace</p><h1 className="mt-5 text-5xl font-bold leading-tight">Manage opportunities. Keep every detail current.</h1><p className="mt-6 leading-8 text-primary-foreground/65">A secure-feeling demonstration workspace for recruitment content, applications and enquiries.</p></div><p className="text-xs text-primary-foreground/50">Frontend demonstration · No live records</p></section>
    <section className="flex items-center justify-center bg-background px-4 py-12"><div className="w-full max-w-md"><Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary">← Return to website</Link><p className="text-xs font-bold uppercase tracking-[.18em] text-accent">Administrator access</p><h2 className="mt-3 text-3xl font-bold text-primary">Welcome back</h2><p className="mt-2 text-sm text-muted-foreground">Sign in to manage the BLA Enterprises demo website.</p><form className="mt-8 space-y-5" onSubmit={submit}><label className="block text-sm font-semibold">Email address<Input name="email" type="email" autoComplete="email" required className="mt-2 h-12" defaultValue="admin@blaenterprises.com"/></label><label className="block text-sm font-semibold">Password<span className="relative mt-2 block"><Input name="password" type={show?"text":"password"} autoComplete="current-password" required className="h-12 pr-16" defaultValue="Admin@123"/><button type="button" onClick={()=>setShow(!show)} className="absolute inset-y-0 right-3 text-xs font-bold text-secondary" aria-label={show?"Hide password":"Show password"}>{show?"Hide":"Show"}</button></span></label>{error&&<p role="alert" className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}<Button type="submit" className="h-12 w-full">Sign in to Dashboard</Button></form><div className="mt-7 rounded-md border border-border bg-card p-4 text-sm"><strong className="text-primary">Demo login</strong><p className="mt-2 text-muted-foreground">Email: admin@blaenterprises.com<br/>Password: Admin@123</p></div></div></section>
  </main>;
}
