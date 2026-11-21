const messages = [
	{
		id: crypto.randomUUID(),
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		id: crypto.randomUUID(),
		text: "Hello world!",
		user: "Charles",
		added: new Date(),
	},
];

async function getAllMessages() {
	return messages;
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
