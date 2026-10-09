import { useEffect } from "react";

function usePageBehavior(pageKind) {
  useEffect(() => {
    if (pageKind) {
      const title =
        pageKind === "privacy-policy" ? "Privacy Policy" : "Terms & Conditions";
      document.title = `${title} | TrustedBenefitHub`;
      const description = document.querySelector('meta[name="description"]');
      if (description)
        description.content = `${title} for TrustedBenefitHub.com. Last updated January 1, 2026.`;
      return;
    }

    const timers = new Set();
    const schedule = (callback, delay) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        callback();
      }, delay);
      timers.add(timer);
      return timer;
    };

    const loader = document.getElementById("loader");
    const hideLoader = () => {
      if (!loader) return;
      schedule(() => loader.classList.add("hidden"), 650);
    };

    const header = document.getElementById("header");
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };

    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");
    const closeNav = () => {
      nav?.classList.remove("open");
      navToggle?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    };
    const toggleNav = () => {
      if (!nav || !navToggle) return;
      const open = nav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    };
    const navLinks = nav ? [...nav.querySelectorAll("a")] : [];
    navToggle?.addEventListener("click", toggleNav);
    navLinks.forEach((link) => link.addEventListener("click", closeNav));

    const revealEls = document.querySelectorAll(".reveal");
    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              const delay = entry.target.dataset.delay || (index % 4) * 80;
              schedule(() => entry.target.classList.add("in"), delay);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      revealEls.forEach((el) => observer.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in"));
    }

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    window.addEventListener("load", hideLoader);
    schedule(hideLoader, 3500);

    const anchorLinks = [...document.querySelectorAll('a[href^="#"]')];
    const anchorHandlers = anchorLinks.map((link) => {
      const handleClick = (event) => {
        const id = link.getAttribute("href");
        if (!id || id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
        if (window.history && history.pushState)
          history.pushState(null, "", id);
        else window.location.hash = id;
      };
      link.addEventListener("click", handleClick);
      return handleClick;
    });

    const form = document.getElementById("contact");
    const submitBtn = document.getElementById("submitBtn");
    const successBox = document.getElementById("formSuccess");

    const setError = (id, message) => {
      const field = document.getElementById(id);
      if (!field) return true;
      const wrap = field.closest(".field");
      const error = document.querySelector(`.err[data-for="${id}"]`);
      if (message) {
        wrap.classList.add("invalid");
        if (error) error.textContent = message;
      } else {
        wrap.classList.remove("invalid");
        if (error) error.textContent = "";
      }
      return !message;
    };

    const validate = () => {
      let valid = true;
      const value = (id) => (document.getElementById(id)?.value || "").trim();

      valid =
        setError(
          "firstName",
          value("firstName").length >= 2 ? "" : "Please enter your first name.",
        ) && valid;
      valid =
        setError(
          "lastName",
          value("lastName").length >= 2 ? "" : "Please enter your last name.",
        ) && valid;

      const digits = value("phone").replace(/\D/g, "");
      valid =
        setError(
          "phone",
          digits.length >= 10 ? "" : "Enter a valid phone number.",
        ) && valid;

      const stateValue = value("state").toUpperCase();
      valid =
        setError(
          "state",
          /^[A-Z]{2}$/.test(stateValue) ? "" : "Enter a valid 2-letter state.",
        ) && valid;
      valid =
        setError(
          "zipcode",
          /^\d{5}$/.test(value("zipcode").replace(/\D/g, ""))
            ? ""
            : "Enter a valid 5-digit zip.",
        ) && valid;

      const consent = document.getElementById("consent");
      valid =
        setError(
          "consent",
          consent && consent.checked
            ? ""
            : "Please provide your consent to continue.",
        ) && valid;
      return valid;
    };

    const fieldIds = ["firstName", "lastName", "phone", "state", "zipcode"];
    const inputHandlers = fieldIds.map((id) => {
      const field = document.getElementById(id);
      const handleInput = () => setError(id, "");
      field?.addEventListener("input", handleInput);
      return { field, handleInput };
    });

    const consentEl = document.getElementById("consent");
    const clearConsentError = () => setError("consent", "");
    consentEl?.addEventListener("change", clearConsentError);

    let leadIP = "";
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        leadIP = data.ip || "";
      })
      .catch(() => {});

    const submitForm = (event) => {
      event.preventDefault();
      if (!validate()) {
        const firstInvalid = form.querySelector(".field.invalid");
        if (firstInvalid)
          firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      submitBtn?.classList.add("loading");
      submitBtn.disabled = true;

      const fieldValue = (selector) => {
        const el = document.querySelector(selector);
        return el ? el.value : "";
      };

      const certUrl = fieldValue('input[name="xxTrustedFormCertUrl"]');
      const data = {
        source: "TrustedBenefitHub",
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        phone: document.getElementById("phone").value.replace(/\D/g, ""),
        state: document.getElementById("state").value.trim().toUpperCase(),
        zipcode: document.getElementById("zipcode").value.replace(/\D/g, ""),
        consent: document.getElementById("consent").checked ? "Yes" : "No",
        trustedFormCert: certUrl,
        trustedFormToken: certUrl ? certUrl.split("/").pop() : "",
        trustedFormPingUrl: fieldValue('input[name="xxTrustedFormPingUrl"]'),
        leadiD:
          fieldValue('input[name="universal_leadid"]') ||
          fieldValue("#leadid_token"),
        ip: leadIP,
        userAgent: navigator.userAgent,
      };

      const leadEndpoint =
        "https://script.google.com/macros/s/AKfycbxkxfB4EKb1nAeEystZE0c8xxd48LzHcxiVJhCCPmGVRaaImtG6ikGS_2Q6VmRYGfgD1g/exec";
      const showSuccess = () => {
        submitBtn?.classList.remove("loading");
        const nameEl = document.getElementById("successName");
        if (nameEl) nameEl.textContent = data.firstName;
        if (successBox) successBox.hidden = false;
      };

      fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      })
        .then(showSuccess)
        .catch(showSuccess);
    };
    form?.addEventListener("submit", submitForm);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", hideLoader);
      navToggle?.removeEventListener("click", toggleNav);
      navLinks.forEach((link) => link.removeEventListener("click", closeNav));
      anchorLinks.forEach((link, index) =>
        link.removeEventListener("click", anchorHandlers[index]),
      );
      inputHandlers.forEach(({ field, handleInput }) =>
        field?.removeEventListener("input", handleInput),
      );
      consentEl?.removeEventListener("change", clearConsentError);
      form?.removeEventListener("submit", submitForm);
      observer?.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pageKind]);
}

export default usePageBehavior;
