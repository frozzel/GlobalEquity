

const Employee = require('../lib/Employee')

const employeeTest =new Employee('Dennis', 1234, 'frozzel@me.com');



describe('Employee', ()=>{
    it('has name', ()=>{
        expect( employeeTest.name).toEqual(expect.any(String));
        
    }) 

    it('has email ', ()=>{
        expect( employeeTest.email).toEqual(expect.any(String));
    })

    it('has id', ()=>{
        expect( employeeTest.id).toEqual(expect.any(Number));
    })
    
})

describe('Employee', ()=>{
    it('Verify we getName() or not', ()=>{
        const testName= "Dennis";
        const employeeTest= new Employee(testName);
        expect(employeeTest.getName()).toBe(testName)
    }) 

})

describe('Employee', ()=>{
    it('Verify we getId() or not', ()=>{
        const testId= "1234";
        const employeeTest= new Employee('Dennis', testId);
        expect(employeeTest.getId()).toBe(testId)
    }) 

})

describe('Verify we getEmail() or not', ()=>{
    it('Verify we getId() or not', ()=>{
        const testEmail= "frozzel@me.com";
        const employeeTest= new Employee('Dennis', 1234, testEmail);
        expect(employeeTest.getEmail()).toBe(testEmail)
    }) 

})

describe('Verify we getRole() or not', ()=>{
    it('Verify we getId() or not', ()=>{
        const testRole= "Employee";
        const employeeTest= new Employee('Dennis', 1234, 'frozzel@me.com');
        expect(employeeTest.getRole()).toBe(testRole)
    }) 

})
