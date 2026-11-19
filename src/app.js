const express = require('express');
const path = require('node:path');

const app = express();
const indexRouter = require('./routes/indexRouter');
const newMessagesRouter = require('./routes/newMessagesRouter');

app.use('/', indexRouter);
app.use('/new', newMessagesRouter);
