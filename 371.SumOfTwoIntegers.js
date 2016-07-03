/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  var c;
  while (b !== 0) {
    c = a & b;
    a ^= b;
    b = c << 1;
  }

  return a;
};