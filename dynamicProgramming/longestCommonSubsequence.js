// https://leetcode.com/problems/longest-common-subsequence/
// total subsequence of any string is 2^length_of_substring

const str1 = "abcde";
const str2 = "ace";

const recursion = (str1, str2, i, j, str1Len, str2Len, map) => {
  if (i >= str1Len || j >= str2Len) {
    return 0;
  }
  const mapKey = `${i}-${j}`;
  if (map[mapKey]) {
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

var longestCommonSubsequence = function (text1, text2) {
  return recursion(str1, str2, 0, 0, text1.length, text2.length, {});
};
console.log(longestCommonSubsequence(str1, str2));
