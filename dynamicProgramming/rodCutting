

// ROD CUTTING
// LINK https://www.geeksforgeeks.org/cutting-a-rod-dp-13/

const arr = [1, 5, 8, 9, 10, 17, 17, 20];
const arr1 = [3, 5, 8, 9, 10, 17, 17, 20];
const capacity = 8;
const currIDX = 0;

const rec = (arr, capacity, currIDX) => {
  if (capacity === 0) {
    return 0;
  }
  if (currIDX >= arr.length) {
    return 0;
  }
  const currLength = currIDX + 1;
  const currProfit = arr[currIDX];
  let consider = 0;
  if (currLength <= capacity) {
    consider = currProfit + rec(arr, capacity - currLength, currIDX);
  }
  const notConsider = rec(arr, capacity, currIDX + 1);
  return Math.max(consider, notConsider);
};

const recursive = (arr, capacity) => {
  return rec(arr, capacity, 0);
};
console.log(recursive(arr, capacity));
console.log(recursive(arr1, capacity));
