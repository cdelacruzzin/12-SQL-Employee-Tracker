const {Prompts}= require('./prompts');



async function runPrompts() {
    const response = await Prompts();
    console.log('users answer is \n', response);
    resSwitch(response);
}
runPrompts();

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
        addDept();
        runPrompts();
            break;
    
        case "add a role": 
        addRole();
        runPrompts();
            break;
    
        case "add an employee": 
        addEmployee();
        runPrompts();
            break;
    
        case "update an employee role": 
        updateEmployeeRole();
        runPrompts();
            break;
    
        default:
            return "Unrecognized option.";
    }
}

