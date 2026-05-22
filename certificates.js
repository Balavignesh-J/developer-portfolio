/* ============================================
   CERTIFICATES PAGE — JavaScript
   Balavignesh J
   ============================================ */

// ========== Certificate Data (Preserved exactly) ==========
const certificatesData = {
  nptel: [
    {
      title: "The Joy of Computing using Python",
      image: "img/My_Certificates/NPTEL/The_Joy_of_Computing_using_Python.jpg",
      link: "https://drive.google.com/file/d/1Ar3x9gQ6UoUwBNWafCtLi8skUQEEnxVZ/view",
    },
    {
      title: "Programming, Data Structures and Algorithms using Python",
      image: "img/My_Certificates/NPTEL/Programming_Data_Structures_and_Algorithms_using_Python.jpg",
      link: "https://drive.google.com/file/d/1FmytVkvCx9eDxci-vlt3mJQhVEQOi2Be/view",
    },
    {
      title: "Programming in Java",
      image: "img/My_Certificates/NPTEL/ProgrammingInJava.jpg",
      link: "https://drive.google.com/file/d/1B7-itPpBZW5GKcXL7y4Pr-F0uIkv9BjY/view",
    },
    {
      title: "Programming in Modern C++",
      image: "img/My_Certificates/NPTEL/ProgrammingInModernC++.jpg",
      link: "https://drive.google.com/file/d/1EvNeElwY4PqYPqF331JBIBCLJEIYW-VN/view",
    },
    {
      title: "Python for Data Science",
      image: "img/My_Certificates/NPTEL/pythonfords.jpg",
      link: "https://drive.google.com/file/d/1IieOhvnpBilIwtZJLso35iyow8OSkf9L/view",
    },
  ],
  linkedinLearning: [
    {
      title: "Creating a Responsive Web Design:Advanced Techniques",
      image: "img/My_Certificates/LinkedIn_Learning/Creating_a_Responsive_Web_Design_Advanced_Techniques.jpg",
      link: "https://drive.google.com/file/d/1MzreukNJ8dS2yBfd43enbjU1OjG3wgQL/view",
    },
    {
      title: "CSS: Advanced Layouts with Grid",
      image: "img/My_Certificates/LinkedIn_Learning/CSS_Advanced_Layouts_with_Grid.jpg",
      link: "https://drive.google.com/file/d/1MpRl7gAFytsiHclaQOzT1YMMzTNSjulY/view",
    },
    {
      title: "CSS Essential Training",
      image: "img/My_Certificates/LinkedIn_Learning/CSS_Essential_Training.jpg",
      link: "https://drive.google.com/file/d/12w29gIawCiqL_M9Y5WcKUpY3jYaXUQwa/view",
    },
    {
      title: "HTML Essential Training (2020)",
      image: "img/My_Certificates/LinkedIn_Learning/HTML_Essential_Training_2020.jpg",
      link: "https://drive.google.com/file/d/1IYBq2fEk8pPrSpna-1jUNYVjj_78koAE/view",
    },
    {
      title: "HTML for Programmers",
      image: "img/My_Certificates/LinkedIn_Learning/HTML_for_Programmers.jpg",
      link: "https://drive.google.com/file/d/16xxcYY0x1b4M6gfe8eWyixTlqbPk9O6e/view",
    },
    {
      title: "Introduction to Web Design and Development",
      image: "img/My_Certificates/LinkedIn_Learning/Introduction_to_Web_Design_and_Development.jpg",
      link: "https://drive.google.com/file/d/1G96QMUo42og1YUxTiuUz3uyAz_9U4biP/view",
    },
  ],
  naanMudhalvan: [
    {
      title: "EBPL",
      image: "img/My_Certificates/Naan_Mudhalvan/NM_Certificate.jpg",
      link: "https://drive.google.com/file/d/1XeNYEdeAKT5yV69EfW-FeaSFz7EunLMd/view",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Al Foundations Associate",
      image: "img/My_Certificates/Naan_Mudhalvan/oracle1.jpg",
      link: "https://drive.google.com/file/d/1TuHeEMuq15CpkZbB-bBfdBwwsUPlK9Hv/view",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      image: "img/My_Certificates/Naan_Mudhalvan/oracle2.jpg",
      link: "https://drive.google.com/file/d/1-qZNYl9NVJ6EN2S2Kt0lJsXlQv4NPkSU/view",
    },
    {
      title: "UIUX",
      image: "img/My_Certificates/Naan_Mudhalvan/UIUX.jpg",
      link: "https://drive.google.com/file/d/1tMt16_DuFhwpmMEvB9dQZ6dSAITi2PmG/view",
    },
    {
      title: "UIUX HCL",
      image: "img/My_Certificates/Naan_Mudhalvan/HCL_GUVI.png",
      link: "https://drive.google.com/file/d/13Fjdsg5uo5syf1Gz-6FLkK7EH7QG4z7p/view",
    },
    {
      title: "Digital 101",
      image: "img/My_Certificates/Naan_Mudhalvan/Digital_101.jpg",
      link: "https://drive.google.com/file/d/1huM0XgkvRNQsElwUAWBghySHJyu4Lx2L/view",
    },
  ],
  infosysSpringboard: [
    {
      title: "Learning Java 9 - Object Oriented Programming",
      image: "img/My_Certificates/SpringBoard/Java.jpg",
      link: "https://drive.google.com/file/d/1cCuwgbVUgTULboFsmJcsIWLAGH84Czmm/view",
    },
    {
      title: "Basics of Python",
      image: "img/My_Certificates/SpringBoard/python.jpg",
      link: "https://drive.google.com/file/d/1w2L4rDxKig530I7BEQ0btcubRDyq097c/view",
    },
  ],
  symposiums: [
    {
      title: "C. Abdul Hakeem College of Engineering & Technology",
      image: "img/My_Certificates/Symposiums/Hakeem.jpeg",
      link: "https://drive.google.com/file/d/1c5m92nm270MLMz05I-R33vCqyYW1jXx-/view",
    },
    {
      title: "Ganadipathy Tulsi's Jain Engineering College Vellore",
      image: "img/My_Certificates/Symposiums/GTEC1.jpg",
      link: "https://drive.google.com/file/d/1sAcsmwggSYX-Psjl2-1wH6kmdWu1BE0Q/view",
    },
    {
      title: "Annai Mira College of Engineering and Technology Vellore",
      image: "img/My_Certificates/Symposiums/AMCET.jpg",
      link: "https://drive.google.com/file/d/15xi03Ow68DP-LjyKA4v0X28tlxXw0C3R/view",
    },
    {
      title: "Gojan School of Business and Technology Chennai",
      image: "img/My_Certificates/Symposiums/Gojan.jpg",
      link: "https://drive.google.com/file/d/1n0HhQ9u4Ykdu302oOOYzcqOgBA7qJByf/view",
    },
    {
      title: "Global Institute Of Engineering And Technology",
      image: "img/My_Certificates/Symposiums/Global1.jpg",
      link: "https://drive.google.com/file/d/1XQuFxekXqvkorccEq0ahJSH0E8xrZe24/view",
    },
    {
      title: "Global Institute Of Engineering And Technology",
      image: "img/My_Certificates/Symposiums/Global2.jpg",
      link: "https://drive.google.com/file/d/1pSyakv3qBY4udACblSOaDCDuN6sVjXlt/view",
    },
    {
      title: "Global Institute Of Engineering And Technology",
      image: "img/My_Certificates/Symposiums/Global3.jpg",
      link: "https://drive.google.com/file/d/1XIZZV_HtNVgnydfdj3jJdNDpMoUZ07bW/view",
    },
    {
      title: "Global Institute Of Engineering And Technology",
      image: "img/My_Certificates/Symposiums/Global4.jpg",
      link: "https://drive.google.com/file/d/1QaFNpPeNO4A0uaX1zoBWC_VZYnTpvA0P/view",
    },
    {
      title: "Kingston Engineering College",
      image: "img/My_Certificates/Symposiums/Kingston.jpg",
      link: "https://drive.google.com/file/d/1FFN15Ag0-_aox2doROFKAPgALlBX4FAB/view",
    },
    {
      title: "Adhiparasakthi College of Engineering Debugging",
      image: "img/My_Certificates/Symposiums/adhi1.jpeg",
      link: "https://drive.google.com/file/d/1vp8_fD0ioT-kNvuJJaBB7qd6pQksrvxd/view",
    },
    {
      title: "Adhiparasakthi College of Engineering UIUX",
      image: "img/My_Certificates/Symposiums/adhi2.jpeg",
      link: "https://drive.google.com/file/d/1ES24_Blp2FoBiBtSVvHYWk5eajF3RUN8/view",
    },
    {
      title: "Podhigai College of Engineering & Technology Debugging",
      image: "img/My_Certificates/Symposiums/podhigai_coding.jpg",
      link: "https://drive.google.com/file/d/1ii2ltihpTdZ0RtWpfw8UijGH6tolPB86/view",
    },
    {
      title: "Podhigai College of Engineering & Technology Quiz",
      image: "img/My_Certificates/Symposiums/podhigai_quiz.jpg",
      link: "https://drive.google.com/file/d/11hHj0cNjSddnPiEcT1M4EdHXEuvRDd75/view",
    },
    {
      title: "Ganadipathy Tulsi's Jain Engineering College Vellore",
      image: "img/My_Certificates/Symposiums/GTEC2.jpg",
      link: "https://drive.google.com/file/d/1gBUm6s3-7iUVZQ98UeZKJ5yVdN5ECNe3/view",
    },
  ],
  internship: [
    {
      title: "MERN Stack Developer Intern",
      image: "img/My_Certificates/Internships/IIT_ROPAR.jpeg",
      link: "https://drive.google.com/file/d/1Nii7eq01Z2_yqBavqKJ6QWdM9q4m53zQ/view",
    },
  ],
  udemy: [
    {
      title: "Python Complete Course For Python Beginners",
      image: "img/My_Certificates/Udemy/Udemy_python.jpg",
      link: "https://drive.google.com/file/d/12kZdj0rz-cq6LFlIuZ5-smV0RxgnBQUU/view",
    },
    {
      title: "MS Word - Microsoft Word Course Beginner to Expert",
      image: "img/My_Certificates/Udemy/Udemy_msword.jpg",
      link: "https://drive.google.com/file/d/1LLk36EcLOSs6o4ud5OzLKhp8ug0370cT/view",
    },
  ],
};

