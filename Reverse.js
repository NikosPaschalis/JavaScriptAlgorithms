function Reverse(inputStr){
    let text = inputStr.split("").reverse().join("");

    return text;
}

console.log(Reverse('hello'));