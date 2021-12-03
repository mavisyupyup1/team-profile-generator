// const Employee =require('./lib/Employee')
// const Manager = require('./lib/Manager')
// const Engineer = require('./lib/Engineer')
// const Intern = require('./lib/Intern')

const managerQuestions = require('./src/managerQuestions')
const teamQuestions = require('./src/teamQuestions')
const engineerQuestions = require('./src/engineerQuestions')
const internQuestions = require('./src/internQuestions')

const inquirer = require ('inquirer');
const path = require('path')
const fs = require('fs')

const OUTPUT_DIR = path.resolve(__dirname,"output")
const outputPath = path.join(OUTPUT_DIR,"team.html")
const render = require('./src/template')

const teamMembers=[];
const idArray =[]

function appMenu(){
    function createManager(){
        console.log("Hi Manager,let's built your team:")
        inquirer.prompt(managerQuestions)
        .then(answers=>{
            const manager = new Manager(answers.name,answers.id,answers.email,answers.office)
            teamMembers.push(manager);
            idArray.push(answers.managerId)
            addTeamMember();
        })
    }
    createManager();

    
    function addTeamMember(){
        inquirer.prompt(teamQuestions)
        .then(answers=>{
        //call engineer func->ask for engineer->create engineer ->
        //call intern func
        //bye(call gen html func)
        switch(answers.addMember){
            case 'Engineer':
            createEngineer();
            break;
            case 'Intern':
            createIntern();
            break;
            case 'I am done adding team members':
            buildTeam();
            break;
         }
    })
    }
    function createEngineer(){
        inquirer.prompt(engineerQuestions)
        .then(answers=>{
          console.log('engineer')
          addTeamMember();
        })
       
    }
    function createIntern(){
        inquirer.prompt(internQuestions)
        .then(answers=>{
          console.log('intern')
          addTeamMember();
        })
    }
    //build team.html
    function buildTeam(){
    }
}
//start
appMenu()
//console.log(__dirname)
