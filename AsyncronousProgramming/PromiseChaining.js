function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise Resolved");
    }, 2000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second Promise Resolved");
    }, 2000);
  });
}

// They work parallelly and do not wait for each other

// console.log("fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("fetching data 2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

// console.log("fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);

//   console.log("fetching data 2");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

// another way to chain promises
// easier to read and maintain
// we can chain promises to avoid callback hell
console.log("fetching data 1");
asyncFunc1()
  .then((res) => {
    console.log(res);

    console.log("fetching data 2");
    return asyncFunc2();
  })
  .then((res) => {
    console.log(res);
  });
