# GFM Consult — Company Profile + LHMS Landing

Static, build-free website for **PT Geo-Fondasi Multi Konsultan (GFM Consult)** and its **LHMS — Landslide Hazard & Monitoring System** landing page.

## Stack
- HTML
- Tailwind CSS (CDN)
- Alpine.js (CDN)
- Vanilla JS for scroll reveal, counters, marquee, active section

No frameworks, no build tools, no backend, no database.

## Structure
```
.
├── index.html            # Company Profile
├── lhms.html             # LHMS Landing Page
├── vercel.json           # Vercel config (clean URLs)
├── assets/
│   ├── css/style.css     # Custom styles (animations, reveal, glass, etc.)
│   ├── js/main.js        # Scroll reveal, counters, active nav
│   ├── img/              # Place project & team images here
│   └── icons/            # Place SVG icons here
```

## Run locally
Open `index.html` with **Live Server** (VS Code) or any static server.

```bash
# Optional alternatives
npx serve .
# or
python -m http.server 5500
```

## Deploy to Vercel
1. Push this folder to a Git repository (GitHub / GitLab / Bitbucket).
2. Import the repo in [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Other** (static). No build command, no output dir.
4. Deploy. The site is live.

Alternatively via CLI:
```bash
npm i -g vercel
vercel
```

## Pages
- `/` → Company Profile (`index.html`)
- `/lhms` → LHMS Landing (`lhms.html`)

All LHMS-related CTAs in the Company Profile link to `lhms.html`.

## Customize
- Brand colors live in `tailwind.config` inside each HTML head + `assets/css/style.css` (`:root`).
- Replace placeholder team avatars by dropping images into `assets/img/` and swapping the avatar markup in `index.html`.
- Update project, contact, and team data inline in `index.html`.

## Contact
PT Geo-Fondasi Multi Konsultan — Semarang, Indonesia
Phone: 082 135 057 849 · Email: malik@gfm-consult.com · IG: @Gfm.consult
