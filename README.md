# kp-portfolio

A lightweight static personal portfolio.

## Preview

Open `index.html` in a browser. There is no build step and no package install.

## Deploy on Vercel

Dashboard flow:

1. Push this repo to GitHub.
2. In Vercel, choose Add New > Project and import the GitHub repo.
3. Use the project root as the root directory.
4. Leave Framework Preset as Other, Build Command empty, and Output Directory empty.
5. Deploy.

CLI flow:

```bash
npx vercel
npx vercel --prod
```

The site is configured with `vercel.json` for clean URLs and basic security
headers.

## Customize

Most portfolio content lives in the `portfolio` object at the top of `script.js`.
Replace the placeholder name, email, resume URL, case studies, projects, stats,
timeline, and bio copy with your real details.

The deployed resume asset lives at `assets/kyle-peng-resume.pdf` and is linked
from the hero section.

Useful content to gather:

- Name, title, location, availability, email, and social links.
- A short intro and a longer bio.
- Resume PDF or external resume link.
- 3-5 selected projects with title, summary, role, stack, result, and URL.
- 2-3 measurable outcomes or credibility stats.
- Optional headshot, project screenshots, writing links, talks, and testimonials.
