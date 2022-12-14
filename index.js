const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require();

const managerQ = "What is your team manager's name?";
const officeNumberQ = "What is their office number?";
const gitHubQ = "What is their GitHub username?";
const schoolQ = "What is the intern's school?";
const employeeTypeQ =
  "What type of employee would you like to add to your team?";
const generalQuestions = [
  "What is their name?",
  "What is their ID?",
  "What is their email address?",
];
function engineerQ() {
inquirer
.prompt([
  {
    type: "input",
    name: "manager-name",
    message: "What is your team manager's name?",
  },
])
}
function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manager-name",
        message: "What is your team manager's name?",
      },
      {
        type: "input",
        name: "manager-id",
        message: "What is your team manager's ID number?",
      },
      {
        type: "input",
        name: "manager-email",
        message: "What is your team manager's email?",
      },
      {
        type: "input",
        name: "office-number",
        message: "What is your manager's office number?",
      },
      {
        type: "list",
        name: "employee-type",
        choices: ["Engineer", "Intern", "I am done building my team"],
        message: "Are you adding an engineer or an intern?",
      },
    ])
    .then((data) => {
      switch (data.employee - type) {
        case "Engineer":
          engineerQ();
          break;
        case "Intern":
          internQ();
          break;
        case "I am done building my team":
          //generateHTML 
          break;
      }
    })
    .then((data) => {
      var fileName = "index.html";
      var fileText = generateHTML(data);
      writeToFile(fileName, fileText);
    });

  }


   

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
// Function call to initialize app
init();
