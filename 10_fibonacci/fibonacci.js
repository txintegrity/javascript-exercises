const fibonacci = function(num) {
    let int = parseInt(num);
    let arr = [];
    if (int<=0){
        return "OOPS";
    }
    else{
        for (i=int; i>0; i--){
            if (arr.length<2){
                arr.push(1);
            }
            else {
                const nextItem = ((arr[arr.length-1]) + (arr[arr.length-2]));
                arr.push(nextItem);
            }
        }
        return arr[arr.length-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
