const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
/* const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer"); */

function promptUser() {
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
                message: "This employee is an:",
                choices: ["Engineer",
                        "Intern",
                        "Manager"]
            }
        ])
        .then(function(answers) {
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
                    .then(function(answers) {
                        const gitHub = answers.gitHub;
                        console.log([name, id, email, role, gitHub]);
                        const engineer = new Engineer(name, id, email, role, gitHub);
                        console.log(engineer);
                    })
            } else if (role === "Intern") {
                return inquirer
                .prompt(
                   {    
                        name: "school",
                        message: "School:"
                   }
                )
                .then(function(answers) {
                    const school = answers.school;
                    const intern = new Intern(name, id, email, role, school);
                    console.log(intern);
                })
            } else if (role === "Manager") {
                return inquirer
                .prompt(
                   {    
                        name: "officeNumber",
                        message: "Office Number:"
                   }
                    
                )
                .then(function(answers) {
                    const officeNumber = answers.officeNumber; 
                    const manager = new Manager(name, id, email, role, officeNumber);
                    console.log(manager);
                })
                 }   
                })    
                    
}

promptUser();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
