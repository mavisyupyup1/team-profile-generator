const Employee =require('../lib/Employee')

test ('create an employee object',()=>{
    const employee = new Employee ('Roger');
    expect(employee.name).toBe('Roger');
    // expect(employee.id).toBe(expect.any(Number));
    // expect(employee.email).toBe(expect.any(String));

})