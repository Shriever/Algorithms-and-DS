const maxSubArrSum = (arr, num) => {
  // edge cases
  if (!arr) return null;
  if (num < 1) return null;
  if (num > arr.length) return null;
  let maxValue = 0;

  // loop through `num` values of arr
  for (let i = 0; i < num; i++) {
    // set maxValue to their sum
    maxValue += arr[i];
  }
  let tempValue = maxValue;

  // loop through arr.length - num + 1
  for (let i = 0; i < arr.length - num + 1; i++) {
    // set tempValue to maxValue - arr[i] + arr[i + num]
    tempValue = tempValue - arr[i] + arr[i + num];
    // if tempValue > maxValue then set maxValue to tempValue
    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }
  return maxValue;
};
console.log(maxSubArrSum([1, 2, 3, 2, 1, 2, 3, 55], 1));
