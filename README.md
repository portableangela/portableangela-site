# portableangela.com

A static site, ready for GitHub Pages or Cloudflare Pages. No build step,
no framework — just HTML, CSS, and a bit of JS.

## Structure

```
index.html            Home
about.html            Bio, education, exhibitions/residencies/fellowships
literary.html          Literary projects grid
series.html           Series projects grid
collaborations.html  Collaborations grid
project.html          Single project template (reads ?slug=... from the URL)
contact.html          Contact form + newsletter signup
content.js            ALL site copy lives here — edit this file to change any text
css/style.css         Shared styles (white background, lilac accent)
js/main.js            Nav behavior + renders content.js into each page
images/               Add your real photos here (see below)
```

## Editing content

Everything text-based — the bio, project descriptions, exhibition list, nav
labels — lives in `content.js`. You don't need to touch the HTML files to
update copy. Each project has a `slug` — that's what `project.html?slug=...`
looks up, and it's also the URL Google will index, so keep slugs stable once
the site is live.

## Adding Spanish later

`content.js` has one object per language, currently just `en`. To add
Spanish:
1. Duplicate the entire `en: { ... }` object, rename it to `es: { ... }`,
   and translate the strings.
2. The language toggle button in `js/main.js` already checks for `SITE.es`
   and will switch to it automatically — no other code changes needed.

## Adding real photos

Each project detail page currently shows two placeholder gray boxes
(`.frame` divs in `project.html`, rendered by `renderProjectDetail()` in
`js/main.js`). To add real images:
1. Drop image files into the matching folder under `images/` (e.g.
   `images/series/coffee-and-japan-1.jpg`).
2. In `content.js`, each project can take an `images: ["path/to/file.jpg"]`
   array — add that field, then update the `renderProjectDetail()` function
   in `js/main.js` to render `<img>` tags from it instead of the empty
   `.frame` divs (I'm happy to wire this up once photos are ready).

## Before going live — two placeholders to replace

In `content.js`, under `contact`:
- `formEndpoint`: currently `https://formspree.io/f/REPLACE_ME` — sign up at
  formspree.io (free tier), create a form, and paste your real endpoint URL.
- `newsletterEndpoint`: currently a Buttondown placeholder — sign up at
  buttondown.email, get your embed URL, and paste it in.

## Deploying

1. Push this folder to a GitHub repository.
2. Create a Cloudflare Pages project, connect the repo (no build command
   needed — it's static HTML).
3. In Cloudflare Pages, add `portableangela.com` as a custom domain —
   Cloudflare will give you the DNS records to add in GoDaddy.
4. SSL is issued automatically once DNS propagates.
