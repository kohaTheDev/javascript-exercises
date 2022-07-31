const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/gi, '');
    let newStr = str.split("").reverse().join("");
    return str === newStr;
};

// Do not edit below this line
module.exports = palindromes;
