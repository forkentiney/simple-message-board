const { Router } = require('express');
const { getAllMessages } = require('../controllers/allMessages');
const { createNewMessage } = require('../controllers/createMessage');

const indexRouter = Router();

indexRouter.get('/', getAllMessages);
indexRouter.post('/', createNewMessage);

module.exports = indexRouter;
