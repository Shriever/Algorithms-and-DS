const bubbleSort = arr => {
  if (arr.length <= 1) return arr;
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([5, 2, 7, 4, 37, 3, 1, 3, 0]));
