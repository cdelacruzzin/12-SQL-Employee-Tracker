const Prompts= require('./prompts');




Prompts();
const answer = Prompts.answer;

console.log(answer);

const express = require('express');


const port = process.env.DA_PORT || 3001;
const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));




function resSwitch(answer) {
    switch (answer) {
        case "view all departments": 
            ;
            break;
    
        case "view all roles": 
            return "view all roles.";
            break;
    
        case "view all employees": 
            return "view all employees.";
            break;
    
        case "add a department": 
            return "add a department.";
            break;
    
        case "add a role": 
            return "add a role.";
            break;
    
        case "add an employee": 
            return "add an employee.";
            break;
    
        case "update an employee role": 
            return "update an employee role.";
            break;
    
        default:
            return "Unrecognized option.";
    }
}

