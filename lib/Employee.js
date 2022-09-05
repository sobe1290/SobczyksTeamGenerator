

export default class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

        
       getName() {
            console.log(`proof getname is working ${this.name}`)
            // This isnt reading?
            return this.name;
        };

        getId() {
            return this.id;
        };


       getEmail() {
            return this.email;
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
