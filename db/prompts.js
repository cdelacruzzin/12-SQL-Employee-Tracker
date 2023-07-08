
const inquirer = require ('inquirer');  //imports inquirer

const questions = [     //prompts to ask user
    {
        type: `list`,
        message: 'what would you like to do?',
        name: 'prompt',
        choices: [
            "view all departments",
            "view all roles", 
            "view all employees", 
            "add a department", 
            "add a role", 
            "add an employee", 
            "update an employee role"
        ]
    }
]
function Prompts (){    //function returns the promise for the inquirer
    return inquirer.prompt(questions);
}

Prompts();

module.exports = Prompts;   //exports Prompts