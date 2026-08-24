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
    // Administrator is a custom auth button, not a navigation link.
    collapse.querySelectorAll(".nav-link:not(.auth-user-link)").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 991 && collapse.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(collapse).hide();
        }
      });
    });

    // Administrator owns its own custom dropdown. Never let its click
    // trigger the mobile navbar collapse.
    const authToggle = collapse.querySelector(".auth-user-link");
    authToggle?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    const authDropdown = collapse.querySelector(".auth-dropdown");
    authDropdown?.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    syncMenuState();
  }
});
