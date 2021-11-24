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

assertArraysEqual([1, 2, 3], [1, 2, 3]);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

