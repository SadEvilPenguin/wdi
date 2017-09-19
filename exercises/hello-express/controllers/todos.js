const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //do stuff
    const todos = ["Do Laundry", "Cook food"]

    res.render('todos', {
        todos: todos
    })
});

router.get('/new', (req, res) => {
    //do stuff
    const todos = ["Do Laundry", "Cook food"]

    res.render('new', {})
});

router.get('/:id', (req, res) => {
    //do stuff
});

router.get('/:id/edit', (req, res) => {
    //do stuff
});

module.exports = router;