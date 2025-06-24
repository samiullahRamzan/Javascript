// ES5
function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(
        `Sending email to: ${to}\nSubject: ${subject}\nBody: ${body}`
      );
    };
  };
}

// const step1 = sendAutoEmail("samidev336@gmail.com");
// const step2 = step1("Welcome to our service!");
// step2("Thank you for signing up!");

// ES6
const sendAuto_Email = (to) => (subject) => (body) =>
  console.log(`Sending email to: ${to}\nSubject: ${subject}\nBody: ${body}`);

const step1 = sendAuto_Email("samidev336@gmail.com");
const step2 = step1("Welcome to our service!");
step2("Thank you for signing up!");
