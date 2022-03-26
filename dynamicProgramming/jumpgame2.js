

// JUMP GAME //2
// https://leetcode.com/problems/jump-game-ii/
const nums =  [2,3,0,1,4]
// 2

// //true
const recurse = (nums, currIDX, map) => {
  if (currIDX >= nums.length - 1) {
    return 0;
  }
  let tempANs = Infinity;
    if (map[currIDX]) {
      return map[currIDX];
    }
    if( nums[currIDX]===0){
        return Infinity
    }
  for (let i = 1; i <= nums[currIDX]; i++) {
    let nas = 1 + recurse(nums, currIDX + i, map);
    tempANs =Math.min( nas, tempANs);
  }
  map[currIDX] = tempANs;
  return tempANs;
};

var jump = function (nums) {
  return recurse(nums, 0, {});
};
console.log(jump(nums));

//3 https://practice.geeksforgeeks.org/problems/reach-a-given-score-1587115621/1
