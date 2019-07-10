const express = require('express');
const router = express.Router();
const client = require('./db');

router.get('/', (req, res) => {
    client.query('SELECT * FROM articles ORDER BY id', (err, result) => {
        res.json(result.rows);
    });
});

router.get('/:articleId(\\d+)', (req, res) => {
    client.query('SELECT * FROM articles WHERE id = $1',
        [req.params.articleId], (err, result) => {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            res.json(result.rows[0]);
        }
    });
});

router.post('/', (req, res) => {
    client.query('INSERT INTO articles (title, text) VALUES ($1, $2) RETURNING id',
        [req.body.title, req.body.text], (err, result) => {
            res.json(result.rows[0]);
        });
});

module.exports = router;