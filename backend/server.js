const express = require('express');
require('dotenv').config();
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);


app.listen(port, () => {
  console.log(`Listening on ${port}...`);
}); 