const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let sentence = "hello";

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

const results1 = letterPositions(sentence);

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

assertArraysEqual(letterPositions(sentence).e, [1]);
assertArraysEqual(letterPositions(sentence).l, [2, 3]);
assertArraysEqual(letterPositions(sentence).a, undefined);
