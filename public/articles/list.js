const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/articles2');

const login = localStorage.getItem('login');
const password = localStorage.getItem('password');
xhr.setRequestHeader('Authorization', `Basic ${btoa(login + ':' + password)}`);

xhr.responseType = 'json';
xhr.addEventListener('load', () => {
    if (xhr.status === 401) {
        location.href = '/login.html#error';
    }
    const articles = xhr.response;
    const container = document.getElementById('container');
    for (const article of articles) {
        const articleContainer = document.createElement('article');
        const titleContainer = document.createElement('h2');
        titleContainer.innerText = article.title;
        const textContainer = document.createElement('div');
        textContainer.innerHTML = article.text;
        articleContainer.append(titleContainer, textContainer);
        container.append(articleContainer);
    }
});
xhr.send();