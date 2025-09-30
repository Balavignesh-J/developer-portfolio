document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-color-scheme', savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-color-scheme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const data = await response.json();

        if (response.ok && data.success) {
            showNotification('Thank you! Your message has been sent.', 'success');
            contactForm.reset();
        } else {
            console.error('Web3Forms Error:', data);
            showNotification(data.message || 'Submission failed. Please try again.', 'error');
        }

    } catch (error) {
        console.error('Fetch Error:', error);
        showNotification('An error occurred during submission. Check your network.', 'error');
    } finally {
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

    function showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification status--${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 16px 20px;
            border-radius: 8px;
            color: var(--color-${type});
            background: rgba(var(--color-${type}-rgb), 0.1);
            border: 1px solid rgba(var(--color-${type}-rgb), 0.25);
            font-weight: 500;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.skill-category, .certification-card, .project-card, .profile-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    const style = document.createElement('style');
    style.textContent = `
        .navbar.scrolled {
            background: rgba(var(--color-surface-rgb, 255, 255, 255), 0.95);
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-sm);
        }
        
        .nav-link.active {
            color: var(--color-primary);
        }
        
        .nav-link.active::after {
            width: 100%;
        }
        
        @media (prefers-color-scheme: dark) {
            .navbar.scrolled {
                background: rgba(38, 40, 40, 0.95);
            }
        }
        
        [data-color-scheme="dark"] .navbar.scrolled {
            background: rgba(38, 40, 40, 0.95);
        }
        
        [data-color-scheme="light"] .navbar.scrolled {
            background: rgba(255, 255, 253, 0.95);
        }
    `;
    document.head.appendChild(style);

    updateActiveNavLink();

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const mainTitle = document.querySelector('.intro-text h1');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.hasAttribute('target') && e.target.getAttribute('target') === '_blank') {
        setTimeout(() => {
            console.log('External link opened:', e.target.href);
        }, 100);
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 't' && !e.target.matches('input, textarea')) {
        document.getElementById('theme-toggle').click();
    }
    
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});




function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const mobileToggle = document.getElementById('mobile-menu-toggle');

    navMenu.classList.toggle('nav-menu--open');

    mobileToggle.classList.toggle('active');
}

document.querySelectorAll('.nav-link, .external-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('nav-menu--open');
        document.getElementById('mobile-menu-toggle').classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const mobileToggle = document.getElementById('mobile-menu-toggle');

    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('nav-menu--open');
        mobileToggle.classList.remove('active');
    }
});
