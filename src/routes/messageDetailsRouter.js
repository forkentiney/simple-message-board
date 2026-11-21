const { Router } = require('express');
const { getMessageDetails } = require('../controllers/specificMessage');

const messageDetailsRouter = Router();

messageDetailsRouter.get('/:id', getMessageDetails);

module.exports = messageDetailsRouter;
