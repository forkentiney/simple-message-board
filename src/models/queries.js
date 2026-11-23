const db = require('./database');

const getTimeDifference = (current, previous) => {
	const minute = 60 * 1000;
	const hour = minute * 60;
	const day = hour * 24;
	const month = day * 30;
	const year = day * 365;

	const elapsed = current - previous;

	if (elapsed < minute) {
		return Math.round(elapsed/1000) + ' seconds ago';
	} else if (elapsed < hour) {
		return Math.round(elapsed/minute) + ' minutes ago';
	} else if (elapsed < day) {
		return Math.round(elapsed/hour) + ' hours ago';
	} else if (elapsed < month) {
		return 'about ' + Math.round(elapsed/day) + ' days ago';
	} else if (elapsed < year) {
		return 'about ' + Math.round(elapsed/month) + ' months ago';
	} else {
		return 'about ' + Math.round(elapsed/year) + ' years ago';
	};
};

async function getAllMessages() {
	const { rows } = await db.query('SELECT * FROM messages');
	if (rows.length === 0) {
		return [{
			name: 'No messages yet',
			message: 'Create a new message by using the button below!',
			added: 'The beginning of time',
		}];
	} else {
		for (let i = 0; i < rows.length; i++) {
			const addedTime = rows[i].added.getTime();
			const currentTime = new Date().getTime();
			const timeDifference = getTimeDifference(currentTime, addedTime);
			rows[i].added = timeDifference;
		}
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
