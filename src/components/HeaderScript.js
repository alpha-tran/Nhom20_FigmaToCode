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
  searchResults.innerHTML = results
    .map(
      (result) => `
        <div class="search-result-item">
            <h4>${result.title}</h4>
            <p>${result.excerpt}</p>
        </div>
    `,
    )
    .join("");
  searchResults.style.display = "block";
}

// Close search results when clicking outside
document.addEventListener("click", (e) => {
  if (!searchResults.contains(e.target) && e.target !== searchInput) {
    searchResults.style.display = "none";
  }
});


// Posts Loading
let page = 1;
const postsPerPage = 4;

async function loadPosts() {
  try {
    // Simulate API call
    const posts = [
      {
        author: {
          name: "Nguyễn Hoàng Rùa",
          avatar:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/65e53b84de045e7ce1f637eb1ba8db92f857d77b",
        },
        title: "Thư cảm ơn gửi đến thầy Trung",
        excerpt: "Python được tạo ra bởi Guido van Rossum...",
        time: "3 ngày trước",
      },
      // Add more post data
    ];

    renderPosts(posts);
  } catch (error) {
    console.error("Load posts error:", error);
  }
}

function renderPosts(posts) {
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
    `,
    )
    .join("");

  postsGrid.insertAdjacentHTML("beforeend", postsHTML);
}


// Initial posts load
loadPosts();

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

// Ad Carousel
let currentAd = 0;
const ads = adCarousel.querySelectorAll(".ad-banner");

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
function toggleCourses() {
  let courseContainer = document.getElementById("courseContainer");
  courseContainer.classList.toggle("active");
}

// Đóng khi click ra ngoài
document.addEventListener("click", function (event) {
  let courseContainer = document.getElementById("courseContainer");
  let button = document.querySelector(".my-courses-btn");

  if (!courseContainer.contains(event.target) && event.target !== button) {
    courseContainer.classList.remove("active");
  }
});
function profile() {
  let profileCard = document.querySelector(".profile-card");
  profileCard.classList.toggle("show"); // Thêm/xóa class "show"
}

// Ẩn profile-card khi click ra ngoài
document.addEventListener("click", function (event) {
  let profileCard = document.querySelector(".profile-card");
  let profileImage = document.querySelector(".profile-img");

  // Kiểm tra nếu click ngoài profileCard và profileImage thì ẩn đi
  if (!profileCard.contains(event.target) && !profileImage.contains(event.target)) {
    profileCard.classList.remove("show");
  }
});
function logout() {
  localStorage.removeItem('loggedInUser');
  alert('Đăng xuất thành công!');
  window.location.href = '../Dangnhap/index.html'; // Chuyển hướng về trang đăng nhập sau khi đăng xuất
}
// Kiểm tra trạng thái đăng nhập và ẩn nút nếu chưa đăng nhập
document.addEventListener('DOMContentLoaded', function () {
  const logoutButton = document.querySelector('li a[href="#"]');
  if (logoutButton) {
    if (!isLoggedIn()) {
      logoutButton.style.display = 'none'; // Ẩn nút nếu chưa đăng nhập
    }
  }
});

function isLoggedIn() {
  return localStorage.getItem('loggedInUser') !== null;
}
