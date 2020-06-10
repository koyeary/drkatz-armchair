const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output"); //User output directory.
const outputPath = path.join(OUTPUT_DIR, "team.html"); //Specifies the file in the output directory.

const render = require("./lib/htmlRenderer"); 


let employees = []; //This array captures employee objects.

newTeam();

//This function captures the basic information needed to build individual team members.
function newTeam() {
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
        //The follow then statements capture information specific to each employee role.
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
                        addEmployee();
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
                        addEmployee();
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
                        addEmployee();
                    })
            }
        })

}

//If the user wants to add another employee, execute the new team function again.
function addEmployee() {
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
                newTeam();
                //If the user has no more employees to add to the team, save the file to the output directory.
            } else if (answer === "No") {
                const team = render(employees);
                //Create the output directory and save the file to the directory. If the directory already exists, save the file to the existing directory.
                fs.mkdir(OUTPUT_DIR, err => {
                    if (err) {
                            console.log("File saved to output directory.");
                            writeHtml(team);
                    } else {
                            console.log("Output directory created. File saved to output directory.");
                            writeHtml(team);
                            }
                        })
                    } 
                })
       
}

//This function writes your rendered employee generator to the team.html file.
function writeHtml(team) {
    fs.writeFile(outputPath, team, err => {
        if (err) {
            console.log("Error! File did not save successfully.");
        } else {
            console.log("File saved successfully");
        }
    })
}


