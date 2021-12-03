module.exports=[{
    type:'list',
    name:'addMember',
    choices:['Engineer','Intern','I am done adding team members'],
    validate:addMember=>{
        if(addMember){
            return true;
        } else {
            console.log('\n You must choose an option')
            return false;
        }
    }
}
]