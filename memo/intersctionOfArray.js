// https://leetcode.com/problems/intersection-of-two-arrays/
const nums1 = [4, 7, 9, 7, 6, 7];
const nums2 = [5, 0, 0, 6, 1, 6, 2, 2, 4];

var intersection = function (nums1, nums2) {
  const hash1 = new Map();

  const result = [];
  for (const num of nums1) {
    hash1.set(num, true);
  }
  for (const num of nums2) {
    if (hash1.get(num)) {
      result.push(num);
      hash1.set(num, false);
    }
  }
 
  return result;
};
intersection(nums1, nums2);
