import Intern from '../lib/Intern.js';

//These unit tests are to test the class, class constructors, and methods of the Intern Class
describe('Intern Class Card Test', () => {
    describe('School Constructor', () => {
        it('Should set the school', () => {
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const school = "UW";
            const newEmpTest = new Intern(name,id,email,school);
            expect(newEmpTest.school).toBe(school);        
        });
    });

    describe('Test of method to get School', () => {
        it('should return the employees School through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const school = "UW";
            const newEmpTest = new Intern(name,id,email,school);           
            expect(newEmpTest.getSchool()).toBe(school);
        });
    });

    describe('Test of method to get role', () => {
        it('should return the employees role through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const school = "UW";
            const role = "Intern"
            const newEmpTest = new Intern(name,id,email,school);           
            expect(newEmpTest.getRole()).toBe(role);
        });
    });
});
