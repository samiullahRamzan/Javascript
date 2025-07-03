
// O(n) time complexity with memoization
// O(n) space complexity for the cache
// This implementation uses a closure to maintain the cache for previously computed Fibonacci numbers.  
function memoizedFibonacci(){
    const cache = {};

    return function fib(n){
        if(n<0){
            console.error("Input must be a non-negative integer.");
            return null;
        }

        if(n==0||n==1){
            return n;
        }

        if(cache[n]){
            return cache[n];
        }

        return cache[n] = fib(n-1) + fib(n-2);
    }
}

const fibonacci = memoizedFibonacci();
//console.log(fibonacci(10)); // Output: 55
//console.log(fibonacci(50)); // Output: 12586269025
console.log(fibonacci(100)); // Output: 354224848179261915075