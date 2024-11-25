const removeFromArray = function(arr, ...theArgs) {
    const normalArgs = Array.from(theArgs);
    let res = [];
    for (let item of arr) {
        for (let arg of normalArgs) {
            if (item === arg) {
                res = arr.filter(item => item !== arg)
                arr = res;
            } else {
                res = arr;
            }
        }
    }
    return res;
};

removeFromArray([1, 2, 3, 4], 3, 2);


// Do not edit below this line
module.exports = removeFromArray;
