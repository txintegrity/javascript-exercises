const findTheOldest = function(people) {
    const today = new Date();
    const thisYear = today.getFullYear();
    for (const person of people){
        if (person.yearOfDeath === undefined){
            person.yearOfDeath = thisYear;
        }
    }
    const sortedPeople = people.slice().sort((a, b) => {
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        if (aAge>bAge){
            return 1;
        }
        else {
            return -1;
        }
    });
    console.table(people);
    console.table(sortedPeople);
    return sortedPeople[sortedPeople.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;

