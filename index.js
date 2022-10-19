const inquirer = require('inquirer')
const fs = require('fs')
const output = [];

// array to hold the question prompts for team manager
const teamManager = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the team manager'
    },
    {
        type: 'input',
        name: 'id',
        messsage: 'please enter their employee ID'
    },
    {
        type:'input',
        name: 'email',
        message: 'please enter their email address'
    },
    {
        type:'input',
        name: 'office',
        message: 'please enter their office number'
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add any more employees?',
        default: true,
    },
]

// Array to hold the prompts for engineer
const engineer = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the engineer',
    },
    {
        type: 'input',
        name: 'id',
        messsage: 'please enter their employee ID'
    },
    {
        type:'input',
        name: 'email',
        message: 'please enter their email address'
    },
    {
        type:'input',
        name: 'github',
        message: 'please enter their github username'
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add any more employees?',
        default: true,
    },
]

// Array to hold the prompts for intern
const intern = [
    {
        type:'input',
        name: 'name',
        message: 'please enter the name of the intern'
    },
    {
        type: 'input',
        name: 'id',
        messsage: 'please enter their employee ID'
    },
    {
        type:'input',
        name: 'email',
        message: 'please enter their email address'
    },
    {
        type:'input',
        name: 'school',
        message: 'Please enter the name of the school the intern is from'
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Would you like to add any more employees?',
        default: true,
    },

]

// menu optiions for adding an extra employee
const extraEmployee = [
    {  
        type: 'list',
        name: 'menu',
        message: 'please select which type of employee you would like to add',
        choices: ['intern','engineer']
    }
]

// fucntion to add engineer
const addEngineer = function () {
    inquirer.prompt(engineer).then((answers) => {
        output.push(JSON.stringify(answers));
        if (answers.askAgain) {
            addEmployee()
        } else {
            console.log(output.join(', '))
        }
    })
}

// function to add intern
const addIntern = function () {
    inquirer.prompt(intern).then((answers) => {
        output.push(JSON.stringify(answers));
        if (answers.askAgain) {
            addEmployee()
        } else {
            console.log(output.join(', '))
        }
    })
}

// function to select either an extra engineer or intern
const addEmployee = function () {
    inquirer.prompt(extraEmployee).then((answers) => {
        output.push(JSON.stringify(answers));
        if (answers.menu == 'engineer') {
            addEngineer()
        } else {
            addIntern()
        }
    })
}

// function to initialise prompts and ask for team manager details
const init = function() {
    inquirer.prompt(teamManager).then((answers) => {
        // write a markdown command here
        output.push(JSON.stringify(answers));
        // if 'askAgain' question for adding a new employee is true
        if (answers.askAgain) {
            addEmployee()
        } else {
            console.log(output.join(', '))
            // write function to push output into manager.js
        }
    })
}

init()