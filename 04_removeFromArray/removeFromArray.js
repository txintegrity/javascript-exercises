const removeFromArray = function(array, a, b=null, c=null, d=null){
    let result = [];
    for (i=0; i<array.length; i++){
        console.log(`The array is ${array}`);
        console.log(`The value of i is ${i}`);
        if (array[i] === a){
            console.log(`the result is ${result}`);
        }
        else if (array[i] === b){
            console.log(`the result is ${result}`);
        }
        else if (array[i] === c){
            console.log(`the result is ${result}`);
        }
        else if (array[i] === d){
            console.log(`the result is ${result}`);
        }
        else {
            result.push(array[i]);
            console.log(`the result is ${result}`);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
