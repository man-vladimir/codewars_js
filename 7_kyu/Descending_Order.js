//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = n => {
    let array = (""+n).split("").map(Number);
    return Number(array.sort((a,b) => b - a).join(''));
}

kkk