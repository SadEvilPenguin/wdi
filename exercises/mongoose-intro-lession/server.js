const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/students');

const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
    console.log("database has been connected!");
});


const studentController = require('./controllers/student_controller.js')

app.use('/students', studentController)


const port = 3000;
app.listen(port, () => {
    console.log(`Express started on ${port}`)
})