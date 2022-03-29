// LINK :https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/

const recursion = (n, faces, target, map) => {
    if (n === 0 && target === 0) {
      return 1;
    }
    if (n === 0 && target !== 0) {
      return 0;
    }
    if (target <= 0) {
      return 0;
    }
    const currKey = `${n}-${target}`;
    if (map[currKey] !== undefined) {
      return map[currKey];
    }
    let ans = 0;
    for (let i = 1; i <= faces; i++) {
      ans += recursion(n - 1, faces, target - i, map);
    }
  
    map[currKey] = ans;
    return map[currKey];
  };
  
  var numRollsToTarget = function (n, k, target) {
    return recursion(5, 6, 7, {});
  };
  console.log(numRollsToTarget());
  