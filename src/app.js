const express = require('express');
const path = require('node:path');

const app = express();
const indexRouter = require('./routes/indexRouter');
const newMessagesRouter = require('./routes/newMessagesRouter');
const messageDetailsRouter = require('./routes/messageDetailsRouter');

const navLinks = [
	{ href: "/", text: "Home" },
	{ href: "/new", text: "New Message" },
];

app.use((req, res, next) => {
	res.locals.links = navLinks;
	next();
});

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newMessagesRouter);
app.use('/message', messageDetailsRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = 3000;
app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Listening on port ${PORT}`);
});
