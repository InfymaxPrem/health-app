const express = require('express');
require('dotenv').config();
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


app.listen(port, () => {
  console.log(`Listening on ${port}...`);
}); 