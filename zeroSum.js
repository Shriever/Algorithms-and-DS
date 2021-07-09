const sumZero = arr => {
  if (arr.length < 2) {
    return 1;
  }
  // create a pointer for the start and end of array
  let startPointer = 0;
  let endPointer = arr.length - 1;

  // loop through half of array
  while (startPointer < endPointer) {
    const pointerSum = arr[startPointer] + arr[endPointer];
    // if both indices sum to zero return a new arr with those 2 values
    if (pointerSum === 0) {
      return [arr[startPointer], arr[endPointer]];
    } else if (pointerSum > 0) {
      endPointer--;
    } else {
      startPointer++;
    }
  }
};

console.log(sumZero([-2, 2, 3, 4, 5, 6, 7]));
console.log(sumZero([-3, 0, 2]));
console.log(sumZero([-2, 0, 2, 3]));
