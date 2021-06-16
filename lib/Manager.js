const Employee = require('./Employee')

class Manager extends Employee {
    constructor (id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
        this.job = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return this.job;
    }
}

module.exports = Manager;