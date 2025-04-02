// Function to show notification
function showNotification(message) {
  const notificationContainer = document.getElementById(
    "notification-container",
  );
  const notificationMessage = document.getElementById("notification-message");

  // Set the message
  notificationMessage.textContent = message;

  // Show the notification
  notificationContainer.classList.add("show");

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notificationContainer.classList.remove("show");
  }, 3000);
}

// Add event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // My Courses button
  const myCoursesBtn = document.getElementById("my-courses-btn");
  if (myCoursesBtn) {
    myCoursesBtn.addEventListener("click", () => {
      showNotification("Đang chuyển đến trang khóa học của bạn");
    });
  }

  // Notification button
  const notificationBtn = document.getElementById("notification-btn");
  if (notificationBtn) {
    notificationBtn.addEventListener("click", () => {
      showNotification("Bạn không có thông báo mới");
    });
  }

  // Profile button
  const profileBtn = document.getElementById("profile-btn");
  if (profileBtn) {
    profileBtn.addEventListener("click", () => {
      showNotification("Đang mở trang cá nhân của bạn");
    });
  }

  // Footer links
  const footerLinks = document.querySelectorAll(".footer-link");
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      showNotification(`Đang chuyển đến trang ${link.textContent}`);
    });
  });

  // Make search input show notification on submit
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          showNotification(`Đang tìm kiếm: "${searchTerm}"`);
        } else {
          showNotification("Vui lòng nhập từ khóa tìm kiếm");
        }
      }
    });
  }

  // Make all sections with titles clickable to show info
  const sectionTitles = document.querySelectorAll(
    ".section-title, .vision-title, .values-title, .benefits-title, .workplace-title",
  );
  sectionTitles.forEach((title) => {
    title.classList.add("clickable");
    title.addEventListener("click", () => {
      showNotification(`Bạn đang xem phần: ${title.textContent}`);
    });
  });
});
