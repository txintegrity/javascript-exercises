const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr) {
  let result = 0;
	for (const item of arr){
    result+=item;
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for (const item of arr){
    result *= item;
  }
  return result;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if (num===0){
    return 1;
  }
  else {
    let result = 1;
    let arr = [];
    for (i=num; i>0; i--){
      arr.push(i);
    }
    for (const item of arr){
      result *=item;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
