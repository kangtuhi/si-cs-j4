// =========================================================
// LOGIKA HALAMAN BERANDA / DASHBOARD UTAMA
// Mengisi statistik, layanan, panduan terbaru, dan video terbaru.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Mengambil container untuk daftar layanan utama.
  const serviceContainer = document.getElementById("serviceContainer");

  // Menampilkan seluruh layanan dari data layanan.
  serviceContainer.innerHTML = servicesData
    .map(
      (service) => `
        <div class="col-md-6 col-lg-4 reveal">
          <div class="feature-card card">
            <div class="card-body">
              <div class="card-icon"><i class="bi ${service.icon}"></i></div>
              <h4 class="mt-4">${service.title}</h4>
              <p class="text-secondary mb-0">${service.description}</p>
            </div>
          </div>
        </div>`
    )
    .join("");

  // Mengambil container untuk tiga panduan terbaru.
  const latestGuides = document.getElementById("latestGuides");

  // Menampilkan maksimal tiga panduan pertama dari sumber data.
  latestGuides.innerHTML = guidesData
    .slice(0, 3)
    .map(
      (guide) => `
        <div class="col-md-6 col-lg-4">
          <div class="guide-card card">
            <div class="card-body">
              <div class="guide-icon"><i class="bi ${guide.icon}"></i></div>
              <span class="badge text-bg-primary mt-3">${guide.category}</span>
              <h5 class="mt-3">${guide.title}</h5>
              <p class="text-secondary">${guide.description}</p>
              <div class="guide-meta">
                <span>${guide.level}</span>
                <span>${guide.duration}</span>
              </div>
            </div>
          </div>
        </div>`
    )
    .join("");

  // Mengambil container untuk dua video terbaru.
  const latestVideos = document.getElementById("latestVideos");

  // Menampilkan maksimal dua video dengan iframe YouTube yang ringan.
  latestVideos.innerHTML = videosData
    .slice(0, 2)
    .map(
      (video) => `
        <div class="col-md-6">
          <div class="video-card">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube-nocookie.com/embed/${video.youtubeId}"
                title="${video.title}"
                loading="lazy"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-info">
              <strong>${video.title}</strong>
              <div class="small text-secondary mt-1">${video.category}</div>
            </div>
          </div>
        </div>`
    )
    .join("");

  // Memperbarui jumlah panduan, video, dan layanan pada kartu statistik.
  [
    ["homeGuideCount", guidesData.length],
    ["homeVideoCount", videosData.length],
    ["homeServiceCount", servicesData.length],
  ].forEach(([id, count]) => {
    document.getElementById(id).textContent = count;
  });

  // Menampilkan elemen yang menggunakan animasi reveal setelah konten selesai dirender.
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("visible");
  });
});
