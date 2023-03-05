const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(engineerName, engineerId, engineerEmail, github) {
    super(engineerName, engineerId, engineerEmail);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
