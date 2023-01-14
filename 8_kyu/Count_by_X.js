// https://www.codewars.com/kata/5513795bd3fafb56c200049e

let countBy = (x, n) => {
  let z = [];
  for(let i = 1; i <= n; i++){
    z.push(x * i);
  }
  return z;
}

