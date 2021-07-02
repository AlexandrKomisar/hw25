const a = +prompt('Enter a number', 0);
const b = +prompt('Enter a number', a);

let area = (side1, side2 = side1) => side1 * side2;

console.log(area(a, b));