/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var i = 0;
  var j = 0;
  var tmp;

  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
      j++;
    }
  }
};