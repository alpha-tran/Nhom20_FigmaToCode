// DOM Elements
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const sideNav = document.getElementById("side-nav");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const notificationsBtn = document.querySelector(".notifications-btn");
const notificationsDropdown = document.querySelector(".notifications-dropdown");
const profileBtn = document.querySelector(".profile-btn");
const profileDropdown = document.querySelector(".profile-dropdown");
const postsGrid = document.getElementById("posts-grid");
const loadMoreBtn = document.getElementById("load-more");
const scrollTopBtn = document.getElementById("scroll-top");
const adCarousel = document.getElementById("ad-carousel");

// Kiểm tra sự tồn tại của phần tử trước khi thao tác
if (searchInput && searchResults) {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query) {
      searchPosts(query);
    } else {
      searchResults.style.display = "none";
    }
  });

  // Close search results when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = "none";
    }
  });
}

async function searchPosts(query) {
  try {
    // Simulate API call
    const results = [
      { title: "Bài viết về JavaScript", excerpt: "Học JavaScript cơ bản..." },
      {
        title: "Python cho người mới bắt đầu",
        excerpt: "Giới thiệu Python...",
      },
    ];

    displaySearchResults(results);
  } catch (error) {
    console.error("Search error:", error);
  }
}

function displaySearchResults(results) {
  if (!searchResults) return;
  searchResults.innerHTML = results
    .map(
      (result) => `
        <div class="search-result-item">
            <h4>${result.title}</h4>
            <p>${result.excerpt}</p>
        </div>
    `
    )
    .join("");
  searchResults.style.display = "block";
}

if (scrollTopBtn) {
  // Scroll to Top
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

if (adCarousel) {
  // Ad Carousel
  let currentAd = 0;
  const ads = adCarousel.querySelectorAll(".ad-banner");

  if (ads.length > 0) {
    function rotateAds() {
      ads.forEach((ad) => (ad.style.display = "none"));
      currentAd = (currentAd + 1) % ads.length;
      ads[currentAd].style.display = "block";
    }

    // Rotate ads every 5 seconds
    setInterval(rotateAds, 5000);

    // Initialize first ad
    ads.forEach((ad, index) => {
      ad.style.display = index === 0 ? "block" : "none";
    });
  }
}

if (profileBtn && profileDropdown) {
  profileBtn.addEventListener("click", () => {
    profileDropdown.classList.toggle("show");
  });

  // Close profile dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !profileDropdown.contains(event.target) &&
      event.target !== profileBtn
    ) {
      profileDropdown.classList.remove("show");
    }
  });
}

if (loadMoreBtn && postsGrid) {
  loadMoreBtn.addEventListener("click", () => {
    // Simulate loading more posts
    const newPosts = [
      {
        author: { avatar: "avatar1.jpg", name: "Author 1" },
        title: "New Post 1",
        excerpt: "This is a new post.",
        time: "5 mins ago",
      },
      {
        author: { avatar: "avatar2.jpg", name: "Author 2" },
        title: "New Post 2",
        excerpt: "This is another new post.",
        time: "10 mins ago",
      },
    ];
    renderPosts(newPosts);
  });
}

function renderPosts(posts) {
  if (!postsGrid) return;
  const postsHTML = posts
    .map(
      (post) => `
        <article class="post-card">
            <div class="post-author">
                <img src="${post.author.avatar}" alt="${post.author.name}" class="author-avatar">
                <span class="author-name">${post.author.name}</span>
            </div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae72e3028cd5166ea84f09f97659a41f3b7c3010" alt="Clock" class="time-icon">
                <span class="post-time">${post.time}</span>
            </div>
        </article>
    `
    )
    .join("");

  postsGrid.insertAdjacentHTML("beforeend", postsHTML);
}

if (document.querySelector(".my-courses-btn")) {
  const courseContainer = document.getElementById("courseContainer");
  document.querySelector(".my-courses-btn").addEventListener("click", () => {
    if (courseContainer) {
      courseContainer.classList.toggle("active");
    }
  });

  // Close when clicking outside
  document.addEventListener("click", (event) => {
    if (
      courseContainer &&
      !courseContainer.contains(event.target) &&
      event.target !== document.querySelector(".my-courses-btn")
    ) {
      courseContainer.classList.remove("active");
    }
  });
}

if (document.querySelector(".profile-img")) {
  const profileCard = document.querySelector(".profile-card");
  const profileImage = document.querySelector(".profile-img");

  profileImage.addEventListener("click", () => {
    if (profileCard) {
      profileCard.classList.toggle("show");
    }
  });

  // Close profile-card when clicking outside
  document.addEventListener("click", (event) => {
    if (
      profileCard &&
      !profileCard.contains(event.target) &&
      event.target !== profileImage
    ) {
      profileCard.classList.remove("show");
    }
  });
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Đăng xuất thành công!");
  window.location.href = "../Dangnhap/index.html"; // Chuyển hướng về trang đăng nhập sau khi đăng xuất
}

// Kiểm tra trạng thái đăng nhập và ẩn nút nếu chưa đăng nhập
document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.querySelector('li a[href="#"]');
  if (logoutButton) {
    if (!isLoggedIn()) {
      logoutButton.style.display = "none"; // Ẩn nút nếu chưa đăng nhập
    }
  }
});

function isLoggedIn() {
  return localStorage.getItem("loggedInUser") !== null;
}