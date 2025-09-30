// Application data
const portfolioData = {
  "personal": {
    "name": "John Developer",
    "title": "Full Stack Web Developer",
    "email": "john@developer.com",
    "phone": "+1 (555) 123-4567",
    "location": "San Francisco, CA",
    "bio": "Passionate full-stack developer with 3+ years of experience building modern web applications. I love creating efficient, scalable solutions and staying up-to-date with the latest technologies.",
    "resumeLink": "https://drive.google.com/file/d/sample-resume-id/view"
  },
  "skills": {
    "frontend": [
      {"name": "HTML5", "level": 90, "icon": "fab fa-html5"},
      {"name": "CSS3", "level": 85, "icon": "fab fa-css3-alt"},
      {"name": "JavaScript", "level": 88, "icon": "fab fa-js"},
      {"name": "React", "level": 82, "icon": "fab fa-react"},
      {"name": "Bootstrap", "level": 80, "icon": "fab fa-bootstrap"},
      {"name": "Tailwind CSS", "level": 75, "icon": "fas fa-palette"}
    ],
    "backend": [
      {"name": "Node.js", "level": 80, "icon": "fab fa-node-js"},
      {"name": "Python", "level": 85, "icon": "fab fa-python"},
      {"name": "Django", "level": 78, "icon": "fas fa-server"},
      {"name": "Java", "level": 75, "icon": "fab fa-java"},
      {"name": "PHP", "level": 70, "icon": "fab fa-php"}
    ],
    "database": [
      {"name": "MySQL", "level": 80, "icon": "fas fa-database"},
      {"name": "PostgreSQL", "level": 75, "icon": "fas fa-database"},
      {"name": "MongoDB", "level": 70, "icon": "fas fa-leaf"}
    ],
    "tools": [
      {"name": "Git", "level": 85, "icon": "fab fa-git-alt"},
      {"name": "Docker", "level": 70, "icon": "fab fa-docker"},
      {"name": "AWS", "level": 65, "icon": "fab fa-aws"},
      {"name": "VS Code", "level": 90, "icon": "fas fa-code"}
    ]
  },
  "projects": [
    {
      "title": "E-Commerce Platform",
      "description": "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe API"],
      "liveDemo": "https://demo-ecommerce.com",
      "github": "https://github.com/johndeveloper/ecommerce-platform",
      "category": "fullstack"
    },
    {
      "title": "Task Management App",
      "description": "A collaborative task management application with real-time updates and team collaboration features.",
      "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      "technologies": ["Vue.js", "Django", "PostgreSQL", "WebSocket"],
      "liveDemo": "https://demo-taskapp.com",
      "github": "https://github.com/johndeveloper/task-manager",
      "category": "frontend"
    },
    {
      "title": "Weather Dashboard",
      "description": "A responsive weather dashboard that displays current weather and forecasts for multiple cities.",
      "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400",
      "technologies": ["JavaScript", "CSS3", "Weather API", "Chart.js"],
      "liveDemo": "https://demo-weather.com",
      "github": "https://github.com/johndeveloper/weather-dashboard",
      "category": "frontend"
    },
    {
      "title": "API Gateway Service",
      "description": "A scalable API gateway service for microservices architecture with authentication and rate limiting.",
      "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
      "technologies": ["Python", "Flask", "Redis", "Docker"],
      "liveDemo": "https://demo-api.com",
      "github": "https://github.com/johndeveloper/api-gateway",
      "category": "backend"
    }
  ],
  "achievements": [
    {
      "title": "AWS Certified Developer",
      "date": "2024",
      "description": "Achieved AWS Certified Developer - Associate certification",
      "icon": "fab fa-aws"
    },
    {
      "title": "Hackathon Winner",
      "date": "2023",
      "description": "First place in TechCrunch Disrupt hackathon with team project",
      "icon": "fas fa-trophy"
    },
    {
      "title": "Open Source Contributor",
      "date": "2023",
      "description": "Contributed to 15+ open source projects on GitHub",
      "icon": "fab fa-github"
    },
    {
      "title": "Full Stack Certification",
      "date": "2022",
      "description": "Completed comprehensive full-stack development bootcamp",
      "icon": "fas fa-graduation-cap"
    }
  ]
};

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const navLinks = document.querySelectorAll('.nav-link');

