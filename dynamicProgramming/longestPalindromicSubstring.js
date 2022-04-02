// https://leetcode.com/problems/longest-palindromic-substring/ 
// SAME AS LONGEST COMMOM longestCommonSubsequence
const str1 =
  "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
const str2 = "ace";

const recursion = (str1, str2, i, j, str1Len, str2Len, map) => {
  if (i >= str1Len || j >= str2Len) {
    return 0;
  }
  const mapKey = `${i}-${j}`;
  if (map[mapKey] !== undefined) {
    return map[mapKey];
  }
  const charAti = str1[i];
  const charAtj = str2[j];
  let ans = 0;
  if (charAti === charAtj) {
    ans = 1 + recursion(str1, str2, i + 1, j + 1, str1Len, str2Len, map);
  } else {
    const increaseI = recursion(str1, str2, i + 1, j, str1Len, str2Len, map);
    const increaseJ = recursion(str1, str2, i, j + 1, str1Len, str2Len, map);
    ans = Math.max(increaseI, increaseJ);
  }
  map[mapKey] = ans;

  return ans;
};
var longestPalindromeSubseq = function (s) {
  return recursion(
    s,
    s.split("").reverse().join(""),
    0,
    0,
    s.length,
    s.length,
    {}
  );
};
console.log(longestPalindromeSubseq(str1));
