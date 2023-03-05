const generateTeam = (team) => {
  const generateManager = (manager) => {
    return ` <div class="card" style="width: 18rem;">
<div class="card-header">
    <h4 class="card-title">${manager.name}</h4>
    <h5 class="card-text">Manager</h5>
</div>
<div class="card-body">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}" target="_blank" class="card-link">${manager.email}</a>
        </li>
        <li class="list-group-item">Office number: ${manager.office}</li>
    </ul>
</div>
</div>`;
  };

  const generateEngineer = (engineer) => {
    return `
<div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h4 class="card-title">${engineer.name}</h4>
                            <h5 class="card-text">Engineer</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${engineer.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${engineer.email}" target="_blank"
                                        class="card-link">${engineer.email}</a>
                                </li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}"
                                        target="_blank" class="card-link">${engineer.github}</a>

                                </li>
                            </ul>
                        </div>
                    </div> `;
  };

  const generateIntern = (intern) => {
    return `
<div class="card" style="width: 18rem;">
<div class="card-header">
    <h4 class="card-title">${intern.name}</h4>
    <h5 class="card-text">Intern</h5>
</div>
<div class="card-body">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}" target="_blank" class="card-link">${intern.email}</a>
        </li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
</div> `;
  };

  const generateTeamArray = [];
  generateTeamArray.push(
    team
      .filter((member) => member.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  generateTeamArray.push(
    team
      .filter((member) => member.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  generateTeamArray.push(
    team
      .filter((member) => member.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return generateTeamArray.join("");
};

function generateHTML(team) {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
               <link rel="stylesheet" type="text/css" href="./style.css">
        <title>My Team</title>
    </head>

    <body>

        <header class="d-flex justify-content-center">
            <h1 class="display-4">My Team</h1>
        </header>

        <main>
            <div class="container">
                <div class="row d-flex justify-content-around">

                  ${generateTeam(team)}

                </div>
            </div>
            <br>
        </main>


    </body>

    </html>
      `;
}

module.exports = generateHTML;
