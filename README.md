# Free Tenant Resources Directory

Free lease checklists, repair-request letters, and move-in/move-out checklists for renters. Every listing includes cost (all are free), steps, and an official link. No affiliate links.

## About

This directory is published by **Asdale Dynamics, LLC** (Indiana, formed October 2026), founded by Dylan Asdale — registered nurse turned AI author and founder of Asdale Dynamics, LLC. His book *The Massive AI Manual* and hub site dylanasdale.github.io explain AI "like a friend would": plain English, step by step, never condescending.

This site is part of the LLC's accessible life-admin helpers line: paperwork organizers, budgeting, and low-energy productivity tools built to be clear, warm, polished, tested, local-first, and free of secrets or personal data.

## Quick Start

```bash
# Serve locally (recommended for full search functionality)
python3 -m http.server 8000
# Open http://localhost:8000
```

Or simply open `index.html` in your browser. Note: client-side search works best when served over HTTP; opening via `file://` may be blocked by browser security policies.

## Features

- **Client-side search** — filter by title, topic, category, or step text
- **Category chips** — one-click filtering (Lease checklists / Repair-request letters / Move-in/move-out checklists)
- **10 curated free resources** — all $0 cost, no affiliate links, official source links only
- **Responsive cards** — cost badge, numbered steps, source attribution, official link button
- **Markdown sources** — each listing has a `.md` file in `listings/` for reuse/republication
- **Zero dependencies** — vanilla HTML/CSS/JS, no build step, no install

## Project Structure

```
.
├── index.html              # Main HTML page
├── css/style.css           # Styles (responsive, accessible)
├── js/app.js               # Search, filter, rendering logic
├── data/listings.json      # Canonical resource data
├── listings/               # Markdown source for each listing
│   ├── hud-tenant-rights.md
│   ├── indiana-tenant-rights-handbook.md
│   ├── usa-gov-tenant-rights.md
│   ├── indiana-eviction-response.md
│   ├── repair-request-letter-template.md
│   ├── indiana-repair-and-deduct.md
│   ├── lawhelp-local-legal-aid.md
│   ├── hud-move-in-checklist.md
│   ├── indiana-move-out-checklist.md
│   └── usa-gov-security-deposit.md
├── LICENSE                 # MIT License
├── README.md               # This file
└── STATUS.md               # Build/verification status
```

## Listings

| Category | Title | Source |
|----------|-------|--------|
| Lease checklists | HUD Tenant Rights & Lease Basics | HUD |
| Lease checklists | Indiana Tenant Rights Handbook | Indiana Legal Services |
| Lease checklists | USA.gov Tenant Rights | USA.gov |
| Lease checklists | Responding to an Indiana Eviction Notice | Indiana Legal Services |
| Repair-request letters | Repair Request Letter Template | Indiana Legal Services |
| Repair-request letters | Indiana Repair-and-Deduct Notice Guide | Indiana Legal Services |
| Repair-request letters | Find Free Local Legal Aid | LawHelp.org |
| Move-in/move-out checklists | HUD Move-In Condition Checklist | HUD |
| Move-in/move-out checklists | Indiana Move-Out Checklist & Security Deposit | Indiana Legal Services |
| Move-in/move-out checklists | Security Deposit Return Checklist | USA.gov |

## Verify / Test

```bash
# Validate JSON structure and required fields
node -e '
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data/listings.json", "utf8"));
const required = ["id","title","category","cost","summary","source","officialLink","steps","tags"];
let ok = true;
for (const l of data.listings) {
  for (const k of required) if (!(k in l)) { console.log("MISSING", l.id, k); ok = false; }
  if (!l.officialLink.startsWith("http")) { console.log("BAD LINK", l.id); ok = false; }
  if (!Array.isArray(l.steps) || l.steps.length === 0) { console.log("BAD STEPS", l.id); ok = false; }
  if (!/free/i.test(l.cost)) { console.log("NOT FREE", l.id); ok = false; }
}
console.log("listings:", data.listings.length);
console.log("categories:", [...new Set(data.listings.map(l => l.category))].join(", "));
console.log(ok ? "ALL CHECKS PASSED" : "CHECKS FAILED");
'

# Quick HTTP smoke test (requires python3)
python3 -m http.server 8000 &
PID=$!
sleep 1
curl -sf -o /dev/null -w "index.html: %{http_code}\n" http://localhost:8000/index.html
curl -sf -o /dev/null -w "listings.json: %{http_code}\n" http://localhost:8000/data/listings.json
curl -sf -o /dev/null -w "style.css: %{http_code}\n" http://localhost:8000/css/style.css
curl -sf -o /dev/null -w "app.js: %{http_code}\n" http://localhost:8000/js/app.js
kill $PID
```

## Credit & License

Copyright (c) 2026 Asdale Dynamics, LLC. Published by Asdale Dynamics, LLC (Indiana).

- **License:** MIT — see `LICENSE` for full text
- **Disclaimer:** Educational resources only; not legal advice. Not affiliated with any government agency. No affiliate links.
- **Brand:** Asdale Dynamics, LLC focuses on beginner-friendly AI education, books/guides, practical tools, small-business/author tools, accessible life-admin helpers, healthcare-worker AI aids (education only), and fun extras (gaming/chess).