function toggleLoginModal() {
    const modal = document.querySelector('.login-modal');
    modal.classList.toggle('hidden');
}

function showEmailLoginForm() {
    const emailLoginForm = document.getElementById('emailLoginForm');
    emailLoginForm.classList.remove('hidden');
}
// Danh sách người dùng cố định
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

// Đăng nhập
function login(username, password) {
    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        console.log('Đăng nhập thành công!');
        localStorage.setItem('loggedInUser', username);
        alert('Đăng nhập thành công!');
        window.location.href = '../khoahoccuatoi/index.html'; // Chuyển hướng sau khi đăng nhập
        return true;
    } else {
        console.log('Sai tên đăng nhập hoặc mật khẩu!');
        alert('Sai tên đăng nhập hoặc mật khẩu!');
        return false;
    }
}

// Đăng xuất
function logout() {
    localStorage.removeItem('loggedInUser');
    console.log('Đăng xuất thành công!');
    alert('Đăng xuất thành công!');
    window.location.href = '/Dangnhap/index.html'; // Chuyển hướng về trang đăng nhập sau khi đăng xuất
}

// Kiểm tra trạng thái đăng nhập
function isLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

// Xử lý sự kiện đăng nhập từ form
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Ngăn chặn reload trang
            const username = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            login(username, password);
        });
    }
});
