const user = {
  name: "John Doe",
  email: "sami@gmail.com",
  enrolledInDepartment: {
    departmentID: 101,
    departmentName: "Computer Science",
    courses: [
      { courseID: 1, courseName: "Data Structures" },
      { courseID: 2, courseName: "Algorithms" },
    ],
  },
  setUserName: function (userName) {
    console.log("here is this value", this);
    this.userName = userName;
  },
  setUserEmail: (email) => {
    console.log("here is this value", this);
    this.email = email;
  },
};

// console.log(user["enrolledInDepartment"]["departmentName"]);
// console.log(user.enrolledInDepartment.courses[0].courseName);
user.setUserName("Sami Khan");
// console.log(user); // Output: Sami Khan

user.setUserEmail("sami336@gmail.com");
console.log(user.email); // Output:

// adding  a new method in object

user.getUserDetails = function () {
  return `Name: ${this.name}, Email: ${this.email}`;
};

console.log(user.getUserDetails()); // Output: Name: John Doe, Email:

const values = Object.values(user);
console.log(values); // Output: Array of values in the user object
console.log(values.filter((value) => typeof value === "object")); // Output: Array of objects in the user object

let { name: FullName } = user;
console.log(FullName); // Output: John Doe
