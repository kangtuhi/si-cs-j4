// =========================================================
// HALAMAN PANDUAN
// Mengatur filter kategori, pencarian, daftar panduan,
// penghitung hasil, dan pembukaan modal panduan.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Menyimpan kategori yang sedang dipilih pengguna.
  let category = "";

  // Mengambil elemen-elemen utama yang digunakan halaman panduan.
  const searchInput = document.getElementById("guideSearch");
  const filters = document.getElementById("guideFilters");
  const guidesContainer = document.getElementById("guidesContainer");
  const emptyGuides = document.getElementById("emptyGuides");
  const guideCount = document.getElementById("guideCount");
  const clearButton = document.getElementById("clearGuideSearch");
  const searchBox = document.querySelector(".search-box");

  // Mengambil kategori unik dari seluruh data panduan.
  const cats = [...new Set(guidesData.map((x) => x.category))];

  // Membuat tombol filter berdasarkan kategori yang tersedia.
  filters.innerHTML = ["Semua", ...cats]
    .map(
      (c) => `
        <button
          type="button"
          class="filter-chip ${c === "Semua" ? "active" : ""}"
          data-c="${c === "Semua" ? "" : c}"
        >
          ${c}
        </button>
      `,
    )
    .join("");

  // Merender daftar panduan berdasarkan pencarian dan kategori aktif.
  function render() {
    const list = filterItems(guidesData, searchInput.value, category);

    // Membuat card untuk setiap panduan yang memenuhi filter.
    guidesContainer.innerHTML = list
      .map(
        (g) => `
          <div class="col-md-6 col-lg-4">
            <div class="guide-card card">
              <div class="card-body">

                <div class="guide-icon">
                  <i class="bi ${g.icon}"></i>
                </div>

                <span class="badge text-bg-primary mt-3">
                  ${g.category}
                </span>

                <h5 class="mt-3">${g.title}</h5>

                <p class="text-secondary">
                  ${g.description}
                </p>

                <div class="guide-meta">
                  <span>${g.level}</span>
                  <span>${g.duration}</span>
                </div>

                <button
                  class="btn btn-sm btn-outline-primary mt-3"
                  data-id="${g.id}"
                >
                  Lihat Panduan
                </button>

              </div>
            </div>
          </div>
        `,
      )
      .join("");

    // Menampilkan pesan kosong jika tidak ada panduan yang ditemukan.
    emptyGuides.classList.toggle("d-none", !!list.length);

    // Memperbarui jumlah panduan sesuai hasil filter saat ini.
    guideCount.textContent = `${list.length} Panduan`;

    // Menghubungkan tombol setiap card dengan modal detail panduan.
    document.querySelectorAll("[data-id]").forEach((b) => {
      b.onclick = () => {
        openGuideModal(guidesData.find((g) => g.id == b.dataset.id));
      };
    });
  }

  // Menangani pemilihan kategori melalui tombol filter.
  filters.onclick = (e) => {
    const button = e.target.closest(".filter-chip");

    if (!button) return;

    // Menyimpan kategori yang dipilih.
    category = button.dataset.c;

    // Menghapus status aktif dari seluruh tombol filter.
    document
      .querySelectorAll(".filter-chip")
      .forEach((b) => b.classList.remove("active"));

    // Menandai tombol filter yang sedang dipilih.
    button.classList.add("active");

    // Memuat ulang daftar sesuai kategori baru.
    render();
  };

  // Memperbarui daftar secara langsung ketika pengguna mengetik pencarian.
  searchInput.addEventListener("input", () => {
    searchBox.classList.toggle("has-value", searchInput.value.trim() !== "");

    render();
  });

  // Menghapus kata pencarian dan mengembalikan fokus ke input.
  clearButton.addEventListener("click", () => {
    searchInput.value = "";

    searchBox.classList.remove("has-value");

    searchInput.focus();

    render();
  });

  // Merender daftar awal ketika halaman selesai dimuat.
  render();
});
