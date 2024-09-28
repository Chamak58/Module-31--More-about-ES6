

const numbers = [2, 3, 4, 5, 6];

// const doubled = [];
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);

function doubleIt(num) {
    //console.log(num);
    return num * 2;
}

const double2 = n => n * 2;
const result = numbers.map(doubleIt);
//console.log(result);

const output = numbers.map(double2);
//console.log(output);

const output2 = numbers.map(n => n * 2);
//console.log(output2);

const numbers2 = [12, 11, 34, 23, 14];

const doubled = numbers2.map(num => num * 2);
//console.log(doubled);

const addFive = numbers2.map(num => num + 5);
//console.log(addFive);

const halves = numbers2.map(x => x / 2);
//console.log(halves);

const friends = ['jodu', 'modhu', 'ram', 'sam']
//console.log(lengths);
const lengths = friends.map(frnd => frnd.length);
//console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);