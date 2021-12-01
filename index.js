const inquirer = require ('inquirer');
const Employee =require('./lib/Employee')
class Team {
    constructor(){
        this.currentEmployee;
        this.members =[];
    }
}
module.exports =Team;