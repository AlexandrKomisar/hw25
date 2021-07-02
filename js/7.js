let time = (h) =>{
    function zero (n){
        return n > 9 ? n : '0' + n;
    }
    return (m = 0) => {
        return(s = 0) =>`${zero(h)}:${zero(m)}:${zero(s)}`;
    };
};
console.log(time(9)()());
console.log(time(10)()());