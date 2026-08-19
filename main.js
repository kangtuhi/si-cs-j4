// 1. Tampilkan data pengumuman ke HTML
document.getElementById("ika-badge").innerText = webContent.pengumuman.badge;
document.getElementById("ika-title").innerText = webContent.pengumuman.judul;
document.getElementById("ika-desc").innerText = webContent.pengumuman.deskripsi;

// 2. Tampilkan daftar video secara dinamis menggunakan perulangan (looping)
const videoContainer = document.getElementById("video-list");
videoContainer.innerHTML = ""; // Bersihkan kontainer awal

webContent.videos.forEach((video) => {
  const videoHTML = `
    <div class="col-md-6">
        <div class="card h-100 bg-dark text-white border-secondary shadow-sm">
            <div class="ratio ratio-16x9">
                <iframe src="${video.youtubeUrl}" title="${video.title}" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <h5 class="card-title fw-bold text-info">${video.title}</h5>
                <p class="card-text text-muted small"><span class="badge bg-secondary me-1">${video.docNumber}</span> ${video.description}</p>
            </div>
        </div>
    </div>
  `;
  videoContainer.innerHTML += videoHTML;
});

// 3. Tampilkan Data Kontak Admin & Developer
document.getElementById("admin-name").innerText = webContent.kontak.admin.nama;
document.getElementById("admin-wa-btn").href =
  `https://wa.me{webContent.kontak.admin.whatsapp}?text=${encodeURIComponent(webContent.kontak.admin.pesan)}`;

document.getElementById("dev-name").innerText =
  webContent.kontak.developer.nama;
document.getElementById("dev-email-btn").href =
  `mailto:${webContent.kontak.developer.email}?subject=${encodeURIComponent(webContent.kontak.developer.subjek)}`;
