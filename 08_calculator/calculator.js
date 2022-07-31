const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arg) {
  let sum = 0;
	for (item of arg) {
    sum += parseInt(item);
  }
  return sum;
};

const multiply = function(arg) {
  let product = 1;
	for (item of arg) {
    product *= parseInt(item);
  }
  return product;
};

const power = function(a,b) {
  let power = 1;
  for(let i = 0; i < b; i++) {
    power *= a;
  }

  return power;
};
let factorials = [1];
const factorial = function(x) {
  res = x;
	if(factorials[x]===undefined) {
    res *= factorial(x-1);
    factorials[x] = res;
  }
  return factorials[x];
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
