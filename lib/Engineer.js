const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        console.log(`${this.github}`)
    }
    getRole() {
        if (this.github){ 
        console.log('Engineer');
        };
    };
};

const engineerEntry = new Engineer('Patrick', 0000, 'email@email.com', 'sobe1290');
engineerEntry.getRole();

module.exports = Engineer;