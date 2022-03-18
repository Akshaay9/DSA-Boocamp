
// 1)  Recursion DP
const recursionDp = (arr, currIndex, map, end) => {
    if (currIndex >= end) {
      return 0;
    }
  //   console.log(map);
    if (map[currIndex]!==undefined) {
      return map[currIndex];
    }
    const robsIt = arr[currIndex] + recursionDp(arr, currIndex + 2, map, end);
    const notRobsIt = recursionDp(arr, currIndex + 1, map, end);
    const ans = Math.max(robsIt, notRobsIt);
    map[currIndex] = ans;
    return ans;
  };
  
  const recursiveDp = (arr) => {
    const a = recursionDp(arr, 0, {}, arr.length - 1);
    const b = recursionDp(arr, 1, {}, arr.length);
    return Math.max(a, b);
  };
  
  console.log(
    recursiveDp([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ])
  );