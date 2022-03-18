// LINK : https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/

// 1) Recursion
const recursion = (profits, weights, capacity, currIndex, len) => {
  if (currIndex === len) {
    return 0;
  }
  const currentProfit = profits[currIndex];
  const currentWeight = weights[currIndex];
  let consider = 0;
  if (currentWeight <= capacity) {
    consider =
      currentProfit +
      recursion(profits, weights, capacity - currentWeight, currIndex + 1, len);
  }
  const notConsider = recursion(profits, weights, capacity, currIndex + 1, len);
  return Math.max(notConsider, consider);
};

const recurs = () => {
  const profits = [1, 2, 3];
  const weights = [4, 5, 1];
  const capacity = 4;
  return recursion(profits, weights, capacity, 0, profits.length);
};
console.log(recurs());

// 2) Recursion DP ------------------------------------------------------------------------
const recursionDp = (profits, weights, capacity, currIndex, len, map) => {
  if (currIndex === len) {
    return 0;
  }
  const currentProfit = profits[currIndex];
  const currentWeight = weights[currIndex];
  const memoizedKey = `${currIndex}-${capacity}`;
  if (map[memoizedKey]) {
    return map[memoizedKey];
  }
  let consider = 0;
  if (currentWeight <= capacity) {
    consider =
      currentProfit +
      recursionDp(
        profits,
        weights,
        capacity - currentWeight,
        currIndex + 1,
        len,
        map
      );
  }
  const notConsider = recursionDp(
    profits,
    weights,
    capacity,
    currIndex + 1,
    len,
    map
  );

  const ans = Math.max(notConsider, consider);
  map[memoizedKey] = ans;
  return ans;
};

const recursDp = () => {
  const profits = [1, 2, 3];
  const weights = [4, 5, 1];
  const capacity = 4;
  return recursionDp(profits, weights, capacity, 0, profits.length, {});
};
console.log(recursDp());
