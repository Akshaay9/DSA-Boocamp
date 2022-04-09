// https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/

const arr = [1, 0, 3];
// Output: 5

const subArray = (arr) => {
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.has(sum)) {
      len = Math.max(len, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return len;
};
console.log(subArray(arr));
