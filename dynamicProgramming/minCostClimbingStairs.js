// LINK : https://leetcode.com/problems/min-cost-climbing-stairs/

// 1) Recursion
const recursive = (arr, i) => {
  if (i === arr.length) {
    return 0;
  } else if (i > arr.length) {
    return Infinity;
  }
  const oneStep = arr[i] + recursive(arr, i + 1);
  const twoStep = arr[i] + recursive(arr, i + 2);

  return Math.min(oneStep, twoStep);
};

const recursion = (arr) => {
  const startZero = recursive(arr, 0);
  const startOne = recursive(arr, 1);
  return Math.min(startOne, startZero);
};
console.log(recursion([10, 15, 20]));
console.log(recursion([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

// 1) DP
const recursiveDp = (arr, i, map) => {
  if (i === arr.length) {
    return 0;
  } else if (i > arr.length) {
    return Infinity;
  }
  if (map[i]) {
    return map[i];
  }
  const oneStep = arr[i] + recursiveDp(arr, i + 1, map);
  const twoStep = arr[i] + recursiveDp(arr, i + 2, map);
  map[i] = Math.min(oneStep, twoStep);

  return Math.min(oneStep, twoStep);
};

const recursionDP = (arr) => {
  const startZero = recursiveDp(arr, 0, {});
  const startOne = recursiveDp(arr, 1, {});
  return Math.min(startOne, startZero);
};
console.log(recursionDP([10, 15, 20]));
console.log(recursionDP([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
