<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history.
<!-- LOVABLE:END -->

- Keep public content and demo records in the shared `SiteProvider` so the website and admin workspace remain synchronized.
- Use TanStack file routes for every public page and job detail; this provides direct URLs, history support, and route-specific metadata.
- Render public navigation and footer through a shared `PublicLayout`; this keeps active states and mobile behavior consistent while admin routes remain independent.
- Store bundled editorial imagery in `src/assets/site`; this prevents fragile external image URLs and supports predictable production loading.
