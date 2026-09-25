document.addEventListener("DOMContentLoaded", () => {
  // 1. HAMBURGER MENU TOGGLE
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector("nav ul");
  const links = document.querySelectorAll("nav ul a");

  if (hamburger && navLinks) {
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
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navLinks.classList.add("scrolled");
    } else {
      navLinks.classList.remove("scrolled");
    }
  });

  // 2. NAVBAR SCROLLED & THEME SWITCHER
  const navContainer = document.querySelector(".nav-container");
  const navbarA = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      if (navContainer) navContainer.classList.add("scrolled");
      navbarA.forEach((link) => link.classList.add("scrolled"));
    } else {
      if (navContainer) {
        navContainer.classList.remove("scrolled");
        navContainer.classList.remove("nav-light", "nav-dark");
      }
      navbarA.forEach((link) => link.classList.remove("scrolled"));
    }
  });

  // 3. INTERSECTION OBSERVER
  const observerOptions = {
    root: null,
    rootMargin: "-5% 0px -90% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && window.scrollY > 50) {
        const theme = entry.target.getAttribute("data-theme");

        if (navContainer) {
          navContainer.classList.remove("nav-light", "nav-dark");
          if (theme) {
            navContainer.classList.add(`nav-${theme}`);
          }
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // DEV TOOL DISABLE
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" || e.key === "J" || e.key === "C")) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      alert("Inspeksi elemen dinonaktifkan!");
    }
  });
});
