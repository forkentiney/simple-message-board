const { Router } = require('express');
const { createNewMessage } = require('../controllers/createMessage');

const newMessagesRouter = Router();

newMessagesRouter.get('/', (req, res) => {
	res.render('newMessages', { title: 'New Message' });
});

newMessagesRouter.post('/', createNewMessage);

module.exports = newMessagesRouter;
