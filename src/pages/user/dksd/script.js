// Handle mobile navigation item clicks
const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

mobileNavItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all items
    mobileNavItems.forEach((navItem) => {
      navItem.style.color = "#666";
      navItem.style.backgroundColor = "transparent";
    });

    // Add active class to clicked item
    this.style.color = "#8000f7";
    this.style.backgroundColor = "#f5f5f5";
  });
});
