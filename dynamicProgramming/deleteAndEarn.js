// 3)
// LINK : https://leetcode.com/problems/delete-and-earn/

// Input: nums = [2,2,3,3,3,4]
// Output: 9
// Explanation: You can perform the following operations:
// - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
// - Delete a 3 again to earn 3 points. nums = [3].
// - Delete a 3 once more to earn 3 points. nums = [].
// You earn a total of 9 points.

const recurse = (nums, frequency, currIDX, map) => {
  if (nums.length === 0 || currIDX >= nums.length) {
    return 0;
  }
  if (map[currIDX] !== undefined) {
    return map[currIDX];
  }
  const tempSum = frequency[nums[currIDX]] * nums[currIDX];
  const nextIDX = nums.some((e) => e === nums[currIDX] + 1)
    ? currIDX + 2
    : currIDX + 1;
  const deleteIt = tempSum + recurse(nums, frequency, nextIDX, map);
  const dontDeleteIt = recurse(nums, frequency, currIDX + 1, map);

  const ans = Math.max(deleteIt, dontDeleteIt);

  map[currIDX] = ans;

  return ans;
};

const recursion = (nums) => {
  nums = nums.sort((a, b) => a - b);

  const uniq = [...new Set(nums)];
  //   console.log(uniq);
  let frequency = {};
  nums.forEach((ele) => {
    frequency[ele] = frequency[ele] + 1 || 1;
  });
  if (nums.length <= 2) {
    return nums.reduce((acc, ele) => (acc += ele), 0);
  }
  console.log(uniq);
  console.log(frequency);
  return recurse(uniq, frequency, 0, {});
};
const nums = [2, 2, 3, 3, 3, 4];
console.log(recursion(nums));
// [2.3.4]   2+4+6+16+10
