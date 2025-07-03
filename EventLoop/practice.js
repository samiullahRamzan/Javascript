console.log('test start');

setTimeout(()=>{
  console.log('timeout callback in 0 milliseconds');
}, 0);

Promise.resolve('promise resolved 1').then(res=> console.log(res));
Promise.resolve('promise resolved 2').then(res=> {
    for(let i = 0; i < 1000000000 ; i++) {
        // Simulating a heavy computation
    }
    console.log(res);
});

console.log('test end');