
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
    inquirer.prompt(questions).then((response) => {
        const answer = Object.values(response);
        resSwitch(answer[0]);
    });
}

function resSwitch(answer) {
    switch (answer) {

        case "view all departments": ;
        break;

        case "view all roles": ;
        break;

        case "view all employees": ;
        break;

        case "add a department": ;
        break;

        case "add a role": ;
        break;

        case "add an employee": ;
        break;

        case "update an employee role": ;
        break;
    };

}
Prompts();

module.exports = Prompts;   //exports Prompts