function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr) {
  let digits = 0;
  for (let i = 0; i < arr.length; i++) {
    const currDigit = digitCount(arr[i]);
    digits = Math.max(digits, currDigit);
  }
  return digits;
}

const radixSort = arr => {
  const loopCount = mostDigits(arr);

  for (let i = 0; i < loopCount; i++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digitVal = getDigit(arr[j], i);
      buckets[digitVal].push(arr[j]);
    }
    arr = buckets.reduce((a, b) => a.concat(b), []);
  }
  return arr;
};

console.log(radixSort([43, 4643, 558, 413332, 4665, 54, 3]));
