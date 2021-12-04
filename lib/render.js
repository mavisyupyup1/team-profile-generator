const fs =require('fs')
const path =require("path")
const templatesDir = path.resolve(__dirname,'../templates');

const render = employees =>{
const html =[];
html.push(...employees
  .filter(employee =>employee.getRole()==="Manager")
  .map(manager=> renderManager(manager))
);
html.push(...employees
  .filter(employee => employee.getRole() === "Engineer")
  .map(engineer => renderEngineer(engineer))
  );
html.push(...employees
  .filter(employee=>employee.getRole() === "Intern")
  .map(intern=> renderIntern(intern))
  );
  return renderMain(html.join(""));
}


const renderManager = manager =>{
  let template = fs.readFileSync(path.resolve(templatesDir,"manager.html"),"utf-8")
  template = replacePlaceholders(template,"name", manager.name);
  template = replacePlaceholders(template,"role", manager.getRole());
  template = replacePlaceholders(template,"email", manager.email);
  template = replacePlaceholders(template,"id", manager.getId());
  template = replacePlaceholders(template,"office", manager.getOffice());
  return template;
}

const renderEngineer = engineer =>{
  let template = fs.readFileSync(path.resolve(templatesDir,"engineer.html"),'utf-8')
  template = replacePlaceholders(template,'name',engineer.name);
  template = replacePlaceholders(template,'role',engineer.getRole());
  template = replacePlaceholders(template,'email',engineer.email);
  template = replacePlaceholders(template,'id',engineer.id);
  template = replacePlaceholders(template,'github',engineer.getGithub());
  return template;
}

const renderIntern = intern =>{
  let template = fs.readFileSync(path.resolve(templatesDir,"intern.html"),'utf-8')
  template = replacePlaceholders(template,'name', intern.name);
  template = replacePlaceholders(template,'role', intern.getRole());
  template = replacePlaceholders(template,'email', intern.email);
  template = replacePlaceholders(template,'id', intern.id);
  template = replacePlaceholders(template,'school', intern.getSchool());
  return template;
}
const renderMain =html=>{
  const template = fs.readFileSync(path.resolve(templatesDir,"main.html"),'utf-8')
  return replacePlaceholders(template, "team",html)
}

const replacePlaceholders = (template,placeholder,value)=>{
  const pattern =new RegExp ("{{ " + placeholder +" }}","gm")
  return template.replace(pattern,value)
}
module.exports =render;