//altERnaTIng cAsE <=> ALTerNAtiNG CaSe

//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes

String.prototype.toAlternatingCase = function () {
  return [...this]
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");
};
