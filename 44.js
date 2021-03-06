// Count by X

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
  let z = [];
  let step = n;

  for (let i = x; step > 0; i += x) {
    z.push(i);
    step--;
  }

  return z;
}
