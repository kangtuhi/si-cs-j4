# SI-CS J4

> **Sistem Informasi Cleaning Services J4** — website informasi dan pengelolaan konten cleaning services yang menyediakan panduan kerja, video, informasi, alat & bahan, jadwal, data petugas, dashboard, dan kontak.

![Status](https://img.shields.io/badge/status-active-success)
![Platform](https://img.shields.io/badge/platform-static%20website-blue)
![License](https://img.shields.io/badge/license-personal%20project-orange)

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi Lokal](#instalasi-lokal)
- [Menjalankan Website](#menjalankan-website)
- [Panduan Mengelola Konten](#panduan-mengelola-konten)
- [Panduan Deployment](#panduan-deployment)
- [Custom Domain](#custom-domain)
- [Light dan Dark Mode](#light-dan-dark-mode)
- [Responsive Design](#responsive-design)
- [Panduan Kontribusi](#panduan-kontribusi)
- [Catatan untuk Admin Baru](#catatan-untuk-admin-baru)
- [Developer](#developer)

---

## Tentang Proyek

SI-CS J4 adalah website statis untuk mendukung kebutuhan informasi **Cleaning Services J4**. Struktur proyek memisahkan data, logika halaman, komponen global, dan tampilan CSS agar konten dapat dikelola lebih mudah.

Website ini menggunakan komponen global untuk navbar dan footer, data JavaScript untuk konten dinamis, serta sistem **Light/Dark Mode** yang menyimpan pilihan tema pengguna di browser.

## Fitur Utama

- 🏠 Beranda dengan layanan, statistik, panduan terbaru, dan video terbaru
- 📚 Panduan cleaning dengan kategori, pencarian, dan modal detail
- 🎥 Daftar video pembelajaran
- ℹ️ Halaman informasi
- 🧰 Informasi alat dan bahan
- 📅 Jadwal cleaning dalam format tabel responsif
- 👷 Data petugas
- 📊 Dashboard
- 📞 Form kontak dan integrasi WhatsApp
- 🌙 Light Mode dan Dark Mode
- 📱 Tampilan responsif untuk desktop, tablet, dan mobile
- ⬆️ Tombol Back to Top
- ✨ Micro-interaction dan animasi ringan
- 🖼️ Branding logo pada navbar, footer, dan tab browser

## Teknologi

Website ini dibangun menggunakan teknologi sederhana dan mudah dipelihara:

- HTML5
- CSS3
- JavaScript Vanilla
- Bootstrap
- Bootstrap Icons
- YouTube Embed
- GitHub Pages untuk hosting statis

Tidak diperlukan proses build, bundler, atau instalasi dependency JavaScript untuk menjalankan versi website saat ini.

## Struktur Proyek

```text
si-cs-j4/
│
├── assets/
│   ├── css/                  # Seluruh file tampilan dan tema
│   ├── img/                  # Logo dan gambar website
│   └── js/
│       ├── data/             # Data konten utama
│       ├── pages/            # Logic/render setiap halaman
│       ├── animations.js     # Animasi reveal
│       ├── components.js     # Navbar, footer, favicon global
│       ├── modal.js          # Logic modal
│       ├── navbar.js         # Perilaku navbar
│       └── theme.js          # Pengelola light/dark mode
│
├── index.html                # Beranda
├── panduan.html              # Panduan cleaning
├── video.html                # Video
├── informasi.html            # Informasi
├── alat-bahan.html           # Alat & bahan
├── jadwal.html               # Jadwal cleaning
├── petugas.html              # Data petugas
├── dashboard.html            # Dashboard
├── kontak.html               # Kontak
├── CATATAN-DEVELOPER.md      # Panduan detail lokasi file
├── CNAME                     # Konfigurasi custom domain
└── README.md                 # Dokumentasi utama proyek
```

---

## Instalasi Lokal

### 1. Clone repository

```bash
git clone https://github.com/kangtuhi/si-cs-j4.git
```

### 2. Masuk ke folder proyek

```bash
cd si-cs-j4
```

### 3. Buka dengan code editor

Contohnya menggunakan Visual Studio Code:

```bash
code .
```

## Menjalankan Website

Karena ini adalah website statis, tidak ada proses instalasi package.

### Opsi A — Langsung membuka HTML

Buka file berikut di browser:

```text
index.html
```

### Opsi B — Menggunakan Live Server

Untuk pengalaman development yang lebih nyaman:

1. Buka folder proyek di Visual Studio Code.
2. Instal ekstensi **Live Server** jika belum tersedia.
3. Klik kanan pada `index.html`.
4. Pilih **Open with Live Server**.

Disarankan menggunakan server lokal karena beberapa browser memiliki pembatasan tertentu ketika file HTML dibuka langsung dari sistem file.

---

## Panduan Mengelola Konten

### Mengubah kontak

**File utama:**

```text
assets/js/pages/contactdev.js
```

Digunakan untuk mengatur informasi seperti WhatsApp, email, Instagram, dan proses pengiriman pesan.

### Mengubah logo

**Lokasi:**

```text
assets/img/logo-sics-j4.jpg
```

Logo digunakan oleh navbar, footer, dan favicon/tab browser. Jika mengganti file, gunakan nama yang sama atau sesuaikan path pada `assets/js/components.js`.

### Mengubah navbar

**Struktur menu:**

```text
assets/js/components.js
```

**Tampilan:**

```text
assets/css/navbar.css
```

**Perilaku/animasi:**

```text
assets/js/navbar.js
```

### Mengubah footer

**Konten dan struktur:**

```text
assets/js/components.js
```

**Tampilan:**

```text
assets/css/footer.css
```

### Mengubah data panduan

```text
assets/js/data/guides-data.js
```

### Mengubah data video

```text
assets/js/data/videos-data.js
```

### Mengubah data layanan

```text
assets/js/data/services-data.js
```

### Mengubah jadwal cleaning

```text
assets/js/data/schedule-data.js
```

### Mengubah data petugas

```text
assets/js/data/staff-data.js
```

> **Tips:** Jika hanya ingin mengganti informasi, prioritaskan pengecekan folder `assets/js/data/` sebelum mengubah file renderer atau CSS.

Untuk daftar lokasi file yang lebih lengkap, baca **`CATATAN-DEVELOPER.md`**.

---

## Panduan Deployment

### Deployment menggunakan GitHub Pages

Website ini cocok untuk deployment sebagai website statis melalui GitHub Pages.

1. Push seluruh perubahan ke branch `main`.
2. Buka repository di GitHub.
3. Masuk ke **Settings**.
4. Buka menu **Pages**.
5. Pada bagian source, pilih deployment dari branch.
6. Pilih branch `main` dan folder root (`/`).
7. Simpan pengaturan.
8. Tunggu proses deployment selesai.

Setelah deployment aktif, GitHub akan menyediakan alamat website GitHub Pages.

### Update website setelah deployment

Alur kerja sehari-hari:

```bash
git status
git add .
git commit -m "jelaskan perubahan"
git push origin main
```

Setelah push selesai, GitHub Pages akan memperbarui website berdasarkan perubahan terbaru.

### Rekomendasi pesan commit

Gunakan pesan yang jelas, misalnya:

```text
update data jadwal cleaning
perbaiki informasi kontak
ubah data petugas
perbarui panduan pembersihan
polish tampilan mobile
```

Hindari pesan commit yang terlalu umum seperti:

```text
update
fix
coba
```

---

## Custom Domain

Repository memiliki file:

```text
CNAME
```

File tersebut digunakan untuk konfigurasi domain khusus pada GitHub Pages.

Jika domain diganti:

1. Perbarui isi file `CNAME`.
2. Atur DNS domain sesuai instruksi GitHub Pages.
3. Pastikan konfigurasi custom domain pada Settings → Pages sudah sesuai.
4. Tunggu propagasi DNS jika diperlukan.

> Jangan menghapus file `CNAME` tanpa memastikan konfigurasi domain sudah tidak digunakan.

---

## Light dan Dark Mode

Pengelola tema utama berada di:

```text
assets/js/theme.js
```

CSS terkait tema:

```text
assets/css/darkmode-global.css
assets/css/darkmode-pages.css
assets/css/final-theme-audit.css
```

Pilihan tema pengguna disimpan menggunakan `localStorage`.

Saat mengubah warna website, selalu cek:

- ☀️ Light Mode
- 🌙 Dark Mode
- 🖥️ Desktop
- 📱 Mobile

---

## Responsive Design

File penting untuk tampilan responsif:

```text
assets/css/responsive.css
assets/css/responsive-audit.css
```

Sebelum melakukan perubahan layout besar, cek minimal beberapa ukuran layar berikut:

- Desktop
- Laptop/tablet horizontal
- Tablet
- Mobile

Jangan hanya mengecek tampilan desktop.

---

## Panduan Kontribusi

Jika website dikembangkan oleh admin/developer baru, gunakan alur berikut:

1. Pull perubahan terbaru dari `main`.
2. Buat backup atau branch kerja jika perubahan cukup besar.
3. Ubah data terlebih dahulu jika hanya konten yang berubah.
4. Uji fungsi halaman terkait.
5. Cek desktop dan mobile.
6. Cek Light Mode dan Dark Mode.
7. Commit dengan pesan yang jelas.
8. Push perubahan ke repository.

Untuk perubahan besar, sebaiknya gunakan branch terpisah agar branch `main` tetap stabil.

---

## Catatan untuk Admin Baru

### Urutan aman saat ingin mengubah sesuatu

**Ingin mengubah informasi?**

```text
assets/js/data/
```

**Ingin mengubah cara data ditampilkan?**

```text
assets/js/pages/
```

**Ingin mengubah tampilan?**

```text
assets/css/
```

**Ingin mengubah struktur halaman?**

```text
*.html
```

**Ingin mengubah navbar/footer global?**

```text
assets/js/components.js
```

### File yang perlu diperhatikan

Jangan mengubah komponen global secara sembarangan karena perubahan pada file berikut dapat memengaruhi banyak halaman:

```text
assets/js/components.js
assets/js/theme.js
assets/css/style.css
assets/css/navbar.css
assets/css/footer.css
```

---

## Dokumentasi Developer

Dokumentasi lokasi file yang lebih detail tersedia di:

```text
CATATAN-DEVELOPER.md
```

Dokumen tersebut dibuat sebagai panduan handover untuk admin/developer berikutnya.

---

## Developer

**Kang Tuhi / Tubagus Muhammad Tuhi**

Proyek: **SI-CS J4 — Sistem Informasi Cleaning Services J4**

---

### Pesan untuk Developer Berikutnya

> Utamakan perubahan yang sederhana dan terstruktur. Jika hanya ingin mengganti konten, jangan langsung mengubah renderer atau CSS. Setelah setiap perubahan, selalu lakukan pengecekan fungsi, desktop/mobile, dan light/dark mode.

Semoga SI-CS J4 terus berkembang dan bermanfaat. 🚀