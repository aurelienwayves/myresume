# Interactive CV — Aurélien Bertheaume

A static site (HTML / CSS / JS, no framework, nothing to install) built as an
interactive CV: a chronological experience timeline where every bullet point
expands to show the skills/tools behind it, with skills cross-linked to every
other place they show up (other roles, personal projects).

## Run it locally

No install needed. From this folder:

```bash
python3 -m http.server 8000
```

then open http://localhost:8000 in your browser.

(Double-clicking `index.html` directly usually works too, but a local server
avoids some browser security quirks.)

## Where to edit content

**Only one file to edit for all the text: `assets/js/data.js`.**
The layout never needs to change — everything regenerates from that file.
Anything written as `[LIKE THIS]` is still a placeholder.

In `data.js`, in order:

1. **`profile`** — name, job titles (cycling in the hero), location, tagline,
   the product-management "pivot" line, bio paragraphs, contact details,
   highlight chips, and passions (icon + label).
2. **`photo`** — leave `src: null` to keep the round initials avatar, or set
   `src: "assets/img/photo/your-file.jpg"` once you've added a photo to
   `assets/img/photo/`.
3. **`video`** — paste a YouTube or Vimeo link into `url`. While it's empty,
   an elegant placeholder shows instead.
4. **`kpis`** — 3-4 headline numbers shown in the Impact section.
5. **`skillCategories` / `skills`** — your skills, grouped by theme. Each
   skill has a unique `id`.
6. **`experience`** — the core of the CV. Each role has `bullets`, and each
   bullet has its own `skills` (a list of ids from step 5). That's what
   drives the whole "click a bullet → see the skills → click a skill → see
   everywhere else it was used" interaction.
7. **`education`** — a simple list (school, degree, period).
8. **`personalProjects`** — real personal/community projects, shown magazine
   style under "Beyond the Job". Add photos to `assets/img/personal/` and
   reference them in `image`.
9. **`linkedinPosts`** — cards linking out to your real LinkedIn posts.
10. **`references`** — testimonials (quote, name, role, relationship) plus a
    short note about additional references being available on request.

After editing, just reload the page — nothing to build or compile.

## How the skill cross-linking works

- Every experience bullet lists the skills/tools it took to deliver it.
- Clicking a bullet reveals those skills inline.
- Clicking a skill (from a bullet, from the Skills section, or from a
  personal project) opens a panel listing **everywhere else** that skill
  shows up — other roles and personal projects — with a direct link to each.
  Clicking through scrolls to and expands that exact bullet.

That network is entirely built from the `skills: [...]` arrays in
`data.js` — the more precise you are there, the richer the navigation.

## A note on privacy

The References section intentionally avoids publishing anyone's personal
email or phone number on a public page. List who's willing to vouch for you
(name, role, relationship) and let recruiters ask for contact details
directly — safer, and standard practice.

## Deployment — GitHub Pages + `aurelienbertheaume.me`

This repo already has a `CNAME` file with `aurelienbertheaume.me`, which
GitHub Pages uses to know which custom domain to serve.

1. On GitHub: **Settings → Pages**.
   - Source: `Deploy from a branch`.
   - Branch: the branch to publish (typically `main`), folder `/ (root)`.
   - Save. GitHub Pages will pick up the `CNAME` file and configure the
     custom domain automatically.
2. At your registrar (wherever you bought `aurelienbertheaume.me`), set the
   DNS records:
   - For the root domain (`aurelienbertheaume.me`), add 4 **A** records
     pointing at GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - If you'd rather use `www.aurelienbertheaume.me`, add a **CNAME** record
     pointing at `<your-account>.github.io` instead.
3. In **Settings → Pages**, tick **Enforce HTTPS** once the certificate has
   been issued (can take a few hours after the DNS change propagates).

The site will then be live at `https://aurelienbertheaume.me`.

## Project structure

```
index.html              page structure (one page, several sections)
assets/css/style.css    design system (colours, type, components)
assets/js/data.js       ALL THE CONTENT — the file to edit
assets/js/app.js        rendering and interaction logic (shouldn't need edits)
assets/img/photo/       your portrait photo
assets/img/personal/    photos for your personal projects
assets/video/           (optional) if you'd rather self-host a video file
CNAME                   custom domain for GitHub Pages
```

## Before sending this to recruiters

- [ ] Replace every `[LIKE THIS]` placeholder in `assets/js/data.js` (phone
      number is the main one left)
- [ ] Add your photo (`photo.src` in `data.js`)
- [ ] Add your intro video link (`video.url`)
- [ ] Confirm the additional references you want listed (name, role,
      relationship) and add them under `references.testimonials`
- [ ] Add real photos for the "Beyond the Job" project(s)
- [ ] Proofread on mobile (the site is responsive, but it never hurts)
- [ ] Set up DNS and confirm `https://aurelienbertheaume.me` loads the site
