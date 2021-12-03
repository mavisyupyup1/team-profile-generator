const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

it ("creates a Manager object",()=>{
    const manager = new Manager('Alice',1,'alice@asd.com',123)
    expect(manager.name).toBe('Alice')
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number))
    expect(manager.role).toBe('Manager')
})

it ("gets the manager role", ()=>{
    const manager = new Manager('Alice',1,'alice@asd.com',123)
    expect(manager.getRole()).toBe('Manager')
})

it( "gets the office number",()=>{
    const manager = new Manager('Alice',1,'alice@asd.com',123)
    expect(manager.getOffice()).toEqual(123)
})
