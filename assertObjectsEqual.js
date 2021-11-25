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

const eqObjects = function(obj1, obj2) {
  let arr1 = Object.keys(obj1); 
  let arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) { // check if num of keys is the same
    return false;
  } else {  
    for (const key of arr2) { 
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { // check if values to the same key are arrays // check if array lengths are the same and if values in array are the same
          if (!eqArrays(obj1[key], obj2[key])) {
            return false;
          } 
        } else if (obj1[key] !== obj2[key]) {
          return false; 
        }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(actual);
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); 
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertObjectsEqual({ a: '3', b: 2 }, { b: 2, a: '1' });

const obj1 = { c: "1", d: ["2", 3] };
const obj2 = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

assertObjectsEqual(eqObjects(obj1, obj2), true);


