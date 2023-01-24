// https://www.codewars.com/kata/54e6533c92449cc251001667

let uniqueInOrder = iterable => {
  let res = [];
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] != iterable[i + 1]){
      res.push(iterable[i]);
    }
  }
  return res;
}

