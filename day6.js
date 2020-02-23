//problem:
// Complete the function in the editor so that given n and k, it returns the maximum a& b <k

//solution
function getMaxLessThanK(n, k) {

    // we create an Array with the numbers we want to compare against k. 
    // we could probably also just iterate up to n

    let setFromNumbers = Array.from({ length: `${n}` }, (v, k) => k + 1);
    let largestPossible = 0;
    //a starts at 1 and is smaller then n, b starts at 2 and is smaller then n
    //check each a & b combo is smaller then k 
    for (let a = 1; a <= setFromNumbers.length; a++) {
        for (let b = a + 1; b <= setFromNumbers.length; b++) {
            let ab = (a & b);
            ((ab < k) && (ab > largestPossible)) ? largestPossible = ab : "";
        }
    } return largestPossible;
}