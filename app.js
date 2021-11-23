const express = require('express')

const port = 8080
const host = '0.0.0.0';

const mysql = require('mysql2');

const mysqlConfig = {
    host: "mysql_server",
    user: "toto",
    password: "toto",
    database: "mysql-db"
  }
  
let con = null

const app = express()

app.get('/', function (req, res) {
  res.send('hello to my node js app')
})

app.get('/connect', function (req, res) {
  con =  mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) throw err;
    res.send('connected')
  });
})

app.get('/create-table', function (req, res) {
  con.connect(function(err) {
    if (err) throw err;
    const sql = `
    CREATE TABLE IF NOT EXISTS numbers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      number INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )  ENGINE=INNODB;
  `;
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send("numbers table created");
    });
  });
})

app.listen(host, port);
console.log(`Running on http://${host}:${port}`);
