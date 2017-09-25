const express = require('express');
const app = express();

const studentController = require('./controllers/student_controller.js')

app.use('/students', studentController)


const port = 3000;
app.listen(port, () => {
    console.log(`Express started on ${port}`)
})