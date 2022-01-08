//UEFA EURO 2016

//Finish the uefaEuro2016() function so it return string just like in the examples below:

function uefaEuro2016(teams, scores) {
  let t = teams[0];
  let te = teams[1];

  if (scores[0] > scores[1]) {
    return `At match ${t} - ${te}, Germany won!`;
  } else if (scores[0] < scores[1]) {
    return `At match ${t} - ${te}, Italy won!`;
  } else if (scores[0] == scores[1]) {
    return `At match ${t} - ${te}, teams played draw.`;
  }
}
