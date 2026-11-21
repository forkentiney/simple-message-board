const db = require('../models/db');

function createNewMessage(req, res) {
	const newMessage = {
		id: crypto.randomUUID(),
		text: req.body.text,
		user: req.body.name,
		added: new Date(),
	};
	db.createNewMessage(newMessage);
	res.redirect('/');
};

module.exports = { createNewMessage };
