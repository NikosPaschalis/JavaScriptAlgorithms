function amendSentence(str){

    return str.match(/[A-Z][a-z]+/g).join(" ");
 
    
}

console.log(amendSentence("TakisIsTheBestDeveloper"));