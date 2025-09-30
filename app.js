// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const navHamburger = document.getElementById('nav-hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contact-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Update theme icon
        this.updateThemeIcon();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
        this.updateThemeIcon();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateThemeIcon() {
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        // Mobile menu toggle
        navHamburger.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close mobile menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Smooth scrolling for anchor links
        this.initSmoothScrolling();

        // Navbar background on scroll
        window.addEventListener('scroll', () => this.handleNavbarScroll());

        // Close mobile menu on outside click
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navHamburger.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        navMenu.classList.toggle('active');
        navHamburger.classList.toggle('active');
    }

    closeMobileMenu() {
        navMenu.classList.remove('active');
        navHamburger.classList.remove('active');
    }

    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(var(--color-surface-rgb, 255, 255, 253), 0.98)';
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.background = 'rgba(var(--color-surface-rgb, 255, 255, 253), 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}

// Project Filter Management
class ProjectFilter {
    constructor() {
        this.init();
    }

    init() {
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleFilter(e));
        });
    }

    handleFilter(e) {
        const filterValue = e.target.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
            } else {
                const category = card.getAttribute('data-category');
                if (category === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    }
}

// Contact Form Management
class ContactForm {
    constructor() {
        this.init();
    }

    init() {
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (!this.validateForm(name, email, subject, message)) {
            return;
        }

        // Simulate form submission
        this.showSubmissionFeedback();
        contactForm.reset();
    }

    validateForm(name, email, subject, message) {
        if (!name.trim()) {
            this.showError('Please enter your name');
            return false;
        }

        if (!this.isValidEmail(email)) {
            this.showError('Please enter a valid email address');
            return false;
        }

        if (!subject.trim()) {
            this.showError('Please enter a subject');
            return false;
        }

        if (!message.trim()) {
            this.showError('Please enter a message');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showError(message) {
        // Remove existing alerts
        const existingAlert = document.querySelector('.form-alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Create and show error alert
        const alert = document.createElement('div');
        alert.className = 'form-alert status status--error';
        alert.textContent = message;
        alert.style.marginBottom = 'var(--space-16)';
        
        contactForm.insertBefore(alert, contactForm.firstChild);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }

    showSubmissionFeedback() {
        // Remove existing alerts
        const existingAlert = document.querySelector('.form-alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Create and show success alert
        const alert = document.createElement('div');
        alert.className = 'form-alert status status--success';
        alert.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        alert.style.marginBottom = 'var(--space-16)';
        
        contactForm.insertBefore(alert, contactForm.firstChild);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
}

// Scroll Animation Observer
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Create intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.skill-category, .achievement-card, .project-card, .profile-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Utility Functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Get current section for navigation highlighting
    getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        for (let section of sections) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (scrollPos >= top && scrollPos <= bottom) {
                return section.id;
            }
        }
        return '';
    }
};

// Navigation Highlight on Scroll
function updateNavigationHighlight() {
    const currentSection = utils.getCurrentSection();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.style.color = 'var(--color-primary)';
            link.style.background = 'var(--color-secondary)';
        } else {
            link.style.color = 'var(--color-text)';
            link.style.background = 'transparent';
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    new ThemeManager();
    new NavigationManager();
    new ProjectFilter();
    new ContactForm();
    new ScrollAnimations();

    // Add scroll listener for navigation highlighting
    const debouncedHighlight = utils.debounce(updateNavigationHighlight, 100);
    window.addEventListener('scroll', debouncedHighlight);

    // Add loading animation to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // Fade in page after load
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

    console.log('Portfolio loaded successfully! 🚀');
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', utils.debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navHamburger.classList.remove('active');
    }
}, 250));

// Error handling for any uncaught errors
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Export for potential external use
window.PortfolioApp = {
    ThemeManager,
    NavigationManager,
    ProjectFilter,
    ContactForm,
    ScrollAnimations,
    utils
};