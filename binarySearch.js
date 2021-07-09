const binarySearch = (arr, item) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      return middle;
    } else if (arr[middle] > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 64));
