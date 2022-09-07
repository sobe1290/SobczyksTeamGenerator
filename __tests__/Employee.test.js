import Employee from '../lib/Employee.js';


describe('Employee Information Test', () => {
    describe('Gathering of employees name', () => {
        it('should return a string with employees name', () => {
            const newEmpName = new Employee();
            const name = "ManagerName";

            const genEmpName = newEmpName.getName(name);

            expect(genEmpName).toEqual("string");
        })
    })
});
