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
    
    // Update scroll progress indicator
    updateScrollProgress();
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

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

// Certificate Image Modal (Click to Enlarge)
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for certificate images when they're added
    document.querySelectorAll('.certificate-image').forEach(img => {
        img.addEventListener('click', function() {
            // Create modal overlay
            const modal = document.createElement('div');
            modal.className = 'cert-modal';
            
            // Create enlarged image
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.alt = this.alt;
            
            modal.appendChild(enlargedImg);
            document.body.appendChild(modal);
            
            // Close on click
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });
});

// Project Image Modal (Click to Enlarge)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-image').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const modal = document.createElement('div');
            modal.className = 'cert-modal';
            
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.alt = this.alt;
            
            modal.appendChild(enlargedImg);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });
});

// ============================================
// EASTER EGG: Konami Code
// ============================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonamiCode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonamiCode() {
    // Add rainbow effect
    document.body.classList.add('konami-active');
    
    // Show message
    const message = document.createElement('div');
    message.className = 'konami-message';
    message.textContent = '🎉 You found the secret! 🎉';
    document.body.appendChild(message);
    
    // Remove after 3 seconds
    setTimeout(() => {
        document.body.removeChild(message);
        document.body.classList.remove('konami-active');
    }, 3000);
    
    console.log('🎮 Konami Code Activated! You are a true gamer! 🎮');
}

// ============================================
// Console Easter Egg Message
// ============================================
console.log('%c👋 Hey there, curious developer!', 'color: #64FFDA; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio! I see you\'re checking out the console 🔍', 'color: #FFB86C; font-size: 14px;');
console.log('%c💡 Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #64FFDA; font-size: 12px;');
console.log('%c📧 Want to connect? Email me at flores.clarencekyle.marcrispin@gmail.com', 'color: #8892B0; font-size: 12px;');
console.log('%c⭐ Built with HTML, CSS, and vanilla JavaScript - no frameworks!', 'color: #E6F1FF; font-size: 11px;');

// ============================================
// Skill Bar Animation on Scroll
// ============================================
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ============================================
// Typing Effect for Hero Subtitle (Optional Enhancement)
// ============================================
// Uncomment this section if you want a typing effect on the subtitle
/*
const subtitle = document.querySelector('.subtitle');
const subtitleText = subtitle.textContent;
subtitle.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < subtitleText.length) {
        subtitle.textContent += subtitleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});
*/

// ============================================
// Analytics Event Tracking (Google Analytics Ready)
// ============================================
// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const btnText = this.textContent.trim();
        console.log(`Button clicked: ${btnText}`);
        
        // If you have Google Analytics, uncomment below:
        // gtag('event', 'button_click', {
        //     'event_category': 'engagement',
        //     'event_label': btnText
        // });
    });
});

// Track project link clicks
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const linkText = this.textContent.trim();
        console.log(`Project link clicked: ${linkText}`);
        
        // If you have Google Analytics, uncomment below:
        // gtag('event', 'project_link_click', {
        //     'event_category': 'projects',
        //     'event_label': linkText
        // });
    });
});

// ============================================
// Performance: Lazy Load Images (When Added)
// ============================================
// This will automatically lazy load images for better performance
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// Initialize Everything on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Portfolio loaded successfully!');
    
    // Add any initialization code here
    updateScrollProgress();
    
    // Animate skill bars when they come into view
    const skillSection = document.querySelector('#skills');
    if (skillSection) {
        const skillSectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.skill-progress').forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                    skillSectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        skillSectionObserver.observe(skillSection);
    }
});