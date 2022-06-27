function round(num){
  if (num>0){
    let dec = (num - (Math.floor(num)));
    const x = (Math.round((dec*10)));
    dec = x/10;
    result = (Math.floor(num) + dec);
    return result;
  }
  else {
    let dec = 1 - ((num - (Math.floor(num))));
    const x = (Math.round((dec*10)));
    dec = x/10;
    result = ((Math.floor(num)+1) - dec);
    return result;
  }
}

const ftoc = function(temp) {
  let result = (temp-32)*0.5556;
  return round(result);
};

const ctof = function(temp) {
  let result = (temp*1.8)+32;
  return round(result);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
