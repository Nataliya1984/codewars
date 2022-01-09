//Sum Arrays

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  if (numbers === []) {
    return 0;
  }
  let sum = numbers.reduce((acc, el) => acc + el, 0);
  return sum;
}
