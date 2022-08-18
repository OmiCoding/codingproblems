function factorial(y, sum = 1) {
  if (y === 0) {
    return sum;
  }
  sum *= y;
  return factorial(y - 1, sum);
}

function memoize(cb) {
  let cache = {};
  return function (n) {
    console.log(cache);

    if (n in cache) {
      return cache[n];
    } else {
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  };
}

let memoizeFactorial = memoize(factorial);
let memoizedVal = memoizeFactorial(10);
let memoizedVal2 = memoizeFactorial(2);
