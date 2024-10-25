interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

class Cat implements Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} meows.`);
  }
}

export { Dog, Cat };
