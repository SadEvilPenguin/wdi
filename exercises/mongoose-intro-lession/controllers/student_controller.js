const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;
const ProjectModel = Schema.ProjectModel;

router.get('/', (req, res) => {

    StudentModel.find({})
        .then((students) => {
            res.render('students/index', {
                students: students
            });
        })
        .catch((err) => {
            res.send(err);
        })
})

router.get("/:id", (req, res) => {
    const studentId = req.params.id

    StudentModel.findById(studentId)
        .then((student) => {
            res.render('students/show', {
                student: student
            });
        })
        .catch((err) => {
            res.send(err);
        })
})

router.get('/:id/delete', (req, res) => {

    const studentId = req.params.id
    StudentModel.findByIdAndRemove(studentId)
        .then((student) => {
            res.send('Deleted');
        })

})

module.exports = router