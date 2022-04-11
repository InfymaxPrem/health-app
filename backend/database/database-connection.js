const mysql = require('mysql2');
require('dotenv').config();


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

module.exports = db;