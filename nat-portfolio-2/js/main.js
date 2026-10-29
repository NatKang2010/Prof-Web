(() => {
  const $ = (s) => document.querySelector(s);
  const menuButton = $(".menu-toggle");
  const nav = $("#site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }));
  }
  const config = window.NAT_PORTFOLIO || {};
  const setContact = (id, textId, value, fallback, email = false) => {
    const link = document.getElementById(id), label = document.getElementById(textId);
    if (!link || !label) return;
    if (!value) { label.textContent = fallback; link.removeAttribute("href"); link.classList.add("contact-disabled"); return; }
    label.textContent = email ? value : value.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    link.href = email ? `mailto:${value}` : value;
    if (!email) { link.target = "_blank"; link.rel = "noreferrer"; }
  };
  setContact("email-link", "email-text", config.email, "Add your email", true);
  setContact("github-link", "github-text", config.github, "Add your profile");
  setContact("linkedin-link", "linkedin-text", config.linkedin, "Optional — add profile");
  const year = $("#year"); if (year) year.textContent = new Date().getFullYear();

  const form = $("#contact-form"), status = $("#form-status");
  const submitButton = form?.querySelector('button[type="submit"]');
  const submitLabel = form?.querySelector(".submit-label");
  const formId = (config.formspreeId || "").trim();
  if (form && status && submitButton) {
    if (!formId || formId === "YOUR_FORM_ID") {
      submitButton.disabled = true;
      form.querySelectorAll("input:not([name='_gotcha']), textarea").forEach((field) => { field.disabled = true; });
      status.textContent = "Form not connected yet. Add your Formspree ID in js/config.js.";
    } else {
      form.action = `https://formspree.io/f/${encodeURIComponent(formId)}`;
      status.textContent = "Your message will be sent through Formspree.";
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        submitButton.disabled = true;
        if (submitLabel) submitLabel.textContent = "Sending…";
        status.textContent = "Sending your message…"; status.className = "form-status";
        try {
          const response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
          if (!response.ok) {
            let message = "";
            try { const data = await response.json(); message = data?.errors?.map((e) => e.message).join(" "); } catch (_) {}
            throw new Error(message || "Submission failed");
          }
          form.reset(); status.textContent = "Message sent. Thanks for reaching out!"; status.className = "form-status form-status-success";
        } catch (_) {
          status.textContent = "Couldn't send the message. Check your connection or try again later."; status.className = "form-status form-status-error";
        } finally {
          submitButton.disabled = false; if (submitLabel) submitLabel.textContent = "Send message";
        }
      });
    }
  }
  const card = $(".code-card"), art = $(".hero-art");
  if (card && art && matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    art.addEventListener("pointermove", (event) => {
      const r = art.getBoundingClientRect(), x = (event.clientX-r.left)/r.width-.5, y=(event.clientY-r.top)/r.height-.5;
      card.style.transform = `rotate(-3deg) rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
    });
    art.addEventListener("pointerleave", () => { card.style.transform = ""; });
  }
})();