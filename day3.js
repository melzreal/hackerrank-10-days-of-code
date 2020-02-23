
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
    //we need to iterate through each number and order them
    //then find the largest
    //then go through all the other numbers and return the largest number not equal to 
    //the stored one. Like a bubble sort where the second one gets stored in a variable


    let largestNum = nums[0];
    let secondLargest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largestNum) {
            secondLargest = largestNum;
            largestNum = nums[i];

        }
        if ((nums[i] > secondLargest) && (nums[i] < largestNum)) {
            secondLargest = nums[i];
        }
    }


    return secondLargest;
}



// // day 3, try catch. 
// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

function reverseString(s) {
    try {
        console.log(s.split('').reverse().join(''));
    } catch (e) {
        console.log(e.message, "\n" + s);
    }
}


//throw, day 3
function isPositive(a) {

    if (a === 0) {
        throw new Error('Zero Error');

    } else if (a < 0) {
        throw new Error('Negative Error');

    } else {
        return 'YES';
    }



}

