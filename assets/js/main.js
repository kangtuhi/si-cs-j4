document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("currentYear");
  if (y) y.textContent = new Date().getFullYear();
  const top = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (top) top.classList.toggle("show", scrollY > 400);
  });
  top?.addEventListener("click", () =>
    scrollTo({ top: 0, behavior: "smooth" }),
  );
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("contactAlert").classList.remove("d-none");
    form.reset();
  });
});
