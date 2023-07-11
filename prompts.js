
const inquirer = require ('inquirer');
const { addDept } = require('./query');
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

const depPrompt = [
    {
        type: 'text',
        message: 'enter a department id:',
        name: 'id'
    },
    {
        type: 'text',
        message: 'enter a department name:',
        name: 'title'
    }
];

const rolePrompt = [
    {
        type: 'text',
        message: 'enter a role id:',
        name: 'id'
    },
    {
        type: 'text',
        message: 'enter a role name:',
        name: 'title'
    },
    {
        type: 'text',
        message: 'enter a salary:',
        name: 'salary'
    },
    {
        type: 'text',
        message: 'enter a department id:',
        name: 'depId'
    },
];


async function Prompts() {
    const responses = await inquirer.prompt(questions);
    const answer = Object.values(responses)[0];
    return answer;
}

async function deptInquiry(callback) {
    const responses = await inquirer.prompt(depPrompt);
    const anser = Object.values(responses);
    addDept(anser, callback);
    
}

module.exports = {Prompts, deptInquiry};

 