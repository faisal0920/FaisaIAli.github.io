// 1. HAMBURGER MENU TOGGLE
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav ul");
const links = document.querySelectorAll("nav ul a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

// 2. INTERSECTION OBSERVER (UBAH WARNA NAVBAR PER SECTION)
const navContainer = document.getElementById("nav-container");
const sections = document.querySelectorAll("section");

const observerOptions = {
  root: null,
  rootMargin: "-5% 0px -90% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const theme = entry.target.getAttribute("data-theme");

      navContainer.classList.remove("nav-light", "nav-dark");

      if (theme) {
        navContainer.classList.add(`nav-${theme}`);
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
