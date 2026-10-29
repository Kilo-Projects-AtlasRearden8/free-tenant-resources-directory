# Free Tenant Resources Directory

Free lease checklists, repair-request letters, and move-in/move-out checklists for renters.

Every listing includes cost (all are free), steps, and an official link. No affiliate links.

## About

This directory is published by **Asdale Dynamics, LLC** (Indiana, formed October 2026), founded by Dylan Asdale — registered nurse turned AI author and founder of Asdale Dynamics, LLC. His book *The Massive AI Manual* and hub site dylanasdale.github.io explain AI "like a friend would": plain English, step by step, never condescending.

This site is part of the LLC's accessible life-admin helpers line: paperwork organizers, budgeting, and low-energy productivity tools built to be clear, warm, polished, tested, local-first, and free of secrets or personal data.

## How to run

This is a static HTML site with client-side search. No build step, no install, no server required.

1. Open `index.html` in any modern web browser.
2. Use the search box to filter by title, topic, or category.
3. Click a category chip to show only that category.
4. Click "Official link" on any listing to open the source organization's page.

For the most reliable experience when opening `index.html` directly (`file://`), serve the folder over HTTP, e.g.:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What's inside

- `index.html` — static site with client-side search
- `css/style.css` — styles
- `js/app.js` — search and rendering logic
- `data/listings.json` — resource data (cost, steps, official link per listing)
- `listings/*.md` — Markdown source for each listing

## Credit

Copyright (c) 2026 Asdale Dynamics, LLC. Published by Asdale Dynamics, LLC (Indiana).

Educational resources only; not legal advice. Not affiliated with any government agency. No affiliate links.
