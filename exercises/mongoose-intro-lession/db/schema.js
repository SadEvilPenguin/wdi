const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;


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


module.exports = {
    StudentModel: StudentModel,
    ProjectModel: ProjectModel
};