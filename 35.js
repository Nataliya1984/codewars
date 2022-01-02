// BASIC: Making Six Toast.

//You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

function sixToast(num) {
  return num <= 6 ? 6 - num : num - 6;
}

console.log(sixToast(6)); //, 0);
console.log(sixToast(17)); //, 11);
console.log(sixToast(3)); //, 3);
