const Employee = require('./Employee');

class Intern extends Employee {
  constructor(internName, internId, internEmail, school) {
    super(internName, internId, internEmail);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
