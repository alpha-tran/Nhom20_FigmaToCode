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