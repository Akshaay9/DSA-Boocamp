// LINK https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

 const prices = [7, 1, 5, 3, 6, 4];
 Output: 5;
 
 const recursion = (prices, currIDX, canPossibleBuy, transaction) => {
   if (currIDX >= prices.length || transaction === 0) {
     return 0;
   }
   const idle = recursion(prices, currIDX + 1, canPossibleBuy, transaction);
   if (canPossibleBuy === 1) {
     const canBuy =
       -prices[currIDX] +
       recursion(prices, currIDX + 1, canPossibleBuy - 1, transaction);
     return Math.max(idle, canBuy);
   } else {
     const canSell =
       prices[currIDX] +
       recursion(prices, currIDX + 1, canPossibleBuy + 1, transaction - 1);
     return Math.max(idle, canSell);
   }
 };
 
 var maxProfit = function (prices) {
   return recursion(prices, 0, 1, 1);
 };
 console.log(maxProfit(prices));
 
 // can buy sell stocks IV , 3
 // cool down //
 // transaction fee
 