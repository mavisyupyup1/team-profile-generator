const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

it ("creates an intern object",()=>{
    const intern = new Intern ('Carl',4,'carl@asd.com','columbia university')
    expect(intern.name).toBe('Carl')
    expect(intern.id).toEqual(4)
    expect(intern.email).toEqual(expect.any(String))
})
it ("gets the intern role", ()=>{
    const intern = new Intern ('Carl',4,'carl@asd.com','columbia university')
    expect(intern.getRole()).toBe('Intern');
})

it ("get's intern's school", ()=>{
    const intern = new Intern ('Carl',4,'carl@asd.com','columbia university')
    expect(intern.school).toEqual(expect.any(String))
})