
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

async function Prompts() {
    const responses = await inquirer.prompt(questions);
    const answer = Object.values(responses)[0];
    return answer;
}

module.exports = {Prompts};

