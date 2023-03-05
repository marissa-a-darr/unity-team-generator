const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("should return the name input of the employee", () => {
      const name = "Tom";
      const obj = new Employee(name);

      const nameTest = obj.name;

      expect(nameTest).toBe(name);
    });
    it("should set the Employee's ID to 06", () => {
      const id = "06";
      const obj = new Employee("Tom", id);

      const idTest = obj.id;

      expect(idTest).toBe(id);
    });
    it("should set the Employee email", () => {
      const email = "tomcat@gmail.com";
      const obj = new Employee("Tom", "06", email);

      const emailTest = obj.email;

      expect(emailTest).toBe(email);
    });
  });
});

describe("getName", () => {
  it("should return the Employee name", () => {
    const name = "Burt";
    const obj = new Employee(name);
    const result = obj.name;
    expect(result).toBe(name);
  });
});

describe("getId", () => {
  it("should return the Employee ID", () => {
    const id = "56";
    const obj = new Employee("Burt", id);
    const result = obj.id;
    expect(result).toBe(id);
  });
});

describe("getEmail", () => {
  it("should return the Employee email", () => {
    const email = "burt@chapstick.com";
    const obj = new Employee("Burt", "56", email);
  });
});
describe("getRole", () => {
  it("should return the Employee role", () => {
    const role = "Employee";
    const obj = new Employee();
    const result = obj.getRole();
    expect(result).toBe(role);
  });
});
