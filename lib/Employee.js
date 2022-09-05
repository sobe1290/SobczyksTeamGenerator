

export default class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        
        function getName() {
            console.log(`proof getname is working ${name}`)
            return this.name;
        };

        getName();

        function getId() {
            return this.id;
        };

        getId();

        function getEmail() {
            return this.email;
        };

        getEmail();

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
