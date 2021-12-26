// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

//Remove all exclamation marks from the end of sentence.

function remove(s) {
  return s.replace(/!*$/g, "");
}

console.log(remove("Hi!")); //  "Hi"
console.log(remove("Hi!!!")); // "Hi"
console.log(remove("!Hi")); //  "!Hi"
