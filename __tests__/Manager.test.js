import Manager from '../lib/Manager.js';

describe('Manager Class Card Test', () => {
    describe('Office Number Constructor', () => {
        it('Should set the office number ', () => {
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const officeNumber = "Room 2A"
            const newEmpTest = new Manager(name,id,email,officeNumber);
            expect(newEmpTest.officeNumber).toBe(officeNumber);        
        });
    });

    describe('Test of method to get office number', () => {
        it('should return the employees office number through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const officeNumber = "Room 2A";
            const newEmpTest = new Manager(name,id,email,officeNumber);           
            expect(newEmpTest.getOfficeNumber()).toBe(officeNumber);
        });
    });

    describe('Test of method to get role', () => {
        it('should return the employees role through the method', () => {            
            const name = "Bob";
            const id = "0001";
            const email = "bob@gmail.com";
            const officeNumber = "Room 2A";
            const role = "Manager";
            const newEmpTest = new Manager(name,id,email,officeNumber);           
            expect(newEmpTest.getRole()).toBe(role);
        });
    });
});

