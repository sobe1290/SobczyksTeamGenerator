import Engineer from '../lib/Engineer.js';

//These unit tests are to test the class, class constructors, and methods of the Engineer Class
describe('Engineer Class Card Test', () => {
    describe('Github Constructor', () => {
        it('Should set the github', () => {
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const github = "bob123";
            const newEmpTest = new Engineer(name,id,email,github);
            expect(newEmpTest.github).toBe(github);        
        });
    });

    describe('Test of method to get Github', () => {
        it('should return the employees Github through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const github = "bob123";
            const newEmpTest = new Engineer(name,id,email,github);           
            expect(newEmpTest.getGithub()).toBe(github);
        });
    });

    describe('Test of method to get role', () => {
        it('should return the employees role through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const github = "bob123";
            const role = "Engineer"
            const newEmpTest = new Engineer(name,id,email,github);           
            expect(newEmpTest.getRole()).toBe(role);
        });
    });
});

