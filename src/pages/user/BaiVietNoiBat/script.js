document.addEventListener("DOMContentLoaded", function () {
  // Load bài viết
  loadPosts();
});

// Hàm tải bài viết
function loadPosts() {
  const postsContainer = document.querySelector(".posts-container");

  // Dữ liệu giả lập
  const posts = [
    {
      author: "Nguyễn Hoàng Rùa",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/65e53b84de045e7ce1f637eb1ba8db92f857d77b",
      title: "Thư cảm ơn gửi đến thầy Trung",
      excerpt: "Python được tạo ra bởi Guido van Rossum...",
      time: "3 ngày trước",
    },
    // Thêm bài viết khác tại đây
  ];

  // Hiển thị bài viết
  posts.forEach((post) => {
    const postCard = document.createElement("article");
    postCard.classList.add("post-card");

    postCard.innerHTML = `
      <div class="post-author">
        <img src="${post.avatar}" alt="${post.author}" class="author-img" />
        <span class="author-name">${post.author}</span>
      </div>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-excerpt">${post.excerpt}</p>
      <div class="post-meta">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae72e3028cd5166ea84f09f97659a41f3b7c3010" alt="Clock" class="clock-icon" />
        <span class="post-time">${post.time}</span>
      </div>
    `;

    postsContainer.appendChild(postCard);
  });

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
}