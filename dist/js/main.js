const nav = document.querySelector("[data-site-nav]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelectorAll("[data-site-nav] a");

if (nav && menuButton) {
  const setMenuState = (isOpen) => {
    nav.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Close menu" : "Open menu";
    document.body.classList.toggle("menu-open", isOpen);
  };

  setMenuState(false);

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 760) {
        setMenuState(false);
      }
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuState(false);
    }
  });
}
