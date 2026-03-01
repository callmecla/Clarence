// EmailJS Configuration
// Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
    templateID: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
    publicKey: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
};

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// Form submission handler with EmailJS
function handleSubmit(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_name: 'Clarence Kyle M. Flores'
    };
    
    // Send email using EmailJS
    emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert(`Thank you for your message, ${templateParams.from_name}! I'll get back to you soon at ${templateParams.from_email}.`);
            // Reset form
            event.target.reset();
        }, function(error) {
            console.error('FAILED...', error);
            alert('Oops! Something went wrong. Please try again or email me directly at flores.clarencekyle.marcrispin@gmail.com');
        })
        .finally(function() {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Scroll to Top Functionality
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation on scroll
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

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
// ============================================
// MICRO-INTERACTIONS ENHANCEMENTS
// ============================================

// Add ripple effect to buttons dynamically
document.querySelectorAll('.btn-resume, .submit-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal for cards on scroll with stagger effect
const revealCards = () => {
    const cards = document.querySelectorAll('.education-item, .project-card, .skill-category, .seminar-card, .certificate-card');
    
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.85;
        
        if (cardTop < triggerBottom) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100); // Stagger by 100ms
        }
    });
};

// Initialize cards as hidden
document.querySelectorAll('.education-item, .project-card, .skill-category, .seminar-card, .certificate-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
});

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

// Add hover sound effect (optional - subtle)
const addHoverEffect = (selector) => {
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0) scale(1)';
        });
    });
};

// Apply to all cards
addHoverEffect('.education-item');
addHoverEffect('.experience-item');
addHoverEffect('.project-card');
addHoverEffect('.seminar-card');
addHoverEffect('.certificate-card');

// ============================================
// MOBILE IMPROVEMENTS
// ============================================

// Detect mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isMobile || isTouch) {
    // Add mobile-specific class
    document.body.classList.add('is-mobile');
    
    // Disable hover effects on touch devices
    const style = document.createElement('style');
    style.textContent = `
        .is-mobile * {
            transition-duration: 0.2s !important;
        }
        
        .is-mobile .education-item:hover,
        .is-mobile .experience-item:hover,
        .is-mobile .project-card:hover {
            transform: translateY(-4px) scale(1.01) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Better scroll behavior on mobile
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide header on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }, false);
    
    header.style.transition = 'transform 0.3s ease';
}

// Improve touch feedback
if (isTouch) {
    document.querySelectorAll('a, button, .project-card, .education-item, .experience-item').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });
}

// Prevent zoom on input focus (iOS)
if (isMobile) {
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('focus', () => {
            if (window.innerWidth < 768) {
                const viewport = document.querySelector('meta[name=viewport]');
                viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
            }
        });
        
        input.addEventListener('blur', () => {
            const viewport = document.querySelector('meta[name=viewport]');
            viewport.setAttribute('content', 'width=device-width, initial-scale=1');
        });
    });
}

// Add pull-to-refresh indicator (optional)
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeDistance = touchEndY - touchStartY;
    
    // Swipe down at top of page
    if (swipeDistance > 100 && window.scrollY === 0) {
        // Optional: Add refresh animation
        console.log('Pull to refresh triggered');
    }
}

// ============================================
// TYPOGRAPHY IMPROVEMENTS
// ============================================

// Adjust font size based on content length
const adjustFontSize = () => {
    const descriptions = document.querySelectorAll('.project-description, .hero-description');
    
    descriptions.forEach(desc => {
        const textLength = desc.textContent.length;
        
        if (textLength > 200) {
            desc.style.fontSize = '0.95rem';
            desc.style.lineHeight = '1.7';
        }
    });
};

adjustFontSize();

// Prevent orphans (single words on last line)
const preventOrphans = (selector) => {
    document.querySelectorAll(selector).forEach(element => {
        const text = element.innerHTML;
        const words = text.trim().split(' ');
        
        if (words.length > 3) {
            words[words.length - 2] += '&nbsp;' + words[words.length - 1];
            words.pop();
            element.innerHTML = words.join(' ');
        }
    });
};

// Apply to headings
preventOrphans('h1, h2, h3');

// Add reading time estimate
const calculateReadingTime = () => {
    const sections = document.querySelectorAll('section');
    let totalWords = 0;
    
    sections.forEach(section => {
        const text = section.textContent;
        const words = text.trim().split(/\s+/).length;
        totalWords += words;
    });
    
    const readingTime = Math.ceil(totalWords / 200); // Average reading speed
    console.log(`📖 Estimated reading time: ${readingTime} minutes`);
};

calculateReadingTime();

// ============================================
// PERFORMANCE IMPROVEMENTS
// ============================================

// Lazy load images when they come into view
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

// Preload critical resources
const preloadCriticalImages = () => {
    const profileImage = document.querySelector('.hero-image img');
    if (profileImage) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = profileImage.src;
        document.head.appendChild(link);
    }
};

preloadCriticalImages();

console.log('✨ Micro-interactions, typography, and mobile improvements loaded!');
