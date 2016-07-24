/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  if (n === 1) return 10;

  var count = 10;
  var p = 9;

  for (var i = 1; i < n && i < 10; i++) {
    p *= 10 - i;
    count += p;
  }

  return count;
};
