// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

// variant one
const gooseFilter = birds => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];  
  return birds.filter(element => !geese.includes(element));
};

// variant two
const gooseFilter2 = birds => {
  let geese = {"African" : 1, "Roman Tufted" : 1, "Toulouse" : 1, "Pilgrim" : 1, "Steinbacher" : 1};
  return birds.filter(element => !geese[element]);
};

