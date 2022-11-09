// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  if (input === null || input.length == 0) return [];
  let countPositive = 0;
  let countNegative = 0;
  input.forEach((el) => {
    if (el > 0) countPositive += 1;
    if (el < 0) countNegative += el;
  });
  return [countPositive, countNegative];
}

