// https://www.codewars.com/kata/54da539698b8a2ad76000228

let isValidWalk = walk => {
  let x = 0;
  let y = 0;
  
  walk.forEach((el) => {
    switch(el){
      case 'n': y--; break
      case 's': y++; break
      case 'w': x--; break
      case 'e': x++; break
      }
  })
  return x == 0 && y == 0 && walk.length == 10;
}

