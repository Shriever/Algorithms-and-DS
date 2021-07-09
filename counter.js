const validAnagram = (str1, str2) => {
  // Create object for each string
  // letter: count
  const strCounter1 = {};
  const strCounter2 = {};

  // loop through each string
  // if letter in obj increment else set value to 1
  for (let letter of str1) {
    strCounter1[letter] = (strCounter1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    strCounter2[letter] = (strCounter2[letter] || 0) + 1;
  }
  // loop through one obj
  // check if each value exists and matches value in other obj
  for (let key in strCounter1) {
    if (!strCounter1[key] in strCounter2) {
      return false;
    }
    if (strCounter1[key] !== strCounter2[key]) {
      return false;
    }
  }

  return true;
};
console.log(validAnagram("", ""));
console.log(validAnagram("hello", "loleh"));
console.log(validAnagram("scratch", "scratc"));
