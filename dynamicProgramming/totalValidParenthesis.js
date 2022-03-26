// Nth Catalan Number
// https://www.geeksforgeeks.org/program-nth-catalan-number/

SAME AS CATALAN NUM

PASS N/2
const n = 2;
//42

const recurse = (n) => {
  if (n == 0 || n === 1) {
    return 1;
  }
  let ways = 0;
  for (let i = 0; i < n; i++) {
    ways += recurse(i) * recurse(n - i - 1);
  }
  return ways;
};

const recursion = (n) => {
  return recurse(n);
};
console.log(recursion(n/2));
