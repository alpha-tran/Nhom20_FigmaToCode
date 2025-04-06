// Handle mobile navigation item clicks

function loadComponent(url, containerId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      // Chèn nội dung vào container
      const container = document.getElementById(containerId);
      container.innerHTML = data;

      // Tạo DOM tạm để xử lý các thẻ link/script bên trong
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // Xử lý <link rel="stylesheet">
      tempDiv.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        const newLink = document.createElement("link");
        newLink.rel = "stylesheet";
        newLink.href = link.href;
        // Tránh chèn trùng lặp
        if (!document.querySelector(`link[href="${newLink.href}"]`)) {
          document.head.appendChild(newLink);
        }
      });

      // Xử lý <script src="...">
      tempDiv.querySelectorAll('script[src]').forEach((script) => {
        const newScript = document.createElement("script");
        newScript.src = script.src;
        newScript.async = false; // đảm bảo thực thi đúng thứ tự
        document.body.appendChild(newScript);
      });
    })
    .catch((error) =>
      console.error(`Error loading component (${url}):`, error)
    );
}

// Gọi hàm để load từng thành phần
loadComponent("../../../components/Header.html", "header-container");
loadComponent("../../../components/Sidebar.html", "sidebar-container");
loadComponent("../../../components/Footer.html", "footer-container");


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
      document.addEventListener("DOMContentLoaded", function () {
        // Handle desktop navigation item clicks
        const desktopNavItems = document.querySelectorAll(".nav-item");

        desktopNavItems.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();

            // Add click effect
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
              this.style.transform = "scale(1)";
            }, 100);
          });
        });

        // Handle auth buttons
        const authButtons = document.querySelectorAll(
          ".signup-button, .login-button",
        );

        authButtons.forEach((button) => {
          button.addEventListener("click", function () {
            // Add click effect
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
              this.style.transform = "scale(1)";
            }, 100);
          });
        });

        // Handle mobile menu button
        const mobileMenuButton = document.querySelector(".mobile-menu-button");

        if (mobileMenuButton) {
          mobileMenuButton.addEventListener("click", function () {
            // Add click effect
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
              this.style.transform = "scale(1)";
            }, 100);
          });
        }
      });