const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;
const ProjectModel = Schema.ProjectModel;

router.get('/', (req, res) => {

    StudentModel.find({})
        .then((students) => {
            res.send(students);
        })
        .catch((err) => {
            res.send(err);
        })
})


module.exports = router