function titleCase(str){
    return str.split(' ').map(function (word){
       return  word.charAt(0).toUpperCase() + word.substr(1);
    }).join(' ');

}

console.log(titleCase("my name is takis"));