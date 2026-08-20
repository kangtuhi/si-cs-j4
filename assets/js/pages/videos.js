document.addEventListener("DOMContentLoaded", () => {
  let category = "";
  const cats = [...new Set(videosData.map((x) => x.category))];
  const filters = document.getElementById("videoFilters");
  filters.innerHTML = ["Semua", ...cats]
    .map(
      (c) =>
        `<button class="filter-chip ${c === "Semua" ? "active" : ""}" data-c="${c === "Semua" ? "" : c}">${c}</button>`,
    )
    .join("");
  function render() {
    const list = filterItems(
      videosData,
      document.getElementById("videoSearch").value,
      category,
    );
    document.getElementById("videosContainer").innerHTML = list
      .map(
        (v) =>
          `<div class="col-md-6 col-lg-4"><div class="video-card"><div class="ratio ratio-16x9"><iframe src="https://www.youtube-nocookie.com/embed/${v.youtubeId}" title="${v.title}" loading="lazy" allowfullscreen></iframe></div><div class="video-info"><span class="badge text-bg-primary">${v.category}</span><h5 class="mt-3">${v.title}</h5><p class="text-secondary mb-0">${v.description}</p></div></div></div>`,
      )
      .join("");
    document
      .getElementById("emptyVideos")
      .classList.toggle("d-none", !!list.length);
  }
  filters.onclick = (e) => {
    if (e.target.matches(".filter-chip")) {
      category = e.target.dataset.c;
      document
        .querySelectorAll(".filter-chip")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      render();
    }
  };
  document.getElementById("videoSearch").oninput = render;
  render();
});
