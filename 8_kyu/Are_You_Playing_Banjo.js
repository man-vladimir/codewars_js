// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {

  return /[R]|[r]/.test(name[0]) ?  `${name} plays banjo` :  `${name} does not play banjo`;
  
}

