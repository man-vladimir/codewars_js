// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  
  let digRoot = 0;
 
  n.toString().split('').forEach((el) => {
    digRoot += Number(el);
  });

  return digRoot > 9 ? digitalRoot(digRoot) : digRoot;
 
}

