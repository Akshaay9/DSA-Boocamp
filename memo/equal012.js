//geeksforgeeks.org/substring-equal-number-0-1-2/

const str = "11100022";
// 2
const equalZero = (str) => {
  let ans = 0;
  let z0 = 0;
  let z1 = 0;
  let z2 = 0;
  const map = new Map();
  map.set(`${0}#${0}`, 1);
  for (let i = 0; i < str.length; i++) {
    const tempStr = Number(str[i]);
    if (tempStr === 0) {
      z0 += 1;
    } else if (tempStr === 1) {
      z1 += 1;
    } else {
      z2 += 1;
    }
    const temSum = `${z1 - z0}#${z2 - z1}`;
    if (map.has(temSum)) {
      ans += map.get(temSum);
      map.set(temSum, map.get(temSum) + 1);
    } else {
      map.set(temSum, 1);
    }
  }
  return ans;
};
console.log(equalZero(str));
