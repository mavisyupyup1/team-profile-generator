const Employee = require('./Employee');
class Manager extends Employee{
    constructor(name,id, email,office, role){
        super(name,id, email);
        this.office=office;
        this.role= this.getRole()
    }
    getRole (){
        return 'Manager';
    }
    getOffice(){
        return this.office;
    }
}

module.exports = Manager;