// async function always returns a promise..
// await pauses the execution of its surrounding async function until the promise is resolved or rejected
// using async keyword it will always return a promise

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data from API");
      resolve("Data fetched from API");
    }, 2000);
  });
}

// async function getAsyncData() {
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
// }

//getAsyncData();

// we can use async/await to make it look synchronous
// it is a cleaner way to write asynchronous code
// IIFE: Immediately Invoked Function Expression
// IIFE is a function that runs as soon as it is defined
// (async function getAsyncData() {
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
// })();

// (async () => {
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
// })();

(async function () {
  await api();
  await api();
  await api();
  await api();
  await api();
})();
