
const recursion = (prices, currIDX, isPossibleBuy, transactions, map) => {
    if (transactions === 0 || currIDX >= prices.length) {
      return 0;
    }
    const currKey = `${currIDX}-${isPossibleBuy}-${transactions}`;
    if (map[currKey] !== undefined) {
      return map[currKey];
    }
  
    const idle = recursion(prices, currIDX + 1, isPossibleBuy, transactions, map);
    if (isPossibleBuy === 1) {
      const buy =
        -prices[currIDX] +
        recursion(prices, currIDX + 1, isPossibleBuy - 1, transactions, map);
      const ans = Math.max(idle, buy);
      map[currKey] = ans;
      return ans;
    } else if (isPossibleBuy === 0) {
      const sell =
        +prices[currIDX] +
        recursion(prices, currIDX + 1, isPossibleBuy + 1, transactions - 1, map);
        const ans = Math.max(idle, sell);
        map[currKey] = ans;
        return ans;
    }
  };
  var maxProfit = function(prices) {
      return recursion(prices,0,1,2,{})
  };