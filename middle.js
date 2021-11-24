const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑 Length Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑 Element Assertion Failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  return `true`;
};

const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }
  let returnedArr = [];
  let middleIndex;
  if (arr.length % 2 > 0) {
    middleIndex = Math.floor((arr.length / 2));
    returnedArr.push(arr[middleIndex]);
    return returnedArr; 
  }
  if (arr.length % 2 === 0) {
    middleIndex = Math.floor((arr.length / 2)) - 1;
    const middleIndex2 = Math.floor((arr.length / 2));
    returnedArr.push(arr[middleIndex]);
    returnedArr.push(arr[middleIndex2]);
    return returnedArr;
  }
};

// test cases

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