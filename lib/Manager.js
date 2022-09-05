import Employee from './Employee.js';

export default class Manager extends Employee {
    constructor(Member_Name, Member_Id, Member_Email, Member_Office) {
        super(Member_Name, Member_Id, Member_Email);
        this.Member_Office = Member_Office;
    
    function getOfficeNumber() {
        return this.Member_Office
    };

    getOfficeNumber();

    function getRole() {
        if (answers.Member_Github) {
            return 'Engineer'
        } else if (answers.Member_School) {
            return 'Intern'
        } else 
            return 'Manager'
    };

    getRole();
};
};



