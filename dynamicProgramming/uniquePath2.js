// https://leetcode.com/problems/unique-paths-ii/
const arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  
  const recursion = (row, col, currRow, currCol, map, opsGrid) => {
    if (currRow === row - 1 && currCol === col - 1 &&  opsGrid[currRow][currCol]!==1) {
      return 1;
    }
    if (currRow >= row || currCol >= col || opsGrid[currRow][currCol]===1) {
      return 0;
    }
    const currKey = `${currRow}-${currCol}`;
    if (map[currKey] != undefined) {
      return map[currKey];
    }
    const right = recursion(row, col, currRow, currCol + 1, map, opsGrid);
    const down = recursion(row, col, currRow + 1, currCol, map, opsGrid);
    const ans = right + down;
    map[currKey] = ans;
    return right + down;
  };
  // console.log(recursion(3, 7, 0, 0, {}));
  
  var uniquePathsWithObstacles = function (arr) {
    return recursion(arr.length, arr[0].length, 0, 0, {}, arr);
  };
  console.log(uniquePathsWithObstacles(arr));
  