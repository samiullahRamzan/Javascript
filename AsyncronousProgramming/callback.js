const sum = (a, b) => {
  console.log(a + b);
};

const calculator = (a, b, sumCallback) => {
  sumCallback(a, b);
};

calculator(5, 10, sum);

const hello = () => {
  console.log("Hello, World!");
};

setTimeout(hello, 4000);
