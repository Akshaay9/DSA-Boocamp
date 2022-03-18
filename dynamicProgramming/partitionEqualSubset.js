// LINK : https://leetcode.com/problems/partition-equal-subset-sum/

const arr1 = [
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 99, 97,
];
const arr2 = [1, 2, 3, 5];

// APPROACH 1 DP

const recursive = (arr, currIndex, totalSum) => {
  if (totalSum === 0) return true;
  if (currIndex >= arr.length) return false;

  const currentSum = arr[currIndex];
  let consider = false;
  if (currentSum <= totalSum) {
    consider = recursive(arr, currIndex + 1, totalSum - currentSum);
  }
  const notConsider = recursive(arr, currIndex + 1, totalSum);

  return consider || notConsider;
};

const recursion = (arr) => {
  let totalSum = 0;
  arr.forEach((e) => {
    totalSum += e;
  });
  if (totalSum % 2 !== 0) return false;
  return recursive(arr, 0, totalSum / 2);
};

// console.log(recursion(arr1));
// console.log(recursion(arr2));

const partition = (nums) => {
  if (nums.length === 1) return false;
  const totalSum = nums.reduce((acc, ele) => (acc += ele), 0);
  if (totalSum % 2 !== 0) return false;

  const recursive = (arr, currIDX, totalSum, map) => {
    if (totalSum === 0 || arr[currIDX] === totalSum) return true;
    if (currIDX >= arr.length || totalSum < 0) return false;
    const mapKey = `${currIDX}-${totalSum}`;
    const allowIt = false;

    if (map[mapKey] !== undefined) {
      console.log(mapKey, map);
      return true;
    }
    if (arr[currIDX] <= totalSum) {
      const allowIt = recursive(arr, currIDX + 1, totalSum - arr[currIDX], map);
      if (allowIt) {
        return true;
      }
    }
    const dontAllow = recursive(arr, currIDX + 1, totalSum, map);
    map[mapKey] = allowIt || dontAllow;
    return allowIt || dontAllow;
  };
  return recursive(nums, 0, totalSum / 2, {});
};
console.log(partition(arr1));
