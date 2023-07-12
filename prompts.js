
const inquirer = require ('inquirer');
const { addDept, addRole, addEmployee, updateEmployeeRole } = require('./query');
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

const employeePrompt = [
    {
        type: 'text',
        message: 'enter an employee id:',
        name: 'id'
    },
    {
        type: 'text',
        message: 'enter a first name:',
        name: 'fName'
    },
    {
        type: 'text',
        message: 'enter a last name:',
        name: 'lName'
    },
    {
        type: 'text',
        message: 'enter a role id:',
        name: 'roleId'
    },
    {
        type: 'text',
        message: 'enter a manager id:',
        name: 'manId'
    },
];



const updatePrompt = [
    {
        type: 'text',
        message: 'enter an role id:',
        name: 'rolId'
    },
    {
        type: 'text',
        message: 'enter a employee id:',
        name: 'empId'
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

async function roleInquiry(callback) {
    const responses = await inquirer.prompt(rolePrompt);
    const anser = Object.values(responses);
    addRole(anser, callback);
}
async function employeeInquiry(callback) {
    const responses = await inquirer.prompt(employeePrompt);
    const anser = Object.values(responses);
    addEmployee(anser, callback);
}

async function employeeUpdate(callback) {
    const responses = await inquirer.prompt(updatePrompt);
    const anser = Object.values(responses);
    updateEmployeeRole(anser, callback);
}

module.exports = {Prompts, deptInquiry, roleInquiry, employeeInquiry, employeeUpdate};

 