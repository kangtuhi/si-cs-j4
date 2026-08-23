document.addEventListener("DOMContentLoaded", () => {
  let category = "";

  const searchInput = document.getElementById("videoSearch");
  const filters = document.getElementById("videoFilters");
  const videosContainer = document.getElementById("videosContainer");
  const emptyVideos = document.getElementById("emptyVideos");
  const videoCount = document.getElementById("videoCount");
  const clearButton = document.getElementById("clearVideoSearch");
  const searchBox = document.querySelector(".search-box");

  const cats = [...new Set(videosData.map((x) => x.category))];

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

  function render() {
    const list = filterItems(videosData, searchInput.value, category);

    videosContainer.innerHTML = list
      .map(
        (v) => `
          <div class="col-md-6 col-lg-4">
            <div class="video-card">
              <div class="ratio ratio-16x9 video-frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/${v.youtubeId}"
                  title="${v.title}"
                  loading="lazy"
                  allowfullscreen
                ></iframe>
                <div class="video-play-overlay" aria-hidden="true">
                  <i class="bi bi-play-fill"></i>
                </div>
              </div>

              <div class="video-info">
                <span class="badge text-bg-primary">${v.category}</span>
                <h5 class="mt-3">${v.title}</h5>
                <p class="text-secondary mb-0">${v.description}</p>
              </div>
            </div>
          </div>
        `,
      )
      .join("");

    emptyVideos.classList.toggle("d-none", !!list.length);
    videoCount.textContent = `${list.length} Video`;
    searchBox.classList.toggle("has-value", !!searchInput.value.trim());
  }

  filters.onclick = (e) => {
    const button = e.target.closest(".filter-chip");

    if (!button) return;

    category = button.dataset.c;

    document
      .querySelectorAll(".filter-chip")
      .forEach((b) => b.classList.remove("active"));

    button.classList.add("active");
    render();
  };

  searchInput.addEventListener("input", render);

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    render();
  });

  render();
});
