function Palindrome(text){
    let testCase = text.toLowerCase().replace(/[^a-z0-9]/g,"").split("").reverse().join("");

    return testCase === text.toLowerCase().replace(/[^a-z0-9]/g,"") ? true : false;

}
console.log(Palindrome("A Man, A Plan, A Canal – Panama!"));