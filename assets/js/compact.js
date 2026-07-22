/**
 * Compact / "newspaper front page" edition.
 * Same content as the full site (SITE_DATA, from data.js) — laid out as a
 * dense, single-page grid instead of long vertical sections. Every role,
 * skill and course is collapsed to a headline by default and expands in
 * place (or in the shared modal) on click. No content is hidden, only
 * deferred behind a click.
 */
(function () {
  "use strict";

  const D = SITE_DATA;

  const ICONS = {
    beyond: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M24 41S7 30 7 17.5A9.5 9.5 0 0 1 24 12a9.5 9.5 0 0 1 17 5.5C41 30 24 41 24 41Z"/></svg>',
    external: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
    art: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>',
    tennis: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M4.5 6.5C8 9 8 15 4.5 17.5M19.5 6.5C16 9 16 15 19.5 17.5"/></svg>',
    cycling: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 10 8h4l3 4.5M10 8l3 4.5h-6"/></svg>'
  };

  const byId = (id) => document.getElementById(id);
  const skillById = (id) => D.skills.find((s) => s.id === id);
  const personalById = (id) => D.personalProjects.find((p) => p.id === id);
  const catLabel = (list, id) => (list.find((c) => c.id === id) || {}).label || id;

  function skillChipHTML(skillId, small) {
    const s = skillById(skillId);
    if (!s) return "";
    return `<button type="button" class="skill-chip${small ? " is-small" : ""}" data-skill="${s.id}">${s.name}</button>`;
  }

  // --------------------------------------------------------------------
  // THEME
  // --------------------------------------------------------------------
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

  // --------------------------------------------------------------------
  // MASTHEAD
  // --------------------------------------------------------------------
  function renderMasthead() {
    const p = D.profile;
    document.title = `${p.name} | ${p.roles[0]}`;
    byId("m-name").textContent = p.name;
    byId("m-role-text").textContent = p.roles[0];
    byId("m-location").textContent = p.location;
    byId("m-tagline").textContent = p.tagline;
    byId("masthead-initials").textContent = p.initials;
    byId("c-year").textContent = new Date().getFullYear();

    byId("m-passions").innerHTML = p.passions.map((pas) => `
      <span class="passion-chip">${ICONS[pas.icon] || ""}${pas.label}</span>
    `).join("");

    if (D.photo && D.photo.src) {
      const frame = byId("masthead-photo");
      const img = document.createElement("img");
      img.src = D.photo.src;
      img.alt = D.photo.alt || p.name;
      frame.innerHTML = "";
      frame.appendChild(img);
    }

    byId("m-kpis").innerHTML = D.kpis.slice(0, 6).map((k) => `
      <div class="mk-card">
        <div class="mk-value">${k.value}</div>
        <div class="mk-label">${k.label}</div>
      </div>
    `).join("");

    const hasPhone = p.phone && !p.phone.startsWith("[");
    byId("m-contact").innerHTML = `
      <a href="mailto:${p.email}">${ICONS.mail} ${p.email}</a>
      <a href="${p.linkedinUrl}" target="_blank" rel="noopener">LinkedIn</a>
      ${hasPhone ? `<a href="tel:${p.phone.replace(/\s+/g, "")}">${ICONS.phone} ${p.phone}</a>` : `<span>${ICONS.phone} Phone on request</span>`}
    `;

    byId("m-direction").innerHTML = `<strong>${p.pivotHeadline}</strong>: ${p.pivotNote}`;
  }

  function initRoleCycler() {
    const roles = D.profile.roles.concat([D.profile.pivotRole]);
    const el = byId("m-role-text");
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

  // --------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------
  function renderAbout() {
    byId("c-about").innerHTML = `<div class="c-about-text">${D.profile.bio.map((para) => `<p>${para}</p>`).join("")}</div>`;
  }

  // --------------------------------------------------------------------
  // EXPERIENCE — role-level collapse, full bullet list revealed on click
  // --------------------------------------------------------------------
  function roleRowHTML(exp) {
    const count = exp.bullets.length;
    return `
      <article class="role-row" id="c-exp-${exp.id}">
        <button type="button" class="role-toggle" aria-expanded="false">
          <div class="role-head">
            <span class="role-title">${exp.title}</span>
            <span class="role-meta">${exp.period}</span>
          </div>
          <div class="role-org">${exp.org} · ${exp.location}</div>
          <div class="role-context">${stripTags(exp.context)}</div>
          <span class="role-count">${ICONS.chevron} ${count} highlight${count === 1 ? "" : "s"}</span>
        </button>
        <div class="role-detail">
          <p class="role-detail-context">${exp.context}</p>
          <div class="role-bullets">
            ${exp.bullets.map((b) => `
              <div class="role-bullet">
                <p class="role-bullet-text">${b.text}</p>
                ${b.image ? `<img class="exp-bullet-photo" src="${b.image}" alt="" loading="lazy">` : ""}
                <div class="skill-chips">${b.skills.map((id) => skillChipHTML(id, true)).join("")}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </article>`;
  }

  function stripTags(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || "";
  }

  function renderExperience() {
    byId("c-experience").innerHTML = D.experience.map(roleRowHTML).join("");
    document.querySelectorAll(".role-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const row = btn.closest(".role-row");
        const open = row.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  function jumpToRole(expId, bulletIndex) {
    const row = byId(`c-exp-${expId}`);
    if (!row) return;
    row.classList.add("is-open");
    row.querySelector(".role-toggle").setAttribute("aria-expanded", "true");
    row.scrollIntoView({ behavior: "smooth", block: "center" });
    row.classList.add("is-flash");
    setTimeout(() => row.classList.remove("is-flash"), 1400);
    // bulletIndex is available for finer-grained highlighting later if needed
  }

  // --------------------------------------------------------------------
  // SKILLS
  // --------------------------------------------------------------------
  function renderSkills() {
    byId("c-skills").innerHTML = D.skillCategories.map((cat) => {
      const items = D.skills.filter((s) => s.categoryId === cat.id);
      return `
        <div class="skills-compact-group">
          <span class="scg-label">${cat.label}</span>
          <div class="skill-chips">${items.map((s) => skillChipHTML(s.id, true)).join("")}</div>
        </div>`;
    }).join("");
  }

  // --------------------------------------------------------------------
  // EDUCATION
  // --------------------------------------------------------------------
  function courseChipHTML(eduIndex, courseIndex, course) {
    return `<button type="button" class="skill-chip is-small" data-course="${eduIndex}:${courseIndex}">${course.name}</button>`;
  }

  function renderEducation() {
    byId("c-education").innerHTML = D.education.map((e, ei) => `
      <div class="edu-compact-item">
        <div class="edu-compact-school">${e.school}</div>
        <div class="edu-compact-degree">${e.degree}</div>
        <div class="edu-compact-period">${e.period}</div>
        <div class="skill-chips">${(e.courses || []).map((c, ci) => courseChipHTML(ei, ci, c)).join("")}</div>
      </div>
    `).join("");
    document.querySelectorAll("[data-course]").forEach((btn) =>
      btn.addEventListener("click", () => openModal("course", btn.dataset.course))
    );
  }

  // --------------------------------------------------------------------
  // BEYOND THE JOB
  // --------------------------------------------------------------------
  function renderBeyond() {
    byId("c-beyond").innerHTML = D.personalProjects.map((p) => `
      <button type="button" class="beyond-row" data-personal="${p.id}">
        <span class="beyond-thumb">${p.image ? `<img src="${p.image}" alt="">` : ICONS.beyond}</span>
        <span>
          <span class="beyond-title">${p.title}</span>
          <div class="beyond-date">${p.date}</div>
        </span>
      </button>
    `).join("");
    document.querySelectorAll("[data-personal]").forEach((btn) =>
      btn.addEventListener("click", () => openModal("personal", btn.dataset.personal))
    );
  }

  // --------------------------------------------------------------------
  // LINKEDIN
  // --------------------------------------------------------------------
  function renderLinkedin() {
    byId("c-linkedin").innerHTML = D.linkedinPosts.map((post) => `
      <a class="li-compact-row" href="${post.url}" target="_blank" rel="noopener">
        <div class="li-compact-title">${post.title} ${ICONS.external}</div>
        <div class="li-compact-meta">${post.date}</div>
      </a>
    `).join("");
  }

  // --------------------------------------------------------------------
  // REFERENCES
  // --------------------------------------------------------------------
  function renderReferences() {
    const r = D.references;
    byId("c-references").innerHTML = `
      <div class="reference-compact">
        ${r.testimonials.map((t) => `
          <blockquote>${t.quote}</blockquote>
          <div class="rq-who"><strong>${t.name}</strong> · ${t.role}</div>
        `).join("")}
        <p class="reference-compact-note">${r.note}</p>
      </div>
    `;
  }

  // --------------------------------------------------------------------
  // MODAL — skill / course / personal (same visual language as the full site)
  // --------------------------------------------------------------------
  const modal = byId("detail-modal");
  const modalBody = byId("modal-body");

  function openModal(mode, id) {
    if (mode === "personal") renderPersonalModal(personalById(id));
    if (mode === "skill") renderSkillModal(skillById(id));
    if (mode === "course") renderCourseModal(id);
    if (typeof modal.showModal === "function" && !modal.open) modal.showModal();
    modalBody.scrollTop = 0;
  }

  function relatedItemsForSkill(skillId) {
    const experienceGroups = [];
    D.experience.forEach((exp) => {
      const bullets = exp.bullets
        .map((b, idx) => ({ text: b.text, bulletIndex: idx }))
        .filter((b, idx) => exp.bullets[idx].skills.includes(skillId));
      if (bullets.length) experienceGroups.push({ expId: exp.id, title: exp.title, org: exp.org, period: exp.period, bullets });
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
          jumpToRole(btn.dataset.openId, Number(btn.dataset.bulletIndex));
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

  function initGlobalSkillClicks() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".skill-chip[data-skill]");
      if (btn && !modal.open) openModal("skill", btn.dataset.skill);
    });
  }

  // --------------------------------------------------------------------
  // BOOT
  // --------------------------------------------------------------------
  function boot() {
    initTheme();
    renderMasthead();
    initRoleCycler();
    renderAbout();
    renderExperience();
    renderSkills();
    renderEducation();
    renderBeyond();
    renderLinkedin();
    renderReferences();
    initModalChrome();
    initGlobalSkillClicks();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
