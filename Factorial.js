function Factorial(num){
    let total = num;
    if(num === 0){
        return 1;
    }
    for(let i = 1; i < num; i++){
        total *= i;
    }
    return total;
}

console.log(Factorial(5));