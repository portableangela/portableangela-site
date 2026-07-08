/*
  main.js
  Shared behavior (nav, language toggle) plus render functions that
  populate each page's placeholders from content.js. Keeping copy in
  content.js means adding Spanish later is just adding an "es" object
  there — none of this file or the HTML needs to change.
*/

const DATA = SITE[CURRENT_LOCALE];

function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
function toParas(text) { return text.split("\n\n").map(p => `<p style="margin:0 0 1em;">${p}</p>`).join(""); }

// Manual crop adjustments for specific photos, keyed by "slug-index"
// (matching the filename without extension). Uses CSS object-position
// values: shifting the vertical value toward 0% shows more of the top
// of the photo (cropping the bottom); toward 100% shows more of the
// bottom (cropping the top). Horizontal works the same, left/right.
const PHOTO_POSITION_OVERRIDES = {
  "coffee-and-1": "50% 20%",
  "coffee-and-3": "50% 20%",
  "coffee-and-4": "50% 15%",
  "moon-letters-lab-1": "75% 15%",
  "el-poder-de-los-sures-2": "50% 0%",
  "com-partir-1": "50% 15%",
  "com-partir-3": "80% 20%",
  "round-the-block-3": "50% 100%"
};

// Returns an <img> tag that fills its parent. Tries common file
// extensions in order (jpg, jpeg, JPG, JPEG, png, PNG) since photos
// often get exported with different extensions, then silently falls
// back to the parent's placeholder background color if none exist yet.
function photoTag(basePath) {
  const exts = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG"];
  const fileName = basePath.split("/").pop();
  const position = PHOTO_POSITION_OVERRIDES[fileName];
  const styleAttr = position ? ` style="object-position:${position}"` : "";
  return `<img class="photo-fill" src="${basePath}.${exts[0]}" data-base="${basePath}" data-exts='${JSON.stringify(exts)}' data-ext-index="0" alt=""${styleAttr} onerror="handlePhotoError(this)" onload="handlePhotoLoad(this)">`;
}

function handlePhotoError(img) {
  const exts = JSON.parse(img.dataset.exts);
  const nextIndex = parseInt(img.dataset.extIndex, 10) + 1;
  if (nextIndex < exts.length) {
    img.dataset.extIndex = nextIndex;
    img.src = `${img.dataset.base}.${exts[nextIndex]}`;
  } else {
    img.remove();
  }
}

function handlePhotoLoad(img) {
  const card = img.closest(".project-card");
  if (card) card.classList.add("has-photo");
}

/* ---------- nav ---------- */
function initNav() {
  const toggle = qs(".menu-toggle");
  const nav = qs("nav.primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  const langBtn = qs(".lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      if (!SITE.es) {
        langBtn.title = "Spanish version coming soon";
        langBtn.classList.add("disabled");
        return;
      }
      const next = CURRENT_LOCALE === "en" ? "es" : "en";
      localStorage.setItem("locale", next);
      location.reload();
    });
  }

  qsa(".wordmark").forEach(el => { el.textContent = SITE[CURRENT_LOCALE].meta.siteName; });
}

/* ---------- footer ---------- */
function renderFooter() {
  const copy = qs("[data-footer-copy]");
  if (!copy) return;
  copy.textContent = DATA.footer.copyright;
  const ig = qs("[data-footer-ig]");
  if (ig) { ig.textContent = DATA.contact.instagram; ig.href = DATA.contact.instagramUrl; }
}

/* ---------- home ---------- */
function renderHome() {
  const d = DATA.home;
  qs("[data-hero-sub]").textContent = d.sub;

  const grid = qs("[data-featured-grid]");
  grid.innerHTML = "";
  d.featured.forEach(f => {
    const project = DATA.projects.find(p => p.slug === f.slug);
    if (!project) return;
    const a = document.createElement("a");
    a.href = `${f.category}.html`;
    a.className = "project-card";
    a.innerHTML = `${photoTag(`images/${project.category}/${project.slug}-${project.coverPhoto || 1}`)}<div><span class="tag">${f.label}</span></div>`;
    grid.appendChild(a);
  });
}

/* ---------- about ---------- */
function renderAbout() {
  const d = DATA.about;
  qs("[data-about-bio]").textContent = d.bio.replace(/\n\n/g, " ");
  qs(".about-photo-large").innerHTML = photoTag("images/about/portrait");

  const edu = qs("[data-education]");
  edu.innerHTML = d.education.map(e => `<div>${e.degree} \u2014 ${e.school} &middot; ${e.year}</div>`).join("");

  const fill = (sel, items) => {
    qs(sel).innerHTML = items.map(i => `${i.title} \u2014 ${i.venue}, ${i.date}`).join("<br>");
  };
  fill("[data-exhibitions]", d.exhibitions);
  fill("[data-residencies]", d.residencies);
  fill("[data-fellowships]", d.fellowships);
}

/* ---------- projects hub (literary / series / collaborations) ---------- */
function renderProjectCategory(categoryKey) {
  const cat = DATA.projectCategories[categoryKey];
  qs("[data-category-label]").textContent = cat.label;
  const introEl = qs("[data-category-intro]");
  if (introEl) introEl.innerHTML = toParas(cat.intro);

  const grid = qs("[data-project-grid]");
  grid.innerHTML = "";
  DATA.projects.filter(p => p.category === categoryKey).forEach(p => {
    const a = document.createElement("a");
    a.href = `project.html?slug=${p.slug}`;
    a.className = "project-card";
    a.innerHTML = `${photoTag(`images/${p.category}/${p.slug}-${p.coverPhoto || 1}`)}<div><span class="tag">${p.title}</span><span class="title">${p.year}</span></div>`;
    grid.appendChild(a);
  });
}

