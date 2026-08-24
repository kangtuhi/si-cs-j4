// =========================================================
// SI-CS J4 — KOMPONEN GLOBAL
// Navbar + footer + favicon + auth UI + route protection
// =========================================================
const currentPage = location.pathname.split("/").pop() || "index.html";
const AUTH_KEY = "sicsJ4DemoSession";
const USER_KEY = "sicsJ4DemoUser";
const AWAY_TIMEOUT = 60000;

function isAuthenticated() {
  return sessionStorage.getItem(AUTH_KEY) === "authenticated";
}
function getCurrentUser() {
  try { return JSON.parse(sessionStorage.getItem(USER_KEY) || "null"); }
  catch { return null; }
}
function clearDemoAuth() {
  sessionStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(USER_KEY);
}
function requireAuth() {
  if (!isAuthenticated()) {
    const target = currentPage && currentPage !== "index.html" ? currentPage : "";
    window.location.replace(`login.html?redirect=${encodeURIComponent(target)}`);
    return false;
  }
  return true;
}
function watchAwaySession() {
  if (window.__sicsAwayWatcher) return;
  window.__sicsAwayWatcher = true;
  let awayTimer = null;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      clearTimeout(awayTimer);
      awayTimer = window.setTimeout(() => {
        clearDemoAuth();
        window.location.replace("login.html?expired=1");
      }, AWAY_TIMEOUT);
    } else {
      clearTimeout(awayTimer);
      awayTimer = null;
      if (!isAuthenticated()) window.location.replace("login.html?expired=1");
    }
  });
}

if (!requireAuth()) {
  throw new Error("SICS_AUTH_REQUIRED");
}
watchAwaySession();

const navItems = [
  ["/", "Beranda", "index.html"], ["panduan.html", "Panduan", "panduan.html"],
  ["video.html", "Video", "video.html"], ["informasi.html", "Informasi", "informasi.html"],
  ["alat-bahan.html", "Alat & Bahan", "alat-bahan.html"], ["jadwal.html", "Jadwal", "jadwal.html"],
  ["petugas.html", "Petugas", "petugas.html"], ["dashboard.html", "Dashboard", "dashboard.html"],
  ["kontak.html", "Kontak", "kontak.html"]
];

function logoutDemo() {
  clearDemoAuth();
  location.href = "login.html?logout=1";
}

