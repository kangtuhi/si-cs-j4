// =========================================================
// PENGELOLA TEMA LIGHT / DARK MODE
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("cleanpro-theme");
  if (saved === "dark") document.body.classList.add("dark-mode");

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("cleanpro-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  };

  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
  document.getElementById("loginTheme")?.addEventListener("click", toggleTheme);
});
