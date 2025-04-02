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
document.addEventListener("DOMContentLoaded", function () {
  // Handle desktop navigation item clicks
  const desktopNavItems = document.querySelectorAll(".nav-item");

  desktopNavItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only prevent default if href is empty or "#"
      if (!href || href === "#") {
        e.preventDefault();
      } else {
        // Allow navigation for valid links
        window.location.href = href;
      }

      // Add click effect
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 100);
    });
  });
});