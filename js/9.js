const seconds = prompt('Enter count of seconds', 32400);

let time = (n) => {
    let hoursFloat = n / 3600;
    console.log(hoursFloat);
    let hours = Math.floor(hoursFloat);
    console.log(hours);
    let minutes = Math.floor((hoursFloat - hours) * 60);
    console.log(minutes);
    let seconds  = n - ((minutes * 60) + (hours * 3600));
    function zero (num){
        return num > 9 ? num : '0' + num;
    }
    return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
}
console.log(time(seconds));