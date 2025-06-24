const obj = new Object();

obj.name = "sami";
obj.email = "samidev336@gmail.com";
console.log(obj);
console.log(obj.name); // Output: sami123

// another way for creating an object
const user = {};

user.name = "sami";
user.email = "samidev336@gmail.com";
console.log(user);

// another way for creating an object
const user1 = { name: "sami", email: "samidev336@gmail.com", college: "AIUB" };
console.log(user1);
console.log(user1.name); // Output: sami
console.log(user1.college); // Output: AIUB
console.log("here is user", user1["name"]);

// using object constructor for creating multiple objects of same type

function Employee(employeeId, name, email) {
  this.employeeId = employeeId;
  this.name = name;
  this.email = email;
}

const emp1 = new Employee(23, "sami", "sami1@gmail.com");
const emp2 = new Employee(24, "sami2", "sami2@gmail.com");

console.log(emp1);
console.log(emp2);
