/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';

  var num = '';
  var eachNum = '';

  while (n > 0) {
    num = n % 26;
    if (num === 0) num = 26;
    eachNum = s[num - 1];
    result = eachNum + result;
    n = ~~((n - 1) / 26);
  }

  return result;
};
