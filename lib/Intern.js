import Employee from './Employee.js';

export default class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        console.log(`INTERN SCHOOL WORKING ${this.school}`)
    }
    getRole() {
        if (answers.Member_Github) {
            return 'Engineer'
        } else if (answers.Member_School) {
            return 'Intern'
        } else 
            return 'Manager'
    };
};