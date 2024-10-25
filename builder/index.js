const Customer = require("./customer");

const customer1 = new Customer(
  1,
  "Felix",
  "Shi",
  "felixshi26@gmail.com",
  "081270989858"
);

const customer2 = Customer.Builder.setId(2)
  .setFirstName("John")
  .setLastName("Doe")
  .setAge(18)
  .setPhone("081234567890")
  .setAddress("Jakarta")
  .build();

customer1.introduce();
console.log("");
customer2.introduce();
