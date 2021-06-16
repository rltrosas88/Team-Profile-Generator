const Employee = require('./Employee')

class Intern extends Employee {
    constructor (id, name, email, school) {
        super(id, name, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return this.role;
    }
}

module.exports = Intern;