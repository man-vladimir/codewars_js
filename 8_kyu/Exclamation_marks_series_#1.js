// https://www.codewars.com/kata/57fae964d80daa229d000126

function remove(s) {
  return s[s.length - 1] == "!" ? s.slice(0, s.length - 1) : s;
}
