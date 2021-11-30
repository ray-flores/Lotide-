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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// expected: [ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
}

const callback = num => { 
  if (num < 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = takeUntil;

const callback2 = num => {
  if (num === ",") {
    return true;
  } 
  return false;
};

const results1 = takeUntil(data1, callback);
console.log(results1);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(takeUntil(data1, callback), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, callback2), ["I've", "been", "to", "Hollywood"]);


// callback should provide a truthy value and stop receiver function
// function(item) {
//   if (item < 0 ) {
//     return true;
//   }
//   return false;
// };