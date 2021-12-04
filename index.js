const Employee =require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const managerQuestions = require('./src/managerQuestions')
const teamQuestions = require('./src/teamQuestions')
const engineerQuestions = require('./src/engineerQuestions')
const internQuestions = require('./src/internQuestions')

const inquirer = require ('inquirer');
const path = require('path')
const fs = require('fs')

const OUTPUT_DIR = path.resolve(__dirname,"output")
const outputPath = path.join(OUTPUT_DIR,"team.html")
const render = require('./lib/render')

const teamMembers=[];
const idArray =[]

function appMenu(){
    function createManager(){
        console.log("Hi Manager,let's built your team:")
        inquirer.prompt(managerQuestions)
        .then(answers=>{
            const manager = new Manager(answers.name,answers.id,answers.email,answers.office)
            teamMembers.push(manager);
            idArray.push(answers.id)
            addTeamMember();
        })
    }
    createManager();
    function addTeamMember(){
        inquirer.prompt(teamQuestions)
        .then(answers=>{
            switch(answers.addMember){
                //call engineer func->ask for engineer->create engineer ->
                case 'Engineer':
                createEngineer();
                break;
                //call intern func
                case 'Intern':
                createIntern();
                break;
                //bye(call gen html function)
                case 'I am done adding team members':
                    generateTeam()
            } 
        })
           
   
    }
    function createEngineer(){
        inquirer.prompt(engineerQuestions)
        .then(answers=>{
            const engineer = new Engineer (answers.name, answers.id, answers.email,answers.github)
            teamMembers.push(engineer)
            idArray.push(engineer.id)
            addTeamMember();
        })
       
    }
    function createIntern(){
        inquirer.prompt(internQuestions)
        .then(answers=>{
            const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
            teamMembers.push(intern)
            idArray.push(intern.id)
            addTeamMember();
        })
    }
  
}

//generateTeam function call the "render" function (required above) and pass in the teamMembers array containing all employee object. once it's rendered, the returned block of html will be saved in an teamMember.html file saved in the outputPath (specified above) location.
function generateTeam(){fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}
//start
appMenu()
