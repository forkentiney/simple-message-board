const { Router } = require('express');

const newMessagesRouter = Router();

newMessagesRouter.get('/', (req, res) => {
	res.render('newMessages');
});

module.exports = newMessagesRouter;
