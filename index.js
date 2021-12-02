const inquirer = require ('inquirer');
const Employee =require('./lib/Employee')
const Manager = require('./lib/Manager')
class Team {
    constructor(){
        this.currentEmployee;
        this.members =[];
    }
}
function appMenu(){
    function initialManager(){
        console.log("please built your team:")
    }
    function createTeam(){
        inquirer.prompt

        //call engineer func->ask for engineer->create engineer ->
        //call intern func
        //bye(call gen html func)

    }
    function createEngineer(){

    }
    function createIntern(){


    }
    //build team.html
    function buildTeam(){

    }
}
//start
appMenu()
console.log(__dirname)
const OUTPUT_DIR = path.resolve(__dirname,"output")
const outputPath = path.join(OUTPUT_DIR,"team.html")
const render = require()