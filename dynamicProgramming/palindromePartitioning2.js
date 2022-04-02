// https://leetcode.com/problems/palindrome-partitioning-ii/

const isPalindrome = (string, start, end) => {
    // console.log(start);
    while (start <= end) {
      if (string[start] !== string[end]) {
        return false;
      }
      (start += 1), (end -= 1);
    }
    return true;
  };
  
  const recursion = (string, start, end,map) => {
    if (map[start] !== undefined) {
      return map[start];
    }
    if (isPalindrome(string, start, end)) {
      return 0;
    }
    let ans = Infinity;
    for (let i = start; i < end; i++) {
      if (isPalindrome(string, start, i)) {
        let tempAns = 1 + recursion(string, i + 1, end,map);
        ans = Math.min(tempAns, ans);
      }
    }
    map[start] = ans;
    return ans;
  };
  
  var minCut = function (s) {
    return recursion(s, 0, s.length - 1, {});
  };