//Sum of differences in array

//Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);
  console.log(arr);
  if (arr === [] || arr < 1) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i - 1] - arr[i];
  }

  return sum;
}
