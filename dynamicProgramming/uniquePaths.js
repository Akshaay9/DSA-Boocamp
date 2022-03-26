// https://leetcode.com/problems/unique-paths/
// Input: m = 3, n = 2
// Output: 3

const recursion = (row, col, currRow, currCol, map) => {
    if (currRow === row - 1 && currCol === col - 1) {
      return 1;
    }
    if (currRow >= row || currCol >= col) {
      return 0;
    }
    const currKey = `${currRow}-${currCol}`;
    if (map[currKey] != undefined) {
      return map[currKey];
    }
    const right = recursion(row, col, currRow, currCol + 1, map);
    const down = recursion(row, col, currRow + 1, currCol, map);
    const ans = right + down;
    map[currKey] = ans;
    return right + down;
  };
  // console.log(recursion(3, 7, 0, 0, {}));
  
  var uniquePaths = function (m, n) {
    return recursion(m, n, 0, 0, {});
  };
  