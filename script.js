// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Đóng menu khi click vào link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== SCROLL REVEAL =====
// Tự động thêm hiệu ứng xuất hiện cho các phần tử khi cuộn trang
const revealElements = document.querySelectorAll(
  '.skill-card, .project-card, .about-grid, .contact-links, .about-photo'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Thêm chút delay cho từng phần tử để tạo hiệu ứng "stagger"
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => observer.observe(el));

// ===== ACTIVE NAV LINK =====
// Highlight link nav tương ứng với section đang xem
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < bottom) {
      links.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = '#a88748'; // màu accent khi active
        }
      });
    }
  });
});

// ===== SMOOTH PROJECT PLACEHOLDER =====
// Ẩn placeholder khi ảnh load thành công
document.querySelectorAll('.project-img img').forEach(img => {
  img.addEventListener('load', () => {
    const placeholder = img.nextElementSibling;
    if (placeholder) placeholder.style.display = 'none';
  });
  img.addEventListener('error', () => {
    img.style.display = 'none';
  });
});
