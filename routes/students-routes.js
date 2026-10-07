
const express = require('express');
const router = express.Router();
const { listStudents, createStudent, getStudentByID } = require('../controllers/students-controllers')


router.get('/', listStudents)
router.post('/', createStudent)
router.get('/:id', getStudentByID)




module.exports = router;