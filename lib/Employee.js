

export default class Employee {
    constructor(Member_Name, Member_Id, Member_Email){
        this.Member_name = Member_Name;
        this.Member_Id = Member_Id;
        this.Member_Email = Member_Email;
        
        function getName() {
            console.log(`getName working, proof ${this.Member_Name}`)
            return this.Member_Name;
        };

        getName();

        function getId() {
            return this.Member_Id;
        };

        getId();

        function getEmail() {
            return this.Member_Email;
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
