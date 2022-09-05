

export default class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

        
       getName() {
            console.log(`proof getname is working ${this.name}`)
            return this.name;
        };

        getId() {
            console.log(`proof getid is working ${this.id}`)
            return this.id;
        };


       getEmail() {
        console.log(`proof getemail is working ${this.email}`)
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
