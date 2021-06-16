const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerCard = require("./src/html");
const engineerCard = require("./src/html");
const internCard = require("./src/html");

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

const employeeCards =[];

function init() {
    inquirer.prompt(roleQuestion)
        .then(function (roleAnswer) {
            //if you choose Manager as your role go threw the Manager questions
            if (roleAnswer.role === "Manager") {
                console.log(roleAnswer.role);
                inquirer.prompt(managerQuestions)
                .then(function (managerAnswers) {
                    const managerHtml = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
                    employeeCards.push(managerCard(managerHtml));
                    moreEmployees();
                });
            } else if (roleAnswer.role === "Engineer") {
                console.log(roleAnswer.role);
                inquirer.prompt(engineerQuestions)
                .then(function (engineerAnswers) {
                    const engineerHtml = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
                    employeeCards.push(engineerCard(engineerHtml));
                    moreEmployees();
                });
            } else if (roleAnswer.role === "Intern") {
                console.log(roleAnswer.role);
                inquirer.prompt(internQuestions)
                .then(function (internAnswers) {
                    const internHtml = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                    employeeCards.push(internCard(internHtml));
                    moreEmployees();
                });

            }
    });
}


init();

function moreEmployees () {
    inquirer.prompt ([{
        type: "confirm",
        name: "moreEmployees",
        message: "Would you like to add more employees?",
        default: true,
    }])
    .then((answer) => {
        if (answer.moreEmployees) {
            init();
        } else {
            htmlBuild();
        }
    })
}

const htmlBuild = () => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"  
                integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        </head>
        
        <body>
            <header class = "team">
                <div class = "container text-center bg-gradient bg-danger text-white">
                    <h1>Team Profile</h1>
                </div>
            </header>
            <div class = "container">
                ${employeeCards.map(card => (
                    `<div class="row">
                        ${card}
                    </div>
                `))}
            </div>
        </body>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

        </html>`

    fs.writeFileSync('./dist/index.html', html, (err) => err ? console.log(err) : '')
}