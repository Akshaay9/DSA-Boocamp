// LINK  : https://leetcode.com/problems/house-robber/

// 1)  Recursion
const recursion = (arr, currIndex) => {
  if (currIndex >= arr.length) {
    return 0;
  }
  const robsIt = arr[currIndex] + recursion(arr, currIndex + 2);
  const notRobsIt = recursion(arr, currIndex + 1);
  return Math.max(robsIt, notRobsIt);
};

const recursive = (arr) => {
  return recursion(arr, 0);
};

// console.log(recursive([1, 2, 3, 1]));

// 1)  Recursion DP
const recursionDp = (arr, currIndex, map) => {
  if (currIndex >= arr.length) {
    return 0;
  }
  if (map[currIndex]) {
    return map[currIndex];
  }
  const robsIt = arr[currIndex] + recursionDp(arr, currIndex + 2, map);
  const notRobsIt = recursionDp(arr, currIndex + 1, map);
  const ans = Math.max(robsIt, notRobsIt);
  map[currIndex] = ans;
  return ans;
};

const recursiveDp = (arr) => {
  return recursionDp(arr, 0, {});
};

console.log(recursiveDp([1, 2, 3, 1]));
