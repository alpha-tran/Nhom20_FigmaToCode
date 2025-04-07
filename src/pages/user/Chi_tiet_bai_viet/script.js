// Save functionality // Hàm dùng chung để load HTML và kèm theo CSS, JS nếu có
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
