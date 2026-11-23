const db = require('./database');

async function getAllMessages() {
	const { rows } = await db.query('SELECT * FROM messages');
	if (rows.length === 0) {
		return [{
			name: 'No messages yet',
			message: 'Create a new message by using the button below!',
			added: 'The beginning of time',
		}];
	} else {
		return rows;
	};
};

async function createNewMessage(newMessage) {
	const name = newMessage.name;
	const message = newMessage.message;
	await db.query('INSERT INTO messages (name, message) VALUES ($1, $2)', [newMessage.name, newMessage.message]);
}

module.exports = {
	getAllMessages,
	createNewMessage,
}
