// https://www.codewars.com/kata/55b42574ff091733d900002f

// variant one
let friend = friends => {
  let res = [];
  for(let i = 0; i < friends.length; i++){
    if(friends[i].length === 4) res.push(friends[i]); 
  }
  return res;
}

// variant two
let friendTwo = friends => friends.filter(el => el.length === 4);