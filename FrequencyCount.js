// frequency counter

function frequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (let value in arr1) {
    let key = arr1[value];
    if (key in obj1) {
      obj1[key] += 1;
    } else {
      obj1[key] = 1;
    }
  }

  for (let value in arr2) {
    let key = arr2[value];
    if (key in obj2) {
      obj2[key] += 1;
    } else {
      obj2[key] = 1;
    }
  }

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }

    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return true;
}
console.log(frequencyCounter([1, 2, 3], [1, 4, 9])); // true
console.log(frequencyCounter([1, 2, 3], [4, 1, 9])); // true
console.log(frequencyCounter([1, 2, 3], [1, 9])); // false
console.log(frequencyCounter([1, 2, 3], [4, 4, 1])); // false
console.log(frequencyCounter([2, 1, 2, 4, 3], [9, 16, 1, 4, 4])); //true
