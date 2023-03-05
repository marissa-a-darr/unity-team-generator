const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')

describe("Intern", () => {
  describe("constructor", () => {
    it("should set the school of the intern", () => {
      const school = "UCF";
      const obj = new Intern("Terra", "07", "terragirlgmail.com", school);

      const schoolTest = obj.school;

      expect(schoolTest).toBe(school);
    });
  });
  describe ("getSchool", () => {
    it ("should return the school of the intern", () => {
      const school = "UCF"
      const obj = new Intern("Terra", "07", "terragirl@gmail.com", school)
      const result = obj.school;
      expect(result).toBe(school);
    })
  });
  describe("getRole", () => {
    it("should return the role of the Intern", () => {
      const role = "Intern"
      const obj =  new Intern
      const result = role
      expect(result).toBe(role)
    })
  })
});