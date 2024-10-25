const Animal = require("./animal");

// Creating instances of the Animal class
const dog = new Animal("Buddy", "Dog"); // dog is an instance of Animal
const cat = new Animal("Whiskers", "Cat"); // cat is another instance of Animal

// Using the instances
dog.speak(); // Output: Buddy says hello!
cat.speak(); // Output: Whiskers says hello!

// Checking the instance type
console.log(dog instanceof Animal); // Output: true
console.log(cat instanceof Animal); // Output: true
