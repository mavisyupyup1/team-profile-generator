const fs =require('fs')
const generateManager = manager=>{
 return `
 <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h2 class="card-header">${manager.name}</h2>
              <h3 class="card-header">${manager.getRole()}</h3>
               <div class="card-body">
                <ul class="list-group>
                  <li class ="list-group-item"> ID: ${manager.id}</li>
                  <li class ="list-group-item"> Email: ${manager.email}</li>
                  <li class ="list-group-item"> Office: ${manager.getOffice()}</li>
                </ul>
                <button class="btn btn-block btn-info">Learn more.</button>
              </div>
            </div>
          </div>
 `
}

const html =[];
html.push(teamMembers.filter(employee =>employee.getRole()==="Manager")
.map(manager=>generateManager(manager))
)

return html.join("");
function generateTeam(){
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>My Team Profile</title>
    ${html}
</head>
<body>
    
</body>
</html>
    `
}
module.exports =generateTeam;