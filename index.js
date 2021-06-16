const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const roleQuestion = [
    {
        type: "list",
        name: "role",
        message: "Which type of team memeber would you like to add?",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's GitHub username?"
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school name?"
    }
];