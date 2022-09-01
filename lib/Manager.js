const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        console.log(`${this.officeNumber}`)
    }
    getRole() {
        if (this.officeNumber){ 
        console.log('Manager');
        };
    };
};

const manager = new Manager(7);
manager.getRole();

module.exports = Manager;