const reverseString = function(str) {
    let result = "";
    for (char of str){
        result = result.padStart((result.length + 1), char);
    }
    return result;
}


// Do not edit below this line
module.exports = reverseString;
