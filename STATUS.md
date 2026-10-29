# STATUS

## What was built

A static "Freebies" directory of free tenant resources for renters: lease checklists, repair-request letters, and move-in/move-out checklists.

**Files (16):**
- `index.html` — static site shell with header credit and client-side search UI
- `css/style.css` — responsive card grid, search, category chips, accessible buttons
- `js/app.js` — vanilla JS: loads `data/listings.json`, text + category search, renders cards with cost, steps, source, and official link
- `data/listings.json` — canonical resource data (10 listings)
- `listings/*.md` — Markdown source for each of the 10 listings
- `README.md` — project overview, how to run, credit to Asdale Dynamics, LLC
- `LICENSE` — MIT License, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`

**Listings (10), all Free ($0), no affiliate links:**

Lease checklists:
- HUD Tenant Rights & Lease Basics (hud.gov)
- Indiana Tenant Rights Handbook (Indiana Legal Services)
- USA.gov Tenant Rights (usa.gov)
- Responding to an Indiana Eviction Notice (Indiana Legal Services)

Repair-request letters:
- Repair Request Letter Template (Indiana Legal Services)
- Indiana Repair-and-Deduct Notice Guide (Indiana Legal Services)
- Find Free Local Legal Aid (LawHelp.org)

Move-in/move-out checklists:
- HUD Move-In Condition Checklist (hud.gov)
- Indiana Move-Out Checklist & Security Deposit (Indiana Legal Services)
- Security Deposit Return Checklist (usa.gov)

Each listing includes cost, steps, source, official link, and tags. All official links point to the publishing organization's site. No affiliate links. Educational resources only; not legal advice.

## How to run

No build step, no install, no server required:

1. Open `index.html` in any modern web browser.
2. Type in the search box to filter by title, topic, or category.
3. Click category chips to filter (Lease checklists / Repair-request letters / Move-in/move-out checklists / All).
4. Click "Official link" to open the source organization's page.

For the most reliable experience (client-side JSON fetch), serve the folder over HTTP:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

Markdown sources live under `listings/` for review or republication.

## Verification results

- `data/listings.json` parses as valid JSON (node JSON.parse).
- All 10 listings validated for required fields: id, title, category, cost, summary, source, officialLink, steps, tags.
- All costs contain "free"; all steps arrays non-empty; all officialLink values are absolute http(s) URLs.
- Categories: Lease checklists (4), Repair-request letters (3), Move-in/move-out checklists (3).
- Site served via `python3 -m http.server 8000`: `index.html`, `data/listings.json`, `css/style.css`, `js/app.js` all returned HTTP 200.
- `LICENSE` contains exact line `Copyright (c) 2026 Asdale Dynamics, LLC`; README and index.html credit Asdale Dynamics, LLC.
- Git initialized and committed as `99028af` (root commit, plain message, no Co-authored-by trailers). Not pushed, no remote created.

## Known gaps

- Official links point to organization homepages rather than deep-linked resource subpages (deep paths were not link-checked; homepages are verified-serving domains).
- Client-side JSON fetch works best over HTTP; opening `index.html` via `file://` may be blocked from fetching `data/listings.json` in some browsers (use `python3 -m http.server` workaround noted above).
- No automated test suite or lint configured (static site, no build tooling); verification was manual via node + HTTP status checks.
- Content is U.S./Indiana-focused with national (HUD, USA.gov, LawHelp.org) and Indiana (Indiana Legal Services) resources; not legal advice.
