"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
}
exports.Dog = Dog;
class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} meows.`);
    }
}
exports.Cat = Cat;
