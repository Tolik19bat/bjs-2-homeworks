"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - 4 * a * c;

  if (discriminant === 0) {
    let formulaRoot = (b * -1) / (2 * a);
    arr.push(formulaRoot);
  }
  if (discriminant > 0) {
    let formulaRootPlus = ((b * -1) + Math.sqrt(discriminant)) / (2 * a);
    arr.push(formulaRootPlus);
    let formulaRootMinus = ((b * -1) - Math.sqrt(discriminant)) / (2 * a);
    arr.push(formulaRootMinus);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPerMounth = percent / 100 / 12;
  let creditSum = amount - contribution;
  let monthlyPayment =
    creditSum *
    (percentPerMounth +
      (percentPerMounth / (((1 + percentPerMounth) ** countMonths) - 1)));
  let grandTotal = monthlyPayment * countMonths;
  grandTotal = grandTotal.toFixed(2);
  grandTotal = +grandTotal;
  return grandTotal;
}
