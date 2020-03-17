function digitSum(str){

    const regex = /[0-9]+/g
    let num = 0;

    str = str.match(regex);

    if(str !== null){
        str.forEach(element => {
            num += Number(element);
        });
    }


    return num;
}

console.log(digitSum("My duck  is awesome "));