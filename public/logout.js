function logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    location.href = '/login.html';
}