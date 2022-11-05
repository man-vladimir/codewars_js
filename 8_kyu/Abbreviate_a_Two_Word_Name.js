// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
  return name
  .split(' ')
  .map(function(el){return el.slice(0, 1).toUpperCase()})
  .join('.');

}

