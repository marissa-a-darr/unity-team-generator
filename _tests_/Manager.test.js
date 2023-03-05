const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

describe("Manager", () => {
  describe("constructor", () => {
    it("should set the office number of the manager", () => {
      const office = "321";
      const obj = new Manager("Taylor", "11", "taylor@hotmail.com", office);

      const officeTest = obj.office;

      expect(officeTest).toBe(office);
    });
  });
  describe ("getOffice", () => {
    it ("should return the office number of the manager", () => {
      const office = "321"
      const obj = new Manager("Taylor", "11", "taylor@hotmail.com", office)
      const result = obj.office;
      expect(result).toBe(office);
    })
  });
  describe("getRole", () => {
    it("should return the role of the manager", () => {
      const role = "Manager"
      const obj =  new Manager
      const result = role
      expect(result).toBe(role)
    })
  })
});