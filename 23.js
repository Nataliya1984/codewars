//Count of positives / sum of negatives

//Given an array of integers.

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

//If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  let p = 0;
  let n = 0;
  input.reduce((acc, el) => {
    if (el > 0) {
      p++;
    } else if (el < 0) {
      n += el;
    }
  }, 0);
  return [p, n];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); //[10, -65]
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); //[8, -50]

console.log(countPositivesSumNegatives([])); //[]
