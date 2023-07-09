const {Prompts}= require('./prompts');



async function runPrompts() {
    const response = await Prompts();
    console.log('users answer is ', response);
    resSwitch(response);
}

runPrompts();

// console.log("view all departments" === answer);
const  { viewDep, viewRoles, viewEmployee, addDept, addRole, addEmployee, updateEmployeeRole } = require('./query');

function resSwitch(response) {
    switch (response) {
        case "view all departments": 
        viewDep();
            break;
    
        case "view all roles": 
        viewRoles();
            break;
    
        case "view all employees": 
        viewEmployee();
            break;
    
        case "add a department": 
        addDept();
            break;
    
        case "add a role": 
        addRole();
            break;
    
        case "add an employee": 
        addEmployee();
            break;
    
        case "update an employee role": 
        updateEmployeeRole();
            break;
    
        default:
            return "Unrecognized option.";
    }
}

