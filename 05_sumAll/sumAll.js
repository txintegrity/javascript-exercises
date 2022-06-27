const sumAll = function(a, b) {
    let nums = [];
    let sum = 0;
    if (typeof(a)==="number" && typeof(b)==="number"){
        if (a<0 || b<0){
            return 'ERROR'
        }
        else {
            if (a>b){
                nums[0] = b;
                nums[1] = a;
            }
            else {
                nums[0] = a;
                nums[1] = b;
            }
            let opArray = [];
            for (i=nums[0]; i<=nums[1]; i++){
                opArray.push(i)
                };
            for (const op of opArray){
                sum = sum + op;
            }
            return sum;
        }
    }
    else {
        return 'ERROR'
    }      
}

// Do not edit below this line
module.exports = sumAll;
