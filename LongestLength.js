function longestLength(str){
    let total = 0;
    let strArray = str.split(' ');

    for(let i = 0; i < strArray.length; i ++){
        total = total < strArray[i].length ? strArray[i].length : total;
    }
    
    return total;

}

console.log(longestLength("I am a coding god"));