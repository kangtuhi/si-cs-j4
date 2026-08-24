// SI-CS J4 — DEMO AUTHENTICATION
const SICS_AUTH_KEY = "sicsJ4DemoSession";
const SICS_USER_KEY = "sicsJ4DemoUser";
const SICS_AUTH_TIME_KEY = "sicsJ4DemoSessionAt";
const SICS_AUTH_TIMEOUT = 60000;
const SICS_DEMO_CREDENTIALS = { username: "admin", password: "sicsj4" };

function clearAuthSession() {
  sessionStorage.removeItem(SICS_AUTH_KEY);
  sessionStorage.removeItem(SICS_USER_KEY);
  sessionStorage.removeItem(SICS_AUTH_TIME_KEY);
}

function isAuthenticated() {
  if (sessionStorage.getItem(SICS_AUTH_KEY) !== "authenticated") return false;
  const started = Number(sessionStorage.getItem(SICS_AUTH_TIME_KEY) || 0);
  if (!started || Date.now() - started >= SICS_AUTH_TIMEOUT) {
    clearAuthSession();
    return false;
  }
  return true;
}

function getCurrentUser() {
  try { return JSON.parse(sessionStorage.getItem(SICS_USER_KEY) || "null"); }
  catch { return null; }
}

function loginDemo(username, password) {
  const valid = username.trim().toLowerCase() === SICS_DEMO_CREDENTIALS.username && password === SICS_DEMO_CREDENTIALS.password;
  if (!valid) return { success: false, message: "Username atau password belum sesuai. Silakan coba lagi." };
  const user = { username: "admin", name: "Administrator", role: "Administrator", loginAt: new Date().toISOString() };
  clearAuthSession();
  sessionStorage.setItem(SICS_AUTH_KEY, "authenticated");
  sessionStorage.setItem(SICS_USER_KEY, JSON.stringify(user));
  sessionStorage.setItem(SICS_AUTH_TIME_KEY, String(Date.now()));
  return { success: true, user };
}

function logoutDemo() {
  clearAuthSession();
  window.location.replace("login.html?logout=1");
}

function protectPage() {
  if (location.pathname.endsWith("/login.html")) return true;
  if (!isAuthenticated()) {
    const current = location.pathname.split("/").pop();
    const target = current && current !== "index.html" ? current : "";
    window.location.replace(`login.html?redirect=${encodeURIComponent(target)}`);
    return false;
  }
  return true;
}

function startAuthExpiryWatcher() {
  if (window.__sicsAuthWatcherStarted || !isAuthenticated()) return;
  window.__sicsAuthWatcherStarted = true;
  let hiddenSince = null;
  const check = () => {
    if (!isAuthenticated()) {
      if (!location.pathname.endsWith("/login.html")) window.location.replace("login.html?expired=1");
      return;
    }
    const started = Number(sessionStorage.getItem(SICS_AUTH_TIME_KEY) || 0);
    window.setTimeout(check, Math.max(500, SICS_AUTH_TIMEOUT - (Date.now() - started) + 50));
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") { hiddenSince = Date.now(); return; }
    if (hiddenSince && Date.now() - hiddenSince >= SICS_AUTH_TIMEOUT) {
      clearAuthSession();
      window.location.replace("login.html?expired=1");
      return;
    }
    check();
  });
  check();
}

document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname.endsWith("/login.html")) {
    if (isAuthenticated()) startAuthExpiryWatcher();
  } else {
    protectPage();
    if (isAuthenticated()) startAuthExpiryWatcher();
  }
});
