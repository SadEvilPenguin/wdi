const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const favoriteFoods = ["Jeni's Almond Butter ice cream", 'Tacos from Superica', 'A Breakfast Sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in Downtown Los Angeles', 'Pizza from Little Star in San Francisco'];

    res.render('favorite-foods', {
        foodList: favoriteFoods
    });
});

module.exports = router;