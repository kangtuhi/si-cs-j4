document.addEventListener("scroll", () =>
  document
    .querySelector(".custom-navbar")
    ?.classList.toggle("scrolled", scrollY > 20),
);
