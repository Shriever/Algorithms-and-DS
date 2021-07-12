const merge = (arr1, arr2) => {
  const outputArr = [];

  let first = 0;
  let second = 0;
  while (first < arr1.length && second < arr2.length) {
    if (arr1[first] < arr2[second]) {
      outputArr.push(arr1[first]);
      first++;
    } else {
      outputArr.push(arr2[second]);
      second++;
    }
  }

  const extras = first === arr1.length ? arr2.slice(second) : arr1.slice(first);
  outputArr.push(...extras);

  return outputArr;
};
const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midpoint);
  const secondHalf = arr.slice(midpoint);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};
console.log(mergeSort([6, 3, 7, 2, 6, 4, 9]));
console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
