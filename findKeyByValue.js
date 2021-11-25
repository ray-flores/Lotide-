const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let arr = Object.keys(obj);
  for (const key of arr) {
    if (obj[key] === value) {
      console.log(key);
      return key;
    } 
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestPlaces = {
  castle: "Windsor",
  island: "Amanpulo",
  mountain: "El Capitan"
}

findKeyByValue(bestTVShowsByGenre, "The Expanse");
findKeyByValue(bestPlaces, "Windsor");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestPlaces, "Windsor"), "castle");
assertEqual(findKeyByValue(bestPlaces, "Malibu"), undefined);


