document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("staffContainer").innerHTML = staffData
    .map(
      (x) =>
        `<div class="col-md-6 col-lg-3"><div class="staff-card"><div class="staff-avatar mx-auto"><i class="bi ${x.icon}"></i></div><h5>${x.name}</h5><span class="badge text-bg-primary">${x.role}</span><p class="text-secondary mt-3 mb-0">${x.area}</p></div></div>`,
    )
    .join("");
});
