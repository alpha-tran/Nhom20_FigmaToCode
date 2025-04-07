async function loadComponent(url, containerId) {
  try {
    const response = await fetch(url);
    const data = await response.text();

    const container = document.getElementById(containerId);
    container.innerHTML = data;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = data;

    // Xử lý <link rel="stylesheet">
    tempDiv.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
      if (!document.querySelector(`link[href="${link.href}"]`)) {
        document.head.appendChild(link.cloneNode(true));
      }
    });

    // Xử lý <script src="...">
    tempDiv.querySelectorAll('script[src]').forEach((script) => {
      const newScript = document.createElement("script");
      newScript.src = script.src;
      newScript.async = false;
      document.body.appendChild(newScript);
    });
  } catch (error) {
    console.error(`Error loading component (${url}):`, error);
  }
}

// Gọi hàm để load từng thành phần
loadComponent("../../../components/Header.html", "header-container");
loadComponent("../../../components/Sidebar.html", "sidebar-container");
loadComponent("../../../components/Footer.html", "footer-container");

document.addEventListener("DOMContentLoaded", () => {
  initializeMainComponents();
});

function initializeMainComponents() {
  const buttons = [
    { id: "backend-details-btn", url: "../Chi_tiet_frond_end/index.html" },
    { id: "frontend-details-btn", url: "../Chi_tiet_frond_end/index.html" },
    { id: "community-btn", url: "https://www.facebook.com/groups/yourgroup", newTab: true },
  ];

  buttons.forEach(({ id, url, newTab }) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => {
        if (newTab) {
          window.open(url, "_blank");
        } else {
          window.location.href = url;
        }
      });
    }
  });

  document.querySelectorAll(".lesson-title").forEach((button) => {
    button.addEventListener("click", function () {
      const lessonName = this.textContent.trim();
      const moduleId = this.closest(".module-lessons").id;
      window.location.href = `course/lesson.html?module=${moduleId}&lesson=${encodeURIComponent(lessonName)}`;
    });
  });
}

function goBack() {
  alert("Quay lại trang trước");
}

function openCourse(courseId) {
  alert("Mở khóa học: " + courseId);
}