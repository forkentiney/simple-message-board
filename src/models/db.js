const messages = [];

const defaultMessage = [{
	id: 'default',
	user: 'No messages yet',
	text: 'Create a new message by using the button above!',
	added: new Date(),
}];

async function getAllMessages() {
	if (messages.length > 0) {
		return messages;
	} else {
		return defaultMessage;
	};
};

async function getMessageById(id) {
	if (id === 'default') {
		return defaultMessage[0];
	} else {
		return messages.find(message => message.id === id);
	};
};

function createNewMessage(newMessage) {
	messages.push(newMessage);
};

module.exports = {
	getAllMessages,
	getMessageById,
	createNewMessage,
};
