const sumAll = function(begin, end) {
    for (const argument of arguments) {
        if (argument < 0 ||  !Number.isInteger(argument)) {
            return 'ERROR';
        }
    }
    let sum = (end + begin) * (Math.abs(end - begin) + 1) / 2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
