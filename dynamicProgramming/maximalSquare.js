// https://leetcode.com/problems/maximal-square/

const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ];
  
  // 4
  
  const rec = (currRow, currCol, row, col, matrix, map) => {
    if (
      currRow < 0 ||
      currRow >= row ||
      currCol < 0 ||
      currCol >= col ||
      matrix[currRow][currCol] === "0"
    ) {
      return 0;
    }
    const currKey = `${currRow}-${currCol}`;
    if (map[currKey]) {
      return map[currKey];
    }
  
    const rightExp = 1 + rec(currRow, currCol + 1, row, col, matrix, map);
    const downExp = 1 + rec(currRow + 1, currCol, row, col, matrix, map);
    const diagonalExp = 1 + rec(currRow + 1, currCol + 1, row, col, matrix, map);
    const ans = Math.min(rightExp, Math.min(downExp, Math.min(diagonalExp)));
    map[currKey] = ans;
    return ans;
  };
  var maximalSquare = function (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    let area = 0;
    const map = {};
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (matrix[i][j] === "1") {
          const ans = rec(i, j, row, col, matrix, map);
          area = Math.max(area, ans * ans);
        }
      }
    }
    return area;
  };
  console.log(maximalSquare(matrix));
  