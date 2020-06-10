const Employee = require("../lib/Employee");
module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    } 

    getRole() {
        return "Intern";
      }
    getSchool() {
        return this.school;
    }  
}