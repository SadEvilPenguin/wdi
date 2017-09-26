const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js")

const StudentModel = Schema.StudentModel
const ProjectModel = Schema.ProjectModel
    //Index Route
router.get('/', (req, res) => {
        //finds all students then sends student data to view or catches error
        StudentModel.find({})
            .then((students) => {
                res.render('students/index', {
                    students
                })
            })
            .catch((err) => {
                res.send(err);
            })
    })
    //New Route - allows user to add data for db but does later
router.get('/new', (req, res) => {
        //renders view
        res.render('students/new')
    })
    //Show Route
router.get("/:id", (req, res) => {
        const studentId = req.params.id

        //finds the student in the db then sends to views to render or catch error
        StudentModel.findById(studentId)
            .then((student) => {
                res.render('students/show', {
                    student
                })
            })
            .catch((err) => {
                res.send(err);
            })
    })
    //New Route - adds student to db
router.post('/', (req, res) => {
        //can pass this variable directly into db as long as we name or inputs properly
        const newStudent = req.body
            //gets data user entered on /new page and adds to db then redirects to index or catches error
        StudentModel.create(newStudent)
            .then(() => {
                res.redirect('/students')
            })
            .catch((err) => {
                res.send(err);
            })
    })
    //Update Route
router.get("/:id/edit", (req, res) => {
        //gets student id
        const studentId = req.params.id
            //finds student from db and then send data to view for rendering edit form or catches an error
        StudentModel.findById(studentId)
            .then((student) => {
                res.render('students/edit', {
                    student
                })
            })
            .catch((err) => {
                res.send(err);
            })
    })
    //Updates data in the dbs
router.put('/:id', (req, res) => {
        //gets the data from update form and student id
        const updatedStudent = req.body
        const studentId = req.params.id
            //Finds student in db and updates data then redirects to student page or catches an error
            //Also using method override to use a put request rather than post
        StudentModel.findByIdAndUpdate(studentId, updatedStudent, { new: true })
            .then(() => {
                res.redirect(`/students/${studentId}`)
            })
            .catch((err) => {
                res.send(err);
            })

    })
    //Deletes the student
router.delete('/:id', (req, res) => {
    const studentId = req.params.id
    StudentModel.findByIdAndRemove(studentId)
        .then((student) => {
            res.redirect('/students');
        })
        .catch((err) => {
            res.send(err);
        })
})

module.exports = router