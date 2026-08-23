# CATATAN DARI DEVELOPER KANG TUHI

## Panduan Admin untuk Mengelola Website SI-CS J4

File ini dibuat sebagai panduan singkat untuk admin/developer berikutnya. Tujuannya agar perubahan konten dapat dilakukan dengan cepat tanpa harus mencari-cari lokasi file.

> **Penting:** Sebelum mengubah file, buat backup atau commit perubahan terlebih dahulu.

---

# 1. IDENTITAS DAN LOGO WEBSITE

### Mengganti logo website
**Lokasi file:**
`assets/img/logo-sics-j4.jpg`

Logo ini digunakan pada:
- Navbar
- Footer
- Favicon / icon pada tab browser

Jika logo diganti, gunakan nama file yang sama agar tidak perlu mengubah kode.

---

# 2. NAVBAR / MENU ATAS

### Mengubah nama menu, link menu, atau urutan menu
**Lokasi file:**
`assets/js/components.js`

Cari bagian:
```js
const navItems = [
  ...
];
```

Di bagian ini admin dapat:
- Mengubah nama menu
- Mengubah link halaman
- Menambah menu baru
- Menghapus menu
- Mengubah urutan menu

### Mengubah tampilan navbar
**Lokasi file:**
`assets/css/navbar.css`

### Mengubah perilaku/animasi navbar
**Lokasi file:**
`assets/js/navbar.js`

---

# 3. FOOTER WEBSITE

### Mengubah nama, deskripsi, link, dan informasi footer
**Lokasi file:**
`assets/js/components.js`

Footer dibuat secara global dari file ini.

### Mengubah tampilan footer
**Lokasi file:**
`assets/css/footer.css`

> Tidak ada file `assets/component/footer.js`. Pada versi website saat ini, komponen footer berada di `assets/js/components.js`.

---

# 4. DATA KONTAK

### Mengubah WhatsApp, email, Instagram, alamat, atau informasi kontak lainnya
**Lokasi utama:**
`assets/js/pages/contactdev.js`

### Mengubah tampilan halaman kontak
**Lokasi file:**
`assets/css/contact.css`

### Halaman HTML kontak
**Lokasi file:**
`kontak.html`

---

# 5. DATA PANDUAN CLEANING

### Menambah, mengubah, atau menghapus panduan
**Lokasi data:**
`assets/js/data/guides-data.js`

File ini berisi data panduan seperti:
- Judul
- Kategori
- Deskripsi
- Icon
- Level kesulitan
- Durasi
- Isi/detail panduan

### Mengatur pencarian, filter, card, dan modal panduan
**Lokasi file:**
`assets/js/pages/guides.js`

### Mengubah tampilan modal panduan
**Lokasi file:**
`assets/css/modal.css`

### Mengubah tampilan card
**Lokasi file:**
`assets/css/cards.css`

### Halaman panduan
**Lokasi file:**
`panduan.html`

---

# 6. DATA VIDEO

### Menambah atau mengubah video
**Lokasi data:**
`assets/js/data/videos-data.js`

Biasanya yang diubah:
- Judul video
- Kategori
- ID YouTube

### Mengatur tampilan/render halaman video
**Lokasi file:**
`assets/js/pages/videos.js`

### Halaman video
**Lokasi file:**
`video.html`

---

# 7. DATA LAYANAN

### Menambah atau mengubah layanan
**Lokasi data:**
`assets/js/data/services-data.js`

Data ini digunakan untuk konten layanan/fitur yang tampil pada website.

### Rendering layanan di halaman utama
**Lokasi file:**
`assets/js/pages/home.js`

---

# 8. DATA ALAT & BAHAN

### Mengatur konten Alat & Bahan
**Lokasi file:**
`assets/js/pages/equipment.js`

### Halaman Alat & Bahan
**Lokasi file:**
`alat-bahan.html`

---

# 9. DATA JADWAL CLEANING

### Mengubah data jadwal
**Lokasi data:**
`assets/js/data/schedule-data.js`

### Mengatur tabel dan rendering jadwal
**Lokasi file:**
`assets/js/pages/schedule.js`

### Halaman jadwal
**Lokasi file:**
`jadwal.html`

---

# 10. DATA PETUGAS

### Mengubah data petugas
**Lokasi data:**
`assets/js/data/staff-data.js`

### Mengatur rendering petugas
**Lokasi file:**
`assets/js/pages/staff.js`

### Halaman petugas
**Lokasi file:**
`petugas.html`

---

# 11. HALAMAN INFORMASI

### Mengatur konten/logic halaman informasi
**Lokasi file:**
`assets/js/pages/information.js`

### Halaman informasi
**Lokasi file:**
`informasi.html`

---

# 12. BERANDA / HOME

