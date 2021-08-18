// MEMOIZATION
const answerStore = {};
function fib(num) {
  if (num <= 2) return 1;
  if (answerStore[num]) return answerStore[num];
  answerStore[num] = fib(num - 1) + fib(num - 2);
  return answerStore[num];
}
// console.log(fib(6));

// TABULATION
function fib2(num) {
  const values = [0, 1, 1];
  let len;
  //   for (let i = 0; i < num; i++) {}
  while (!values[num]) {
    len = values.length;
    values.push(values[len - 1] + values[len - 2]);
  }
  return values[num];
}
console.log(fib2(100));
