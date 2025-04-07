
// Hàm dùng chung để load HTML và kèm theo CSS, JS nếu có
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