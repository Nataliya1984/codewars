// Wilson primes

//Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(P) {
    return (factorial(P-1) + 1) /  Math.pow(P, 2) % 1 === 0 ;
  }
  
  function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
  }