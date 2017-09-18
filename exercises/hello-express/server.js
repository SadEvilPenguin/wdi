const express = require('express'); // Loading the express module on our server
const app = express(); // Creates a new instance of express on our server


app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/greeting', (req, res) => {
    res.send("Hey, WDI 12");
});

app.get('/rihanna', (req, res) => {
    if (req.query.work === "You see me I be") {
        res.send("Work work work work work");
    } else {
        res.send("No Work")
    }
});

app.get('/:name', (req, res) => {
    console.log(req.params);
    res.send(`Hello, ${req.params.name}!`);
});

app.get('/food/:food', (req, res) => {
    console.log(req.params);
    res.send(`I really love ${req.params.food}!`);
});

app.get('/hello/:name', function(req, res) {
    res.send({ params: req.params, queries: req.query });
});

app.get('/math/:operator', (req, res) => {
    let total = 0;
    switch (req.params.operator) {
        case 'add':
            total = Number(req.query.num1) + Number(req.query.num2)
            res.send(`${total}`);
            break;
        case 'subtract':
            total = Number(req.query.num1) - Number(req.query.num2)
            res.send(`${total}`);
            break;
        case 'multiply':
            total = Number(req.query.num1) * Number(req.query.num2)
            res.send(`${total}`);
            break;
        case 'divide':
            total = Number(req.query.num1) / Number(req.query.num2)
            res.send(`${total}`);
            break;
        case 'exponent':
            total = Math.pow(Number(req.query.num1), Number(req.query.num2));
            res.send(`${total}`);
            break;
        case 'modulus':
            total = Number(req.query.num1) % Number(req.query.num2);
            res.send(`${total}`);
            break;
        default:
            res.send(418);
    }
});

const port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, () => {
    // tells the server where to listen for requests on port 3000

    console.log('hello-express is listening on port ' + port);
}); // actualizing the line above