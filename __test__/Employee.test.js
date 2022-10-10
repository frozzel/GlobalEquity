// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`


const Employee = require('../lib/Employee')

test('Make an employee Object!', ()=>{
    const employee =new Employee('Dennis', 1234, 'frozzel@me.com');
    expect( typeof(employee)).toBe('object');
    expect( employee.name).toEqual(expect.any(String));
    expect( employee.id).toEqual(expect.any(Number));
    expect( employee.email).toEqual(expect.any(String));
});
test('Verify we getName() or not', ()=>{
    const testName= "Dennis";
    const employee= new Employee(testName);
    expect(employee.getName()).toBe(testName)
});
test('Verify we getId() or not', ()=>{
    const testId= "1234";
    const employee= new Employee('Dennis', testId);
    expect(employee.getId()).toBe(testId)
});
test('Verify we getEmail() or not', ()=>{
    const testEmail= "frozzel@me.com";
    const employee= new Employee('Dennis', 1234, testEmail);
    expect(employee.getEmail()).toBe(testEmail)
});
test('Verify we getRole() or not', ()=>{
    const testRole= "Employee";
    const employee= new Employee('Dennis', 1234, 'frozzel@me.com');
    expect(employee.getRole()).toBe(testRole)
});