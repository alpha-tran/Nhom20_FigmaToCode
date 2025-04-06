  // Hàm dùng chung để load HTML component và xử lý CSS, JS nếu có
  function loadComponent(url, containerId, callback = null) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const container = document.getElementById(containerId);
        container.innerHTML = data;

        // Tạo DOM tạm để xử lý các thẻ <link> và <script>
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;

        // Xử lý <link rel="stylesheet">
        tempDiv.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
          if (!document.querySelector(`link[href="${link.href}"]`)) {
            const newLink = document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.href = link.href;
            document.head.appendChild(newLink);
          }
        });

        // Xử lý <script src="...">
        tempDiv.querySelectorAll('script[src]').forEach((script) => {
          const newScript = document.createElement("script");
          newScript.src = script.src;
          newScript.async = false; // Đảm bảo thứ tự
          document.body.appendChild(newScript);
        });

        // Gọi callback nếu có
        if (typeof callback === "function") {
          callback();
        }
      })
      .catch((error) =>
        console.error(`Error loading component (${url}):`, error)
      );
  }

  // Khi DOM đã sẵn sàng
  document.addEventListener("DOMContentLoaded", function () {
    // Load Header + gắn sự kiện
    loadComponent("../../../components/Header.html", "header-container");

    // Load Sidebar
    loadComponent("../../../components/Sidebar.html", "sidebar-container");

    // Load Footer
    loadComponent("../../../components/Footer.html", "footer-container");
    // Khởi tạo nội dung chính
    initializeMainComponents();
  });

  

  function initializeMainComponents() {
    const backendBtn = document.getElementById("backend-details-btn");
    if (backendBtn) {
      backendBtn.addEventListener("click", function () {
        window.location.href = "../Chi_tiet_frond_end/index.html";
      });
    }

    const frontendBtn = document.getElementById("frontend-details-btn");
    if (frontendBtn) {
      frontendBtn.addEventListener("click", function () {
        window.location.href = "../Chi_tiet_frond_end/index.html";
      });
    }

    const communityBtn = document.getElementById("community-btn");
    if (communityBtn) {
      communityBtn.addEventListener("click", function () {
        window.open("https://www.facebook.com/groups/yourgroup", "_blank");
      });
    }

    const lessonButtons = document.querySelectorAll(".lesson-title");
    lessonButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const lessonName = this.textContent.trim();
        const moduleId = this.closest(".module-lessons").id;

        window.location.href = `course/lesson.html?module=${moduleId}&lesson=${encodeURIComponent(lessonName)}`;
      });
    });
  }

