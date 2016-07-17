/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;

  var max = Number.MIN_VALUE;
  var min = Number.MAX_VALUE;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    if (max < prices[i] - min)
      max = prices[i] - min;
  }

  return max;
};
