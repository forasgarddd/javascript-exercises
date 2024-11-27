const fibonacci = function(num) {
    let i;
    let fib = [0, 1]; // Initialize array!

    let arr = [];

    let int = parseInt(num);

    if (int === 0) {
        return 0;
    } else if (int === 1) {
        return 1;
    }
    else if (int < 0) {
        return "OOPS";
    }
    else {
        for (i = 2; i <= int; i++) {
            // Next fibonacci number = previous + one before previous
            // Translated to JavaScript:
            fib[i] = fib[i - 2] + fib[i - 1];
                arr.push(fib[i]);
            }
            return arr[arr.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
