/**
 * CV interactif — logique de rendu et d'interactions.
 * Tout le contenu vient de SITE_DATA (assets/js/data.js).
 * Ce fichier n'a normalement pas besoin d'être modifié.
 */
(function () {
  "use strict";

  const D = SITE_DATA;

  // --------------------------------------------------------------------
  // Icônes (une par catégorie) — line-art simple, cohérent avec le thème
  // --------------------------------------------------------------------
  const ICONS = {
    architecture: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 40h36M10 40V16l14-8 14 8v24M18 40V24h12v16"/><path d="M6 16h36" stroke-dasharray="2 3"/></svg>',
    program: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="24" r="5"/><circle cx="36" cy="10" r="5"/><circle cx="36" cy="38" r="5"/><path d="M16.5 22 31.5 12M16.5 26 31.5 36"/></svg>',
    product: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M24 5 42 15v18L24 43 6 33V15z"/><path d="M6 15 24 25l18-10M24 25v18"/></svg>',
    marketing: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 20v8h7l16 9V11l-16 9z"/><path d="M29 15c4 3 4 15 0 18M36 10c6 5 6 23 0 28" stroke-linecap="round"/></svg>',
    skill: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="24" cy="24" r="6"/><circle cx="8" cy="10" r="4"/><circle cx="40" cy="10" r="4"/><circle cx="8" cy="38" r="4"/><circle cx="40" cy="38" r="4"/><path d="M19 20 11 13M29 20l8-7M19 28l-8 7M29 28l8 7"/></svg>',
    external: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>'
  };
  const iconFor = (cat) => ICONS[cat] || ICONS.product;

  const byId = (id) => document.getElementById(id);
  const skillById = (id) => D.skills.find((s) => s.id === id);
  const projectById = (id) => D.projects.find((p) => p.id === id);
  const personalById = (id) => D.personalProjects.find((p) => p.id === id);
  const catLabel = (list, id) => (list.find((c) => c.id === id) || {}).label || id;

  // ======================================================================
  // THEME
  // ======================================================================
  function initTheme() {
    const saved = localStorage.getItem("cv-theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    byId("theme-toggle").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("cv-theme", next);
    });
  }

  // ======================================================================
  // HEADER (scroll shadow + mobile nav)
  // ======================================================================
  function initHeader() {
    const header = byId("site-header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }, { passive: true });

    const toggle = byId("nav-toggle");
    const links = byId("nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ======================================================================
  // HERO / PROFILE / ABOUT / CONTACT
  // ======================================================================
  function renderProfile() {
    const p = D.profile;
    byId("brand-mark").textContent = p.initials;
    byId("brand-name").textContent = p.name;
    byId("hero-name").textContent = p.name;
    byId("hero-tagline").textContent = p.tagline;
    byId("photo-initials").textContent = p.initials;
    byId("footer-name").innerHTML = `© <span id="footer-year"></span> ${p.name}`;
    byId("footer-year").textContent = new Date().getFullYear();
    document.title = `${p.name} — ${p.roles[0]} & ${p.pivotRole}`;

    const highlightWrap = byId("hero-highlights");
    highlightWrap.innerHTML = p.highlights.map((h) => `<span class="chip">${h}</span>`).join("");

    byId("bio-paragraphs").innerHTML = p.bio.map((para) => `<p>${para}</p>`).join("");
    byId("pivot-note").textContent = p.bio.length > 2 ? p.bio[2] : `Capable d'évoluer vers un rôle ${p.pivotRole}.`;

    // Photo réelle si fournie
    if (D.photo && D.photo.src) {
      const frame = byId("photo-frame");
      const img = document.createElement("img");
      img.src = D.photo.src;
      img.alt = D.photo.alt || p.name;
      frame.innerHTML = "";
      frame.appendChild(img);
    }

    // Contact
    byId("contact-links").innerHTML = `
      <a class="btn btn-primary" href="mailto:${p.email}">${ICONS.arrow} Écrire un email</a>
      <a class="btn btn-ghost" href="${p.linkedinUrl}" target="_blank" rel="noopener">${p.linkedinLabel}</a>
      <a class="btn btn-ghost" href="tel:${(p.phone || "").replace(/\s+/g, "")}">${p.phone}</a>
    `;
  }

  function initRoleCycler() {
    const roles = D.profile.roles.concat([D.profile.pivotRole + " (pivot)"]);
    const el = byId("role-text");
    let i = 0;
    setInterval(() => {
      i = (i + 1) % roles.length;
      el.style.opacity = 0;
      setTimeout(() => {
        el.textContent = roles[i];
        el.style.opacity = 1;
      }, 220);
    }, 2600);
    el.style.transition = "opacity .22s ease";
  }

  // ======================================================================
  // SKILLS
  // ======================================================================
  function skillChipHTML(skillId, small) {
    const s = skillById(skillId);
    if (!s) return "";
    return `<button type="button" class="skill-chip${small ? " is-small" : ""}" data-skill="${s.id}">${s.name}</button>`;
  }

  // Version non-interactive : utilisée à l'intérieur des cartes projet/perso,
  // qui sont elles-mêmes des <button> — imbriquer un <button> dans un <button>
  // est invalide en HTML et casse le rendu. Le clic réel se fait une fois la
  // fiche ouverte (dans la modale, où les chips redeviennent cliquables).
  function skillTagHTML(skillId) {
    const s = skillById(skillId);
    if (!s) return "";
    return `<span class="skill-chip is-small is-static">${s.name}</span>`;
  }

  function renderSkills() {
    const wrap = byId("skills-groups");
    wrap.innerHTML = D.skillCategories.map((cat) => {
      const items = D.skills.filter((s) => s.categoryId === cat.id);
      return `
        <div class="reveal">
          <span class="skill-group-label">${cat.label}</span>
          <div class="skill-chips">${items.map((s) => skillChipHTML(s.id, false)).join("")}</div>
        </div>`;
    }).join("");
  }

  // ======================================================================
  // PROJECTS
  // ======================================================================
  let activeCategory = "all";

  function renderProjectFilters() {
    const wrap = byId("project-filters");
    const tabs = [{ id: "all", label: "Tous" }].concat(D.projectCategories);
    wrap.innerHTML = tabs.map((t) =>
      `<button type="button" class="filter-tab${t.id === activeCategory ? " is-active" : ""}" data-filter="${t.id}">${t.label}</button>`
    ).join("");
    wrap.querySelectorAll(".filter-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.filter;
        renderProjectFilters();
        renderProjectsGrid();
      });
    });
  }

  function projectCardHTML(p) {
    return `
      <button type="button" class="project-card reveal is-visible" data-project="${p.id}">
        <div class="card-visual">
          <span class="cat-tag">${catLabel(D.projectCategories, p.category)}</span>
          ${iconFor(p.category)}
        </div>
        <div class="card-body">
          <div class="card-meta">${p.org} · ${p.period}</div>
          <h3>${p.title}</h3>
          <p class="summary">${p.summary}</p>
          <div class="card-skill-preview">
            ${p.skills.slice(0, 3).map((id) => skillTagHTML(id)).join("")}
          </div>
          <span class="card-arrow">Voir le détail ${ICONS.arrow}</span>
        </div>
      </button>`;
  }

  function renderProjectsGrid() {
    const grid = byId("projects-grid");
    const list = activeCategory === "all" ? D.projects : D.projects.filter((p) => p.category === activeCategory);
    grid.innerHTML = list.map(projectCardHTML).join("") || `<p>Aucun projet dans cette catégorie pour l'instant.</p>`;
    bindCardEvents(grid);
  }

  // ======================================================================
  // PERSONAL PROJECTS
  // ======================================================================
  function personalCardHTML(p) {
    return `
      <button type="button" class="project-card article-card reveal is-visible" data-personal="${p.id}">
        <div class="card-visual">
          ${p.image ? `<img class="card-photo" src="${p.image}" alt="${p.title}">` : iconFor("product")}
        </div>
        <div class="card-body">
          <div class="card-meta">${p.date}</div>
          <h3>${p.title}</h3>
          <p class="summary">${p.excerpt}</p>
          <div class="card-skill-preview">
            ${p.skills.slice(0, 3).map((id) => skillTagHTML(id)).join("")}
          </div>
          <span class="card-arrow">Lire l'article ${ICONS.arrow}</span>
        </div>
      </button>`;
  }

  function renderPersonalGrid() {
    const grid = byId("personal-grid");
    grid.innerHTML = D.personalProjects.map(personalCardHTML).join("");
    bindCardEvents(grid);
  }

  // ======================================================================
  // LINKEDIN
  // ======================================================================
  function renderLinkedin() {
    const grid = byId("linkedin-grid");
    grid.innerHTML = D.linkedinPosts.map((post) => `
      <a class="li-card reveal is-visible" href="${post.url}" target="_blank" rel="noopener">
        <div class="li-top">
          <span class="li-badge">in</span>
          <span class="li-date">${post.date}</span>
        </div>
        <h3>${post.title}</h3>
        <p class="excerpt">${post.excerpt}</p>
        <span class="li-open">Lire sur LinkedIn ${ICONS.external}</span>
      </a>
    `).join("");
  }

  // ======================================================================
  // VIDEO
  // ======================================================================
  function embedUrlFor(url) {
    if (!url) return null;
    const yt = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{6,})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
    const vimeo = url.match(/vimeo\.com\/(\d+)/);
    if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
    return url;
  }

  function renderVideo() {
    const shell = byId("video-shell");
    const embed = embedUrlFor(D.video.url);
    if (embed) {
      shell.innerHTML = `<iframe src="${embed}" title="Vidéo de présentation" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    } else if (D.video.caption) {
      byId("video-caption").textContent = D.video.caption;
    }
  }

  // ======================================================================
  // MODAL — 3 modes : project / personal / skill
  // ======================================================================
  const modal = byId("detail-modal");
  const modalBody = byId("modal-body");

  function openModal(mode, id) {
    if (mode === "project") renderProjectModal(projectById(id));
    if (mode === "personal") renderPersonalModal(personalById(id));
    if (mode === "skill") renderSkillModal(skillById(id));
    if (typeof modal.showModal === "function") {
      if (!modal.open) modal.showModal();
    }
    modalBody.scrollTop = 0;
  }

  function relatedItemsForSkill(skillId) {
    const projects = D.projects.filter((p) => p.skills.includes(skillId)).map((p) => ({ kind: "project", id: p.id, title: p.title, label: "Projet" }));
    const personal = D.personalProjects.filter((p) => p.skills.includes(skillId)).map((p) => ({ kind: "personal", id: p.id, title: p.title, label: "Perso" }));
    return projects.concat(personal);
  }

  function relatedCardsHTML(items) {
    if (!items.length) return `<p>Rien d'autre à montrer ici pour l'instant.</p>`;
    return `<div class="modal-related">${items.map((it) => `
      <button type="button" class="related-card" data-open="${it.kind}" data-open-id="${it.id}">
        <div class="rc-kind">${it.label}</div>
        <div class="rc-title">${it.title}</div>
      </button>`).join("")}</div>`;
  }

  function renderProjectModal(p) {
    if (!p) return;
    byId("modal-kicker").textContent = `${catLabel(D.projectCategories, p.category)} · ${p.org} · ${p.period}`;
    byId("modal-title").textContent = p.title;
    modalBody.innerHTML = `
      <div class="modal-figure">${iconFor(p.category)}</div>
      <p>${p.summary}</p>
      <h4>Contexte &amp; rôle</h4>
      <ul>${p.description.map((d) => `<li>${d}</li>`).join("")}</ul>
      <h4>Résultats</h4>
      <ul>${p.impact.map((d) => `<li>${d}</li>`).join("")}</ul>
      <h4>Compétences mobilisées — clique pour explorer</h4>
      <div class="skill-chips">${p.skills.map((id) => skillChipHTML(id, false)).join("")}</div>
    `;
    bindModalInternalEvents();
  }

  function renderPersonalModal(p) {
    if (!p) return;
    byId("modal-kicker").textContent = `Projet personnel · ${p.date}`;
    byId("modal-title").textContent = p.title;
    modalBody.innerHTML = `
      <div class="modal-figure">${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover">` : iconFor("product")}</div>
      <p><em>${p.excerpt}</em></p>
      ${p.content.map((para) => `<p>${para}</p>`).join("")}
      <h4>Compétences mobilisées — clique pour explorer</h4>
      <div class="skill-chips">${p.skills.map((id) => skillChipHTML(id, false)).join("")}</div>
    `;
    bindModalInternalEvents();
  }

  function renderSkillModal(s) {
    if (!s) return;
    byId("modal-kicker").textContent = catLabel(D.skillCategories, s.categoryId);
    byId("modal-title").textContent = s.name;
    const items = relatedItemsForSkill(s.id);
    modalBody.innerHTML = `
      <div class="modal-figure">${ICONS.skill}</div>
      <p>${s.blurb}</p>
      <h4>Utilisée dans ${items.length} réalisation${items.length > 1 ? "s" : ""}</h4>
      ${relatedCardsHTML(items)}
    `;
    bindModalInternalEvents();
  }

  function bindModalInternalEvents() {
    modalBody.querySelectorAll("[data-skill]").forEach((btn) =>
      btn.addEventListener("click", () => openModal("skill", btn.dataset.skill))
    );
    modalBody.querySelectorAll("[data-open]").forEach((btn) =>
      btn.addEventListener("click", () => openModal(btn.dataset.open, btn.dataset.openId))
    );
  }

  function bindCardEvents(scope) {
    scope.querySelectorAll("[data-project]").forEach((btn) =>
      btn.addEventListener("click", () => openModal("project", btn.dataset.project))
    );
    scope.querySelectorAll("[data-personal]").forEach((btn) =>
      btn.addEventListener("click", () => openModal("personal", btn.dataset.personal))
    );
  }

  function initModalChrome() {
    byId("modal-close").addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      const rect = modal.querySelector(".modal-card").getBoundingClientRect();
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!inside) modal.close();
    });
  }

  // Skills section click delegation (chips outside modal)
  function initGlobalSkillClicks() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".skill-chip[data-skill]");
      if (btn && !modal.open) openModal("skill", btn.dataset.skill);
    });
  }

  // ======================================================================
  // REVEAL ON SCROLL
  // ======================================================================
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  // ======================================================================
  // BOOT
  // ======================================================================
  function boot() {
    initTheme();
    initHeader();
    renderProfile();
    initRoleCycler();
    renderSkills();
    renderProjectFilters();
    renderProjectsGrid();
    renderPersonalGrid();
    renderLinkedin();
    renderVideo();
    initModalChrome();
    initGlobalSkillClicks();
    initReveal();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
