// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/javascript
// variant one
const pillars = (numPill, dist, width) => {
    if (numPill === 1) {
        return 0;
    }
    if(numPill === 2) {
        return dist * 100;
    }
    let widthOfTwoPills = 2 * width;
    let widthOfAllPills = numPill * width;
    let distanse = dist * 100 * (numPill - 1);
    return distanse + widthOfAllPills - widthOfTwoPills;
}

// variant two
const pillarsVariantTwo = (numPill, dist, width) => {
    return numPill > 1 ? (numPill - 1) * dist * 100 + (numPill - 2) * width : 0;
}