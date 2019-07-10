function login() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    location.href = '/articles/list.html';
}

if (location.href.endsWith('#error')) {
    const errorBox = document.createElement('div');
    errorBox.style.backgroundColor = 'red';
    errorBox.innerText = 'Please enter valid login and password';
    document.body.append(errorBox);
}