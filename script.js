const toggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const progress = document.getElementById('scrollProgress');

if (toggle) {
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    toggle.textContent = navMenu.classList.contains('show') ? '×' : '☰';
  });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    if (toggle) toggle.textContent = '☰';
  });
});

window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = height > 0 ? (window.scrollY / height) * 100 : 0;
  progress.style.width = scrolled + '%';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
