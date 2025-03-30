function toggleLoginModal() {
    const modal = document.querySelector('.login-modal');
    modal.classList.toggle('hidden');
}

function showEmailLoginForm() {
    const emailLoginForm = document.getElementById('emailLoginForm');
    emailLoginForm.classList.remove('hidden');
}