/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(num) {
  var candidate,
    length = num.length,
    count = 1,
    i;

  candidate = num[0];

  for (i = 1; i < length; i++) {
    if (count === 0 || num[i] === candidate) {
      count++;
      candidate = num[i];
    } else {
      count--;
    }
  }

  return candidate;
};
