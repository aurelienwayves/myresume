/**
 * Interactive CV: rendering and interaction logic.
 * All content comes from SITE_DATA (assets/js/data.js).
 * This file shouldn't normally need to change.
 */
(function () {
  "use strict";

  const D = SITE_DATA;

  // --------------------------------------------------------------------
  // Icons
  // --------------------------------------------------------------------
  const ICONS = {
    beyond: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M24 41S7 30 7 17.5A9.5 9.5 0 0 1 24 12a9.5 9.5 0 0 1 17 5.5C41 30 24 41 24 41Z"/></svg>',
    external: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    running: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="15.5" cy="4.5" r="1.8"/><path d="M4 21l4-4 2.5-2L13 12l2 2 4 1M6 14l3.5-3L13 8l2 3 4-1"/></svg>',
    gym: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h2M19 12h2M6 9v6M18 9v6M8 12h8"/></svg>',
    cycling: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 10 8h4l3 4.5M10 8l3 4.5h-6"/></svg>',
    growth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 4l-8 8-4-4-6 6"/></svg>',
    tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
    art: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>',
    tennis: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M4.5 6.5C8 9 8 15 4.5 17.5M19.5 6.5C16 9 16 15 19.5 17.5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>'
  };

  const byId = (id) => document.getElementById(id);
  const skillById = (id) => D.skills.find((s) => s.id === id);
  const personalById = (id) => D.personalProjects.find((p) => p.id === id);
  const experienceById = (id) => D.experience.find((e) => e.id === id);
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
  // HEADER
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
    document.title = `${p.name} | ${p.roles[0]}`;

    byId("hero-location").lastChild.textContent = " " + p.location;
    byId("pivot-headline").textContent = p.pivotHeadline;
    byId("pivot-note-inline").textContent = p.pivotNote;
    byId("pivot-callout-text").textContent = `${p.pivotHeadline}: ${p.pivotNote}`;

    byId("hero-highlights").innerHTML = p.highlights.map((h) => `<span class="chip">${h}</span>`).join("");
    byId("hero-passions").innerHTML = p.passions.map((pas) => `
      <span class="passion-chip">${ICONS[pas.icon] || ""}${pas.label}</span>
    `).join("");

    byId("bio-paragraphs").innerHTML = p.bio.map((para) => `<p>${para}</p>`).join("");

    if (D.photo && D.photo.src) {
      const frame = byId("photo-frame");
      const img = document.createElement("img");
      img.src = D.photo.src;
      img.alt = D.photo.alt || p.name;
      frame.innerHTML = "";
      frame.appendChild(img);
    }

    const hasPhone = p.phone && !p.phone.startsWith("[");
    byId("contact-links").innerHTML = `
      <a class="contact-card" href="mailto:${p.email}">
        <span class="cc-icon">${ICONS.mail}</span>
        <span class="cc-text"><span class="cc-label">Email</span><span class="cc-value">${p.email}</span></span>
      </a>
      <a class="contact-card" href="${p.linkedinUrl}" target="_blank" rel="noopener">
        <span class="cc-icon cc-icon-linkedin">in</span>
        <span class="cc-text"><span class="cc-label">LinkedIn</span><span class="cc-value">${p.linkedinLabel}</span></span>
      </a>
      ${hasPhone ? `
      <a class="contact-card" href="tel:${p.phone.replace(/\s+/g, "")}">
        <span class="cc-icon">${ICONS.phone}</span>
        <span class="cc-text"><span class="cc-label">Phone</span><span class="cc-value">${p.phone}</span></span>
      </a>` : `
      <div class="contact-card is-static">
        <span class="cc-icon">${ICONS.phone}</span>
        <span class="cc-text"><span class="cc-label">Phone</span><span class="cc-value">Available on request</span></span>
      </div>`}
    `;
  }

  function initRoleCycler() {
    const roles = D.profile.roles.concat([D.profile.pivotRole]);
    const el = byId("role-text");
    let i = 0;
    el.style.transition = "opacity .22s ease";
    setInterval(() => {
      i = (i + 1) % roles.length;
      el.style.opacity = 0;
      setTimeout(() => {
        el.textContent = roles[i];
        el.style.opacity = 1;
      }, 220);
    }, 2600);
  }

  // ======================================================================
  // KPIs
  // ======================================================================
  function renderKPIs() {
    byId("kpi-grid").innerHTML = D.kpis.map((k) => `
      <div class="kpi-card reveal is-visible">
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-label">${k.label}</div>
      </div>
    `).join("");
  }

  // ======================================================================
  // SKILLS
  // ======================================================================
  function skillChipHTML(skillId, small) {
    const s = skillById(skillId);
    if (!s) return "";
    return `<button type="button" class="skill-chip${small ? " is-small" : ""}" data-skill="${s.id}">${s.name}</button>`;
  }

  // Non-interactive version for previews nested inside other buttons/cards
  // (a <button> can't legally contain another <button>).
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
  // EXPERIENCE: accordion timeline
  // ======================================================================
  function experienceBulletHTML(exp, bullet, index) {
    return `
      <div class="exp-bullet">
        <button type="button" class="exp-bullet-toggle" aria-expanded="false">
          <span class="bullet-dot"></span>
          <span>${bullet.text}</span>
        </button>
        <div class="exp-bullet-detail">
          ${bullet.image ? `<img class="exp-bullet-photo" src="${bullet.image}" alt="" loading="lazy">` : ""}
          <span class="skill-group-label">Skills &amp; tools</span>
          <div class="skill-chips">${bullet.skills.map((id) => skillChipHTML(id, true)).join("") || "<span class=\"skill-chip is-small is-static\">General</span>"}</div>
        </div>
      </div>`;
  }

  function experienceEntryHTML(exp) {
    return `
      <article class="exp-entry reveal is-visible" id="exp-${exp.id}">
        <div class="exp-head">
          <div>
            <h3 class="exp-title">${exp.title}</h3>
            <p class="exp-org">${exp.org} · ${exp.location}</p>
          </div>
          <span class="exp-meta">${exp.period}</span>
        </div>
        <p class="exp-context">${exp.context}</p>
        <div class="exp-bullets">
          ${exp.bullets.map((b, i) => experienceBulletHTML(exp, b, i)).join("")}
        </div>
      </article>`;
  }

  function renderExperience() {
    byId("experience-timeline").innerHTML = D.experience.map(experienceEntryHTML).join("");

    document.querySelectorAll(".exp-bullet-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const bulletEl = btn.closest(".exp-bullet");
        const open = bulletEl.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  function jumpToExperienceBullet(expId, bulletIndex) {
    const entry = byId(`exp-${expId}`);
    if (!entry) return;
    entry.scrollIntoView({ behavior: "smooth", block: "center" });
    const bulletEls = entry.querySelectorAll(".exp-bullet");
    const target = bulletEls[bulletIndex];
    if (target) {
      target.classList.add("is-open");
      const toggle = target.querySelector(".exp-bullet-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    }
    entry.classList.add("is-flash");
    setTimeout(() => entry.classList.remove("is-flash"), 1400);
  }

  // ======================================================================
  // EDUCATION. Courses are standalone (name + description), kept separate
  // from the professional skill graph on purpose: clicking one just shows
  // what it covered, not a claim that it's a job-ready skill.
  // ======================================================================
  function courseChipHTML(eduIndex, courseIndex, course) {
    return `<button type="button" class="skill-chip is-small" data-course="${eduIndex}:${courseIndex}">${course.name}</button>`;
  }

  function renderEducation() {
    byId("education-list").innerHTML = D.education.map((e, ei) => `
      <div class="education-item">
        <div class="edu-head">
          <div>
            <div class="edu-school">${e.school}</div>
            <div class="edu-degree">${e.degree}</div>
          </div>
          <span class="edu-period">${e.period}</span>
        </div>
        ${e.intro ? `<p class="edu-intro">${e.intro}</p>` : ""}
        ${e.courses && e.courses.length ? `<div class="edu-focus skill-chips">${e.courses.map((c, ci) => courseChipHTML(ei, ci, c)).join("")}</div>` : ""}
      </div>
    `).join("");

    document.querySelectorAll("[data-course]").forEach((btn) =>
      btn.addEventListener("click", () => openModal("course", btn.dataset.course))
    );
  }

  // ======================================================================
  // BEYOND THE JOB (personal projects)
  // ======================================================================
  function personalCardHTML(p) {
    return `
      <button type="button" class="project-card article-card reveal is-visible" data-personal="${p.id}">
        <div class="card-visual">
          ${p.image ? `<img class="card-photo" src="${p.image}" alt="${p.title}">` : ICONS.beyond}
        </div>
        <div class="card-body">
          <div class="card-meta">${p.date}</div>
          <h3>${p.title}</h3>
          <p class="summary">${p.excerpt}</p>
          <div class="card-skill-preview">
            ${p.skills.slice(0, 3).map((id) => skillTagHTML(id)).join("")}
          </div>
          <span class="card-arrow">Read more ${ICONS.arrow}</span>
        </div>
      </button>`;
  }

  function renderPersonalGrid() {
    const grid = byId("personal-grid");
    grid.innerHTML = D.personalProjects.map(personalCardHTML).join("");
    grid.querySelectorAll("[data-personal]").forEach((btn) =>
      btn.addEventListener("click", () => openModal("personal", btn.dataset.personal))
    );
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
        <span class="li-open">Read on LinkedIn ${ICONS.external}</span>
      </a>
    `).join("");
  }

  // ======================================================================
  // REFERENCES
  // ======================================================================
  function renderReferences() {
    const r = D.references;
    byId("reference-grid").innerHTML = r.testimonials.map((t) => `
      <div class="reference-card reveal is-visible">
        <p class="reference-quote">${t.quote}</p>
        ${t.quoteNote ? `<p class="reference-quote-note">${t.quoteNote}</p>` : ""}
        <div class="reference-who">
          <div>
            <div class="reference-name">${t.name}</div>
            <div class="reference-role">${t.role} · ${t.relationship}</div>
          </div>
          <span class="reference-meta">${t.date}</span>
        </div>
      </div>
    `).join("");
    byId("reference-note").textContent = r.note;
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
      shell.innerHTML = `<iframe src="${embed}" title="Intro video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    } else if (D.video.caption) {
      byId("video-caption").textContent = D.video.caption;
    }
  }

  // ======================================================================
  // MODAL: 3 modes: personal / skill / course
  // ======================================================================
  const modal = byId("detail-modal");
  const modalBody = byId("modal-body");

  function openModal(mode, id) {
    if (mode === "personal") renderPersonalModal(personalById(id));
    if (mode === "skill") renderSkillModal(skillById(id));
    if (mode === "course") renderCourseModal(id);
    if (typeof modal.showModal === "function") {
      if (!modal.open) modal.showModal();
    }
    modalBody.scrollTop = 0;
  }

  // Groups matching bullets by experience (several bullets from the same
  // role show up as one group, each bullet still individually clickable)
  // and returns personal-project matches separately. "count" is the total
  // number of individual occurrences, for the "Shows up in N places" line.
  function relatedItemsForSkill(skillId) {
    const experienceGroups = [];
    D.experience.forEach((exp) => {
      const bullets = exp.bullets
        .map((b, idx) => ({ text: b.text, bulletIndex: idx }))
        .filter((b, idx) => exp.bullets[idx].skills.includes(skillId));
      if (bullets.length) {
        experienceGroups.push({ expId: exp.id, title: exp.title, org: exp.org, period: exp.period, bullets });
      }
    });
    const personal = D.personalProjects.filter((p) => p.skills.includes(skillId));
    const count = experienceGroups.reduce((n, g) => n + g.bullets.length, 0) + personal.length;
    return { experienceGroups, personal, count };
  }

  function relatedCardsHTML({ experienceGroups, personal }) {
    if (!experienceGroups.length && !personal.length) return `<p>Nothing else to show here yet.</p>`;
    const groupsHTML = experienceGroups.map((g) => `
      <div class="related-group">
        <div class="related-group-head">
          <span class="rc-kind">Experience</span>
          <span class="related-group-title">${g.title}</span>
          <span class="related-group-meta">${g.org} · ${g.period}</span>
        </div>
        <div class="related-group-bullets">
          ${g.bullets.map((b) => `
            <button type="button" class="related-bullet" data-open="experience" data-open-id="${g.expId}" data-bullet-index="${b.bulletIndex}">
              <span class="bullet-dot"></span><span>${b.text}</span>
            </button>`).join("")}
        </div>
      </div>`).join("");
    const personalHTML = personal.map((p) => `
      <button type="button" class="related-group related-group-link" data-open="personal" data-open-id="${p.id}">
        <div class="related-group-head">
          <span class="rc-kind">Beyond the job</span>
          <span class="related-group-title">${p.title}</span>
        </div>
      </button>`).join("");
    return `<div class="modal-related">${groupsHTML}${personalHTML}</div>`;
  }

  function renderPersonalModal(p) {
    if (!p) return;
    byId("modal-kicker").textContent = `Beyond the job · ${p.date}`;
    byId("modal-title").textContent = p.title;
    modalBody.innerHTML = `
      ${p.image ? `<div class="modal-figure"><img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover"></div>` : ""}
      <p><em>${p.excerpt}</em></p>
      ${p.content.map((para) => `<p>${para}</p>`).join("")}
      ${p.url ? `<p><a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">See the original post ${ICONS.external}</a></p>` : ""}
      ${p.skills.length ? `<h4>Skills involved</h4><div class="skill-chips">${p.skills.map((id) => skillChipHTML(id, false)).join("")}</div>` : ""}
    `;
    bindModalInternalEvents();
  }

  function renderSkillModal(s) {
    if (!s) return;
    byId("modal-kicker").textContent = catLabel(D.skillCategories, s.categoryId);
    byId("modal-title").textContent = s.name;
    const related = relatedItemsForSkill(s.id);
    modalBody.innerHTML = `
      <p>${s.blurb}</p>
      <h4>Shows up in ${related.count} place${related.count === 1 ? "" : "s"}</h4>
      ${relatedCardsHTML(related)}
    `;
    bindModalInternalEvents();
  }

  function renderCourseModal(compoundId) {
    const [ei, ci] = String(compoundId).split(":").map(Number);
    const edu = D.education[ei];
    const course = edu && edu.courses[ci];
    if (!course) return;
    byId("modal-kicker").textContent = `${edu.school} coursework`;
    byId("modal-title").textContent = course.name;
    modalBody.innerHTML = `<ul class="course-list">${course.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`;
  }

  function bindModalInternalEvents() {
    modalBody.querySelectorAll("[data-skill]").forEach((btn) =>
      btn.addEventListener("click", () => openModal("skill", btn.dataset.skill))
    );
    modalBody.querySelectorAll("[data-open]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const kind = btn.dataset.open;
        if (kind === "personal") {
          openModal("personal", btn.dataset.openId);
        } else if (kind === "experience") {
          modal.close();
          jumpToExperienceBullet(btn.dataset.openId, Number(btn.dataset.bulletIndex));
        }
      })
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

  // Skill chips anywhere outside the modal (skills section, bullet detail panels)
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
    renderKPIs();
    renderSkills();
    renderExperience();
    renderEducation();
    renderPersonalGrid();
    renderLinkedin();
    renderReferences();
    renderVideo();
    initModalChrome();
    initGlobalSkillClicks();
    initReveal();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
