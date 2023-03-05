const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
  describe("constructor", () => {
    it("should set the name github of the employee", () => {
      const github = "billyjoe23";
      const obj = new Engineer("Billy", "09", "billyjoe@hotmail.com", github);

      const githubTest = obj.github;

      expect(githubTest).toBe(github);
    });
  });
  describe ("getGithub", () => {
    it ("should return the github of the employee", () => {
      const github = "billyjoe"
      const obj = new Engineer("Billy", "09", "billyjoe@hotmail.com", github)
      const result = obj.github;
      expect(result).toBe(github);
    })
  });
  describe("getRole", () => {
    it("should return the role of the employee", () => {
      const role = "Engineer"
      const obj =  new Engineer
      const result = role
      expect(result).toBe(role)
    })
  })
});