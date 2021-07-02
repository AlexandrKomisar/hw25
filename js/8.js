let time = (h) =>{
    function multiply60 (n){
        return n * 60;
    }
    return (m = 0) => {
        return(s = 0) =>`${+multiply60(multiply60(h)) + +multiply60(m) + s}`;
    };
};
console.log(time(9)(18)());
console.log(time(10)()());