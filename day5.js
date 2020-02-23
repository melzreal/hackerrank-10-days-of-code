/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(x => x % 2 === 0 ? x = x * 2 : x = x * 3)
}



/* Inheritance
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function (w, h) {
    return (this.w * this.h);
}


class Square extends Rectangle {

    constructor(side) {
        super();
        this.side = side;
    }

    area(side) {
        super.area();
        return (this.side * this.side);
    }


}



/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

//using spread to cover both arguments

function sides(literals, ...expressions) {

    const area = expressions[0];
    const perimeter = expressions[1];

    let s1 = (perimeter + Math.sqrt((perimeter * perimeter) - (16 * area))) / 4;
    let s2 = (perimeter - Math.sqrt((perimeter * perimeter) - (16 * area))) / 4;


    const sorted = [s1, s2].sort((a, b) => a > b ? 1 : -1);

    return sorted;

}

