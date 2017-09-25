//##########################################//
//This code will go in a different file.
const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/students');

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

// First we create a new student. It's just like generating a new instance of a constructor function!
// const frankie = new StudentModel({ name: "Frankie P.", age: 30 });

// Then we save it to the database using .save
// frankie.save().then(console.log).catch(console.log)


// frankie.save()
//     .then((student) => {
//         console.log(student);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// var anna = new StudentModel({ name: "Anna", age: 28, projects: [] });
// var project1 = new ProjectModel({ title: "memory game", unit: "JS" });

// Now we add that project to a student's collection / array of projects.
// anna.projects.push(project1);

// In order to save that project to the student, we need to call `.save()` on the student -- not the project.
// anna.save().then(console.log).catch(console.log)

//Can also create this way:
// StudentModel.create({ name: 'Peter', age: 31 })
//     .then((student) => {
//         console.log(student);
//     })
//     .catch((err) => {
//         console.log(err._message);
//     })

module.exports = {
    StudentModel: StudentModel,
    ProjectModel: ProjectModel
};

//##########################################//
//This code will go in a different file.

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
//const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
// db.on('error', function(err) {
//     console.log(err);
// });

// Will log "database has been connected" if it successfully connects.
// db.once('open', function() {
//     console.log("database has been connected!");
// });

// Disconnect from database
//db.close();
//##########################################//