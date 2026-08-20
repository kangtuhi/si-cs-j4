const currentPage = location.pathname.split("/").pop() || "index.html";
const navItems = [
  ["index.html", "Beranda"],
  ["panduan.html", "Panduan"],
  ["video.html", "Video"],
  ["informasi.html", "Informasi"],
  ["alat-bahan.html", "Alat & Bahan"],
  ["jadwal.html", "Jadwal"],
  ["petugas.html", "Petugas"],
  ["dashboard.html", "Dashboard"],
  ["kontakdev.html", "Kontak"],
];
function mountComponents() {
  const nav = document.getElementById("navbarMount");
  if (nav)
    nav.innerHTML = `<div class="navbar-wrap"><nav class="navbar navbar-expand-lg custom-navbar px-3 py-2"><a class="navbar-brand" href="index.html"><span class="brand-icon"><i class="bi bi-stars"></i></span>SI-CS J4</a><button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"><i class="bi bi-list"></i></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav mx-auto">${navItems.map(([url, label]) => `<li class="nav-item"><a class="nav-link ${currentPage === url ? "active" : ""}" href="${url}">${label}</a></li>`).join("")}</ul><button class="theme-btn" id="themeToggle" title="Ubah tema"><i class="bi bi-moon-stars"></i></button></div></nav></div>`;
  const footer = document.getElementById("footerMount");
  if (footer)
    footer.innerHTML = `<footer class="site-footer"><div class="container"><div class="row g-4"><div class="col-md-6"><h4 class="fw-bold">SI-CS J4</h4><p>Sistem Informasi Cleaning Services untuk panduan, informasi, video, jadwal, dan pengelolaan konten.</p></div><div class="col-md-3"><h6>Menu</h6><p><a href="panduan.html">Panduan</a></p><p><a href="video.html">Video</a></p></div><div class="col-md-3"><h6>Informasi</h6><p><a href="informasi.html">SOP & K3</a></p><p><a href="kontakdev.html">Kontak</a></p></div></div><hr><p class="mb-0 small">© <span id="currentYear"></span> SI-CS J4. Built with ❤️ By <a href="https://instagram.com/tubagusmuhammadtuhi" class="text-info" target="_blank">Tubagus Muhammad Tuhi</a>.</p></div></footer>`;
}
document.addEventListener("DOMContentLoaded", mountComponents);
