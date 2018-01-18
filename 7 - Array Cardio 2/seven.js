    // ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
    ];
    const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
    ];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// const isAdult = people.some(function(person) {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year >= 19) {
//         return true;
//     }
// });
//better way to write the function above
// const isAdult = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 19;
// });

//best way to write the above
const isAdult = people.some(person => ((new Date()).
    getFullYear()) - person.year >= 19 );

    console.log({isAdult});

// Array.prototype.every() // is everyone 19 or older?

const allAdults = people.every(person => ((new Date()).
    getFullYear()) - person.year >= 19 );

    console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// const comment = comments.find(function(comment) {
//     if(comment.id === 823423) {
//         return true;
//     }
// });

//better way to do the above
const comment = comments.find(comment => comment.id === 823423);


console.log({comment});

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);

console.log({index});

//delete the row that is needed
// comments.splice(0, index);

//better way to delete the row using redux
const newComments = [
    ...comments.slice(0,index),
    ...comments.slice(index + 1)
];

//another function to find text that equals "Love this!"

const specificText = comments.find(word => word.text === 'Love this!');

console.log({specificText});

//another function to find the index of name of person who was born in the year 2015

const wasBorn = people.some(person => person.year === 2015);

console.log({wasBorn});