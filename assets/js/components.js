// =========================================================
// KOMPONEN GLOBAL SI-CS J4
// Mengatur navbar, footer, favicon, dan stylesheet audit.
// =========================================================

// Menentukan nama halaman yang sedang dibuka untuk menu aktif.
const currentPage = location.pathname.split("/").pop() || "index.html";

// Daftar menu utama yang ditampilkan pada navbar.
const navItems = [
  ["index.html", "Beranda"],
  ["panduan.html", "Panduan"],
  ["video.html", "Video"],
  ["informasi.html", "Informasi"],
  ["alat-bahan.html", "Alat & Bahan"],
  ["jadwal.html", "Jadwal"],
  ["petugas.html", "Petugas"],
  ["dashboard.html", "Dashboard"],
  ["kontak.html", "Kontak"]
];

// Memuat stylesheet footer hanya satu kali.
function loadFooterStyles() {
  if (document.querySelector("link[data-footer-style]")) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "assets/css/footer.css";
  link.dataset.footerStyle = "true";
  document.head.appendChild(link);
}

// Memuat stylesheet audit tema light/dark hanya satu kali.
function loadThemeAuditStyles() {
  if (document.querySelector("link[data-theme-audit-style]")) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "assets/css/final-theme-audit.css";
  link.dataset.themeAuditStyle = "true";
  document.head.appendChild(link);
}

// Menambahkan logo SICS sebagai favicon pada tab browser.
function loadBrandIcon() {
  if (document.querySelector("link[data-brand-icon]")) return;
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/jpeg";
  link.href = "assets/img/logo-sics-j4.jpg";
  link.dataset.brandIcon = "true";
  document.head.appendChild(link);
}

// Memasang navbar dan footer pada elemen mount di setiap halaman.
function mountComponents() {
  loadFooterStyles();
  loadThemeAuditStyles();
  loadBrandIcon();

  // Memasang navbar global jika halaman memiliki navbarMount.
  const nav = document.getElementById("navbarMount");
  if (nav) {
    nav.innerHTML = `<div class="navbar-wrap"><nav class="navbar navbar-expand-lg custom-navbar px-3 py-2"><a class="navbar-brand" href="index.html"><span class="brand-logo"><img src="assets/img/logo-sics-j4.jpg" alt="Logo SI-CS J4"></span><span>SI-CS J4</span></a><button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"><i class="bi bi-list"></i></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav mx-auto">${navItems.map(([url, label]) => `<li class="nav-item"><a class="nav-link ${currentPage === url ? "active" : ""}" href="${url}">${label}</a></li>`).join("")}</ul><button class="theme-btn" id="themeToggle" title="Ubah tema"><i class="bi bi-moon-stars"></i></button></div></nav></div>`;
  }

  // Memasang footer global jika halaman memiliki footerMount.
  const footer = document.getElementById("footerMount");
  if (footer) {
    footer.innerHTML = `<footer class="site-footer"><div class="container"><div class="row g-4"><div class="col-md-6"><div class="footer-brand"><img src="assets/img/logo-sics-j4.jpg" alt="Logo SI-CS J4"><div><h4 class="fw-bold">SI-CS J4</h4><p class="footer-brand-text">Sistem Informasi Cleaning Services untuk panduan, informasi, video, jadwal, dan pengelolaan konten.</p></div></div><div class="footer-socials"><a class="footer-social" href="https://instagram.com/tubagusmuhammadtuhi" target="_blank" rel="noopener" aria-label="Instagram SI-CS J4"><i class="bi bi-instagram"></i></a><a class="footer-social" href="kontak.html" aria-label="Kontak SI-CS J4"><i class="bi bi-envelope"></i></a></div></div><div class="col-6 col-md-3"><h6>Menu</h6><div class="footer-links"><p><a href="panduan.html"><i class="bi bi-chevron-right"></i>Panduan</a></p><p><a href="video.html"><i class="bi bi-play"></i>Video</a></p><p><a href="alat-bahan.html"><i class="bi bi-chevron-right"></i>Alat & Bahan</a></p><p><a href="jadwal.html"><i class="bi bi-chevron-right"></i>Jadwal</a></p></div></div><div class="col-6 col-md-3"><h6>Informasi</h6><div class="footer-links"><p><a href="informasi.html"><i class="bi bi-chevron-right"></i>SOP & K3</a></p><p><a href="petugas.html"><i class="bi bi-chevron-right"></i>Petugas</a></p><p><a href="kontak.html"><i class="bi bi-chevron-right"></i>Kontak</a></p></div></div></div><hr><div class="footer-bottom"><p class="small footer-credit">© <span id="currentYear"></span> SI-CS J4. Built with ❤️ By <a href="https://instagram.com/tubagusmuhammadtuhi" target="_blank" rel="noopener">Tubagus Muhammad Tuhi</a>.</p><a class="footer-top" href="#" aria-label="Kembali ke atas">Kembali ke atas <i class="bi bi-arrow-up"></i></a></div></div></footer>`;
  }

  // Mengisi tahun copyright secara otomatis.
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
}

// Menjalankan pemasangan komponen setelah seluruh DOM siap digunakan.
document.addEventListener("DOMContentLoaded", mountComponents);
