const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const progress = document.getElementById("progress");
const toast = document.getElementById("toast");

menu.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));

window.addEventListener("scroll", () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height ? (window.scrollY / height) * 100 : 0}%`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".placeholder-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2300);
  });
});
