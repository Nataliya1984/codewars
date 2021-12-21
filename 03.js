//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(myString) {
    const lowercaseInput = myString.toLowerCase();
    const forward = lowercaseInput;
    const backward = lowercaseInput.split("").reverse().join("");
    return forward === backward;
  }