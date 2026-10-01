import consultants from "../assets/site/consultants.webp";
import interview from "../assets/site/interview.webp";
import teamMeeting from "../assets/site/team-meeting.webp";
import profileReview from "../assets/site/profile-review.webp";
import manufacturing from "../assets/site/manufacturing.webp";
import construction from "../assets/site/construction.webp";
import logistics from "../assets/site/logistics.webp";
import industrial from "../assets/site/industrial.webp";
import retail from "../assets/site/retail.webp";
import hospitality from "../assets/site/hospitality.webp";
import itTeam from "../assets/site/it-team.webp";
import customerSupport from "../assets/site/customer-support.webp";
import placement from "../assets/site/placement.webp";
import coordination from "../assets/site/coordination.webp";
import employerMeeting from "../assets/site/employer-meeting.webp";
import workforceTeam from "../assets/site/workforce-team.webp";

export const siteImages = {
  consultants, interview, teamMeeting, profileReview, manufacturing, construction,
  logistics, industrial, retail, hospitality, itTeam, customerSupport, placement,
  coordination, employerMeeting, workforceTeam,
};

export const industryImages: Record<string, string> = {
  Manufacturing: manufacturing,
  Construction: construction,
  Retail: retail,
  Logistics: logistics,
  Hospitality: hospitality,
  "Corporate Offices": teamMeeting,
  "IT & Services": itTeam,
  "Industrial Businesses": industrial,
};

export const serviceImages: Record<string, string> = {
  "Manpower Recruitment": workforceTeam,
  "Executive Search": interview,
  "Temporary Staffing": logistics,
  "Permanent Staffing": placement,
  "Contract Staffing": construction,
  "Talent Sourcing": profileReview,
  "Labor Placement": manufacturing,
  "HR Recruitment Support": coordination,
};

export const serviceDetails: Record<string, string> = {
  "Manpower Recruitment": "Build dependable teams through targeted sourcing, careful screening and coordinated selection.",
  "Executive Search": "Identify experienced leaders whose capability and values align with your business direction.",
  "Temporary Staffing": "Respond to seasonal, project-based and urgent workforce needs with flexible staffing support.",
  "Permanent Staffing": "Secure long-term talent through structured search, assessment and joining coordination.",
  "Contract Staffing": "Scale operations with skilled contract professionals matched to assignment requirements.",
  "Talent Sourcing": "Reach relevant candidate pools through focused research and proactive engagement.",
  "Labor Placement": "Place reliable commercial and industrial workers with attention to readiness and role fit.",
  "HR Recruitment Support": "Strengthen internal hiring with sourcing, screening, scheduling and documentation support.",
};

export const processSteps = [
  ["01", "Understand Requirement", "We clarify the role, skills, workforce volume, timeline and working conditions."],
  ["02", "Source Candidates", "Our team reaches targeted talent pools through structured and role-specific sourcing."],
  ["03", "Screen & Shortlist", "Candidates are reviewed for experience, suitability, communication and readiness."],
  ["04", "Interview Coordination", "We keep candidates and hiring teams aligned throughout interview scheduling."],
  ["05", "Workforce Placement", "Selected talent receives joining support for a smoother transition into the role."],
] as const;

export function jobSlug(title: string) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
