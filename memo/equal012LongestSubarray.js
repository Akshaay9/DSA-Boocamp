// https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/hashmap-and-heaps/longest-subarray-with-equal-number-of-0s-1s-and-2s-official/ojquestion

const str = [1, 1, 1, 0, 0, 0, 2, 2,2];
// 2
const equalZero = (str) => {
  let ans = 0;
  let z0 = 0;
  let z1 = 0;
  let z2 = 0;
  const map = new Map();
  map.set(`${0}#${0}`, -1);
  for (let i = 0; i < str.length; i++) {
    const tempStr = str[i];
    if (tempStr === 0) {
      z0 += 1;
    } else if (tempStr === 1) {
      z1 += 1;
    } else {
      z2 += 1;
    }
    const temSum = `${z1 - z0}#${z2 - z1}`;
    if (map.has(temSum)) {
      ans += Math.max(ans, i - map.get(temSum));
      map.set(temSum, map.get(temSum) + 1);
    } else {
      map.set(temSum, 1);
    }
  }
  return ans;
};
console.log(equalZero(str));
