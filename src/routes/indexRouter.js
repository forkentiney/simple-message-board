const { Router } = require('express');
const { getAllMessages } = require('../controllers/allMessages');

const indexRouter = Router();

//const messages = [
//	{
//		id: crypto.randomUUID(),
//		text: "Hi there!",
//		user: "Amando",
//		added: new Date(),
//	},
//	{
//		id: crypto.randomUUID(),
//		text: "Hello world!",
//		user: "Charles",
//		added: new Date(),
//	},
//];

indexRouter.get('/', getAllMessages);

module.exports = indexRouter;
