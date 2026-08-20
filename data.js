// File ini berisi semua data konten aplikasi. Edit di sini untuk mengubah isi web tanpa menyentuh HTML.

const appData = {
  // Data Statistik Dashboard
  stats: [
    { id: "stat-1", icon: "fa-book", count: 124, label: "Total SOP & IKA" },
    { id: "stat-2", icon: "fa-video", count: 45, label: "Video Pelatihan" },
    { id: "stat-3", icon: "fa-users", count: 850, label: "Staf Operasional" },
    {
      id: "stat-4",
      icon: "fa-check-circle",
      count: 100,
      label: "Area Tercover (%)",
    },
  ],

  // Data Pengumuman
  announcements: [
    {
      id: 1,
      type: "warning", // 'warning' atau 'info'
      icon: "fa-exclamation-triangle",
      title: "Pengumuman Perubahan IKA No. 04/2026",
      date: "20 Agustus 2026",
      content:
        "Sesuai instruksi manajemen, penggunaan cairan disinfektan pada koridor utama kini menggunakan rasio pencampuran baru 1:50 demi efisiensi chemical.",
    },
    {
      id: 2,
      type: "info",
      icon: "fa-info-circle",
      title: "Jadwal Pelatihan Alat Baru (Scrubber)",
      date: "18 Agustus 2026",
      content:
        "Pelatihan wajib penggunaan Auto Scrubber Machine untuk Supervisor akan diadakan pada hari Jumat, 25 Agustus di Aula Utama.",
    },
  ],

  // Kategori Filter SOP
  categories: [
    "Semua",
    "General Cleaning",
    "Chemical",
    "Alat & Mesin",
    "Protokol Kesehatan",
  ],

  // Data SOP & IKA
  sops: [
    {
      id: "IKA-CS-012",
      title: "SOP Pembersihan Kaca (Glass Cleaning)",
      category: "General Cleaning",
      desc: "Teknik pembersihan kaca S-Shape yang benar untuk menghindari bekas goresan kemoceng atau kain microfiber.",
      icon: "fa-window-maximize",
      tag: "General",
    },
    {
      id: "IKA-CS-015",
      title: "Panduan Pembuatan Sanitizer",
      category: "Chemical",
      desc: "Tata cara menuangkan takaran chemical yang aman menggunakan gelas ukur standar operasional RS/Industri.",
      icon: "fa-flask",
      tag: "Chemical",
    },
    {
      id: "IKA-CS-022",
      title: "Perawatan Mesin Polisher Lantai",
      category: "Alat & Mesin",
      desc: "Langkah-langkah pembersihan pad dan tangki air setelah mesin digunakan agar mesin awet.",
      icon: "fa-cogs",
      tag: "Mesin",
    },
    {
      id: "IKA-CS-030",
      title: "Penanganan Limbah Infeksius",
      category: "Protokol Kesehatan",
      desc: "Penggunaan APD lengkap dan alur pembuangan limbah pada plastik kuning sesuai standar Kemenkes.",
      icon: "fa-biohazard",
      tag: "Prokes",
    },
    {
      id: "IKA-CS-005",
      title: "Standar Dusting Meja Kerja",
      category: "General Cleaning",
      desc: "Cara melipat kain lap majun/microfiber menjadi 8 sisi agar penggunaan lebih efisien.",
      icon: "fa-spray-can",
      tag: "General",
    },
    {
      id: "IKA-CS-018",
      title: "Penanganan Tumpahan Bahan Kimia",
      category: "Chemical",
      desc: "Langkah tanggap darurat (Spill Kit) saat terjadi tumpahan cairan kimia berbahaya di lantai.",
      icon: "fa-skull-crossbones",
      tag: "Chemical",
    },
  ],

  // Data Video Edukasi
  videos: [
    {
      title: "SOP Pembersihan Kaca (Glass Cleaning)",
      docNumber: "IKA-CS-012",
      description:
        "Teknik pembersihan kaca yang benar untuk menghindari bekas goresan kemoceng atau kain microfiber.",
      youtubeUrl: "https://www.youtube.com/embed/r7e6l0JamwM",
    },
    {
      title: "Panduan Pembuatan Sanitizer & Desinfektan",
      docNumber: "IKA-CS-015",
      description:
        "Tata cara menuangkan takaran chemical yang aman menggunakan gelas ukur standar operasional.",
      youtubeUrl: "https://www.youtube.com/embed/p1XlYN8KdXE",
    },
  ],
}; // Penutup object appData
