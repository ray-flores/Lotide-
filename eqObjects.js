const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

/*
const obj7 = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const obj8 = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const obj9 = {
  castle: "Windsor",
  island: "Amanpulo",
  mountain: "El Capitan"
}
*/

//assertEqual(eqObjects(obj7, obj8), true);
//assertEqual(eqObjects(obj7, obj9), false);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
