const EmployeeFactory = require("./employeeFactory");
const { AnimalFactory } = require("./animalFactory");

const manager1 = EmployeeFactory.createManager("John");
const staff1 = EmployeeFactory.createStaff("Alice");

const dog1 = AnimalFactory.create("dog", "Billy");
const cat1 = AnimalFactory.create("cat", "Mona");

manager1.introduce();
staff1.introduce();
dog1.speak();
cat1.speak();
