let dateDiff = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) =>{
    if (h == 0){
        h = 24;
    }
    let seconds = h * 60 * 60 + m * 60 + s;
    let seconds1 = h1 *60 * 60 + m1 * 60 + s1;
    let secDiff = Math.abs(seconds1 - seconds);
    function time(n) {
        let hoursFloat = n / 3600;
        let hours = Math.floor(hoursFloat);
        let minutes = Math.floor((hoursFloat - hours) * 60);
        let seconds  = n - ((minutes * 60) + (hours * 3600));
        function zero (num){
            return num > 9 ? num : '0' + num;
        }
        return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
    }
    return time(secDiff);
};
console.log(dateDiff(0,10,0,10,0,0));