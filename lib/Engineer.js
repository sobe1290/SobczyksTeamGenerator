import Employee from './Employee.js';

//This class changes Employee to Engineer and adds Github info
export default class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {        
        return 'Engineer';
    };
};