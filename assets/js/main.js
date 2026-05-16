(function () {
  "use strict";

  /* ---------- Scroll Reveal via IntersectionObserver ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Counter Animations ---------- */
  const counters = document.querySelectorAll("[data-counter]");
  if (counters.length && "IntersectionObserver" in window) {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.counter, 10) || 0;
      const duration = 1600;
      const start = performance.now();
      const suffix = el.dataset.suffix || "";
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString() + suffix;
      };
      requestAnimationFrame(step);
    };
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    counters.forEach((el) => co.observe(el));
  }

  /* ---------- Active Section Highlight in Navbar ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[data-section]");
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((l) => {
              l.classList.toggle("active", l.dataset.section === id);
            });
          }
        });
      },
      { threshold: 0.45 },
    );
    sections.forEach((s) => so.observe(s));
  }

  /* ---------- Floating Dots Nav (LHMS) ---------- */
  const dotItems = document.querySelectorAll(".dot-nav-item[data-target]");
  if (dotItems.length && "IntersectionObserver" in window) {
    const dotObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            dotItems.forEach((d) =>
              d.classList.toggle("active", d.dataset.target === id),
            );
          }
        });
      },
      { threshold: 0.4 },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => dotObserver.observe(s));
  }

  /* ---------- Marquee duplicate for seamless loop ---------- */
  document.querySelectorAll(".marquee").forEach((m) => {
    m.innerHTML += m.innerHTML;
  });

  /* ---------- Year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
