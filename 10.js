//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n < 0) {
    return 0;
  } else if (m > 0) {
    return n * m;
  } else {
    return 0;
  }
}

console.log(paperwork(94, 62)); //, 25,
console.log(paperwork(5, -5)); //, 0,
console.log(paperwork(-5, -5)); //, 0
