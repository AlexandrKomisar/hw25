
function n(a) {

    return (a != 1) ? a * n(a - 1) : 1;
}
console.log( n(12) );