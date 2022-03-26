// https://leetcode.com/problems/unique-binary-search-trees/
// UNIQUE Binary search treez

// SAME AS NTH CATALAN NUM
/**
 * @param {number} n
 * @return {number}
 */

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
  
  const numTrees = (n) => {
    return recurse(n);
  };