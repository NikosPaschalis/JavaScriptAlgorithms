function sum(arr){
    let sum = 0;

    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }

    return sum;
}

console.log(sum([10,5]));