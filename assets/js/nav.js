function closeAllDropdowns() {
  document.querySelectorAll(".nav__dropdown.is-open").forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    const toggle = dropdown.querySelector(".nav__dropdown-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
}

document.querySelectorAll(".nav__dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const dropdown = toggle.closest(".nav__dropdown");
    const wasOpen = dropdown.classList.contains("is-open");
    closeAllDropdowns();
    if (!wasOpen) {
      dropdown.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav__dropdown")) closeAllDropdowns();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllDropdowns();
});
