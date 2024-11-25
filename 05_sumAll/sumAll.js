const sumAll = function(num1, num2) {

    let sum = 0;
    let first = 0;
    let last = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1 % 1 !== 0 || num2 % 1 !== 0) {
        return "ERROR";
    } else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }

    if (num1 < num2) {
        first = num1;
        last = num2;
    } else {
        first = num2;
        last = num1;
    }

    for (let i = first; i <= last; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
