// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

module.exports=[
    {
        type:'input',
        name:'engineerName',
        message:"What is the engineer's name?", 
        validate: engineerName=>{
            if(engineerName){
                return true;
            } else {
                console.log("\n Please enter the engineer's name.")
                return false;
            }
        }

    },
    {
        type:'input',
        name:'engineerId',
        message:"What is the engineer's ID?",
        validate: engineerId=>{
            const valid = /^\d+$/.test(engineerId);
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
        name: 'engineerEmail',
        message:"What is the engineer's email?",
        validate: engineerEmail=>{
            const valid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(engineerEmail)
            if(valid){
                return true;
            } else {
                console.log("\n Email Address not valid. Try again")
                return false;
            }
        }
    },
    { type:'input',
    name:'github',
    message:"What is the engineer's github username?",
    validate: github=>{
    if (github){
        return true;
    } else {
        console.log("\n You must enter a github username")
    }
        }
    }
]