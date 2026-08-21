document.addEventListener("DOMContentLoaded", () => {
  let category = "";

  const searchInput = document.getElementById("guideSearch");
  const filters = document.getElementById("guideFilters");
  const guidesContainer = document.getElementById("guidesContainer");
  const emptyGuides = document.getElementById("emptyGuides");
  const guideCount = document.getElementById("guideCount");
  const clearButton = document.getElementById("clearGuideSearch");
  const searchBox = document.querySelector(".search-box");

  const cats = [...new Set(guidesData.map((x) => x.category))];

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
    const list = filterItems(guidesData, searchInput.value, category);

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

    emptyGuides.classList.toggle("d-none", !!list.length);

    guideCount.textContent = `${list.length} Panduan`;

    document.querySelectorAll("[data-id]").forEach((b) => {
      b.onclick = () => {
        openGuideModal(guidesData.find((g) => g.id == b.dataset.id));
      };
    });
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

  searchInput.addEventListener("input", () => {
    searchBox.classList.toggle("has-value", searchInput.value.trim() !== "");

    render();
  });

  clearButton.addEventListener("click", () => {
    searchInput.value = "";

    searchBox.classList.remove("has-value");

    searchInput.focus();

    render();
  });

  render();
});
