
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

function addDept(values) {

    values = `8, "chef"`;
    const sql = `INSERT INTO department (id, department_name)
    VALUES (${values})`;

    db.query(sql, (err, rows) => console.log(`successfully added (${values}) to database`));
}

function addRole(values) {

    values = `12, "head chef", 6000.00, 8`;
    const sql = `INSERT INTO role (id, title, salary, department_id)
    VALUES (${values})`;

    db.query(sql, (err, rows) => console.log(`successfully added (${values}) to database`));
}

function addEmployee(values) {

    values = `5, 'pawa', 'raca', 8, 2`;
    const sql = `INSERT INTO employee (id,  first_name, last_name, role_id, manager_id)
    VALUES (${values})`;

    db.query(sql, (err, rows) => console.log(`successfully added (${values}) to database`));
}

function updateEmployeeRole() {

    const role_id = 3;
    const id = 1;

    const sql = `SELECT * FROM employee WHERE id = ?`;

    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result == "") {
            console.log('this id does not exist');
            return;
        }

        const sql = `SELECT * FROM role WHERE id = ?`;
        db.query(sql, role_id, (err, result) => {
            // console.log(result);
            if (err) {
                console.log(err);
            }
            if (result == "") {
                console.log('this role id does not exist');
                return;
            }

            const sql =  `UPDATE employee SET role_id = ? WHERE id = ?`;
            db.query(sql, [role_id, id], (err, result) => {
                if (err) {
                    console.log(err);
                } 
                console.log('Employee role updated successfully.');
            });
        });

    });
}

// viewEmployee();
updateEmployeeRole();
// viewRoles();
// viewDep();
// viewEmployee();


module.exports = { viewDep, viewRoles, viewEmployee, addDept, addRole, addEmployee }





