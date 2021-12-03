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
const render = require('./src/template')

const teamMembers=[];
const idArray =[]

function appMenu(){
    function createManager(){
        console.log("Hi Manager,let's built your team:")
        inquirer.prompt(managerQuestions)
        .then(answers=>{
            const manager = new Manager(answers.name,answers.id,answers.email,answers.office, role)
            teamMembers.push(manager);
            console.log(teamMembers)
            idArray.push(answers.id)
            console.log(idArray)
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
            //bye(call gen html func)
            case 'I am done adding team members':
            buildTeam();
            break;
         }
    })
    }
    function createEngineer(){
        inquirer.prompt(engineerQuestions)
        .then(answers=>{
          const engineer = new Engineer (answers.name, answers.id, answers.email,answers.github,role)
          teamMembers.push(engineer)
          console.log(teamMembers)
          idArray.push(engineer.id)
          console.log(idArray)
          addTeamMember();
        })
       
    }
    function createIntern(){
        inquirer.prompt(internQuestions)
        .then(answers=>{
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school, role)
        teamMembers.push(intern)
        console.log(teamMembers)
        idArray.push(intern.id)
        console.log(idArray)
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
