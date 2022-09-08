import Employee from './Employee.js';

//This class changes Employee to Manager and adds Office Number Information
export default class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };    
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return 'Manager';
    };
};



