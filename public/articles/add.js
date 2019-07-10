function submit() {
    const title = document.getElementById('title').value;
    const text = document.getElementById('text').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/articles');
    xhr.setRequestHeader('Content-Type', 'application/json');

    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');
    xhr.setRequestHeader('Authorization', `Basic ${btoa(login + ':' + password)}`);

    xhr.addEventListener('load', () => {
        location.href = xhr.status === 401 ? '/login.html#error' : '/articles/list.html';
    });

    xhr.send(JSON.stringify({
        title: title,
        text: text
    }));
}