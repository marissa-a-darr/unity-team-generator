const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { type } = require("os");

const team = [];

// const managerQ = "What is your team manager's name?";
// const officeNumberQ = "What is their office number?";
// const gitHubQ = "What is their GitHub username?";
// const schoolQ = "What is the intern's school?";
// const employeeTypeQ =
//   "What type of employee would you like to add to your team?";
// const generalQuestions = [
//   "What is their name?",
//   "What is their ID?",
//   "What is their email address?",
// ];
function init() {
  function teamBuildingQuestions() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeType",
          choices: [
            "Engineer",
            "Intern",
            "Manager",
            "I am done building my team",
          ],
          message:
            "Hello. Let's build your team! Are you adding an engineer or an intern?",
        },
      ])
      .then(function (input) {
        switch (input.employeeType) {
          case "Manager":
            managerQuestions();
            break;
          case "Intern":
            internQuestions();
            break;
          case "Engineer":
            engineerQuestions();
            break;
          case "I am done building my team":
            doneTeam();
            break;
        }
      });

    function engineerQuestions() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "engineerName",
            message: "Enter your the name of your engineer",
          },
          {
            type: "input",
            name: "engineerID",
            message: "Enter the ID of your engineer",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "Enter the email of your engineer",
            validate: function (email) {
              var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                email
              );
              if (pass) {
                return true;
              }
              return "Invalid Email. Try again.";
            },
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "Enter the GitHub of your engineer",
          },
        ])
        .then((data) => {
          const engineer = new Engineer(
            data.engineerName,
            data.engineerID,
            data.engineerEmail,
            data.engineerGithub
          );
          team.push(engineer);
          teamBuildingQuestions();
        });
    }

    function managerQuestions() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "managerName",
            message: "Enter your the name of the team manager",
          },
          {
            type: "input",
            name: "managerID",
            message: "Please enter the ID of the team manager",
          },
          {
            type: "input",
            name: "managerEmail",
            message: "Please enter the email of the team manager",
            validate: function (email) {
              var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                email
              );
              if (pass) {
                return true;
              }
              return "Invalid Email. Try again.";
            },
          },
          {
            type: "input",
            name: "managerOffice",
            message: "Please enter the office number of the team manager",
          },
        ])
        .then((data) => {
          console.log(data);
          const manager = new Manager(
            data.managerName,
            data.managerID,
            data.managerEmail,
            data.managerOffice
          );
          team.push(manager);
          teamBuildingQuestions();
        });
    }
    function internQuestions() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "internName",
            message: "Enter your the name of your intern",
          },
          {
            type: "input",
            name: "internID",
            message: "Please enter the ID of your intern",
          },
          {
            type: "input",
            name: "internEmail",
            message: "Please enter the email of your intern",
            validate: function (email) {
              var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                email
              );
              if (pass) {
                return true;
              }
              return "Invalid Email. Try again.";
            },
          },
          {
            type: "input",
            name: "internSchool",
            message: "Please enter the school of the intern",
          },
        ])
        .then((data) => {
          const intern = new Intern(
            data.internName,
            data.internID,
            data.internEmail,
            data.internSchool
          );
          team.push(intern);
          teamBuildingQuestions();
        });
    }
  }
  function doneTeam() {
    fs.writeFile("./dist/results.html", generateHTML(team), (err) =>
      err
        ? console.log("Team Building failed")
        : console.log("Your Team file has been completed!")
    );
  }

  teamBuildingQuestions();
}

init();
