const reverseString = function(str) {
    let reversedCharArr = [];
    for (let i = 0; i < str.length; i++) {
        let lastChar = str.at(str.length - i - 1);
        reversedCharArr[i] = lastChar;
    }
    let res = reversedCharArr.join("");
    return res;

    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
