// https://www.codewars.com/kata/515e271a311df0350d00000f

let initialValue = 0;
let squareSum = numbers => numbers.map(num =>  num ** 2 ).reduce((sum, value) => sum + value, initialValue)

