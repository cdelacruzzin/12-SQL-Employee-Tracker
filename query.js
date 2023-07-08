
require('dotenv').config();
const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


function viewDep() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        console.log({
          message: 'success',
          data: rows
        });
      });
}

function viewRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        console.info({
          message: 'success',
          data: rows
        });
      });
}

function viewEmployee() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => console.table(rows));
      
}




viewEmployee();
