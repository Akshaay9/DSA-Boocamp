// JUMP game 1 https://leetcode.com/problems/jump-game/
const nums = [0, 0, 0];

//true
const recurse = (nums, currIDX, map) => {
  if (currIDX >= nums.length - 1) {
    return true;
  }
  let tempANs = false;
  if (map[currIDX]) {
    return map[currIDX];
  }
  for (let i = 1; i <= nums[currIDX]; i++) {
    let nas = recurse(nums, currIDX + i, map);
    if (nas) {
      return nas;
    }
    tempANs = nas || tempANs;
  }
  map[currIDX] = tempANs;
  return tempANs;
};

var canJump = function (nums) {
  return recurse(nums, 0, {});
};
console.log(canJump(nums));