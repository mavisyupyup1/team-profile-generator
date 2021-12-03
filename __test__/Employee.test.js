const Employee =require('../lib/Employee')

test ('creates an employee object',()=>{
    const employee = new Employee ('Roger',2,'roger@sad.com');
    expect(employee.name).toBe('Roger');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee')

})

test("gets employee's name",()=>{
    const employee = new Employee ('Roger');
    expect(employee.name).toBe('Roger');
})

test("gets employee Id",()=>{
    const employee =new Employee('Roger',2)
    expect(employee.id).toEqual(2)
})

test("gets employee role",()=>{
    const employee = new Employee('Roger');
    expect(employee.getRole()).toBe('Employee')
})