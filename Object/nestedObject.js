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
