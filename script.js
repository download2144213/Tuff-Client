// Simple fade‑in animation on scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < triggerPoint) sec.classList.add('visible');
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// =====================
// Smooth scroll for hero button
// =====================
const scrollBtn = document.querySelector('.hero .btn');

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault(); // zapobiega natychmiastowemu skokowi
    const target = document.querySelector('#download');
    target.scrollIntoView({ behavior: 'smooth' });
});
