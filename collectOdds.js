const collectOdds = arr => {
  // create new arr
  const newArr = [];

  // define recursive function that 'loops' through arr
  const helper = arr2 => {
    // if arr is empty return
    if (arr2.length === 0) return;

    // if last item is odd add it to new arr
    if (arr2[0] % 2 !== 0) newArr.push(arr2[0]);

    // call helpFunction(arr.pop())
    helper(arr2.slice(1));
  };
  // return new arr
  helper(arr);
  return newArr;
};

console.log(collectOdds([1, 12, 3, 4, 5, 6, 7, 8, 9, 0]));
