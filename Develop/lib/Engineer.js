const Employee = require("../lib/Employee");
module.exports = class Engineer extends Employee {
    constructor(name, id, email, role, gitHub) {
        super(name, id, email, role);
        this.gitHub = gitHub;
//can set GitHub account via constructor     
    }
}       
  