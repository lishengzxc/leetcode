/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var result = [];
  for (var i = 0, len = nums1.length; i < len; i++) {
    if (nums2.indexOf(nums1[i]) !== -1) result.push(nums1[i]);
  }
  return [...new Set(result)];
};
