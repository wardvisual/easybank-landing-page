const toggleIcon = document.querySelector(`#toggle-icon`);
const mobileMenu = document.querySelector(`#mobile-menu`);

toggleIcon.addEventListener(`click`, () => {
  if (toggleIcon.classList.contains("fa-bars")) {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-close");

    /* Mobile Menu */
    mobileMenu.style = `
        display: block;
      `;
  } else if (toggleIcon.classList.contains("fa-close")) {
    toggleIcon.classList.remove("fa-close");
    toggleIcon.classList.add("fa-bars");

    /* Mobile Menu */
    mobileMenu.style = `
        display: none;
      `;
  }
});
