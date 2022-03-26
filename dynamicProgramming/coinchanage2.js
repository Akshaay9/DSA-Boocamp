
https://leetcode.com/problems/coin-change-2/
// const recurison = () => {
//   ī;
//   const val = [10, 40, 50, 70];
//   const wt = [1, 3, 4, 5];
//   const currIDX = 0;
//   const capacity = 8;
//   const length = val.length;
//   const freq = [];
//   return recurse(val, wt, currIDX, capacity, length, {});
// };
// console.log(recurison());4

const recurseCoinCHange = (coins, currIDX, capacity) => {
  // console.log(currIDX);
  if (capacity === 0) {
    console.log("dfdf");
    return 1;
  }
  if (currIDX >= coins.length) {
    return 0;
  }
  const currCoin = coins[currIDX];
  let consider = 0;
  if (currCoin<=capacity) {
    consider = recurseCoinCHange(coins, currIDX, capacity - currCoin);
  }
  const notConsider = recurseCoinCHange(coins, currIDX + 1, capacity);
  return consider + notConsider;
};

const coinchange = () => {
  return recurseCoinCHange([1, 2, 5], 0, 5);
};
console.log(coinchange());
