
const inquirer = require ('inquirer');

const questions = [
    {
        type: 'list',
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
];

function Prompts() {
    return inquirer.prompt(questions).then((responses) => {
        answer = Object.values(responses)[0];
        console.log(answer);  // log the user's responses
    });;
}

module.exports = Prompts;

