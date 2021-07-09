const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }

  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(
  linearSearch(
    [1, 2, "this is a message", 4, 5, "sheep", 7, "help", "cat"],
    "cat"
  )
);
