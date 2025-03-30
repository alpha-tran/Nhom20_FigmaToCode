// Save functionality
const saveButton = document.querySelector(".post-actions__bookmark");
const saveMessage = document.querySelector(".save-message");
let saveTimeout;

saveButton.addEventListener("click", () => {
  saveMessage.classList.add("show");

  // Clear any existing timeout
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  // Hide message after 2 seconds
  saveTimeout = setTimeout(() => {
    saveMessage.classList.remove("show");
  }, 2000);
});

// More options dropdown functionality
const moreButton = document.querySelector(".post-actions__more");
const moreDropdown = document.querySelector(".more-dropdown");

moreButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const isExpanded = moreButton.getAttribute("aria-expanded") === "true";

  moreButton.setAttribute("aria-expanded", !isExpanded);
  moreDropdown.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!moreButton.contains(e.target) && !moreDropdown.contains(e.target)) {
    moreDropdown.classList.remove("show");
    moreButton.setAttribute("aria-expanded", "false");
  }
});

// Close dropdown when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && moreDropdown.classList.contains("show")) {
    moreDropdown.classList.remove("show");
    moreButton.setAttribute("aria-expanded", "false");
  }
});
