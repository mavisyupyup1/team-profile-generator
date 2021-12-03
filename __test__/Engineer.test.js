const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
test ("creates an Engineer object",()=>{
    const engineer =new Engineer('Rick',3,'rick@as.com','rickyhub')
    expect(engineer.name).toBe('Rick');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.email).toEqual(expect.any(String));
})

it ("gets a role engineer",()=>{
    const engineer =new Engineer('Rick',3,'rick@as.com','rickhub')
    expect(engineer.getRole()).toEqual('Engineer');
})

it("gets engineer's github", ()=>{
    const engineer =new Engineer('Rick',3,'rick@as.com','rickyhub')
    expect(engineer.getGithub()).toEqual('rickyhub')
})