/* ---------- project detail ---------- */
function renderProjectDetail() {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const project = DATA.projects.find(p => p.slug === slug);
  const container = qs("[data-project-detail]");

  if (!project) {
    container.innerHTML = "<p>Project not found. <a href=\"index.html\">Back home</a>.</p>";
    return;
  }

  document.title = `${project.title} \u2014 ${DATA.meta.siteName}`;

  let photoIndex = 1;
  const nextPhoto = () => `images/${project.category}/${project.slug}-${photoIndex++}`;

  const buildCarousel = (count, captions) => {
    const frames = Array(count).fill(0).map(() => `<div class="detail-carousel-frame">${photoTag(nextPhoto())}</div>`).join("");
    const dots = Array(count).fill(0).map((_, i) => `<button class="carousel-dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Photo ${i + 1}"></button>`).join("");
    const captionsHtml = captions
      ? captions.map((c, i) => `<div class="detail-carousel-caption${i === 0 ? " active" : ""}">${c}</div>`).join("")
      : "";
    return `
      <div class="detail-carousel" data-carousel>
        <div class="detail-carousel-viewport">
          <div class="detail-carousel-track">${frames}</div>
        </div>
        <button class="carousel-arrow carousel-arrow--prev" aria-label="Previous photo">&larr;</button>
        <button class="carousel-arrow carousel-arrow--next" aria-label="Next photo">&rarr;</button>
        <div class="carousel-dots">${dots}</div>
        ${captionsHtml}
      </div>
    `;
  };

  const topGalleryHtml = project.topGalleryCount
    ? `${buildCarousel(project.topGalleryCount)}${project.topImageCaption ? `<div class="detail-image-caption">${project.topImageCaption}</div>` : ""}`
    : "";

  const imageHtml = project.hideImage
    ? ""
    : project.galleryCount
      ? `${buildCarousel(project.galleryCount, project.imageCaptions)}${(!project.imageCaptions && project.imageCaption) ? `<div class="detail-image-caption">${project.imageCaption}</div>` : ""}`
      : `<div class="detail-image">${photoTag(nextPhoto())}</div>${project.imageCaption ? `<div class="detail-image-caption">${project.imageCaption}</div>` : ""}`;
  const descriptionHtml = project.description ? `<div class="detail-description">${toParas(project.description)}</div>` : "";
  const bodyHtml = project.body ? `<div class="detail-body">${toParas(project.body)}</div>` : "";
  const contentBlocksHtml = (project.contentBlocks || []).map(block => {
    if (block.type === "carousel") {
      return block.captions
        ? buildCarousel(block.count, block.captions)
        : `${buildCarousel(block.count)}${block.caption ? `<div class="detail-image-caption">${block.caption}</div>` : ""}`;
    }
    return "";
  }).join("");
  const linksHtml = project.links.length
    ? `<div class="detail-links">${project.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} &rarr;</a>`).join("")}</div>`
    : "";

  const bottomPosition = project.imagePosition === "bottom";

  container.innerHTML = `
    <a class="back-link" href="${project.category}.html">&larr; Back to ${DATA.projectCategories[project.category].label}</a>
    <div class="detail-meta">${DATA.projectCategories[project.category].label}${project.year ? " &middot; " + project.year : ""}</div>
    <div class="detail-title">${project.title}</div>
    ${bottomPosition ? topGalleryHtml : imageHtml}
    ${descriptionHtml}
    ${bodyHtml}
    ${contentBlocksHtml}
    ${bottomPosition ? imageHtml : ""}
    ${linksHtml}
  `;
  initCarousels();
}

/* ---------- carousel ---------- */
function initCarousels() {
  qsa("[data-carousel]").forEach(carousel => {
    const track = qs(".detail-carousel-track", carousel);
    const frames = qsa(".detail-carousel-frame", carousel);
    const dots = qsa(".carousel-dot", carousel);
    const captions = qsa(".detail-carousel-caption", carousel);
    let index = 0;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
      captions.forEach((c, i) => c.classList.toggle("active", i === index));
    };

    const prevBtn = qs(".carousel-arrow--prev", carousel);
    const nextBtn = qs(".carousel-arrow--next", carousel);
    if (prevBtn) prevBtn.addEventListener("click", () => { index = (index - 1 + frames.length) % frames.length; update(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { index = (index + 1) % frames.length; update(); });
    dots.forEach((dot, i) => dot.addEventListener("click", () => { index = i; update(); }));
  });
}

/* ---------- contact ---------- */
function renderContact() {
  const d = DATA.contact;
  qs("[data-contact-heading]").textContent = d.heading;
  qs("[data-contact-sub]").textContent = d.sub;
  qs("[data-contact-form]").action = d.formEndpoint;
  qs("[data-newsletter-heading]").textContent = d.newsletterHeading;
  qs("[data-newsletter-sub]").textContent = d.newsletterSub;
  qs("[data-newsletter-form]").action = d.newsletterEndpoint;
  qs("[data-social-ig]").textContent = d.instagram;
  qs("[data-social-ig]").href = d.instagramUrl;
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderFooter();
});
