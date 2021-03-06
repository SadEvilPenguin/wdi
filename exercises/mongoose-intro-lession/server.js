const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


const app = express()

mongoose.connect('mongodb://localhost/students');

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

const db = mongoose.connection

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
    console.log(err)
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
    console.log("database has been connected!")
});


const studentController = require('./controllers/student_controller.js')
const projectsController = require('./controllers/projects_controller.js')

app.use('/students', studentController)
app.use('/students/:studentId/projects', projectsController)
app.get('/', (req, res) => {
    res.redirect('/students')
})

const port = 3000
app.listen(port, () => {
    console.log(`Express started on ${port}`)
})