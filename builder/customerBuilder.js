const Customer = require("./customer");

class CustomerBuilder {
  setId(id) {
    this.id = id;
    return this;
  }
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  build() {
    return new Customer(
      this.id,
      this.firstName,
      this.lastName,
      this.email,
      this.phone,
      this.address,
      this.age
    );
  }
}

module.exports = CustomerBuilder;
