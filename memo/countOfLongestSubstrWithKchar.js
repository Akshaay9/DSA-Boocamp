const str = "WORLD";
const k = 4;

//https://www.geeksforgeeks.org/longest-substring-with-atmost-k-characters-from-the-given-set-of-characters/
// https://www.lintcode.com/problem/386/
const subStr = (str, k) => {
  const map = new Map();
  let unique = 0;
  let release = 0;
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    const currElement = str[i];
    if (map.has(currElement)) {
      map.set(currElement, map.get(currElement) + 1);
    } else {
      map.set(currElement, 1);
      unique += 1;
    }
    while (unique > k && release <= i) {
      const releaseChar = str[release];

      map.set(releaseChar, map.get(releaseChar) - 1);
      release += 1;
      if (map.get(releaseChar) === 0) {
        map.delete(releaseChar);

        unique -= 1;
      }
    }

    ans = Math.max(ans, i - release + 1);
  }
  return ans;
};
console.log(subStr(str, k));
