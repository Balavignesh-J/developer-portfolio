/* ============================================
   PORTFOLIO — Main Application Script
   Balavignesh J
   ============================================ */

(function () {
  "use strict";

  // ========== DOM REFERENCES ==========
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const DOM = {
    html: document.documentElement,
    body: document.body,
    navbar: $("#navbar"),
    navMenu: $("#nav-menu"),
    navLinks: $$(".nav-link"),
    mobileToggle: $("#mobile-toggle"),
    themeToggle: $("#theme-toggle"),
    contactForm: $("#contact-form"),
    formSubmit: $("#form-submit"),
    backToTop: $("#back-to-top"),
    cursorGlow: $("#cursor-glow"),
    typedText: $("#typed-text"),
    heroParticles: $("#hero-particles"),
  };

  // ========== THEME MANAGEMENT ==========
  const Theme = {
    init() {
      const saved = localStorage.getItem("theme") || "dark";
      DOM.html.setAttribute("data-theme", saved);
      this.updateMetaTheme(saved);

      DOM.themeToggle.addEventListener("click", () => this.toggle());
    },

    toggle() {
      const current = DOM.html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      DOM.html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      this.updateMetaTheme(next);
    },

    updateMetaTheme(theme) {
      const meta = $('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute("content", theme === "dark" ? "#0a0a0f" : "#fafafa");
      }
    },
  };

  // ========== MOBILE NAVIGATION ==========
  const MobileNav = {
    isOpen: false,

    init() {
      DOM.mobileToggle.addEventListener("click", () => this.toggle());

      // Close on nav link click
      DOM.navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (this.isOpen) this.close();
        });
      });

      // Close on outside click
      document.addEventListener("click", (e) => {
        if (
          this.isOpen &&
          !DOM.navMenu.contains(e.target) &&
          !DOM.mobileToggle.contains(e.target)
        ) {
          this.close();
        }
      });

      // Close on Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) this.close();
      });
    },

    toggle() {
      this.isOpen ? this.close() : this.open();
    },

    open() {
      this.isOpen = true;
      DOM.navMenu.classList.add("open");
      DOM.mobileToggle.classList.add("active");
      DOM.mobileToggle.setAttribute("aria-expanded", "true");
      DOM.body.classList.add("no-scroll");
    },

    close() {
      this.isOpen = false;
      DOM.navMenu.classList.remove("open");
      DOM.mobileToggle.classList.remove("active");
      DOM.mobileToggle.setAttribute("aria-expanded", "false");
      DOM.body.classList.remove("no-scroll");
    },
  };

  // ========== SMOOTH SCROLL ==========
  const SmoothScroll = {
    init() {
      // Handle all anchor links
      document.addEventListener("click", (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute("href");
        if (targetId === "#") return;

        const target = $(targetId);
        if (!target) return;

        e.preventDefault();
        const offset = DOM.navbar.offsetHeight + 20;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      });
    },
  };

  // ========== SCROLL EFFECTS ==========
  const ScrollEffects = {
    lastScroll: 0,

    init() {
      // Throttled scroll handler
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            this.onScroll();
            ticking = false;
          });
          ticking = true;
        }
      });

      this.onScroll(); // Initial call
    },

    onScroll() {
      const scrollY = window.scrollY;

      // Navbar background
      if (scrollY > 50) {
        DOM.navbar.classList.add("scrolled");
      } else {
        DOM.navbar.classList.remove("scrolled");
      }

      // Active nav link
      this.updateActiveLink(scrollY);

      // Back to top visibility
      if (scrollY > 600) {
        DOM.backToTop.classList.add("visible");
      } else {
        DOM.backToTop.classList.remove("visible");
      }

      this.lastScroll = scrollY;
    },

    updateActiveLink(scrollY) {
      const sections = $$("section[id]");
      const offset = DOM.navbar.offsetHeight + 100;

      let currentSection = "";

      sections.forEach((section) => {
        const top = section.offsetTop - offset;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          currentSection = section.id;
        }
      });

      DOM.navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${currentSection}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    },
  };

  // ========== SCROLL REVEAL ==========
  const ScrollReveal = {
    init() {
      const revealElements = $$(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale",
      );

      if (!revealElements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target); // Only reveal once
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -60px 0px",
        },
      );

      revealElements.forEach((el) => observer.observe(el));
    },
  };

  // ========== TYPING ANIMATION ==========
  const TypeWriter = {
    phrases: [
      "Front-end Developer",
      "React & Django Enthusiast",
      "DSA in Python Lover",
      "Frontend, Backend, Algorithms",
      "Always Learning, Always Building",
    ],
    currentPhrase: 0,
    currentChar: 0,
    isDeleting: false,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseTime: 1800,

    init() {
      if (!DOM.typedText) return;
      this.type();
    },

    type() {
      const phrase = this.phrases[this.currentPhrase];

      if (this.isDeleting) {
        this.currentChar--;
      } else {
        this.currentChar++;
      }

      DOM.typedText.textContent = phrase.substring(0, this.currentChar);

      let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

      // Finished typing
      if (!this.isDeleting && this.currentChar === phrase.length) {
        delay = this.pauseTime;
        this.isDeleting = true;
      }

      // Finished deleting
      if (this.isDeleting && this.currentChar === 0) {
        this.isDeleting = false;
        this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
        delay = 400;
      }

      setTimeout(() => this.type(), delay);
    },
  };

  // ========== COUNTER ANIMATION ==========
  const Counter = {
    init() {
      const counters = $$("[data-count]");
      if (!counters.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animate(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 },
      );

      counters.forEach((el) => observer.observe(el));
    },

    animate(el) {
      const target = parseInt(el.dataset.count);
      const duration = 2000;
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        el.textContent = current + "+";

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    },
  };

  // ========== CURSOR GLOW ==========
  const CursorGlow = {
    init() {
      if (!DOM.cursorGlow) return;

      // Only on non-touch devices
      if ("ontouchstart" in window) return;

      let rafId = null;
      let mouseX = 0;
      let mouseY = 0;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            DOM.cursorGlow.style.left = mouseX + "px";
            DOM.cursorGlow.style.top = mouseY + "px";
            rafId = null;
          });
        }
      });
    },
  };

  // ========== HERO PARTICLES ==========
  const Particles = {
    init() {
      if (!DOM.heroParticles) return;

      const count = 20;
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = 4 + Math.random() * 4 + "s";
        particle.style.opacity = 0.1 + Math.random() * 0.3;
        particle.style.width = 2 + Math.random() * 3 + "px";
        particle.style.height = particle.style.width;
        fragment.appendChild(particle);
      }

      DOM.heroParticles.appendChild(fragment);
    },
  };

  // ========== CONTACT FORM ==========
  const ContactForm = {
    init() {
      if (!DOM.contactForm) return;

      DOM.contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        await this.submit();
      });
    },

    async submit() {
      const formData = new FormData(DOM.contactForm);
      const name = formData.get("name")?.trim();
      const email = formData.get("email")?.trim();
      const message = formData.get("message")?.trim();

      if (!name || !email || !message) {
        this.showNotification("Please fill in all fields.", "error");
        return;
      }

      if (!this.isValidEmail(email)) {
        this.showNotification("Please enter a valid email address.", "error");
        return;
      }

      DOM.formSubmit.textContent = "Sending...";
      DOM.formSubmit.disabled = true;

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        const data = await response.json();

        if (response.ok && data.success) {
          this.showNotification(
            "Thank you! Your message has been sent.",
            "success",
          );
          DOM.contactForm.reset();
        } else {
          this.showNotification(
            data.message || "Submission failed. Please try again.",
            "error",
          );
        }
      } catch (error) {
        console.error("Form submission error:", error);
        this.showNotification(
          "An error occurred. Please check your network and try again.",
          "error",
        );
      } finally {
        DOM.formSubmit.textContent = "Send Message";
        DOM.formSubmit.disabled = false;
      }
    },

    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    showNotification(message, type = "success") {
      // Remove existing
      const existing = $(".notification");
      if (existing) existing.remove();

      const notification = document.createElement("div");
      notification.className = `notification notification-${type}`;
      notification.textContent = message;
      notification.setAttribute("role", "alert");

      document.body.appendChild(notification);

      // Trigger show
      requestAnimationFrame(() => {
        notification.classList.add("show");
      });

      // Auto-dismiss
      setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => notification.remove(), 300);
      }, 5000);
    },
  };

  // ========== BACK TO TOP ==========
  const BackToTop = {
    init() {
      if (!DOM.backToTop) return;

      DOM.backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
  };

  // ========== KEYBOARD SHORTCUTS ==========
  const Keyboard = {
    init() {
      document.addEventListener("keydown", (e) => {
        // 'T' to toggle theme (not in inputs)
        if (
          e.key.toLowerCase() === "t" &&
          !e.target.matches("input, textarea, select")
        ) {
          Theme.toggle();
        }
      });
    },
  };

  // ========== INITIALIZE ==========
  function init() {
    Theme.init();
    MobileNav.init();
    SmoothScroll.init();
    ScrollEffects.init();
    ScrollReveal.init();
    TypeWriter.init();
    Counter.init();
    CursorGlow.init();
    Particles.init();
    ContactForm.init();
    BackToTop.init();
    Keyboard.init();
  }

  // Wait for DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
