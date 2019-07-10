const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

app.use(express.static('public/'));

app.use(basicAuth({
    users: {
        'foo': 'bar'
    }
}));

app.use(express.json());

const authors = require('./authors');
app.use('/api/authors', authors);

const articles = require('./articles');
app.use('/api/articles2', articles);

app.use((req, res, next) => {
    res.send('Not found!');
});

app.listen(3000);