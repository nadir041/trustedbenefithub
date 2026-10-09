/* ========================================================
   TrustedBenefitHub — Interactions
   ======================================================== */
(function () {
  'use strict';

  /* ---------- PAGE LOADER ---------- */
  const loader = document.getElementById('loader');
  function hideLoader() {
    if (!loader) return;
    // small delay so the animation is felt, not jarring
    setTimeout(function () { loader.classList.add('hidden'); }, 650);
  }
  window.addEventListener('load', hideLoader);
  // safety fallback in case 'load' is delayed
  setTimeout(hideLoader, 3500);

  /* ---------- CURRENT YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- STICKY HEADER SHADOW ---------- */
  const header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- MOBILE NAV ---------- */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // stagger siblings a touch
          const delay = entry.target.dataset.delay || (i % 4) * 80;
          setTimeout(function () { entry.target.classList.add('in'); }, delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- FORM VALIDATION + SUBMIT ----------
     Note: no live "as-you-type" reformatting is applied, so browser
     autofill and automated fillers can populate every field cleanly.
     Values are only normalized once, on submit. */
  const form = document.getElementById('contact');
  const submitBtn = document.getElementById('submitBtn');
  const successBox = document.getElementById('formSuccess');

  function setError(id, msg) {
    const field = document.getElementById(id);
    const wrap = field.closest('.field');
    const err = document.querySelector('.err[data-for="' + id + '"]');
    if (msg) {
      wrap.classList.add('invalid');
      if (err) err.textContent = msg;
    } else {
      wrap.classList.remove('invalid');
      if (err) err.textContent = '';
    }
    return !msg;
  }

  function validate() {
    let ok = true;
    const v = function (id) { return (document.getElementById(id).value || '').trim(); };

    ok = setError('firstName', v('firstName').length >= 2 ? '' : 'Please enter your first name.') && ok;
    ok = setError('lastName', v('lastName').length >= 2 ? '' : 'Please enter your last name.') && ok;

    const digits = v('phone').replace(/\D/g, '');
    ok = setError('phone', digits.length >= 10 ? '' : 'Enter a valid phone number.') && ok;

    const st = v('state').toUpperCase();
    ok = setError('state', /^[A-Z]{2}$/.test(st) ? '' : 'Enter a valid 2-letter state.') && ok;

    ok = setError('zipcode', /^\d{5}$/.test(v('zipcode').replace(/\D/g, '')) ? '' : 'Enter a valid 5-digit zip.') && ok;

    const consent = document.getElementById('consent');
    ok = setError('consent', consent.checked ? '' : 'Please provide your consent to continue.') && ok;

    return ok;
  }

  // clear error on change
  ['firstName','lastName','phone','state','zipcode'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', function () { setError(id, ''); });
  });
  const consentEl = document.getElementById('consent');
  if (consentEl) consentEl.addEventListener('change', function () { setError('consent', ''); });

  // Capture the visitor's public IP on load (browsers can't read it directly, so
  // look it up once and include it in the lead payload for the Google Sheet).
  var leadIP = '';
  fetch('https://api.ipify.org?format=json')
    .then(function (r) { return r.json(); })
    .then(function (d) { leadIP = d.ip || ''; })
    .catch(function () {});

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) {
        const firstInvalid = form.querySelector('.field.invalid');
        if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      const fieldVal = function (sel) { const el = document.querySelector(sel); return el ? el.value : ''; };
      const certUrl = fieldVal('input[name="xxTrustedFormCertUrl"]');
      const data = {
        source: 'TrustedBenefitHub',
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        phone: document.getElementById('phone').value.replace(/\D/g, ''),
        state: document.getElementById('state').value.trim().toUpperCase(),
        zipcode: document.getElementById('zipcode').value.replace(/\D/g, ''),
        consent: document.getElementById('consent').checked ? 'Yes' : 'No',
        trustedFormCert: certUrl,
        trustedFormToken: certUrl ? certUrl.split('/').pop() : '',
        trustedFormPingUrl: fieldVal('input[name="xxTrustedFormPingUrl"]'),
        leadiD: fieldVal('input[name="universal_leadid"]') || fieldVal('#leadid_token'),
        ip: leadIP,
        userAgent: navigator.userAgent
      };

      // Real POST to the Google Sheet lead collector.
      // text/plain avoids a CORS preflight that Apps Script does not answer.
      const LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxkxfB4EKb1nAeEystZE0c8xxd48LzHcxiVJhCCPmGVRaaImtG6ikGS_2Q6VmRYGfgD1g/exec';
      function showSuccess() {
        submitBtn.classList.remove('loading');
        const nameEl = document.getElementById('successName');
        if (nameEl) nameEl.textContent = data.firstName;
        if (successBox) successBox.hidden = false;
      }
      fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data)
      }).then(showSuccess).catch(showSuccess);
    });
  }

  /* ---------- SMOOTH ANCHOR OFFSET FOR STICKY HEADER ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // reflect the anchor in the address bar (e.g. /#contact) without a jump
      if (window.history && history.pushState) history.pushState(null, '', id);
      else window.location.hash = id;
    });
  });

})();
