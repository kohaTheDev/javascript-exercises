let fibo = [1,1];
const fibonacci = function(x) {
    if(x < 0 ) return "OOPS";
    if (fibo[x-1] === undefined) {
        fibo[x-1] = fibonacci(x-2) + fibonacci(x-1);
    }
    return fibo[x-1];
};

// Do not edit below this line
module.exports = fibonacci;
