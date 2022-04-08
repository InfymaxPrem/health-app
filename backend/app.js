const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

module.exports = app; 