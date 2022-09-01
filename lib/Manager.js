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

const managerEntry = new Manager('Patrick', 0000, 'email@email.com', 7);
managerEntry.getRole();

module.exports = Manager;