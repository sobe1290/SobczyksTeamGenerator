import Employee from '../lib/Employee.js';


describe('Employee Class Card Test', () => {
    describe('Employee Class Object Test', () => {
        it('Should return an object', () => {
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const newEmpTest = new Employee(name,id,email);
            expect(typeof newEmpTest === 'object').toBe(true);        
        });
    });

    describe('Employee Name Test', () => {
        it('Should set the name', () => {
            const name = "Bob";
            const id = "0001";
            const email = "Bob@gmail.com";
            const newEmpTest = new Employee(name, id, email);      
            expect(newEmpTest.name).toBe(name);
        });
    });

    describe('Employee Id Test', () => {
        it('Should set the Id', () => {
            const name = "Bob";
            const id = "0001";
            const email = "Bob@gmail.com";
            const newEmpTest = new Employee(name, id, email);               
            expect(newEmpTest.id).toBe(id);
        });
    });

    describe('Employee Email Test', () => {
        it('Should set the Email', () => {
            const name = "Bob";
            const id = "0001";
            const email = "Bob@gmail.com";
            const newEmpTest = new Employee(name, id, email);
            expect(newEmpTest.email).toBe(email);
        });
    });    

    describe('Test of method to get name', () => {
        it('should return the employees name through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "Bob@gmail.com";
            const newEmpTest = new Employee(name, id, email);            
            expect(newEmpTest.getName()).toBe(name);
        });
    });

    describe('Test of method to get id number', () => {
        it('should return the employees id through the method', () => {
            const name = "Bob";
            const id = "0001";
            const email = "Bob@gmail.com";
            const newEmpTest = new Employee(name, id, email);            
            expect(newEmpTest.getId()).toBe(id);
        });
    });

    describe('Test of method to get email', () => {
        it('should return the employees email through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "Bob@gmail.com";
            const newEmpTest = new Employee(name, id, email);            
            expect(newEmpTest.getEmail()).toBe(email);
        });
    });
    describe('Test of method to get role', () => {
        it('should return the employees role through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "Bob@gmail.com";
            const role = "Employee";
            const newEmpTest = new Employee(name, id, email);            
            expect(newEmpTest.getRole()).toBe(role);
        });
    });
});
