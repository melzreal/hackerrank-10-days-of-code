//bitwise operators
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


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//dates in JS

function getDayName(dateString) {

    // Write your code here
    let day;
    const dateParser = new Date(dateString);
    const dateToInt = dateParser.getDay();



    switch (dateToInt) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    return day;
}