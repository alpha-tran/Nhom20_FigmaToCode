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
    console.log('Đăng xuất thành công!');
    alert('Đăng xuất thành công!');
    window.location.href = '/Dangnhap/index.html'; // Chuyển hướng về trang đăng nhập sau khi đăng xuất
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
