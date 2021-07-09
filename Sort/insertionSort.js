// DOESN'T WORK
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j];
      if (arr[j] > currentVal) {
        arr[j + i] = currentVal;
        break;
      }
      
    }
  }
  return arr;
};

console.log(insertionSort([1, 2, 3, 4, 5, 0]));
//   j  i
