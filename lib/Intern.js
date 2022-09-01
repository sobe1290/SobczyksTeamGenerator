const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        console.log(`${this.school}`)
    }
    getRole() {
        if (this.school){ 
        console.log('Intern');
        };
    };
};

const internEntry = new Intern('Patrick', 0000, 'email@email.com', 'UW');
internEntry.getRole();

module.exports = Intern;