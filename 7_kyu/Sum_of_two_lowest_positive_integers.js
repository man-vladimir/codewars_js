// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// variant one
let sumTwoSmallestNumbers = numbers => {  
  let sortNum = numbers.sort((a, b) => a - b);
  return sortNum[0] + sortNum[1];
}

// variant two
let sumTwoSmallestNumbers2 = numbers => {  
  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

