// LINK : https://leetcode.com/problems/n-th-tribonacci-number/

// 1) Recurison
const recursion = (num) => {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  return recursion(num - 1) + recursion(num - 2) + recursion(num - 3);
};
console.log(recursion(25));

TC = o(n ^ 3);
space = 0(n);

// 1) RecurisonDp
const recursionDp = (num, map) => {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  if (map[num]) {
    return map[num];
  }

  const ans =
    recursionDp(num - 1, map) +
    recursionDp(num - 2, map) +
    recursionDp(num - 3, map);
  map[num] = ans;
  return ans;
};
console.log(recursion(25, {}));

TC = o(n);
space = 0(n);