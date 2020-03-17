function missingNumber(arr){

    arr = arr.sort((a,b) => {
        return a-b;
    });

    for(let i = 0; i < arr.length; i++){
        if(arr[i] + 1 !== arr[i+1]){
            return arr[i] + 1;
        }
    }
}

console.log(missingNumber([1,2,5,0,6,7,9,3,4]));