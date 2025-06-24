try {
  let userInput = prompt("Enter a number:");
  let number = parseInt(userInput);

  if (isNaN(number)) {
    throw new Error("That's not a valid number!"); // it is a runtime exception
  }

  alert("You entered the number: " + number);
} catch (err) {
  alert("Error: " + err.message);
}

// this will run on the browser
