const recur = (arr, totalSum, currIDX) => {
  if (currIDX === arr.length) {
    console.log(totalSum);
    if (totalSum === 0) {
      return 1;
    }
    return 0;
  }
  const allowIt = recur(arr, totalSum - arr[currIDX], currIDX + 1);
  const dontAllowIt = recur(arr, totalSum, currIDX + 1);
  return allowIt + dontAllowIt;
};

const recursion = (arr, diff) => {
  const Sum = arr.reduce((acc, ele) => (acc += ele), 0);
  const totalSum = (Sum - diff) / 2;
  if (totalSum % 2 == 0) return 0;

  return recur(arr, totalSum, 0);
};
console.log(recursion([2, 4, 1, 3], 4));
