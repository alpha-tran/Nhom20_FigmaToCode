// Load header and navigation components
document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      initializeHeaderComponents();
    });

  // Load navigation
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-container").innerHTML = data;
      initializeNavComponents();
    });

  // Initialize main content components
  initializeMainComponents();
});

// Header component functionality
function initializeHeaderComponents() {
  // Search functionality
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const searchTerm = this.value.trim();
        if (searchTerm) {
          console.log(`Searching for: ${searchTerm}`);
          alert(`Đang tìm kiếm: ${searchTerm}`);
          // Here you would typically perform a search and display results
        }
      }
    });
  }

  // My courses click handler
  const myCourses = document.querySelector(".my-courses");
  if (myCourses) {
    myCourses.addEventListener("click", function () {
      console.log("My courses clicked");
      alert("Đang chuyển đến khóa học của bạn");
      // Here you would typically navigate to the user's courses page
    });
  }

  // Notifications click handler
  const notificationsIcon = document.querySelector(".notifications-icon");
  if (notificationsIcon) {
    notificationsIcon.addEventListener("click", function () {
      console.log("Notifications clicked");
      alert("Đang mở thông báo");
      // Here you would typically show a notifications dropdown
    });
  }

  // Profile click handler
  const profileImg = document.querySelector(".profile-img");
  if (profileImg) {
    profileImg.addEventListener("click", function () {
      console.log("Profile clicked");
      alert("Đang mở trang cá nhân");
      // Here you would typically navigate to the user profile page or show a dropdown
    });
  }
}

function initializeNavComponents() {
  // Navigation items functionality
  const navItems = document.querySelectorAll(".nav-item");
  
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const navLabel = this.querySelector(".nav-label").textContent;
      
      // Xóa class active khỏi tất cả các item
      navItems.forEach(navItem => navItem.classList.remove('active'));
      
      // Thêm class active vào item được click
      this.classList.add('active');
      
      // Xử lý chuyển trang theo từng mục
      switch(navLabel) {
        case 'Trang Chủ':
          window.location.href = '../Khoa_hoc_mien_phi/index.html';
          break;
        case 'Lộ Trình':
          window.location.href = '../Lo_trinh/index.html';
          break;
        case 'Bài Viết':
          window.location.href = '../Bai_viet/index.html';
          break;
        default:
          console.log(`Navigating to: ${navLabel}`);
      }
    });
  });
}

function initializeMainComponents() {
  // Button click handlers
  const backendBtn = document.getElementById("backend-details-btn");
  if (backendBtn) {
    backendBtn.addEventListener("click", function () {
      window.location.href = '../Chi_tiet_frond_end/index.html';
    });
  }

  const frontendBtn = document.getElementById("frontend-details-btn");
  if (frontendBtn) {
    frontendBtn.addEventListener("click", function () {
      window.location.href = '../Chi_tiet_frond_end/index.html';
    });
  }

  const communityBtn = document.getElementById("community-btn");
  if (communityBtn) {
    communityBtn.addEventListener("click", function () {
      window.open('https://www.facebook.com/groups/yourgroup', '_blank');
    });
  }

  // Thêm xử lý click cho các bài học trong khóa học
  const lessonButtons = document.querySelectorAll(".lesson-title");
  lessonButtons.forEach(button => {
    button.addEventListener("click", function() {
      const lessonName = this.textContent.trim();
      console.log(`Opening lesson: ${lessonName}`);
      
      // Lấy ID module từ phần tử cha
      const moduleId = this.closest('.module-lessons').id;
      console.log(`Module ID: ${moduleId}`);
      
      // Chuyển đến trang chi tiết bài học
      window.location.href = `course/lesson.html?module=${moduleId}&lesson=${encodeURIComponent(lessonName)}`;
    });
  });
}

