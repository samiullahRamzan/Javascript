const curriedSubtraction = (a)=>(b)=>(c)=>{
    return a - b - c;
}

console.log(curriedSubtraction(10)(5)(2));