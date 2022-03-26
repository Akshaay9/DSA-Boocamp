// Nth Catalan Number
// https://www.geeksforgeeks.org/program-nth-catalan-number/

const n = 5;
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
console.log(recursion(5));

