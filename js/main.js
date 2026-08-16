/**
 * main.js — renders CONTENT into the page and wires up interactions.
 * No build step required; everything runs directly in the browser.
 */
(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const esc = (str) =>
    String(str ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  const { business, hero, services, process: processSteps, whyChooseUs,
    pricing, about, serviceAreas, reviews, faqs, form: formConfig } = CONTENT;

  const ARROW_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

  /* ------------------------------------------------------------ */
  /* Business info                                                  */
  /* ------------------------------------------------------------ */
  function renderBusinessInfo() {
    // Nav + mobile phone
    $$('a[href="tel:"], #heroCallBtn, #mobileCtaCall').forEach((a) => {
      a.setAttribute("href", `tel:${business.phoneHref}`);
    });
    const navLabel = $("#navPhoneLabel");
    if (navLabel) navLabel.textContent = business.phone;
    const mobLabel = $("#mobilePhoneLabel");
    if (mobLabel) mobLabel.textContent = business.phone;
    const mobEmail = $("#mobileEmail");
    if (mobEmail) mobEmail.setAttribute("href", `mailto:${business.email}`);
    const mobEmailLabel = $("#mobileEmailLabel");
    if (mobEmailLabel) mobEmailLabel.textContent = business.email;

    $("#heroSubhead").textContent = hero.subhead;
    $("#heroHours").textContent = business.hours || "Contact us for hours";

    // Contact card (quote section)
    const contactList = $("#contactList");
    const items = [
      { icon: "phone", label: "Call or text", value: business.phone, href: `tel:${business.phoneHref}` },
      { icon: "mail", label: "Email", value: business.email, href: `mailto:${business.email}` },
      { icon: "clock", label: "Hours", value: business.hours || "Contact us for hours", href: null }
    ];
    contactList.innerHTML = items.map((it) => `
      <li>
        <span class="ico">${ICONS[it.icon]}</span>
        <div>
          <span class="label">${esc(it.label)}</span>
          ${it.href ? `<a href="${it.href}">${esc(it.value)}</a>` : `<span class="value">${esc(it.value)}</span>`}
        </div>
      </li>
    `).join("");

    // Footer contact
    const footerContact = $("#footerContact");
    footerContact.innerHTML = `
      <li><a href="tel:${business.phoneHref}">${esc(business.phone)}</a></li>
      <li><a href="mailto:${business.email}">${esc(business.email)}</a></li>
      ${business.address ? `<li><span>${esc(business.address)}</span></li>` : ""}
    `;

    // Footer social — only render links that exist
    const socials = Object.entries(business.social || {}).filter(([, url]) => url);
    const footerSocial = $("#footerSocial");
    if (socials.length) {
      footerSocial.innerHTML = socials.map(([, url]) => `
        <a href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="Visit our social page">${ICONS.sparkle}</a>
      `).join("");
    } else {
      footerSocial.remove();
    }

    $("#footerCopyright").textContent =
      `© ${new Date().getFullYear()} ${business.name}. All rights reserved.`;
  }

  /* ------------------------------------------------------------ */
  /* Services                                                        */
  /* ------------------------------------------------------------ */
  function renderServices() {
    $("#servicesGrid").innerHTML = services.map((svc) => `
      <div class="service-card reveal">
        <div class="service-icon">${ICONS[svc.icon] || ICONS.boxes}</div>
        <h3>${esc(svc.title)}</h3>
        <p>${esc(svc.description)}</p>
        <a href="#contact" class="card-link">Get a quote ${ARROW_ICON}</a>
      </div>
    `).join("");
  }

  /* ------------------------------------------------------------ */
  /* How it works                                                    */
  /* ------------------------------------------------------------ */
  function renderProcess() {
    $("#processGrid").innerHTML = processSteps.map((s) => `
      <div class="process-step reveal">
        <div class="process-num">${esc(s.step)}</div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.description)}</p>
      </div>
    `).join("");
  }

  /* ------------------------------------------------------------ */
  /* Why choose us                                                   */
  /* ------------------------------------------------------------ */
  function renderWhy() {
    const iconCycle = ["handshake", "clock", "boxes", "leaf"];
    $("#whyGrid").innerHTML = whyChooseUs.map((w, i) => `
      <div class="why-card reveal">
        <div class="why-icon">${ICONS[iconCycle[i % iconCycle.length]]}</div>
        <div>
          <h3>${esc(w.title)}</h3>
          <p>${esc(w.description)}</p>
        </div>
      </div>
    `).join("");
  }

  /* ------------------------------------------------------------ */
  /* Pricing                                                         */
  /* ------------------------------------------------------------ */
  function renderPricing() {
    $("#pricingIntro").textContent = pricing.intro;
    $("#pricingDisclaimer").textContent = pricing.disclaimer;
    $("#pricingGrid").innerHTML = pricing.tiers.map((t, i) => `
      <div class="price-card reveal ${i === 1 ? "featured" : ""}">
        <h3>${esc(t.name)}</h3>
        <div class="price ${t.price ? "" : "tbd"}">${t.price ? esc(t.price) : "Get a Custom Quote"}</div>
        <p class="desc">${esc(t.description)}</p>
        <ul>${t.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        <a href="#contact" class="btn ${i === 1 ? "btn-primary" : "btn-ghost"} btn-block">Request Quote</a>
      </div>
    `).join("");
  }

  /* ------------------------------------------------------------ */
  /* About                                                           */
  /* ------------------------------------------------------------ */
  function renderAbout() {
    $("#aboutHeading").textContent = about.heading;
    $("#aboutParagraphs").innerHTML = about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  }

  /* ------------------------------------------------------------ */
  /* Service areas                                                   */
  /* ------------------------------------------------------------ */
  function renderAreas() {
    $("#areasIntro").textContent = serviceAreas.intro;
    const chipsEl = $("#areaChips");
    const footerAreas = $("#footerAreas");

    if (serviceAreas.areas && serviceAreas.areas.length) {
      chipsEl.innerHTML = serviceAreas.areas.map((a) => `
        <span class="area-chip">${ICONS.pin}${esc(a)}</span>
      `).join("");
      footerAreas.innerHTML = serviceAreas.areas.slice(0, 6).map((a) => `<li><span>${esc(a)}</span></li>`).join("");
    } else {
      chipsEl.innerHTML = `<p class="areas-empty">Service area list coming soon — contact us to confirm coverage.</p>`;
      footerAreas.innerHTML = `<li><span>Contact us to confirm</span></li>`;
    }
  }

  /* ------------------------------------------------------------ */
  /* Reviews                                                         */
  /* ------------------------------------------------------------ */
  function renderReviews() {
    const el = $("#reviewsContent");
    if (reviews && reviews.length) {
      el.innerHTML = `<div class="reviews-grid">${reviews.map((r) => `
        <div class="review-card reveal">
          <div class="review-stars" aria-label="${r.rating} out of 5 stars">
            ${Array.from({ length: 5 }).map((_, i) => `<span style="opacity:${i < r.rating ? 1 : 0.25}">${ICONS.star}</span>`).join("")}
          </div>
          <p class="review-text">"${esc(r.text)}"</p>
          <div class="review-foot">
            <div class="review-avatar">${r.photo ? `<img src="${esc(r.photo)}" alt="" />` : esc((r.name || "?").charAt(0))}</div>
            <div>
              <div class="review-name">${esc(r.name)}</div>
              <div class="review-meta">${esc(r.source || "")}${r.date ? " • " + esc(r.date) : ""}</div>
            </div>
          </div>
        </div>
      `).join("")}</div>`;
    } else {
      el.innerHTML = `
        <div class="reviews-empty reveal">
          <div class="reviews-empty-icon">${ICONS.sparkle}</div>
          <h3>Reviews are on the way</h3>
          <p>We're just getting started — real customer reviews will appear here as they come in. Add them any time in <code>js/content.js</code>.</p>
        </div>
      `;
    }
  }

  /* ------------------------------------------------------------ */
  /* FAQ                                                             */
  /* ------------------------------------------------------------ */
  function renderFaq() {
    $("#faqList").innerHTML = faqs.map((f, i) => `
      <div class="faq-item reveal" data-faq>
        <button class="faq-question" id="faqBtn${i}" aria-expanded="false" aria-controls="faqPanel${i}">
          <span>${esc(f.question)}</span>
          <span class="chev">${ICONS.chevron}</span>
        </button>
        <div class="faq-answer" id="faqPanel${i}" role="region" aria-labelledby="faqBtn${i}">
          <div class="faq-answer-inner"><p>${esc(f.answer)}</p></div>
        </div>
      </div>
    `).join("");

    $$("[data-faq]").forEach((item) => {
      const btn = $(".faq-question", item);
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        // Close others (accordion behavior)
        $$("[data-faq]").forEach((other) => {
          other.classList.remove("is-open");
          $(".faq-question", other).setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ------------------------------------------------------------ */
  /* Navigation (sticky shadow, mobile menu)                          */
  /* ------------------------------------------------------------ */
  function initNav() {
    const header = $("#siteHeader");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = $("#navToggle");
    const menu = $("#mobileMenu");
    function closeMenu() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
    function openMenu() {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
    }
    toggle.addEventListener("click", () => {
      menu.classList.contains("is-open") ? closeMenu() : openMenu();
    });
    $$("#mobileMenu a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ------------------------------------------------------------ */
  /* Scroll reveal animations (respects reduced motion via CSS)       */
  /* ------------------------------------------------------------ */
  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------ */
  /* Quote form submission                                            */
  /* ------------------------------------------------------------ */
  function initForm() {
    const form = $("#quoteForm");
    const status = $("#formStatus");
    if (!form) return;

    // If the site is not using Netlify Forms, repurpose the form to
    // POST to a custom endpoint (e.g. Formspree) defined in content.js.
    if (!formConfig.useNetlifyForms) {
      form.removeAttribute("data-netlify");
      form.removeAttribute("netlify-honeypot");
      if (formConfig.formEndpoint) {
        form.setAttribute("action", formConfig.formEndpoint);
      }
    }

    form.addEventListener("submit", async (e) => {
      const usingNetlify = formConfig.useNetlifyForms;
      const usingCustomEndpoint = !usingNetlify && formConfig.formEndpoint;

      // Only intercept with fetch() when we have somewhere real to send
      // the data (Netlify's own endpoint, or a configured custom one).
      if (!usingNetlify && !usingCustomEndpoint) {
        e.preventDefault();
        status.textContent = "This form isn't connected to a backend yet. See README.md to enable Netlify Forms or connect a service like Formspree.";
        status.className = "form-status show error";
        return;
      }

      e.preventDefault();
      const data = new FormData(form);
      const action = usingCustomEndpoint ? formConfig.formEndpoint : "/";
      try {
        const res = await fetch(action, {
          method: "POST",
          headers: usingNetlify ? { "Content-Type": "application/x-www-form-urlencoded" } : { Accept: "application/json" },
          body: usingNetlify ? new URLSearchParams(data).toString() : data
        });
        if (res.ok) {
          form.reset();
          status.textContent = "Thanks! Your quote request was sent — we'll be in touch soon.";
          status.className = "form-status show success";
        } else {
          throw new Error("Request failed");
        }
      } catch (err) {
        status.textContent = "Something went wrong sending your request. Please call or email us directly.";
        status.className = "form-status show error";
      }
    });
  }

  /* ------------------------------------------------------------ */
  /* Init                                                             */
  /* ------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    renderBusinessInfo();
    renderServices();
    renderProcess();
    renderWhy();
    renderPricing();
    renderAbout();
    renderAreas();
    renderReviews();
    renderFaq();
    initNav();
    initForm();
    initReveal();
  });
})();
