// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

module.exports=[
    {
        type:'input',
        name:'name',
        message:"What is the team manager's name?", 
        validate: name=>{
            if(name){
                return true;
            } else {
                console.log("\n Please enter the manager's name.")
                return false;
            }
        }

    },
    {
        type:'input',
        name:'id',
        message:"What is the manager's ID?",
        validate: id=>{
            const valid = /^\d+$/.test(id);
            if(valid){
                return true;
            } else {
                console.log("\n IDs contain only numbers. Try again")
                return false;
            }

        }
    },
    {
        type:'input',
        name: 'email',
        message:"What is the manager's email?",
        validate: email=>{
            const valid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)
            if(valid){
                return true;
            } else {
                console.log("\n Email Address not valid. Try again")
                return false;
            }
        }
    },
    { type:'input',
    name:'office',
    message:"What is the team manager's office number?",
    validate: office=>{
        const valid = office.match(
            /^[1-9]\d*$/
        );
    if (valid){
        return true;
    } else {
        console.log("\n Office number must be a number. Try again")
    }
        }
    }
]