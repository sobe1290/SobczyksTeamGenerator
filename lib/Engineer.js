import Employee from './Employee.js';

export default class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        console.log(`ENGINEER WORKING ${this.github}`)
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