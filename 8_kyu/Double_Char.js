// https://www.codewars.com/kata/56b1f01c247c01db92000076

// variant one
function doubleChar(str) {
  let double = '';
  for(let i = 0; i < str.length; i++) {
    double += str[i] + str[i];
  }  
  return double;
}

// variant two
function doubleChar(str) {
  return str.replace(/(.)/g, "$&$&");
}


