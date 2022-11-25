// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let count = {};
  A.forEach((el) => {
    count[el] = count[el] ? count[el] + 1 : 1;
  })
  return +Object.keys(count).find(key => count[key] % 2 === 1);
}

