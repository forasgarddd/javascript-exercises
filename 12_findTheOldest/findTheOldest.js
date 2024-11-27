const findTheOldest = function(people) {
    let fixed = people.map(item => {
        if (item.yearOfDeath === undefined) {{
            item.yearOfDeath = new Date().getFullYear();
        }}
        return item;
    });

    let sorted = fixed.sort((a, b) => {
        let oneBirth = b.yearOfDeath - b.yearOfBirth;
        let nextBirth = a.yearOfDeath - a.yearOfBirth;
        return oneBirth - nextBirth;
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
