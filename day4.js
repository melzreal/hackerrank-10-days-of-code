/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {

    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;

}


/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {

    let counter = 0;

    objects.forEach(key => {
        if (key.x === key.y) {
            counter++;
        }
    });

    return counter;



}


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(length) {
        this.length = length;

    }

    perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        return this.length.reduce(reducer);
    }
}



class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}



