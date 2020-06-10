const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

addEmployee();

function addEmployee() {
    return inquirer
        .prompt([
            {
                message: "Employee name:",
                name: "name"
            },
            {
                message: "Employee ID:",
                name: "id"
            },
            {
                message: "Employee Email:",
                name: "email"
            },
            {
                type: "rawlist",
                name: "role",
                message: "Employee Role:",
                choices: ["Engineer",
                    "Intern",
                    "Manager"]
            }
        ])
        .then(function (answers) {
            const name = answers.name;
            const id = answers.id;
            const email = answers.email;
            const role = answers.role;
            if (role === "Engineer") {
                return inquirer
                    .prompt(
                        {
                            name: "gitHub",
                            message: "GitHub username:"
                        }

                    )
                    .then(function (answers) {
                        const gitHub = answers.gitHub;
                        const engineer = new Engineer(name, id, email, gitHub);
                        employees.push(engineer);
                        addToTeam();
                    })
            } else if (role === "Intern") {
                return inquirer
                    .prompt(
                        {
                            name: "school",
                            message: "School:"
                        }
                    )
                    .then(function (answers) {
                        const school = answers.school;
                        const intern = new Intern(name, id, email, school);
                        employees.push(intern);
                        addToTeam();
                    })
            } else if (role === "Manager") {
                return inquirer
                    .prompt(
                        {
                            name: "officeNumber",
                            message: "Office Number:"
                        }

                    )
                    .then(function (answers) {
                        const officeNumber = answers.officeNumber;
                        const manager = new Manager(name, id, email, officeNumber);
                        employees.push(manager);
                        addToTeam();
                    })
            }
        })

}


function addToTeam() {
    return inquirer
        .prompt(
            {
                type: "rawlist",
                name: "buildTeam",
                message: "Would you like to add another Team Member?",
                choices: ["Yes", "No"]
            }
        )
        .then(function (answers) {
            const answer = answers.buildTeam;
            if (answer === "Yes") {
                addEmployee();
            } else if (answer === "No") {
                const team = render(employees);
                fs.mkdir(OUTPUT_DIR, err => {
                    if (err) {
                            console.log("error");
                            writeIt(team);
                    } else {
                            console.log("saved");
                            writeIt(team);
                            }
                        })
                    } 
                })
       
}

function writeIt(team) {
    fs.writeFile(outputPath, team, err => {
        if (err) {
            console.log("error file");
        } else {
            console.log("saved file");
        }
    })
}




// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

