const palindromes = function (str) {
    let lowerStr = str.toLowerCase();
    let normStr = "";
    let isPalindrome = true;
    for (i=0; i<lowerStr.length; i++){
        if (lowerStr[i] === "a" || lowerStr[i] === "b" || lowerStr[i] === "c" || lowerStr[i] === "d" || lowerStr[i] === "e" || lowerStr[i] === "f" || lowerStr[i] === "g" || lowerStr[i] === "h" || lowerStr[i] === "i" || lowerStr[i] === "j" || lowerStr[i] === "k" || lowerStr[i] === "l" || lowerStr[i] === "m" || lowerStr[i] === "n" || lowerStr[i] === "o" || lowerStr[i] === "p" || lowerStr[i] === "q" || lowerStr[i] === "r" || lowerStr[i] === "s" || lowerStr[i] === "t" || lowerStr[i] === "u" || lowerStr[i] === "v" || lowerStr[i] === "w" || lowerStr[i] === "x" || lowerStr[i] === "y" || lowerStr[i] === "z"){
            normStr = normStr.padEnd((normStr.length+1), lowerStr[i]);
        }
    }
    console.log(`normStr is ${normStr}`);
    let reverseStr = "";
    for (i=0; i<normStr.length; i++){
        reverseStr = reverseStr.padStart((reverseStr.length+1), normStr[i]);
    }
    console.log(`reverseStr is ${reverseStr}`);
    for (i=0; i<normStr.length; i++){
        if (normStr[i] != reverseStr[i]){
            isPalindrome = false;
        }
    }
    return isPalindrome;
};



// Do not edit below this line
module.exports = palindromes;