// Theme management
class ThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
    this.init();
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-color-scheme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeIcon();
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateThemeIcon() {
    if (themeIcon) {
      themeIcon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }

  init() {
    this.setTheme(this.currentTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// Typing animation
class TypingAnimation {
  constructor(element, texts, speed = 100) {
    this.element = element;
    this.texts = texts;
    this.speed = speed;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.start();
  }

  start() {
    this.type();
  }

  type() {
    const currentText = this.texts[this.textIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.speed;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      typeSpeed = 500; // Pause before next word
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Skills renderer
class SkillsRenderer {
  constructor() {
    this.renderSkills();
  }

  renderSkills() {
    const categories = ['frontend', 'backend', 'database', 'tools'];
    
    categories.forEach(category => {
      const container = document.getElementById(`${category}-skills`);
      if (container && portfolioData.skills[category]) {
        container.innerHTML = portfolioData.skills[category]
          .map(skill => this.createSkillHTML(skill))
          .join('');
      }
    });
  }

  createSkillHTML(skill) {
    return `
      <div class="skill-item">
        <div class="skill-info">
          <i class="${skill.icon} skill-icon"></i>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-level">${skill.level}%</span>
      </div>
    `;
  }
}

// Projects renderer and filter
class ProjectsRenderer {
  constructor() {
    this.currentFilter = 'all';
    this.renderProjects();
    this.setupFilters();
  }

  renderProjects() {
    const container = document.getElementById('projects-container');
    if (container) {
      container.innerHTML = portfolioData.projects
        .map(project => this.createProjectHTML(project))
        .join('');
    }
  }

  createProjectHTML(project) {
    return `
      <div class="col-lg-6 col-md-6 project-item" data-category="${project.category}">
        <div class="project-card">
          <div class="project-image" style="background-image: url('${project.image}')"></div>
          <div class="project-content">
            <h4 class="project-title">${project.title}</h4>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${project.liveDemo}" target="_blank" class="project-link primary">
                <i class="fas fa-external-link-alt me-1"></i>Live Demo
              </a>
              <a href="${project.github}" target="_blank" class="project-link secondary">
                <i class="fab fa-github me-1"></i>GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        const filter = btn.getAttribute('data-filter');
        this.filterProjects(filter);
      });
    });
  }

  filterProjects(filter) {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
      const category = item.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 100);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  }
}

// Achievements renderer
class AchievementsRenderer {
  constructor() {
    this.renderAchievements();
  }

  renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (container) {
      container.innerHTML = portfolioData.achievements
        .map((achievement, index) => this.createAchievementHTML(achievement, index))
        .join('');
    }
  }

  createAchievementHTML(achievement, index) {
    return `
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="achievement-date">${achievement.date}</div>
          <h4 class="achievement-title">${achievement.title}</h4>
          <p class="achievement-description">${achievement.description}</p>
        </div>
        <div class="timeline-icon">
          <i class="${achievement.icon}"></i>
        </div>
      </div>
    `;
  }
}

// Contact form handler
class ContactForm {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.setupForm();
  }

  setupForm() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    
    // Validate form
    if (this.validateForm(data)) {
      this.simulateSubmit(data);
    }
  }

  validateForm(data) {
    const required = ['name', 'email', 'subject', 'message'];
    
    for (let field of required) {
      if (!data[field] || data[field].trim() === '') {
        this.showError(`Please fill in the ${field} field.`);
        return false;
      }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      this.showError('Please enter a valid email address.');
      return false;
    }
    
    return true;
  }

  simulateSubmit(data) {
    // Simulate form submission
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      this.showSuccess();
      this.form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  }

  showSuccess() {
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
  }

  showError(message) {
    // Simple alert for now - in a real app, you'd show a proper error message
    alert(message);
  }
}

// Navigation manager
class NavigationManager {
  constructor() {
    this.setupSmoothScrolling();
    this.setupActiveNavigation();
  }

  setupSmoothScrolling() {
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -80px 0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
          
          // Remove active class from all nav links
          navLinks.forEach(link => link.classList.remove('active'));
          
          // Add active class to current section link
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }
}

// Scroll animations
class ScrollAnimations {
  constructor() {
    this.setupAnimations();
  }

  setupAnimations() {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .profile-card');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });
  }
}

// Initialize application
class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  }

  start() {
    // Initialize all components
    new ThemeManager();
    new SkillsRenderer();
    new ProjectsRenderer();
    new AchievementsRenderer();
    new ContactForm();
    new NavigationManager();
    new ScrollAnimations();

    // Initialize typing animation
    const typedText = document.getElementById('typed-text');
    if (typedText) {
      new TypingAnimation(typedText, [
        'Full Stack Web Developer',
        'React & Node.js Developer', 
        'Python & Django Expert',
        'Cloud Architecture Enthusiast'
      ], 100);
    }

    // Add loading complete class to body
    document.body.classList.add('loaded');
  }
}

// Start the application
new App();