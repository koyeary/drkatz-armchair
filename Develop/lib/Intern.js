const Employee = require("../lib/Employee");
module.exports = class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
//can set school via constructor
    } 
}