function addStylesheet(href, marker) {
  if (document.querySelector(`link[data-sics-style="${marker}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet"; link.href = href; link.dataset.sicsStyle = marker;
  document.head.appendChild(link);
}

function mountComponents() {
  addStylesheet("assets/css/footer.css", "footer");
  addStylesheet("assets/css/final-theme-audit.css", "theme-audit");
  addStylesheet("assets/css/auth-navbar.css", "auth-navbar");

  if (!document.querySelector("link[data-sics-favicon]")) {
    const favicon = document.createElement("link");
    favicon.rel = "icon"; favicon.type = "image/png";
    favicon.href = "assets/img/logo-sics-j4-transparent.png";
    favicon.dataset.sicsFavicon = "true";
    document.head.appendChild(favicon);
  }

  const nav = document.getElementById("navbarMount");
  if (nav) {
    const loggedIn = isAuthenticated();
    const user = getCurrentUser();
    const authUi = loggedIn
      ? `<li class="nav-item auth-nav-item"><button class="nav-link auth-user-link" type="button" aria-expanded="false" aria-controls="authDropdown"><span class="auth-avatar"><i class="bi bi-person-fill"></i></span><span>${user?.name || "Administrator"}</span><i class="bi bi-chevron-down auth-chevron" aria-hidden="true"></i></button><ul id="authDropdown" class="auth-dropdown" aria-hidden="true"><li><div class="auth-dropdown-head"><strong>${user?.name || "Administrator"}</strong><small>${user?.role || "Administrator"}</small></div></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="dashboard.html"><i class="bi bi-grid-1x2"></i> Dashboard</a></li><li><button class="dropdown-item auth-logout" type="button"><i class="bi bi-box-arrow-right"></i> Keluar</button></li></ul></li>`
      : `<li class="nav-item auth-nav-item"><a class="nav-link login-nav-link" href="login.html"><i class="bi bi-person-circle"></i> Login</a></li>`;

    nav.innerHTML = `<div class="navbar-wrap"><nav class="navbar navbar-expand-lg custom-navbar px-3 py-2"><a class="navbar-brand" href="/"><span class="brand-logo"><img src="assets/img/logo-sics-j4-transparent.png" alt="Logo SI-CS J4"></span><span>SI-CS J4</span></a><button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Buka menu"><i class="bi bi-list"></i></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav mx-auto">${navItems.map(([url,label,page]) => `<li class="nav-item"><a class="nav-link ${currentPage === page ? "active" : ""}" href="${url}">${label}</a></li>`).join("")}${authUi}</ul><button class="theme-btn" id="themeToggle" title="Ubah tema" type="button"><i class="bi bi-moon-stars"></i></button></div></nav></div>`;

    const authItem = nav.querySelector(".auth-nav-item");
    const authToggle = nav.querySelector(".auth-user-link");
    const authDropdown = nav.querySelector(".auth-dropdown");
    authToggle?.addEventListener("click", (event) => {
      event.preventDefault(); event.stopPropagation();
      const open = authItem.classList.toggle("auth-open");
      authToggle.setAttribute("aria-expanded", String(open));
      authDropdown?.setAttribute("aria-hidden", String(!open));
    });
    authDropdown?.addEventListener("click", (event) => event.stopPropagation());
    nav.querySelector(".auth-logout")?.addEventListener("click", logoutDemo);
    document.addEventListener("click", () => {
      if (!authItem?.classList.contains("auth-open")) return;
      authItem.classList.remove("auth-open");
      authToggle?.setAttribute("aria-expanded", "false");
      authDropdown?.setAttribute("aria-hidden", "true");
    });
  }

  const footer = document.getElementById("footerMount");
  if (footer) {
    footer.innerHTML = `<footer class="site-footer"><div class="container"><div class="row g-4"><div class="col-md-6"><div class="footer-brand"><a class="footer-brand-link" href="/" aria-label="Kembali ke Beranda SI-CS J4"><span class="footer-brand-logo"><img src="assets/img/logo-sics-j4-transparent.png" alt="Logo SI-CS J4"></span><span class="footer-brand-title">SI-CS J4</span></a><p class="footer-brand-text">Sistem Informasi Cleaning Services untuk panduan, informasi, video, jadwal, dan pengelolaan konten.</p></div><div class="footer-socials"><a class="footer-social" href="https://instagram.com/tubagusmuhammadtuhi" target="_blank" rel="noopener" aria-label="Instagram SI-CS J4"><i class="bi bi-instagram"></i></a><a class="footer-social" href="kontak.html" aria-label="Kontak SI-CS J4"><i class="bi bi-envelope"></i></a></div></div><div class="col-6 col-md-3"><h6>Menu</h6><div class="footer-links"><p><a href="panduan.html"><i class="bi bi-chevron-right"></i>Panduan</a></p><p><a href="video.html"><i class="bi bi-chevron-right"></i>Video</a></p><p><a href="alat-bahan.html"><i class="bi bi-chevron-right"></i>Alat & Bahan</a></p><p><a href="jadwal.html"><i class="bi bi-chevron-right"></i>Jadwal</a></p></div></div><div class="col-6 col-md-3"><h6>Informasi</h6><div class="footer-links"><p><a href="informasi.html"><i class="bi bi-chevron-right"></i>SOP & K3</a></p><p><a href="petugas.html"><i class="bi bi-chevron-right"></i>Petugas</a></p><p><a href="kontak.html" aria-label="Kontak SI-CS J4"><i class="bi bi-chevron-right"></i>Kontak</a></p></div></div></div><hr><div class="footer-bottom"><p class="small footer-credit">© <span id="currentYear"></span> SI-CS J4. Built with ❤️ By <a href="https://instagram.com/tubagusmuhammadtuhi" target="_blank" rel="noopener">Tubagus Muhammad Tuhi</a>.</p><a class="footer-top" href="#">Kembali ke atas <i class="bi bi-arrow-up"></i></a></div></div></footer>`;
  }
  document.getElementById("currentYear")?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));
}

document.addEventListener("DOMContentLoaded", mountComponents);
