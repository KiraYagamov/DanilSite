function convert(number){
    const arr = [];
    while (number > 0){
        arr.push(number % 10);
        number /= 10;
        number = Math.floor(number);
    }
    return arr;
}

console.log(convert(34528));
