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