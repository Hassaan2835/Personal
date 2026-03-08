// Navbar Scrolled State
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Text Effect
const typingText = document.querySelector('.typing-text');
const words = ['Web Developer', 'UI/UX Designer', 'Freelancer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    if(!typingText) return;
    const currentWord = words[wordIndex];
    let typed;

    if (isDeleting) {
        charIndex--;
        typed = currentWord.substring(0, charIndex);
    } else {
        charIndex++;
        typed = currentWord.substring(0, charIndex);
    }

    typingText.textContent = typed;

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(typeEffect, typeSpeed);
};

// Start typing effect on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load to reveal above fold
revealOnScroll();

// Pricing Tabs
const tabs = document.querySelectorAll('.pricing-tab');
const cards = document.querySelectorAll('.pricing-card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and cards
        tabs.forEach(t => t.classList.remove('active'));
        cards.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Add active class to corresponding card
        const target = tab.getAttribute('data-target');
        const targetElement = document.getElementById(target);
        if(targetElement) {
            targetElement.classList.add('active');
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Simple toggle for mobile view, could be expanded with proper CSS class
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--bg-card)';
            navLinks.style.backdropFilter = 'blur(10px)';
            navLinks.style.padding = '20px';
        }
    });
}
