let bob = function (num, str) {
  console.log("bob", num, str, this);
  return true;
};

let bill = {
  name: "bill",
  movie: "Inception",
  myMethod: function (fn) {
    fn(1, "sami");
  },
};

bob(1, "sami");

bill.myMethod(bob);

//so function object has a built in mehtods call(),apply(), bind()

//first argument is the context, second is the arguments array

bob.call(bill, 1, "sami"); // call method
bob.apply(bill, [1, "sami"]); // apply method

bob.bind(bill, 1, "sami")();

// or
const sami = bob.bind(bill, 1, "sami"); // bind method
sami();

// bill was used as the context for the function bob

//  What is context in JavaScript?
// 👉 Context refers to the value of this at the moment a function is invoked.

// 📌 In other words:

// Context is who is "calling" or "owning" the function when it runs.

// It determines what this points to inside that function.