### Mengatur konten yang dirender secara dinamis di Beranda
**Lokasi file:**
`assets/js/pages/home.js`

File ini menangani:
- Daftar layanan
- Panduan terbaru
- Video terbaru
- Statistik jumlah data
- Animasi reveal

### Halaman Beranda
**Lokasi file:**
`index.html`

### CSS khusus Dashboard/Beranda yang telah dipoles
**Lokasi file:**
`assets/css/dashboard.css`

---

# 13. DASHBOARD

### Mengatur logic Dashboard
**Lokasi file:**
`assets/js/pages/dashboard.js`

### Halaman Dashboard
**Lokasi file:**
`dashboard.html`

---

# 14. LIGHT MODE DAN DARK MODE

### Mengatur tombol dan penyimpanan pilihan tema
**Lokasi file:**
`assets/js/theme.js`

Pilihan tema disimpan di browser menggunakan `localStorage`.

### CSS dark mode global
**Lokasi file:**
`assets/css/darkmode-global.css`

### CSS dark mode khusus halaman
**Lokasi file:**
`assets/css/darkmode-pages.css`

### Hasil audit akhir light/dark mode
**Lokasi file:**
`assets/css/final-theme-audit.css`

> Jika ingin mengubah warna global, periksa CSS dark mode terlebih dahulu agar tampilan light dan dark tetap konsisten.

---

# 15. ANIMASI

### Animasi saat elemen muncul ketika scroll
**JavaScript:**
`assets/js/animations.js`

**CSS:**
`assets/css/animations.css`

---

# 16. BACK TO TOP

### Mengubah tombol kembali ke atas
**Lokasi file CSS:**
`assets/css/back-to-top.css`

---

# 17. MODAL

### Mengatur fungsi modal
**Lokasi file:**
`assets/js/modal.js`

### Mengatur tampilan modal
**Lokasi file:**
`assets/css/modal.css`

---

# 18. RESPONSIVE / TAMPILAN MOBILE

### Responsive utama
`assets/css/responsive.css`

### Hasil audit responsive akhir
`assets/css/responsive-audit.css`

File-file ini penting jika admin ingin mengubah tampilan mobile atau tablet.

> Setelah mengubah layout desktop, selalu cek tampilan mobile.

---

# 19. CSS GLOBAL

### CSS utama website
`assets/css/style.css`

### Card dan komponen konten
`assets/css/cards.css`

### Navbar
`assets/css/navbar.css`

### Footer
`assets/css/footer.css`

### Contact Form
`assets/css/contact.css`

---

# 20. HALAMAN HTML

Berikut halaman utama website:

- `index.html` → Beranda
- `panduan.html` → Panduan Cleaning
- `video.html` → Video
- `informasi.html` → Informasi
- `alat-bahan.html` → Alat & Bahan
- `jadwal.html` → Jadwal Cleaning
- `petugas.html` → Data Petugas
- `dashboard.html` → Dashboard
- `kontak.html` → Kontak

---

# 21. URUTAN AMAN SAAT MENGUBAH KONTEN

Untuk admin baru, gunakan urutan berikut:

1. Cari dulu data yang ingin diubah di `assets/js/data/`.
2. Jika tidak ada, periksa file di `assets/js/pages/`.
3. Jika hanya ingin mengubah tampilan, periksa `assets/css/`.
4. Jika ingin mengubah struktur halaman, periksa file `.html`.
5. Jangan mengubah `components.js` tanpa memahami bahwa file tersebut memengaruhi navbar/footer secara global.
6. Setelah mengubah kode, cek desktop dan mobile.
7. Cek light mode dan dark mode.
8. Lakukan commit dengan pesan yang jelas.

---

# 22. STRUKTUR SINGKAT WEBSITE

```text
assets/
├── css/          → Semua pengaturan tampilan
├── img/          → Logo dan gambar website
└── js/
    ├── data/     → Data konten website
    ├── pages/    → Logic setiap halaman
    ├── components.js → Navbar dan footer global
    ├── theme.js  → Light/Dark mode
    ├── navbar.js → Perilaku navbar
    ├── modal.js  → Logic modal
    └── animations.js → Animasi reveal

*.html            → Struktur setiap halaman website
```

---

# PESAN DARI DEVELOPER

Website SI-CS J4 dibuat dengan struktur data dan komponen terpisah agar konten dapat dikelola dengan lebih mudah.

**Utamakan mengubah file data terlebih dahulu jika hanya ingin mengganti informasi. Jangan langsung mengubah JavaScript renderer atau CSS jika tidak diperlukan.**

Semoga website ini dapat terus dikembangkan dan bermanfaat. 🚀

**Developer:** Kang Tuhi / Tubagus Muhammad Tuhi
