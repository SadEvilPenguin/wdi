const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.query);

    res.render('greeting', {
        data: req.query.saying
    });
});

module.exports = router;