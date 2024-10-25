import { Dog, Cat } from "./animal"; // Import Dog and Cat classes

class AnimalFactory {
  static create(type: string, name: string): Dog | Cat | null {
    switch (type.toLowerCase()) {
      case "dog":
        return new Dog(name);
      case "cat":
        return new Cat(name);

      default:
        console.warn(`Animal type "${type}" is not recognized.`);
        return null; // Return null for unrecognized type
    }
  }
}

export { AnimalFactory };
