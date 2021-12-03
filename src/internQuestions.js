// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
module.exports=[
    {
        type:'input',
        name:'name',
        message:"What is the intern's name?", 
        validate: name=>{
            if(name){
                return true;
            } else {
                console.log("\n Please enter the intern's name.")
                return false;
            }
        }

    },
    {
        type:'input',
        name:'id',
        message:"What is the intern's ID?",
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
        message:"What is the intern's email?",
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
    name:'school',
    message:"Which school does the intern go to?",
    validate: school=>{
    if (school){
        return true;
    } else {
        console.log("\n You must enter a school")
    }
        }
    }
]