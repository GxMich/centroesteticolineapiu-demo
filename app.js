(() => {
  const config = window.LANDING_CONFIG || {};
  const text = (selector, value) => {
    if (value === undefined || value === null || value === "") return;
    document.querySelectorAll(selector).forEach(node => { node.textContent = value; });
  };

  document.querySelectorAll("[data-copy]").forEach(node => {
    const value = config[node.dataset.copy];
    if (value) node.textContent = value;
  });
  text("[data-campaign]", config.campaignLabel);
  text("[data-discount]", String(config.discount ?? 20));
  text("[data-location]", config.location);
  text("[data-address]", config.address);
  text("[data-brand]", config.brandMark);
  text("[data-business]", config.businessName);
  text("[data-notice]", config.campaignNotice);
  text("[data-year]", String(new Date().getFullYear()));
  text(".demo-disclosure", `${config.demoByline || "Demo non ufficiale"}\nOfferta e condizioni esemplificative, da confermare con il centro.\nLe immagini editoriali non rappresentano il centro.`);
  document.querySelectorAll("[data-wordmark]").forEach(link => {
    link.setAttribute("aria-label", `${config.businessName || "Centro estetico"}, torna all’inizio`);
  });

  document.title = `${config.campaignLabel || "Trattamenti viso"} | ${config.businessName || "Centro estetico"} · ${config.location || "Novara"}`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = `Demo non ufficiale: proposta esemplificativa sui trattamenti viso di ${config.businessName || "Centro estetico"} a ${config.location || "Novara"}. Sconto e condizioni da confermare.`;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = document.title;
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = metaDescription?.content || "";
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && config.images?.hero) ogImage.content = new URL(config.images.hero, window.location.href).href;

  document.querySelectorAll("[data-image]").forEach(img => {
    const source = config.images?.[img.dataset.image];
    if (source) img.src = source;
  });
  document.querySelectorAll("[data-phone]").forEach(link => {
    if (!config.phone) { link.hidden = true; return; }
    link.href = `tel:${config.phone.replace(/[^+\d]/g, "")}`;
    link.textContent = config.phone;
  });
  document.querySelectorAll("[data-email]").forEach(link => {
    if (!config.email) { link.hidden = true; return; }
    link.href = `mailto:${config.email}`;
    link.textContent = config.email;
  });
  document.querySelectorAll("[data-booking]").forEach(link => {
    if (config.bookingUrl) link.href = config.bookingUrl;
    else link.hidden = true;
  });

  const whatsapp = String(config.whatsappNumber || "").replace(/\D/g, "");
  const phone = String(config.phone || "").replace(/[^+\d]/g, "");
  const contactHref = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(config.whatsappMessage || "Ciao, vorrei ricevere informazioni.")}`
    : phone ? `tel:${phone}` : "#contatti";
  const contactLabel = whatsapp ? "Scrivi per informazioni" : phone ? "Chiama per informazioni" : "Contatto demo non configurato";

  document.querySelectorAll("[data-contact]").forEach(link => {
    link.href = contactHref;
    if (whatsapp) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.dataset.channel = "whatsapp";
    } else if (!phone) {
      link.setAttribute("aria-disabled", "true");
      link.removeAttribute("href");
      link.classList.add("contact-unavailable");
    }
    link.setAttribute("aria-label", whatsapp ? "Apri WhatsApp per chiedere informazioni" : phone ? "Chiama il centro per chiedere informazioni" : contactLabel);
    if (["true", "short", "offer"].includes(link.dataset.contactLabel)) {
      const labelParent = link.querySelector("b") || link;
      const label = [...labelParent.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
      const visibleLabel = link.dataset.contactLabel === "short"
        ? (whatsapp ? "WhatsApp" : phone ? "Chiama" : "Contatto non configurato")
        : link.dataset.contactLabel === "offer"
          ? (whatsapp ? "Chiedi dell’offerta" : phone ? "Verifica l’offerta" : contactLabel)
          : contactLabel;
      if (label) label.nodeValue = `${visibleLabel} `;
    }
  });

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const targets = document.querySelectorAll(".offer-copy, .care-image, .care-copy, .steps-heading, .steps-list li, .faq-heading, .faq-list details");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(target => { target.classList.add("reveal"); observer.observe(target); });
  }

  const sticky = document.querySelector("[data-sticky-cta]");
  const heroContact = document.querySelector(".hero-copy [data-contact]");
  if (sticky && heroContact) {
    const mobileLayout = window.matchMedia("(max-width: 760px)");
    const setSticky = visible => {
      sticky.classList.toggle("is-visible", visible);
      sticky.setAttribute("aria-hidden", String(!visible));
      sticky.tabIndex = visible ? 0 : -1;
    };
    const updateSticky = () => setSticky(mobileLayout.matches && heroContact.getBoundingClientRect().bottom < 0);
    if ("IntersectionObserver" in window) {
      const stickyObserver = new IntersectionObserver(([entry]) => {
        setSticky(mobileLayout.matches && !entry.isIntersecting && entry.boundingClientRect.bottom < 0);
      }, { threshold: 0 });
      stickyObserver.observe(heroContact);
    } else {
      window.addEventListener("scroll", updateSticky, { passive: true });
      window.addEventListener("resize", updateSticky, { passive: true });
    }
    window.addEventListener("resize", () => {
      if (!mobileLayout.matches) setSticky(false);
      else updateSticky();
    }, { passive: true });
  }
})();
