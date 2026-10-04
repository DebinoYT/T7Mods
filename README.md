# T7Mods

T7Mods is a resource hub for Call of Duty: Black Ops 3 modding. The website is a static HTML, CSS and vanilla JavaScript project hosted on GitHub Pages.

## Pages

- `index.html` — home page
- `mods/index.html` — community project catalog
- `mods/community-map-*.html` — details for the existing map screenshot assets
- `wiki/index.html` — technical knowledge base sections
- `wiki/*/index.html` — Wiki category pages
- `tutorials/index.html` — searchable tutorial library
- `tutorials/*.html` — individual tutorial pages
- `resources/index.html` — tools, asset libraries, wikis and community links
- `about/index.html` — about T7Mods

## Editing content

Tutorial details and the tutorial catalog are defined in `scripts/site.js` in the `entries` array. Add a matching HTML file under `tutorials/` using one of the existing tutorial pages as a template. The original source notes remain in `content/tutorials/`.

The `projects` array in `scripts/site.js` drives the homepage showcase and project catalog. Add only projects with real metadata and a matching static detail page. The current map entries use generic image labels because the repository contains no project titles, creator credits, or release URLs.

Wiki category structure is defined by `wikiSections` in `scripts/site.js`; article text belongs in static HTML under `wiki/`. Resource links are listed in `resources/index.html`. Keep internal links relative so they work on both a custom domain and a GitHub Pages repository path.

## Deploying

Publish the repository root with GitHub Pages. No server, build step, environment variables, backend, or database is required. The existing `CNAME` file keeps the configured custom domain.

The site has no third-party runtime dependencies and uses system font fallbacks.
