/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
  var ans = 0;
  for (var i = 0, len = nums.length; i < len; i++)
    ans ^= nums[i];

  return ans;
};