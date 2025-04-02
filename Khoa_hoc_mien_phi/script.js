document.addEventListener('DOMContentLoaded', function() {
  // Lấy nút Lộ Trình
  const roadmapBtn = document.getElementById('roadmap-btn');
  
  // Thêm sự kiện click
  if (roadmapBtn) {
    roadmapBtn.addEventListener('click', function() {
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
// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Xử lý mở rộng/đóng các module
  const moduleHeaders = document.querySelectorAll('.module-header');
  
  moduleHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const moduleId = this.getAttribute('aria-controls');
      const moduleLessons = document.getElementById(moduleId);
      
      // Đóng/mở module
      this.setAttribute('aria-expanded', !isExpanded);
      moduleLessons.style.display = isExpanded ? 'none' : 'block';
      
      // Thay đổi icon nếu cần (bạn có thể thêm icon vào HTML nếu muốn)
      // this.classList.toggle('expanded');
    });
  });
  
  // Xử lý click vào bài học
  const lessonTitles = document.querySelectorAll('.lesson-title');
  
  lessonTitles.forEach(lesson => {
    lesson.addEventListener('click', function() {
      // Xóa active khỏi tất cả các bài học
      lessonTitles.forEach(l => l.classList.remove('active-lesson'));
      
      // Thêm active vào bài học được click
      this.classList.add('active-lesson');
      
      // Ở đây bạn có thể thêm logic để hiển thị nội dung bài học
      console.log('Bài học được chọn:', this.textContent);
      
      // Hoặc có thể chuyển hướng đến trang bài học
      // window.location.href = '/lesson/' + encodeURIComponent(this.textContent);
    });
  });
  
  // Xử lý click vào các nút navigation
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Xóa active khỏi tất cả các nút
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // Thêm active vào nút được click
      this.classList.add('active');
      
      // Ở đây bạn có thể thêm logic để hiển thị nội dung tương ứng
      console.log('Đã chọn:', this.querySelector('.nav-label').textContent);
    });
  });
});