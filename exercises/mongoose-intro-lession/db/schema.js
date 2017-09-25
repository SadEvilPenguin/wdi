//##########################################//
//This code will go in a different file.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

//##########################################//
//This is what a schema file will look like

const Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title: String,
    unit: String
});

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const StudentSchema = new Schema({
    name: String,
    age: Number,
    projects: [ProjectSchema]
});

const ProjectModel = mongoose.model("Project", ProjectSchema);
const StudentModel = mongoose.model("Student", StudentSchema);


//##########################################//
//This code will go in a different file.

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
    console.log("database has been connected!");
});

// Disconnect from database
db.close();
//##########################################//