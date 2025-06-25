// resolve and reject are functions that are passed to the executor function
// Promises can be in one of three states: pending, fulfilled, or rejected
let getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise is created");
    // resolve(123);
    reject("Error occurred while fetching data");
  });
};

let promise = getPromise();

promise
  .then((res) => {
    console.log("promise fullfilled with value:", res);
  })
  .catch((err) => {
    console.log("promise rejected with error:", err);
  });

// const getData = (id, getNextData) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("fetching data for id:", id);
//       resolve(123);
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// };

// let result = getData(1);

// in general programming , we don't create promise it is returned to us
