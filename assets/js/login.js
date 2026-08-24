document.addEventListener("DOMContentLoaded", () => {
  if (isAuthenticated()) {
    const redirect = new URLSearchParams(location.search).get("redirect");
    location.replace(redirect || "dashboard.html");
    return;
  }
  const form = document.getElementById("loginForm");
  const username = document.getElementById("loginUsername");
  const password = document.getElementById("loginPassword");
  const remember = document.getElementById("rememberLogin");
  const message = document.getElementById("loginMessage");
  const submit = document.getElementById("loginSubmit");
  const toggle = document.getElementById("togglePassword");

  document.getElementById("loginYear").textContent = new Date().getFullYear();
  toggle.addEventListener("click", () => {
    const hidden = password.type === "password";
    password.type = hidden ? "text" : "password";
    toggle.innerHTML = `<i class="bi bi-eye${hidden ? "-slash" : ""}"></i>`;
  });

  document.getElementById("forgotDemo").addEventListener("click", () => {
    message.className = "login-message info show";
    message.innerHTML = `<i class="bi bi-info-circle"></i> Ini adalah akun demo portfolio. Gunakan kredensial demo yang disediakan developer.`;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.className = "login-message";
    if (!username.value.trim() || !password.value) {
      message.className = "login-message error show";
      message.innerHTML = `<i class="bi bi-exclamation-circle"></i> Username dan password wajib diisi.`;
      return;
    }
    submit.classList.add("loading");
    submit.disabled = true;
    setTimeout(() => {
      const result = loginDemo(username.value, password.value, remember.checked);
      if (result.success) {
        message.className = "login-message success show";
        message.innerHTML = `<i class="bi bi-check-circle-fill"></i> Authentication berhasil. Membuka dashboard...`;
        submit.classList.add("success");
        setTimeout(() => {
          const redirect = new URLSearchParams(location.search).get("redirect");
          location.replace(redirect || "dashboard.html");
        }, 650);
      } else {
        submit.classList.remove("loading");
        submit.disabled = false;
        message.className = "login-message error show";
        message.innerHTML = `<i class="bi bi-shield-exclamation"></i> ${result.message}`;
        password.select();
      }
    }, 850);
  });

  const logoutMessage = new URLSearchParams(location.search).get("logout");
  if (logoutMessage) {
    message.className = "login-message success show";
    message.innerHTML = `<i class="bi bi-check-circle-fill"></i> Anda telah berhasil keluar dari sistem.`;
  }
});
