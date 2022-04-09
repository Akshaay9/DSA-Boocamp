// https://www.geeksforgeeks.org/largest-subarray-with-equal-number-of-0s-and-1s/

const arr = [1, 0, 1, 1, 1, 0, 0];

const subArray = (arr) => {
  const newArr = arr.map((e) => (e === 0 ? -1 : e));
  const map = new Map();
  map.set(0, -1);
  let len = 0;
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];

    if (map.has(sum)) {
      len = Math.max(len, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return len;
};
console.log(subArray(arr));
