function addDigits(num){
    let sum = 0;
    let arr = num.toString().split("").map(element => { sum += Number(element); });
    return sum;
}

console.log(addDigits(294));