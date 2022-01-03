//Grasshopper - Grade book

//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  let res = Math.floor((s1 + s2 + s3) / 3);
  if (res >= 90) {
    return "A";
  } else if (res >= 80) {
    return "B";
  } else if (res >= 70) {
    return "C";
  } else if (res >= 60) {
    return "D";
  } else {
    return "F";
  }
}
