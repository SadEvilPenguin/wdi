const express = require('express'); // Loading the express module on our server
const app = express(); // Creates a new instance of express on our server
const hbs = require('hbs');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'
const todosController = require('./controllers/todos.js');
const greetingController = require('./controllers/greeting.js');
const foodController = require('./controllers/favorite-food.js');
app.use('/todos', todosController);
app.use('/greeting', greetingController);
app.use('/favorite-foods', foodController);



const port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, () => {
    // tells the server where to listen for requests on port 3000

    console.log('hello-express is listening on port ' + port);
}); // actualizing the line above