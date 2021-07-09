const countUniqueValues = arr => {
  if (arr.length === 0) {
    return 0;
  }
  let uniqueValues = 1;
  // create one pointer at 0 and one at 1
  let first = 0;
  let second = 1;

  // while pointer2 < arr.length or end of arr
  while (second < arr.length) {
    // if arr[i] !== arr[j] uniqueValues++;
    if (arr[first] !== arr[second]) uniqueValues++;

    // increment both pointers
    first++;
    second++;
  }
  return uniqueValues;
};

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 66]));
