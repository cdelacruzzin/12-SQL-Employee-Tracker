
require('dotenv').config();
const mysql = require('mysql2');



const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


function viewDep(callback) {
    const sql = `SELECT * FROM department`;
    console.log('\n');
    db.query(sql, (err, rows) => {
        console.table(rows)
        callback();  
    });
}

function viewRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => console.table(rows));
}

function viewEmployee() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => console.table(rows));
}



//add if values already exist, show message
function addDept(values, callback) {
    const id = parseInt(values[0]);
    const title = values[1];

    console.log(id,' ', title);
    const sql = `INSERT INTO department (id, department_name) VALUES (${id}, "${title}")`;

    db.query(sql, (err, rows) => {
        console.log(`successfully added (${values}) to database`)
        callback();
    });
}


function addRole(values) {

    const id = parseInt(values[0]);
    const title = values[1];
    const salary = parseInt(values[2]);
    const depId =  parseInt(values[3]);
    values = `${id}, "${title}", ${salary}, ${depId}`

    const sql = `INSERT INTO role (id, title, salary, department_id)
    VALUES (${values})`;

    db.query(sql, (err, rows) => console.log(`successfully added (${values}) to database`));
}

function addEmployee(values) {

    const id = parseInt(values[0]);
    const fName = values[1];
    const lName = values[2];
    const roleId = parseInt(values[3]);
    const manId =  parseInt(values[4]);
    values = `${id}, "${fName}", "${lName}", ${roleId}, ${manId}`
    
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
// updateEmployeeRole();
// viewRoles();
// viewDep();
// viewEmployee();


module.exports = { viewDep, viewRoles, viewEmployee, addDept, addRole, addEmployee, updateEmployeeRole }





