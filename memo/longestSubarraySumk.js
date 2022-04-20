// https://www.geeksforgeeks.org/longest-sub-array-sum-k/
var subarraySum = function (nums, k) {
    const map = new Map();
    let sum = 0;
    let count = 0;
    map.set(sum, -1);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      const tempSum = sum - k;
  
      if (map.has(tempSum)) {
        count = Math.max(count, i - map.get(tempSum));
      }else{
        map.set(sum, i);
      }
   
    }
  
    return count;
  };
  console.log(subarraySum([-5, 8, -14, 2, 4, 12], -5));
  