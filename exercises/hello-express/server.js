const express = require('express'); // Loading the express module on our server
const app = express(); // Creates a new instance of express on our server
const hbs = require('hbs');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.get('/greeting', (req, res) => {
    console.log(req.query);

    res.render('greeting', {
        data: req.query.saying
    });
});

app.get('/favorite-foods', function(req, res) {
    const favoriteFoods = ["Jeni's Almond Butter ice cream", 'Tacos from Superica', 'A Breakfast Sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in Downtown Los Angeles', 'Pizza from Little Star in San Francisco'];

    res.render('favorite-foods', {
        foodList: favoriteFoods
    });
});

const port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, () => {
    // tells the server where to listen for requests on port 3000

    console.log('hello-express is listening on port ' + port);
}); // actualizing the line above