class Customer {
  constructor(id, firstName, lastName, email, phone, address, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.age = age;
  }

  introduce() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone number: ${this.phone}`);
    console.log(`Address: ${this.address}`);
  }

  static get Builder() {
    return new (require("./customerBuilder"))();
  }
}

module.exports = Customer;
