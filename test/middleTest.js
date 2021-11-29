const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


let arr = [1, 2, 6, 4, 5];
let arr2 = [1, "2", 3, 4, 5];
let arr3 = [1, 2, 3, 4];
let arr4 = [1, 2, 3, 4];

middle(arr);
middle(arr2);
middle(arr3);


console.log(assertArraysEqual(middle(arr), [6]));
console.log(assertArraysEqual(middle(arr4), [2, 3]));
console.log(assertArraysEqual(middle(arr2),  [3]));