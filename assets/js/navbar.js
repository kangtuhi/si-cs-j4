document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".custom-navbar");

  if (!navbar) return;

  function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }

  updateNavbar();

  window.addEventListener("scroll", updateNavbar, { passive: true });
});
