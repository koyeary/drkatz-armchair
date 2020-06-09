const Employee = require("../lib/Employee");
module.exports = class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
      super(name, id, email, role);
      this.officeNumber = officeNumber;
//set office number via constructor argument
      }
    }