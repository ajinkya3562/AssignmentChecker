'use strict'

const express = require('express');
const router = new express.Router();

const assignment = require(global.__base + 'controllers/index.js').assignment;
const student = require(global.__base + 'controllers/index.js').student;
const credentials = require(global.__base + 'credentials/index.js');
const KnolspakeService = require(global.__base + 'knolspakeService/service/index.js');
const io = require(global.__base + 'io.js');

router.get('/_stat', function (req, res) {
	res.send('OK');
});

router.post('/assesment/_create', [
	credentials.validateTeacher
]);

router.post('/assesment/_update', [ 
	credentials.validateTeacher
]);

router.post('/assesment/_delete', [ 
	credentials.validateTeacher
]);

router.post('/student/_delete', [ 
	credentials.validateTeacher, student.validateStudentDetails, student.load, student.deleteStudent, student.terminate
]);

router.post('/student/_create', [ 
	credentials.validateTeacher, student.validateStudentDetails, student.load, student.createStudent, student.terminate
]);

router.post('/student/_update', [ 
	credentials.validateTeacher, student.validateStudentDetails, student.load, student.updateStudent, student.terminate
]);

router.post('/assign',[
	credentials.validateTeacher
]);

router.post('/unassign', [
	credentials.validateTeacher
]);

router.post('/submit', [ 
	credentials.validateStudent, assignment.validateAssignment, KnolspakeService.evaluateScore, assignment.terminate
]);

router.post('/getRanking', [
	credentials.validateTeacher
]);

router.use(io.respond)

module.exports = router;