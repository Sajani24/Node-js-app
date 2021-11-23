const express = require('express')

const port = 8080
const host = '0.0.0.0';

const mysql = require('mysql2');

const mysqlConfig = {
    host: "mysql_server",
    user: "toto",
    password: "toto",
    database: "db"
  }
  
let con = null

const app = express()

con.connect(function(err) {
    if (err) throw err;
    console.log('connected');
  });

const query = util.promisify(con.query).bind(con);

http.createServer(async function (request, response) {

    await query("UPDATE counterTable SET counter_count = counter_count+1 WHERE counter_id = 1");
    const userCount = query('SELECT counter_count FROM counterTable WHERE counter_id = 1');

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.write('Hello to my node js app\n');

    response.write(' I have been seen '+userCount+' times!\n');

    response.end();

}).listen(3000);
