const getData = (id, getNextData) => {
  setTimeout(() => {
    console.log("fetching data for id:", id);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
};

// getData(1);
// getData(2);
// getData(3);

//getData(1, getData(2)); // function imediately invoked

// Callback Hell Example .. this is very bad code
// nested callbacks stacked below one another forming pyramid structure (pyramid of doom)
// this style of coding is hard to read and maintain
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

// to resolve callback hell, we can use Promises.
// Promises is for eventual completion of task. it is an object in js
// it is a solution to callback hell
