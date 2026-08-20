// File Utama untuk Logika UI dan Render Data

document.addEventListener("DOMContentLoaded", () => {
  // 1. Render Dashboard Stats dengan efek counter
  //   const statsContainer = document.getElementById("stats-container");
  //   appData.stats.forEach((stat) => {
  //     statsContainer.innerHTML += `
  //             <div class="stat-card">
  //                 <i class="fas ${stat.icon} stat-icon"></i>
  //                 <h3 class="counter" data-target="${stat.count}">0</h3>
  //                 <p>${stat.label}</p>
  //             </div>
  //         `;
  //   });
  //   runCounters();

  // 2. Render Pengumuman
  const annContainer = document.getElementById("announcement-container");
  appData.announcements.forEach((ann) => {
    annContainer.innerHTML += `
            <div class="card announcement-card ${ann.type} fade-in">
                <div class="icon-box">
                    <i class="fas ${ann.icon}"></i>
                </div>
                <div class="content">
                    <h3 class="card-title">${ann.title} <span style="font-size: 0.8rem; color: #64748b; font-weight: normal; margin-left:10px;">${ann.date}</span></h3>
                    <p class="card-desc" style="margin-bottom:0;">${ann.content}</p>
                </div>
            </div>
            <br>
        `;
  });

  // 3. Render Filter SOP
  const filterContainer = document.getElementById("category-filters");
  appData.categories.forEach((cat, index) => {
    const activeClass = index === 0 ? "active" : "";
    filterContainer.innerHTML += `
            <button class="filter-btn ${activeClass}" data-filter="${cat}">${cat}</button>
        `;
  });

  // 4. Render SOP & IKA Cards
  renderSOPs("Semua"); // Initial render

  // Filter Click Logic
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Remove active class from all
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      // Add active to clicked
      e.target.classList.add("active");
      // Re-render
      const filterValue = e.target.getAttribute("data-filter");
      renderSOPs(filterValue);
    });
  });

  // 5. Render Video Edukasi
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = ""; // Bersihkan kontainer awal

  appData.videos.forEach((video, index) => {
    const videoHTML = `
            <div class="card video-card fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="video-wrapper">
                    <iframe src="${video.youtubeUrl}" title="${video.title}" allowfullscreen></iframe>
                </div>
                <div class="video-info">
                    <h3 class="card-title">${video.title}</h3>
                    <p class="card-desc">
                        <span style="background: var(--primary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; margin-right: 5px; font-weight: bold;">
                            ${video.docNumber}
                        </span> 
                        ${video.description}
                    </p>
                </div>
            </div>
        `;
    videoContainer.innerHTML += videoHTML;
  });

  // 6. Scroll Animations (Intersection Observer)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");

          // Jika elemen tersebut punya elemen anak dengan class fade-in
          const children = entry.target.querySelectorAll(".fade-in");
          children.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("appear");
            }, i * 150); // cascading delay
          });
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".observe-element").forEach((el) => {
    observer.observe(el);
  });

  // 7. Navbar Scroll Effect & Back to Top Button
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.8)";
      navbar.style.boxShadow = "var(--shadow-sm)";
    }

    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 8. Search Functionality (Sederhana)
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase();
    renderSOPs("Semua", query); // Reset filter ke Semua, lalu cari
    // Update filter button UI
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelector('.filter-btn[data-filter="Semua"]')
      .classList.add("active");
  });
});

// 9. Hamburger Menu Toggle Logic (Update: Slide dari Kanan & Auto-Close)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-toggle i");

// Buat fungsi khusus untuk menutup menu agar mudah dipanggil berkali-kali
const closeMenu = () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
};

// Saat tombol hamburger diklik
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Mencegah klik tembus ke document (yang akan langsung menutup menu)
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Otomatis tutup menu saat salah satu link diklik
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Otomatis tutup menu saat jari/kursor menyentuh area di luar menu
document.addEventListener("click", (e) => {
  // Jika yang diklik BUKAN area navLinks dan BUKAN tombol toggle
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMenu();
  }
});

// Otomatis tutup menu saat layar di-scroll
window.addEventListener("scroll", () => {
  closeMenu();
});

// Fungsi Render SOP dengan Filter/Search
function renderSOPs(category, searchQuery = "") {
  const sopContainer = document.getElementById("sop-container");
  sopContainer.innerHTML = "";

  let filteredSops = appData.sops;

  // Terapkan Kategori
  if (category !== "Semua") {
    filteredSops = filteredSops.filter((sop) => sop.category === category);
  }

  // Terapkan Pencarian
  if (searchQuery !== "") {
    filteredSops = filteredSops.filter(
      (sop) =>
        sop.title.toLowerCase().includes(searchQuery) ||
        sop.id.toLowerCase().includes(searchQuery),
    );
  }

  if (filteredSops.length === 0) {
    sopContainer.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: #64748b;">Tidak ada data yang ditemukan.</p>`;
    return;
  }

  filteredSops.forEach((sop, index) => {
    sopContainer.innerHTML += `
            <div class="card fade-in" style="animation-delay: ${index * 0.1}s">
                <span class="sop-tag">${sop.id}</span>
                <div class="sop-icon">
                    <i class="fas ${sop.icon}"></i>
                </div>
                <h3 class="card-title">${sop.title}</h3>
                <p class="card-desc">${sop.desc}</p>
                <a href="#" class="read-more">Lihat SOP <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
  });

  // Memicu animasi secara manual karena baru di-render
  setTimeout(() => {
    document
      .querySelectorAll("#sop-container .fade-in")
      .forEach((el) => el.classList.add("appear"));
  }, 50);
}

// Fungsi Efek Angka (Counter)
function runCounters() {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
        if (target === 100) counter.innerText = "100%"; // Khusus persentase
      }
    };
    updateCount();
  });
}
