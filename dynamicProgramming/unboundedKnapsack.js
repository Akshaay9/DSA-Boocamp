LINK : https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/
 // val=[1.1] w=[2,1] w=3  ans=3

const recurse = (val, wt, currIDX, capacity, length, map) => {
  if (currIDX >= length) {
    return 0;
  }
  if (capacity === 0) {
    return 0;
  }
  const currWeight = wt[currIDX];
  const currVal = val[currIDX];
  let consider = 0;
  const currKey = `${currIDX}-${capacity}`;
  if (map[currKey] !== undefined) {
    return map[currKey];
  }
  if (currWeight <= capacity) {
    consider =
      currVal + recurse(val, wt, currIDX, capacity - currWeight, length, map);
  }
  const notConsider = recurse(val, wt, currIDX + 1, capacity, length, map);
  const ans = Math.max(consider, notConsider);
  map[currKey] = ans;
  return ans;
};
