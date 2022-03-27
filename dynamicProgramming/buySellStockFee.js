https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/submissions/

const prices =[1,3,7,5,10,3]
// ans=5

const recursion = (prices, currIDX, isPossibleBuy, map,k) => {
  if (currIDX >= prices.length) {
    return 0;
  }
  const currKey = `${currIDX}-${isPossibleBuy}`;
  if (map[currKey] !== undefined) {
    return map[currKey];
  }

  const idle = recursion(prices, currIDX + 1, isPossibleBuy, map,k);
  if (isPossibleBuy === 1) {
    const buy =
      -prices[currIDX] -
      k +
      recursion(prices, currIDX + 1, isPossibleBuy - 1, map,k);
    const ans = Math.max(idle, buy);
    map[currKey] = ans;
    return ans;
  } else if (isPossibleBuy === 0) {
    const sell =
      +prices[currIDX] + recursion(prices, currIDX + 1, isPossibleBuy + 1, map,k);
    const ans = Math.max(idle, sell);
    map[currKey] = ans;
    return ans;
  }
};
console.log(recursion(prices, 0, 1, {},3));
