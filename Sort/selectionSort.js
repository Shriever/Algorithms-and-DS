const selectionSort = arr => {
  if (arr.length < 2) return arr;
  let least;
  for (let i = 0; i < arr.length - 1; i++) {
    least = i;
    for (let j = i + 1; j < arr.length; j++) {
      //   const reachedArrEnd = j === arr.length - 1;
      const foundSmallerValue = arr[j] < arr[least];
      if (foundSmallerValue) least = j;
      //   if (reachedArrEnd) [arr[i], arr[least]] = [arr[least], arr[i]];
    }
    const alreadySorted = i === least;
    if (!alreadySorted) [arr[i], arr[least]] = [arr[least], arr[i]];
  }

  return arr;
};

console.log(selectionSort([4, 2, 87, 9, 4, 2, 6, 0]));
