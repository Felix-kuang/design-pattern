// Define a class
class Animal {
  static instance;

  constructor(name, type) {
    if (Animal.instance) {
      return Animal.instance;
    }
    this.name = name; // Property
    this.type = type; // Property
    Animal.instance = this;
  }

  speak() {
    console.log(`${this.name} says hello!`);
  }
}

module.exports = Animal;
