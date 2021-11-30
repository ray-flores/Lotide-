const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });

});

// let arr = [1, 2, 6, 4, 5];
// let arr2 = [1, "2", 3, 4, 5];
// let arr3 = [1, 2, 3, 4];
// let arr4 = [1, 2, 3, 4];

// middle(arr);
// middle(arr2);
// middle(arr3);


// console.log(assertArraysEqual(middle(arr), [6]));
// console.log(assertArraysEqual(middle(arr4), [2, 3]));
// console.log(assertArraysEqual(middle(arr2),  [3]));