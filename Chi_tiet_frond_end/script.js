document.addEventListener('DOMContentLoaded', function() {
  // Lấy nút Lộ Trình
  const roadmapBtn = document.getElementById('roadmap-btn');
  
  // Thêm sự kiện click
  if (home-nav) {
    home-nav.addEventListener('click', function() {
      // Chuyển hướng sang trang lộ trình
      window.location.href = '../Lo_trinh/index.html'; 
      
      // Hoặc nếu bạn muốn mở trong tab mới:
      // window.open('Lo_trinh/index.html', '_blank');
    });
  }
 
  if (trangchu) {
    trangchu.addEventListener('click', function() {
      // Chuyển hướng sang trang lộ trình
      window.location.href = '../Khoa_hoc_mien_phi/index.html'; 
      
      // Hoặc nếu bạn muốn mở trong tab mới:
      // window.open('Lo_trinh/index.html', '_blank');
    });
  }
  
  // Thêm hiệu ứng active khi click
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Xóa class active khỏi tất cả các item
      navItems.forEach(navItem => navItem.classList.remove('active'));
      
      // Thêm class active vào item được click
      this.classList.add('active');
    });
  });
});