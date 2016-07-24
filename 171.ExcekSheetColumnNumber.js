/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var len = s.length,
    i,
    result = 0;
  for (i = 0; i < len; i++) {
    result += Math.pow(26, len - i - 1) * (s.charAt(i).charCodeAt() - 'A'.charCodeAt() + 1);
  }
  return result;
};
