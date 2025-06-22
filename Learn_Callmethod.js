function setUserName(userName) {
  this.userName = userName;
}

function createUser(userName, name, email) {
  setUserName.call(this, userName);
  this.name = name;
  this.email = email;
}

const obj = new createUser("sami123", "sami", "sami@gmail.com");

console.log(obj);
