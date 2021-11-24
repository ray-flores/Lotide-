
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

const without = function(arr, rmarr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let x = 0; x <= rmarr.length; x++) {
      if (arr[i] === rmarr[x]) {
        let string = arr.join();
        let arr2 = string.split(',');
        arr2.splice(i, 1);
        console.log(arr2);
        return arr2;
      }
    }
  }
};

let arr = [1, 2, 3];
let rmarr = [3];

console.log(without([1, 2, 3], [3]));
console.log(assertArraysEqual(without(arr, rmarr), [1, 2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


