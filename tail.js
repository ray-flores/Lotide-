const tail = function(array) {
  return array.slice(1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const one = [1];
tail(one);
assertEqual(tail(one), []);

const empty = [];
tail(empty);
assertEqual(tail(empty), []);

