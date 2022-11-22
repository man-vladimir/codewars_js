// https://www.codewars.com/kata/5390bac347d09b7da40006f6/

String.prototype.toJadenCase = function () {
  return this.replace(/(\s|^)\w/g, function(el) {return el.toUpperCase()});
};

