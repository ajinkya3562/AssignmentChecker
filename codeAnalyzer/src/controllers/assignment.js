'use strict'

exports.assign = function (req, res, next) {

}

exports.unassign = function (req, res, next) {

}

exports.validateAssignment = function (req, res, next) {
	if (typeof req.body.text !== 'string' || req.body.text.length <= 0) {

	} else if (!Array.isArray(req.body.topics)) {

	} else if (Array.isArray(req.body.topics)) {
		for (let s of req.body.topics) {
			if (typeof s !== 'string') {

			}
		}
	}
	next(req.dataStore.responseCode);
}

exports.terminate = function (req, res, next) {
	req.body.score = req.dataStore.score;
	next();
}