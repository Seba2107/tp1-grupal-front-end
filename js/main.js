// === TOAST DE BIENVENIDA ===
const toast = document.getElementById('toast');

document.getElementById('toast-close').addEventListener('click', () => {
  toast.classList.remove('visible');
});

window.addEventListener('load', () => {
  setTimeout(() => toast.classList.add('visible'), 600);
  setTimeout(() => toast.classList.remove('visible'), 5500);
});

// === FADE-IN DE CARDS AL HACER SCROLL ===
const cards = document.querySelectorAll('.char-card');

cards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transition += `, opacity 0.6s ease ${index * 0.15}s`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// === MENÚ MÓVIL ===
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});