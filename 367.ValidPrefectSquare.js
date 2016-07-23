/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num < 1) return false;
  if (num === 1) return true;

  var left = 0;
  var right = num / 2 | 0;

  var mid = 0;
  var val = 0;

  while (left <= right) {
    mid = ((left + right) / 2) | 0;
    val = mid * mid;
    if (val === num) return true;
    else if (val > num) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};
