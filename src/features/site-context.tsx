import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Service = { id: number; title: string; description: string; symbol: string; enabled: boolean };
export type Industry = { id: number; title: string; symbol: string; enabled: boolean };
export type Job = { id: number; title: string; location: string; type: string; experience: string; salary: string; description: string; responsibilities: string[]; requirements: string[]; benefits: string[]; published: boolean };
export type Testimonial = { id: number; quote: string; author: string; role: string; published: boolean };
export type Faq = { id: number; question: string; answer: string; published: boolean };
export type Application = { id: number; candidate: string; email: string; phone: string; job: string; date: string; status: string };
export type Enquiry = { id: number; name: string; email: string; phone: string; company: string; requirement: string; message: string; date: string; status: string };
export type SiteData = {
  hero: { heading: string; description: string; primaryCta: string; secondaryCta: string; imageUrl: string };
  about: { description: string; stats: { value: string; label: string }[] };
  settings: { companyName: string; phone: string; email: string; address: string; footer: string; linkedin: string; facebook: string };
  services: Service[]; industries: Industry[]; jobs: Job[]; testimonials: Testimonial[]; faqs: Faq[]; applications: Application[]; enquiries: Enquiry[];
};

export const defaultData: SiteData = {
  hero: {
    heading: "Connecting Businesses with the Right People",
    description: "Professional recruitment, manpower staffing and workforce solutions designed to help businesses build reliable and productive teams.",
    primaryCta: "Find the Right Talent",
    secondaryCta: "Explore Opportunities",
    imageUrl: "",
  },
  about: {
    description: "BLA ENTERPRISES LLP operates across employment activities, providing dependable workforce and recruitment solutions to commercial and industrial businesses. We combine structured talent sourcing with practical hiring support to help organizations build capable teams.",
    stats: [
      { value: "500+", label: "Candidates Connected" },
      { value: "100+", label: "Recruitment Assignments" },
      { value: "50+", label: "Business Clients" },
      { value: "8+", label: "Industry Segments" },
    ],
  },
  settings: {
    companyName: "BLA ENTERPRISES LLP", phone: "2225145555", email: "blaenterpriess@corpvistar.com",
    address: "SN-5/6 Near Muralidhar, Dangat Patil Nagar, Shivane, Haveli, Pune, Maharashtra, India - 411023",
    footer: "Connecting businesses with reliable workforce and recruitment solutions.", linkedin: "#", facebook: "#",
  },
  services: [
    { id: 1, title: "Manpower Recruitment", description: "Helping businesses identify and recruit qualified professionals for their workforce requirements.", symbol: "MR", enabled: true },
    { id: 2, title: "Executive Search", description: "Focused talent sourcing for critical and leadership-level positions.", symbol: "ES", enabled: true },
    { id: 3, title: "Temporary Staffing", description: "Flexible workforce solutions for short-term and project-based requirements.", symbol: "TS", enabled: true },
    { id: 4, title: "Permanent Staffing", description: "End-to-end recruitment support for permanent workforce requirements.", symbol: "PS", enabled: true },
    { id: 5, title: "Contract Staffing", description: "Reliable contract workforce solutions designed around business needs.", symbol: "CS", enabled: true },
    { id: 6, title: "Talent Sourcing", description: "Connecting organizations with suitable candidates through structured talent sourcing.", symbol: "TA", enabled: true },
    { id: 7, title: "Labor Placement", description: "Workforce placement support for commercial and industrial organizations.", symbol: "LP", enabled: true },
    { id: 8, title: "HR Recruitment Support", description: "Recruitment assistance that helps organizations improve hiring efficiency.", symbol: "HR", enabled: true },
  ],
  industries: ["Manufacturing", "Construction", "Retail", "Logistics", "Hospitality", "Corporate Offices", "IT & Services", "Industrial Businesses"].map((title, index) => ({ id: index + 1, title, symbol: ["MF","CN","RT","LG","HS","CO","IT","IB"][index] ?? "IN", enabled: true })),
  jobs: [
    { id: 1, title: "Sales Executive", location: "Pune, Maharashtra", type: "Full Time", experience: "1-3 Years", salary: "₹3–5 LPA", description: "Build client relationships and support revenue growth across assigned markets.", responsibilities: ["Develop new business opportunities", "Maintain client relationships", "Track sales activity and results"], requirements: ["Strong communication skills", "1–3 years of relevant experience", "Goal-oriented approach"], benefits: ["Performance incentives", "Growth opportunities", "Supportive team culture"], published: true },
    { id: 2, title: "HR Executive", location: "Pune, Maharashtra", type: "Full Time", experience: "2-4 Years", salary: "₹3.5–5.5 LPA", description: "Support end-to-end recruitment, coordination and employee documentation.", responsibilities: ["Source and screen candidates", "Coordinate interviews", "Maintain recruitment records"], requirements: ["Graduate in HR or related field", "2–4 years of experience", "Strong coordination skills"], benefits: ["Professional development", "Stable work schedule", "Collaborative environment"], published: true },
    { id: 3, title: "Operations Executive", location: "Pune, Maharashtra", type: "Full Time", experience: "1-3 Years", salary: "₹3–4.5 LPA", description: "Coordinate daily operations and help teams deliver consistent service.", responsibilities: ["Track operational tasks", "Prepare regular reports", "Coordinate with internal teams"], requirements: ["Good organizational skills", "Working knowledge of spreadsheets", "1–3 years of experience"], benefits: ["Structured onboarding", "Career progression", "Team support"], published: true },
    { id: 4, title: "Site Supervisor", location: "Pune, Maharashtra", type: "Contract", experience: "2-5 Years", salary: "₹25,000–35,000/month", description: "Supervise site workforce, safety and daily activity completion.", responsibilities: ["Allocate work on site", "Monitor safety compliance", "Report daily progress"], requirements: ["Site supervision experience", "Team leadership", "Willingness to travel locally"], benefits: ["Travel allowance", "Contract extension potential", "Field leadership experience"], published: true },
    { id: 5, title: "Customer Support Executive", location: "Pune, Maharashtra", type: "Full Time", experience: "0-2 Years", salary: "₹2.5–4 LPA", description: "Resolve customer questions with clarity, empathy and accurate follow-up.", responsibilities: ["Respond to customer enquiries", "Document resolutions", "Escalate priority cases"], requirements: ["Clear spoken communication", "Basic computer skills", "Customer-first attitude"], benefits: ["Freshers welcome", "Communication training", "Performance recognition"], published: true },
    { id: 6, title: "Warehouse Associate", location: "Pune, Maharashtra", type: "Contract", experience: "0-2 Years", salary: "₹18,000–24,000/month", description: "Support accurate, safe and efficient warehouse movement and dispatch.", responsibilities: ["Receive and organize stock", "Support packing and dispatch", "Maintain workplace safety"], requirements: ["Ability to work shifts", "Basic record keeping", "Reliable attendance"], benefits: ["Shift allowance", "Safety training", "Overtime opportunities"], published: true },
  ],
  testimonials: [
    { id: 1, quote: "BLA ENTERPRISES helped us streamline our recruitment requirements and connect with suitable candidates.", author: "Rohan Kulkarni", role: "HR Manager", published: true },
    { id: 2, quote: "Their team understood our workforce needs quickly and stayed responsive throughout the assignment.", author: "Meera Shah", role: "Business Owner", published: true },
    { id: 3, quote: "The process was clear, professional and helped me find an opportunity suited to my experience.", author: "Priya Nair", role: "Candidate", published: true },
    { id: 4, quote: "Reliable coordination and practical hiring support made workforce planning much easier for our team.", author: "Sanjay Patil", role: "Operations Manager", published: true },
  ],
  faqs: ([
    ["What recruitment services does BLA ENTERPRISES provide?", "We provide manpower recruitment, executive search, talent sourcing, temporary, permanent and contract staffing, labor placement and recruitment support."],
    ["Do you provide temporary staffing?", "Yes. We support short-term, seasonal and project-based workforce requirements."],
    ["Do you support permanent recruitment?", "Yes. We manage sourcing, screening and interview coordination for permanent roles."],
    ["Can businesses request manpower?", "Yes. Employers can share their hiring requirement through our enquiry form or by contacting our Pune office."],
    ["Can candidates apply for jobs?", "Yes. Candidates can browse current opportunities and submit the demo application form for a suitable role."],
    ["Which industries do you serve?", "We support manufacturing, construction, retail, logistics, hospitality, corporate offices, IT and industrial businesses."],
    ["How can I contact BLA ENTERPRISES?", "Call 2225145555 or email blaenterpriess@corpvistar.com. You can also use the contact form on this website."],
  ] as [string, string][]).map(([question, answer], index) => ({ id: index + 1, question, answer, published: true })),
  applications: [
    { id: 1, candidate: "Aarav Deshmukh", email: "aarav@example.com", phone: "9876501001", job: "Sales Executive", date: "24 Sep 2026", status: "New" },
    { id: 2, candidate: "Sneha Joshi", email: "sneha@example.com", phone: "9876501002", job: "HR Executive", date: "23 Sep 2026", status: "Shortlisted" },
    { id: 3, candidate: "Kabir Khan", email: "kabir@example.com", phone: "9876501003", job: "Operations Executive", date: "22 Sep 2026", status: "Interview" },
    { id: 4, candidate: "Isha More", email: "isha@example.com", phone: "9876501004", job: "Customer Support Executive", date: "21 Sep 2026", status: "Selected" },
  ],
  enquiries: [
    { id: 1, name: "Vikram Industries", email: "hr@vikram.example", phone: "9876502001", company: "Vikram Industries", requirement: "Manpower Requirement", message: "Need 20 shop-floor associates for our Pune unit.", date: "25 Sep 2026", status: "New" },
    { id: 2, name: "Nisha Mehta", email: "nisha@example.com", phone: "9876502002", company: "Mehta Retail", requirement: "Hire Employees", message: "Looking for sales staff across three stores.", date: "23 Sep 2026", status: "Contacted" },
  ],
};

type SiteContextValue = { data: SiteData; updateData: (updater: SiteData | ((current: SiteData) => SiteData)) => void; resetData: () => void };
const SiteContext = createContext<SiteContextValue | null>(null);
const STORAGE_KEY = "bla-enterprises-demo-data-v1";

export function SiteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(defaultData);
  useEffect(() => {
    try { const saved = window.localStorage.getItem(STORAGE_KEY); if (saved) setData(JSON.parse(saved) as SiteData); } catch { /* use defaults */ }
  }, []);
  const updateData: SiteContextValue["updateData"] = (updater) => setData((current) => {
    const next = typeof updater === "function" ? updater(current) : updater;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  });
  const value = useMemo(() => ({ data, updateData, resetData: () => { window.localStorage.removeItem(STORAGE_KEY); setData(defaultData); } }), [data]);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSiteData() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSiteData must be used within SiteProvider");
  return context;
}
