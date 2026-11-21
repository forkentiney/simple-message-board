const messages = [];

async function getAllMessages() {
	if (messages.length > 0) {
		return messages;
	} else {
		return [{ 
			id: crypto.randomUUID(),
			user: 'No messages yet',
			text: 'Create a new message by using the button above!',
			added: new Date(),
		}];
	};
};

async function getMessageById(id) {
	return messages.find(message => message.id === id);
};

function createNewMessage(newMessage) {
	messages.push(newMessage);
};

module.exports = {
	getAllMessages,
	getMessageById,
	createNewMessage,
};
