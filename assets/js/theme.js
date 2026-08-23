// =========================================================
// PENGELOLA TEMA LIGHT / DARK MODE
// Menyimpan pilihan tema pengguna agar tetap konsisten
// saat berpindah halaman.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Mengambil pilihan tema yang sebelumnya disimpan di browser.
  const saved = localStorage.getItem("cleanpro-theme");

  // Mengaktifkan dark mode jika pengguna sebelumnya memilih tema gelap.
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Menangani klik tombol untuk berpindah antara light dan dark mode.
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Menyimpan tema aktif agar pilihan pengguna tetap diingat.
    localStorage.setItem(
      "cleanpro-theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
});
