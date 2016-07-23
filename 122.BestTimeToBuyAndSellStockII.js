/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profit = 0;
  var diff = 0;
  for (var i = 0, len = prices.length; i < len; i++) {
    diff = prices[i] - prices[i - 1];
    if (diff > 0) profit += diff;
  }
  return profit;
};
