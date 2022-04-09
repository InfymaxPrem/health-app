const http = require('http');
const mysql = require('mysql2');
require('dotenv').config();

const app = require('./app');

const port = process.env.PORT;

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,   
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
})

db.getConnection( (err, connection)=> {
  if (err) throw (err)
  console.log ("DB connected successful: ")
})

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});