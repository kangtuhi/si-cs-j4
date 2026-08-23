function openGuideModal(g) {
  const el = document.getElementById("guideModalContent");

  el.innerHTML = `
    <div class="guide-modal-header">
      <button type="button" class="guide-modal-close" data-bs-dismiss="modal" aria-label="Tutup">
        <i class="bi bi-x-lg"></i>
      </button>
      <div class="guide-modal-header-inner">
        <span class="guide-modal-kicker">
          <i class="bi bi-book-half"></i> PANDUAN KERJA
        </span>
        <h5 class="guide-modal-title">${g.title}</h5>
      </div>
    </div>

    <div class="guide-modal-body">
      <p class="guide-modal-description">${g.description}</p>

      <h6 class="guide-modal-section-title">
        <i class="bi bi-list-check"></i>
        Langkah-langkah
      </h6>

      <ol class="guide-step-list">
        ${g.steps.map((s) => `<li>${s}</li>`).join("")}
      </ol>
    </div>

    <div class="guide-modal-footer">
      <button type="button" class="guide-modal-done" data-bs-dismiss="modal">
        <i class="bi bi-check2-circle"></i>
        Selesai membaca
      </button>
    </div>
  `;

  bootstrap.Modal.getOrCreateInstance(
    document.getElementById("guideModal")
  ).show();
}
