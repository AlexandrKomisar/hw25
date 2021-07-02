const start = +prompt('Enter start of range', 0);
const end = +prompt('Enter end of range', 100);

let perfectInRange = (a, b) => {
    for (let i = a; i <= b; i++){
        let s = 0;
        for(let j = 0; j < i; j++){
            if(i % j == 0){
                s += j;
            }
        }
        if(i == s){
            console.log(i);
        }
    }
};
perfectInRange(start, end);