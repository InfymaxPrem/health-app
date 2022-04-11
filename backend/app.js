const express = require('express');
const cors = require('cors');
const db  = require('./database/database-connection.js');



const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();


app.use(express.json());

app.use(cors());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

module.exports = app; 