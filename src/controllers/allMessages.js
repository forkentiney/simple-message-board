const db = require('../models/queries');

async function getAllMessages(req, res) {
	const messages = await db.getAllMessages();
	res.render('index', { title: 'Simple Message Board', messages: messages });
};

module.exports = { getAllMessages };
