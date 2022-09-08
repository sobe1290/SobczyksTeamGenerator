import Employee from './Employee.js';

//This class changes Employee to Intern and adds School info
export default class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern';     
    };
};