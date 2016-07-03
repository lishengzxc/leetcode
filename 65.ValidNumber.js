/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return !isNaN(Number(s)) && s !== ' ';
};