const Employee = require("./employee");

class EmployeeFactory {
  static createManager(name) {
    return new Employee(name, "Manager", 10000000);
  }
  static createStaff(name) {
    return new Employee(name, "Staff", 6000000);
  }
}
module.exports = EmployeeFactory;
