const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const progress = document.getElementById("progress");

// Mobile menu
if (menu && navLinks) {
  menu.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll progress
if (progress) {
  window.addEventListener("scroll", () => {
    const height =
      document.documentElement.scrollHeight - window.innerHeight;

    progress.style.width = `${
      height ? (window.scrollY / height) * 100 : 0
    }%`;
  });
}

// Reveal animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
