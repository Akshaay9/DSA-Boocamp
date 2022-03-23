COIN CHANGE

const recurseIt = (coins, amount, currIDX, map) => {
  if (currIDX >= coins.length) {
    return 10001;
  }
  if (amount === 0) {
    return 0;
  }

  const currCoin = coins[currIDX];
  const currKey = `${currIDX}-${amount}`;
  if (map[currKey]) {
    return map[currKey];
  }
  let consider = 10001;
  if (currCoin <= amount) {
    consider = 1 + recurseIt(coins, amount - currCoin, currIDX, map);
  }
  const notconsider = recurseIt(coins, amount, currIDX + 1, map);
  const ans = Math.min(consider, notconsider);
  map[currKey] = ans;
  return ans
};

var coinChange = function (coins, amount) {
  const ans = recurseIt(coins, amount, 0, {});
  if (ans === 10001) return -1;
  return ans;
};
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
