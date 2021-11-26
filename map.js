const words = ["ground", "control", "to", "major", "tom"];

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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`); 
  } else if (arr1 !== arr2) {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const map = function(arr, callbk) {
  const results = [];
  for (let item of arr) {
    results.push(callbk(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

// write three test cases:

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[0]), ['c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[0]), ['t', 'm', 't', 'c', 'g']);
assertArraysEqual(map(words, word => word[0]), ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(map(words, word => word[0]), []);
assertArraysEqual(map(words, word => word[0]), [0, 1, , 2, 3]);





