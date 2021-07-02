const n1 = prompt('Enter first number',0);
const n2 = prompt('Enter second number',0);
const n3 = prompt('Enter third number',0);

function numMerger (n1, n2, n3){
    num = n1.toString() + n2.toString() + n3.toString();
    return num;
}
console.log(numMerger(n1, n2, n3));