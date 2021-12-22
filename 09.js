//Create a function called shortcut to remove all the lowercase vowels in a given string.

function shortcut(string) {
  let str = string.replace(/[aeiouAEIOU]/g, "");
  return str;
}

console.log(shortcut("hello")); // == 'hll'
console.log(shortcut("how are you today?")); // == 'hw r y tdy?
console.log(shortcut("complain")); // == 'cmpln
