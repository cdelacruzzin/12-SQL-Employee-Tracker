const {Prompts, deptInquiry, roleInquiry, employeeInquiry}= require('./prompts');



async function runPrompts() {
    const response = await Prompts();
    console.log('users answer is \n', response);
    resSwitch(response);
}
runPrompts();

async function addDeptPrompt() {
    const response = await deptInquiry(runPrompts);
    console.log(response);
}

async function addRolePrompt() {
    const response = await roleInquiry(runPrompts);
    console.log(response);
}

async function addEmployeePrompt() {
    const response = await employeeInquiry(runPrompts);
    console.log(response);
}

// console.log("view all departments" === answer);
const  { viewDep, viewRoles, viewEmployee, addDept, addRole, addEmployee, updateEmployeeRole } = require('./query');

function resSwitch(response) {
    console.log('\n');
    switch (response) {
        case "view all departments": 
        viewDep(runPrompts);
            break;
    
        case "view all roles": 
        viewRoles(runPrompts);
            break;
    
        case "view all employees": 
        viewEmployee(runPrompts);
            break;
    
        case "add a department": 
        addDeptPrompt();
            break;
    
        case "add a role": 
        addRolePrompt();
            break;
    
        case "add an employee": 
        addEmployeePrompt();
            break;
    
        case "update an employee role": 
        updateEmployeeRole();
        runPrompts();
            break;
    
        default:
            return "Unrecognized option.";
    }
}

// module.exports = {runPrompts};