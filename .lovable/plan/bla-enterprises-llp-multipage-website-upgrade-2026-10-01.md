# BLA ENTERPRISES LLP multipage website upgrade

## Goal
Upgrade the existing BLA recruitment website—not replace its identity—into a complete, visual multipage experience while preserving the current TanStack Start stack, blue/teal branding, typography, admin demo, editable site data, jobs, filters, forms, testimonials, and FAQ.

## Implementation

1. **Bring the existing repository into this workspace**
   - Use the cloned repository as the source of truth, preserving its TanStack Start structure, shared site data, admin routes, existing assets, and current styling.
   - Keep the current dependencies unless an existing library already covers the need; add no unnecessary packages.

2. **Create a shared public-site shell**
   - Extract the existing brand header and footer into shared components used by every public page.
   - Replace all section-scroll controls with TanStack links for `/`, `/about`, `/services`, `/industries`, `/jobs`, `/process`, `/contact`, and `/hire-workforce`.
   - Add URL-aware active states and a mobile menu that closes after navigation.
   - Update all footer links and add the requested SOSynch Ai Tech credit.

3. **Build dedicated content pages from existing material**
   - Keep a concise but complete homepage with the requested overview sections, featured jobs, employer/candidate calls to action, testimonials, FAQ, and contact call to action.
   - Add visually varied About, Services, Industries, Process, Contact, and Hire Workforce pages using the existing company copy and contact details.
   - Reuse shared section, statistic, form, and call-to-action patterns without making every section or card identical.

4. **Expand professional imagery without repetition**
   - Create and bundle optimized recruitment, interview, office, manufacturing, construction, retail, logistics, hospitality, technology, and industrial-workforce imagery.
   - Use stable aspect ratios, explicit dimensions, eager loading only for each page’s lead image, and lazy loading elsewhere.
   - Distribute distinct visuals across pages using full-width leads, image grids, editorial splits, thumbnails, and industry/service cards.

5. **Move and improve jobs functionality**
   - Move search, job type/location filters, result count, and job cards to `/jobs`.
   - Add six real detail URLs under `/jobs/$slug`, each resolving from the shared editable job data and containing full role details.
   - Make View Details link to the correct URL and provide an application form on each job page; preserve application records in the existing demo data flow.

6. **Preserve and connect forms and admin functionality**
   - Keep contact and employer enquiry submissions synchronized with the existing admin workspace.
   - Keep the existing admin login and dashboard behavior intact.
   - Audit every visible action so it navigates, submits, calls, or emails as labeled—no fake actions or hash navigation.

7. **Metadata and finishing checks**
   - Add unique titles, descriptions, Open Graph metadata, Twitter card metadata, and self-referencing canonical URLs to every public and job-detail page.
   - Verify desktop, tablet, and mobile layouts; direct URL loads and refreshes; browser history; menu behavior; forms; filters; all buttons, links, and images; and absence of overflow, 404s, console errors, and broken assets.
   - Confirm the preview build reports success after the final changes.

## Technical details
- Continue using TanStack Start file-based routing, React 19, Tailwind CSS v4, the existing shadcn-style controls, and the current `SiteProvider` demo persistence model.
- Use a dynamic `/jobs/$slug` route with a stable title-to-slug mapping so admin-edited job content remains compatible.
- Keep brand colors and typography in the global semantic token system; public pages consume those tokens rather than introducing ad hoc colors.
- Keep `/admin` and `/admin/dashboard` outside the public header/footer shell.
