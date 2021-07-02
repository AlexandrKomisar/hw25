

let compare = (a, b) =>{
    if (a < b) return -1;
    if (a > b) return 1;
    if (a == b) return 0;
};
const a = +prompt('Enter first number',0);
const b = +prompt('Enter second number',0);
console.log(compare(a, b));