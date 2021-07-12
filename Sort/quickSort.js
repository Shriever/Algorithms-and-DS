const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivotIndex = start;
  let pivotValue = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
  return pivotIndex;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const mid = pivot(arr, start, end);
    quickSort(arr, start, mid - 1);
    quickSort(arr, mid + 1, end);
  }
  return arr;
};
console.log(quickSort([6, 5, 7, 2, 7,78, 9, 1]));
