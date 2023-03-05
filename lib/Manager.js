const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(managerName, managerId, managerEmail, managerOffice) {
    super(managerName, managerId, managerEmail);
    this.office = managerOffice;
  }

  getOfficeNumber() {
    return this.office;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
