
const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }
  let returnedArr = [];
  let middleIndex;
  if (arr.length % 2 > 0) {
    middleIndex = Math.floor((arr.length / 2));
    returnedArr.push(arr[middleIndex]);
    return returnedArr; 
  }
  if (arr.length % 2 === 0) {
    middleIndex = Math.floor((arr.length / 2)) - 1;
    const middleIndex2 = Math.floor((arr.length / 2));
    returnedArr.push(arr[middleIndex]);
    returnedArr.push(arr[middleIndex2]);
    return returnedArr;
  }
};

module.exports = middle;

// test cases

