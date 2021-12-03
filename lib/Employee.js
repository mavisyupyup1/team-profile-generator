
 class Employee{
    constructor(name,id,email,role){
        this.name = name;
        this.id=id;
        this.email =email;
        this.role=this.getRole()
    }
getName(){
    return this.name;
}
getId(){
    return this.id;
}

//returns 'Employee'
getRole(){
    return `Employee`;
}
}
module.exports = Employee;