const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let sentence = "lighthouse tall"

const countLetters = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s/g, '');
  for (const letter of sentence) {
    //if (sentence[letter] != " ") { not working...
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  } 
  return results;  
};

module.exports = countLetters;

const results1 = countLetters(sentence);

assertEqual(results1["i"], 1);
assertEqual(results1["l"], 3);
assertEqual(results1[" "], undefined);
assertEqual(results1["g"], 1);
assertEqual(results1["e"], 1);
assertEqual(results1["a"], 1);
