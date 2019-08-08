'use strict'
const credentials = require(global.__base + 'constants/index.js');

exports.validateTeacher = function (req, res, next) {
	let token = credentials.credentials.teacher.token;
	if (req.body.token !== token) {

	}
	next();
}

exports.validateStudent = function (req, res, next) {
	let token = credentials.credentials.student.token;
	if (req.body.token !== token) {

	}
	next();
}