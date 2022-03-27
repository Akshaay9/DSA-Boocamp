// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
const prices = [1, 2, 3, 4, 5];
// ans=5

const recursion = (prices, currIDX, isPossibleBuy, map) => {
  if (currIDX >= prices.length) {
    return 0;
  }
  const currKey = `${currIDX}-${isPossibleBuy}`;
  if (map[currKey] !== undefined) {
    return map[currKey];
  }

  const idle = recursion(prices, currIDX + 1, isPossibleBuy, map);
  if (isPossibleBuy === 1) {
    const buy =
      -prices[currIDX] +
      recursion(prices, currIDX + 1, isPossibleBuy - 1, map);
    const ans = Math.max(idle, buy);
    map[currKey] = ans;
    return ans;
  } else if (isPossibleBuy === 0) {
    const sell =
      +prices[currIDX] +
      recursion(prices, currIDX + 1, isPossibleBuy + 1 , map);
    const ans = Math.max(idle, sell);
    map[currKey] = ans;
    return ans;
  }
};
console.log(recursion(prices, 0, 1, 1, {}));
