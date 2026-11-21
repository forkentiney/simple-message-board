const db = require('../models/db');

async function getMessageDetails(req, res) {
	const id = req.params.id;
	const message = await db.getMessageById(id)
	res.render('messageDetails', { title: 'Message Details', message: message });
};

module.exports = { getMessageDetails };
