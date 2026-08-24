// =========================================================
// SI-CS J4 — DEMO AUTHENTICATION
// Portfolio/demo only. Bukan authentication production.
// =========================================================
const SICS_AUTH_KEY = "sicsJ4DemoSession";
const SICS_USER_KEY = "sicsJ4DemoUser";
const SICS_DEMO_CREDENTIALS = { username: "admin", password: "sicsj4" };

function isAuthenticated() {
  return sessionStorage.getItem(SICS_AUTH_KEY) === "authenticated" || localStorage.getItem(SICS_AUTH_KEY) === "authenticated";
}

function getCurrentUser() {
  try {
    return JSON.parse(sessionStorage.getItem(SICS_USER_KEY) || localStorage.getItem(SICS_USER_KEY) || "null");
  } catch { return null; }
}

function loginDemo(username, password, remember = false) {
  const valid = username.trim().toLowerCase() === SICS_DEMO_CREDENTIALS.username && password === SICS_DEMO_CREDENTIALS.password;
  if (!valid) return { success: false, message: "Username atau password belum sesuai. Silakan coba lagi." };
  const user = { username: "admin", name: "Administrator", role: "Administrator", loginAt: new Date().toISOString() };
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem(SICS_AUTH_KEY, "authenticated");
  storage.setItem(SICS_USER_KEY, JSON.stringify(user));
  if (remember) {
    sessionStorage.removeItem(SICS_AUTH_KEY);
    sessionStorage.removeItem(SICS_USER_KEY);
  } else {
    localStorage.removeItem(SICS_AUTH_KEY);
    localStorage.removeItem(SICS_USER_KEY);
  }
  return { success: true, user };
}

function logoutDemo() {
  sessionStorage.removeItem(SICS_AUTH_KEY);
  sessionStorage.removeItem(SICS_USER_KEY);
  localStorage.removeItem(SICS_AUTH_KEY);
  localStorage.removeItem(SICS_USER_KEY);
  window.location.href = "login.html?logout=1";
}

function protectPage() {
  if (!isAuthenticated()) {
    const target = encodeURIComponent(window.location.pathname.split("/").pop() || "dashboard.html");
    window.location.replace(`login.html?redirect=${target}`);
  }
}
