import Employee from './Employee.js';

export default class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    };
    
    getOfficeNumber() {
        return this.officeNumber
    };


    getRole() {
        if (answers.Member_Github) {
            return 'Engineer'
        } else if (answers.Member_School) {
            return 'Intern'
        } else 
            return 'Manager'
    };

   

};



