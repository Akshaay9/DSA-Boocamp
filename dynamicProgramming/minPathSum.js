https://leetcode.com/problems/minimum-path-sum/
const arr = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

const recursion = (row, col, currRow, currCol, map, opsGrid) => {
  if (currRow === row - 1 && currCol === col - 1) {
    return opsGrid[currRow][currCol];
  }
  if (currRow >= row || currCol >= col) {
    return 1001;
  }
  const currKey = `${currRow}-${currCol}`;
  if (map[currKey] != undefined) {
    return map[currKey];
  }
  console.log( opsGrid[currRow][currCol],currRow,currCol);
  const right =
    opsGrid[currRow][currCol] +
    recursion(row, col, currRow, currCol + 1, map, opsGrid);
  const down =
    opsGrid[currRow][currCol] +
    recursion(row, col, currRow + 1, currCol, map, opsGrid);

  const ans = Math.min(right, down);
  map[currKey] = ans;
  return ans;
};
// console.log(recursion(3, 7, 0, 0, {}));

var uniquePathsWithObstacles = function (arr) {
  return recursion(arr.length, arr[0].length, 0, 0, {}, arr);
};
console.log(uniquePathsWithObstacles(arr));
