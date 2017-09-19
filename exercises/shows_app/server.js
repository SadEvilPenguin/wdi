const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/shows', (req, res) => {
    const faveShows = ["The office", "Lost", "Rick & Morty", "Save by the bell", "The i.t. crowd", "Daredevil", "Cosmos"];

    res.render('shows', {
        showsList: faveShows
    });
});

app.get('/music', (req, res) => {
    const faveMusic = ["Radiohead", "Modest Mouse", "Cold war Kids", "AC/DC"];

    res.render('music', {
        musicList: faveMusic
    });
});


const port = process.env.PORT || 3001; // tells the server where to listen for requests

app.listen(port, () => {
    // tells the server where to listen for requests on port 3000

    console.log('hello-express is listening on port ' + port);
});