document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".custom-navbar");
  const collapse = document.getElementById("mainNav");
  const toggler = document.querySelector(".navbar-toggler");

  if (!navbar) return;

  function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  // Premium mobile menu state + icon animation
  if (collapse && toggler) {
    const syncMenuState = () => {
      const isOpen = collapse.classList.contains("show");
      navbar.classList.toggle("menu-open", isOpen);
      toggler.classList.toggle("is-open", isOpen);
      toggler.setAttribute("aria-expanded", String(isOpen));
    };

    collapse.addEventListener("show.bs.collapse", syncMenuState);
    collapse.addEventListener("shown.bs.collapse", syncMenuState);
    collapse.addEventListener("hide.bs.collapse", syncMenuState);
    collapse.addEventListener("hidden.bs.collapse", syncMenuState);

    // Close the mobile menu only after selecting a real navigation link.
    // Dropdown toggles (including Administrator) must stay open so Bootstrap
    // can display their submenu instead of collapsing the whole navbar.
    collapse.querySelectorAll(".nav-link:not(.dropdown-toggle)").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 991 && collapse.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(collapse).hide();
        }
      });
    });

    // Keep clicks on the Administrator dropdown inside the mobile navbar.
    collapse.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });

    syncMenuState();
  }
});
