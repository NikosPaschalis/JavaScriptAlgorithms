function uniqueValues(arr1, arr2){
    let uniqueArr = [];

    for(let val of arr1){
        if(!arr2.includes(val) && !uniqueArr.includes(val)){
            uniqueArr.push(val);
        }
    }


    for(let val of arr2){
        if(!arr1.includes(val) && !uniqueArr.includes(val)){
            uniqueArr.push(val);
        }
    }

    return uniqueArr;
}

console.log(uniqueValues([1,2,3],[4,5,1]));