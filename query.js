
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
    db.query(sql, (err, rows) => console.table(rows));
}

function viewRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => console.table(rows));
}

function viewEmployee() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => console.table(rows));  
}

function addDept() {

    const values = `8, "chef"`;
    const sql = `INSERT INTO department (id, department_name)
    VALUES (${values})`;

    db.query(sql, (err, rows) => console.log(`successfully added (${values}) to database`));  
}

function addRole() {

    const values = `12, "head chef", 6000.00, 8`;
    const sql = `INSERT INTO role (id, title, salary, department_id)
    VALUES (${values})`;

    db.query(sql, (err, rows) => console.log(`successfully added (${values}) to database`));  
}

function addEmployee() {

    const values = `5, 'pawa', 'raca', 8, 2`;
    const sql = `INSERT INTO role employee (id,  first_name, last_name, role_id, manager_id)
    VALUES (${values})`;

    db.query(sql, (err, rows) => console.log(`successfully added (${values}) to database`));  
}






addEmployee();







viewRoles();
viewDep();
viewEmployee();





