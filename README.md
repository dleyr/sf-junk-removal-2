# S&F Junk Removal — Website

A complete, production-ready marketing website for a local junk removal
business. Built as **plain HTML, CSS, and JavaScript** — no framework,
no build step, no lock-in. You can open `index.html` directly in a
browser, or deploy it to any static host in a few clicks.

> **Before launch:** this project ships with clearly-labeled
> placeholder content (phone number, email, pricing, service areas,
> about text, reviews). Nothing on the live site should be presented
> as fact until you've replaced these placeholders with real
> information — see [Updating business information](#updating-business-information) below.

---

## 1. What this project is

- A single-page site (`index.html`) covering: hero, services, how it
  works, why choose us, pricing, about, service areas, reviews, FAQ,
  and a quote/contact form — everything from the design brief.
- **Technology:** static HTML5, CSS3 (custom properties, no
  framework), and vanilla JavaScript (ES6+). No React, no npm
  dependencies required to run it.
- **Content is centralized** in `js/content.js` — one file to edit
  for almost everything (see below).
- **Forms** are wired for [Netlify Forms](https://docs.netlify.com/forms/setup/)
  out of the box, so submissions work immediately if you deploy on
  Netlify — no backend to build.

---

## 2. Project structure

```
sf-junk-removal/
├── index.html            # The entire page structure/markup
├── css/
│   └── styles.css        # All styling (design tokens at the top)
├── js/
│   ├── content.js         # ← EDIT THIS to update business content
│   ├── icons.js            # Original SVG icon set used throughout
│   └── main.js              # Renders content + handles interactions
├── images/
│   └── icons/favicon.svg   # Site favicon
├── netlify.toml            # Netlify deployment config
├── vercel.json              # Vercel deployment config
├── package.json               # Optional local dev server script
├── .env.example                 # Documentation for optional integrations
├── .gitignore
└── README.md
```

---

## 3. Running it locally

No installation is required to view the site:

1. Open `index.html` directly in a browser, **or**
2. Run a local server (recommended, since some browsers restrict
   local file access for things like the mobile menu):

   ```bash
   npm run dev
   ```

   This uses `npx serve` to host the folder at
   `http://localhost:5173` — no dependencies get installed into the
   project itself.

There is **no build step**. What you see locally is exactly what
gets deployed.

---

## 4. Updating business information

Almost everything on the site is controlled from **`js/content.js`**.
Open that file and edit the plain JavaScript object — each field is
commented with what it controls:

| What you want to change      | Where in `content.js`         |
|-------------------------------|--------------------------------|
| Business name, phone, email, hours | `business` |
| Hero headline/subtext          | `hero` |
| Services offered                | `services` (array — add/remove/edit freely) |
| "How It Works" steps            | `process` |
| "Why Choose Us" bullets         | `whyChooseUs` |
| Pricing tiers                   | `pricing` |
| About section text              | `about` |
| Service areas                   | `serviceAreas.areas` (array of strings) |
| Reviews                         | `reviews` (array — see below) |
| FAQ questions/answers           | `faqs` |
| Contact form backend            | `form` |

Save the file and refresh the page — everything updates automatically
because the page renders this data at load time (see `js/main.js`).

### Adding real reviews

`reviews` starts as an **empty array on purpose** — the site shows a
polished "reviews coming soon" message instead of fake testimonials.
When you have real reviews, add objects like this:

```js
reviews: [
  {
    name: "Jordan P.",
    rating: 5,
    text: "Real review text goes here.",
    date: "2026-03-14",
    source: "Google",     // "Google", "Yelp", "Direct", etc.
    photo: ""              // optional path to a real photo, e.g. "images/reviews/jordan.jpg"
  }
]
```

The reviews grid will render automatically once the array isn't empty.

### Updating pricing

Each entry in `pricing.tiers` has a `price` field. Leave it as an
empty string (`""`) to show **"Get a Custom Quote"** instead of a
number — useful until you've finalized real pricing. Fill it in
(e.g. `"Starting at $89"`) once you have confirmed numbers.

### Updating service areas

`serviceAreas.areas` is an empty array by default, which shows a
"service area list coming soon" message. Add city/neighborhood/ZIP
strings to populate the chips:

```js
areas: ["Example City", "Another Neighborhood", "ZIP 00000"]
```

---

## 5. Replacing the logo

The header and footer both use a `.logo` block:

```html
<a href="#top" class="logo">
  <span class="logo-mark" id="logo-slot">S&amp;F</span>
  <span class="logo-text">S&amp;F Junk Removal<span>Local &amp; Reliable</span></span>
</a>
```

To use a real logo image, replace the `<span class="logo-mark">…</span>`
with an `<img>` tag, e.g.:

```html
<img src="images/logo.svg" alt="S&F Junk Removal" class="logo-mark" style="border-radius:0;background:none;" />
```

Add your logo file to `images/` and update the `src` path in both the
header and footer. The surrounding spacing and layout are built to
accommodate any reasonably-sized logo without further changes.

The favicon lives at `images/icons/favicon.svg` — replace that file
with your own icon (keep the filename, or update the `<link rel="icon">`
tag in `index.html`).

---

## 6. Replacing images

The hero and about sections currently use **original, hand-built SVG
illustrations** (not stock photography) so the site never implies
that placeholder imagery shows real S&F trucks, jobs, or staff.

To swap in real photography:

1. Add your image files under `images/` (e.g. `images/hero.jpg`,
   `images/about.jpg`).
2. In `index.html`, find the `.hero-visual-frame` and `.about-media`
   blocks and replace the inline `<svg>...</svg>` with an `<img>` tag
   pointing at your file, e.g.:

   ```html
   <img src="images/about.jpg" alt="S&F Junk Removal team at work" />
   ```

3. Add meaningful `alt` text describing what the photo actually shows.

---

## 7. The contact/quote form

The form (`#quoteForm` in `index.html`) is pre-wired for **Netlify
Forms**, which requires no backend and no environment variables:

- It includes `data-netlify="true"`, a hidden `form-name` field, and
  a honeypot field for spam protection.
- When deployed to Netlify, submissions appear automatically under
  **Site settings → Forms** in your Netlify dashboard, and you can
  connect email notifications from there.

### Deploying somewhere other than Netlify

If you're deploying to Vercel, GitHub Pages, Cloudflare Pages, or
another host, Netlify Forms won't work (it's Netlify-specific). To
connect a different form backend (e.g. [Formspree](https://formspree.io)):

1. Create a form endpoint with your chosen provider and copy the URL.
2. Open `js/content.js` and update:

   ```js
   form: {
     useNetlifyForms: false,
     formEndpoint: "https://formspree.io/f/your-form-id"
   }
   ```

3. That's it — `js/main.js` automatically points the form at your
   endpoint when `useNetlifyForms` is `false`.

If you deploy without configuring either option, the form will show a
clear message asking the visitor to call or email directly, rather
than silently failing or pretending to work.

---

## 8. Deploying

This is a static site — any static host works. Three common options:

### Netlify (recommended — Forms work with zero config)

1. Push this project to a GitHub repository (see below).
2. In Netlify: **Add new site → Import an existing project** and
   select the repo.
3. Build settings:
   - **Build command:** leave blank
   - **Publish directory:** `.` (the repo root)
4. Deploy. Netlify Forms will start capturing submissions
   automatically once the site is live.

### Vercel

1. Push this project to GitHub.
2. In Vercel: **Add New Project** and import the repo.
3. Framework preset: **Other** (no build step needed).
4. Deploy.
   (Remember to connect a form backend per [section 7](#7-the-contactquote-form) since Vercel doesn't have Netlify Forms.)

### GitHub Pages

1. Push this project to GitHub.
2. In the repo: **Settings → Pages → Deploy from a branch**, select
   your main branch and root folder.
3. Your site will be live at `https://your-username.github.io/repo-name/`.
   (Connect a form backend per section 7, since GitHub Pages is
   static-only.)

### Pushing to GitHub for the first time

```bash
git init
git add .
git commit -m "Initial commit: S&F Junk Removal website"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

---

## 9. Environment variables

This site needs **no environment variables to run** — there's no
build step and no secrets baked into the code. `.env.example` is
included purely as documentation for optional future integrations
(like a non-Netlify form service or analytics). See the comments in
that file for details.

---

## 10. Accessibility & performance notes

- Semantic HTML landmarks (`header`, `main`, `footer`, `nav`) and a
  visible "skip to content" link.
- Full keyboard navigation with visible focus states.
- Color contrast checked against the navy/orange palette.
- Animations respect `prefers-reduced-motion`.
- No external JS frameworks — fast load times by default.

---

## 11. Before you launch — checklist

- [ ] Replace phone number and email in `js/content.js`
- [ ] Confirm and set real business hours
- [ ] Replace hero/about placeholder illustrations with real photos (optional)
- [ ] Replace the logo
- [ ] Confirm/finalize services offered
- [ ] Fill in real pricing (or leave blank to show "Get a Custom Quote")
- [ ] Add real service areas
- [ ] Add real reviews as they come in — never before then
- [ ] Update the About section with your real story
- [ ] Confirm the contact form is connected (Netlify Forms or another provider)
- [ ] Update Privacy Policy / Terms links in the footer if you add those pages
- [ ] Double-check there are no remaining placeholder values anywhere in `content.js`
