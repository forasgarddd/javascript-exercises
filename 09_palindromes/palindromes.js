const palindromes = function (str) {
    cleaned = str.split('').filter(char => {
        return /[a-zA-Z0-9 ]/.test(char);
    }).join('').toLowerCase().replace(/\s/g, "");
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
