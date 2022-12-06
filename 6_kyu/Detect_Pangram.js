// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// variant one
let isPangram = string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const regex = /\s|[\.\?\,\:\;\!]|\d/g;
  const lowercase = string.toLowerCase().replace(regex, "");
  
  for(let i = 0; i < alphabet.length; i ++){
    if(lowercase.indexOf(alphabet[i]) === -1) return false
  }
  return true
}

// variant two
let isPangrams = string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const regex = /\s|[\,\.]|\d/g;
  const lowercase = string.toLowerCase().replace(regex, "");
  const uniqString = new Set(lowercase)  
  
  if(uniqString.size != alphabet.length) return false  
  
  return true
}

