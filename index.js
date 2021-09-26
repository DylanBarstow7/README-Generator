// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generate")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {   
        type: 'input',
        name: 'title',
        message: 'Enter a description of your project.'
    },
    {   
        type: 'input',
        name: 'title',
        message: 'How does this project get used?'
    },
    {   
        type: 'input',
        name: 'title',
        message: 'What are the installation instructions for your project?'
    },
    {   
        type: 'input',
        name: 'title',
        message: 'How can users contribute to this application?'
    },
    {   
        type: 'input',
        name: 'title',
        message: 'How do you test your application?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license should be used?',
        choices: ["Apache 2.0", "GNU GPL v2","MIT", "No License"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
