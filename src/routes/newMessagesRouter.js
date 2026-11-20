const { Router } = require('express');

const newMessagesRouter = Router();

newMessagesRouter.get('/', (req, res) => {
	res.render('newMessages', { message: "Really, it does" });
});

module.exports = newMessagesRouter;