// ========== Application ==========
(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // ========== Theme ==========
  const Theme = {
    init() {
      const saved = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', saved);

      const toggle = $('#cert-theme-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => this.toggle());
      }
    },

    toggle() {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);

      const meta = $('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', next === 'dark' ? '#0a0a0f' : '#fafafa');
      }
    },
  };

  // ========== Mobile Nav ==========
  const MobileNav = {
    init() {
      const hamburger = $('#cert-hamburger');
      const navLinks = $('#cert-nav-links');
      if (!hamburger || !navLinks) return;

      hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
      });

      // Close on link click
      $$('.cert-nav-link', navLinks).forEach((link) => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          navLinks.classList.remove('open');
          hamburger.classList.remove('active');
        }
      });

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          navLinks.classList.remove('open');
          hamburger.classList.remove('active');
        }
      });
    },
  };

  // ========== Smooth Scroll ==========
  const SmoothScroll = {
    init() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (targetId === '#') return;

        const target = $(targetId);
        if (!target) return;

        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    },
  };

  // ========== Render Certificates ==========
  function renderCertificates() {
    const grids = $$('.cert-grid[data-section]');

    grids.forEach((grid) => {
      const sectionKey = grid.dataset.section;
      const certs = certificatesData[sectionKey];

      if (!certs || !Array.isArray(certs)) return;

      const fragment = document.createDocumentFragment();

      certs.forEach((cert, index) => {
        const card = document.createElement('a');
        card.href = cert.link;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'cert-card reveal';
        card.style.transitionDelay = `${Math.min(index * 0.08, 0.5)}s`;

        card.innerHTML = `
          <div class="cert-card-image">
            <img src="${cert.image}" alt="${cert.title}" loading="lazy">
            <div class="cert-card-image-overlay">
              <span>View Certificate ↗</span>
            </div>
          </div>
          <div class="cert-card-body">
            <h3 class="cert-card-title">${cert.title}</h3>
          </div>
        `;

        // Add lightbox on image click
        const img = card.querySelector('img');
        img.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          Lightbox.open(cert.image, cert.title);
        });

        fragment.appendChild(card);
      });

      grid.appendChild(fragment);
    });
  }

  // ========== Lightbox ==========
  const Lightbox = {
    init() {
      const lightbox = $('#lightbox');
      const closeBtn = $('#lightbox-close');
      if (!lightbox || !closeBtn) return;

      closeBtn.addEventListener('click', () => this.close());

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) this.close();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    },

    open(src, alt) {
      const lightbox = $('#lightbox');
      const img = $('#lightbox-img');
      if (!lightbox || !img) return;

      img.src = src;
      img.alt = alt || 'Certificate preview';
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    },

    close() {
      const lightbox = $('#lightbox');
      if (!lightbox) return;

      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    },
  };

  // ========== Scroll Reveal ==========
  const ScrollReveal = {
    init() {
      const elements = $$('.reveal');
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));
    },
  };

  // ========== Initialize ==========
  function init() {
    Theme.init();
    MobileNav.init();
    SmoothScroll.init();
    renderCertificates();
    Lightbox.init();

    // Init scroll reveal after certificates are rendered
    requestAnimationFrame(() => {
      ScrollReveal.init();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
