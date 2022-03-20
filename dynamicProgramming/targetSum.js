// 1)

// // Link : https://leetcode.com/problems/target-sum/

// const arr = [1, 1, 1, 1, 1];
// // const ANS= 5
// const target = 3;

const recursion = (arr, currIDX, sum, map) => {
  if (currIDX === arr.length && sum === 0) {
    return 1;
  }
  if (currIDX === arr.length && sum !== 0) {
    return 0;
  }
  const mapKey = `${currIDX}-${sum}`;
  if (map[mapKey] !== undefined) {
    return map[mapKey];
  }
  const newIDX = currIDX + 1;
  const positive = recursion(arr, newIDX, sum - arr[currIDX], map);
  const negative = recursion(arr, newIDX, sum + arr[currIDX], map);
  const ans = positive + negative;
  map[mapKey] = ans;
  return ans;
};
console.log(recursion(arr, 0, target, {}));
