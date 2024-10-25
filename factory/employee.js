// Define a class
class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }
  getTitle() {
    return this.title;
  }
  getSalary() {
    return this.salary;
  }

  introduce() {
    console.log(`Name: ${this.name}`);
    console.log(`Title: ${this.title}`);
    console.log(`Salary: ${this.salary}`);
  }
}

module.exports = Employee;
