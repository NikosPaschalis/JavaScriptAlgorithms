function duplicateNumbers(arr){
    let sortArr = arr.sort((a,b) => {
        return a-b;
    });

    for(let i = 0; i < sortArr.length; i++){
        if(sortArr[i] === sortArr[i+1]){
            return true;
        }
    }

    return false;
}

console.log(duplicateNumbers([0,1,3,6,0]));