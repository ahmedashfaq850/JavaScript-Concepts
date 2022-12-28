function sumZero(arr) {

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum < 0) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
}

const arr = [-10,-5, 1, 3, 5,6,11];
console.log(sumZero(arr));
