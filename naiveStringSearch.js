const stringSearch = (longStr, shortStr) => {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      const charsMatch = shortStr.charAt(j) === longStr.charAt(i + j);
      const lastCharReached = j === shortStr.length - 1;
      if (!charsMatch) break;
      if (lastCharReached) count++;
    }
  }

  return count;
};

console.log(stringSearch("helloheloheheolhello", "lo"));
