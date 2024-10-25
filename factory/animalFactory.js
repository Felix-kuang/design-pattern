"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalFactory = void 0;
const animal_1 = require("./animal"); // Import Dog and Cat classes
class AnimalFactory {
    static create(type, name) {
        switch (type.toLowerCase()) {
            case "dog":
                return new animal_1.Dog(name);
            case "cat":
                return new animal_1.Cat(name);
            default:
                console.warn(`Animal type "${type}" is not recognized.`);
                return null; // Return null for unrecognized type
        }
    }
}
exports.AnimalFactory = AnimalFactory;
