https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/hashmap-and-heaps/count-of-substrings-having-at-most-k-unique-characters-official/ojquestion

const str = "eceba";
const k = 2;
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
      console.log(map, releaseChar);

      map.set(releaseChar, map.get(releaseChar) - 1);
      release += 1;
      if (map.get(releaseChar) === 0) {
        map.delete(releaseChar);

        unique -= 1;
      }
    }
    ans += i - release + 1;
  }
  return ans
};
console.log(subStr(str, k));