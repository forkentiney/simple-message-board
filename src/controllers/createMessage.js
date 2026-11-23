const db = require('../models/queries');

function createNewMessage(req, res) {
	const newMessage = {
		message: req.body.text,
		name: req.body.name,
	};
	db.createNewMessage(newMessage);
	res.redirect('/');
};

module.exports = { createNewMessage };
