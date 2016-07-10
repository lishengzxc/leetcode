/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var result = [],
    len = nums.length,
    back = 1,
    i;

  if (len === 0) {
    return result;
  }

  result[0] = 1;

  for (i = 1; i < len; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  for (i = len - 2; i >= 0; i--) {
    back *= nums[i + 1];
    result[i] *= back;
  }

  return result;
}