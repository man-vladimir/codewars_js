// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/

function longest(s1, s2) {
  let sConcat = (s1 + s2).split(''); 
  let res = sConcat.filter((item, index) => {
    return sConcat.indexOf(item) === index
  });

  return res.sort().join('');
}

