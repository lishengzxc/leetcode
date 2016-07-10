/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var ans = [];
  var  hash = [];

  nums.forEach(function(item) {
    if (!hash[item])
      hash[item] = 1;
    else
      hash[item]++;
  });

  nums.forEach(function(item) {
    if (hash[item] === 1)
      ans.push(item);
  });

  return ans.length === 1 ? ans[0] : ans;
};