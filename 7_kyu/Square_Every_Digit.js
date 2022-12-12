// https://www.codewars.com/kata/546e2562b03326a88e000020

let squareDigits = num => {
  return +[...''+num]
  .map((n) => n ** 2)
  .join('')
}

