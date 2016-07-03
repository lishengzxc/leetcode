/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var result = [],
    i;

  result[0] = 0;

  for (i = 1; i <= num; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
};