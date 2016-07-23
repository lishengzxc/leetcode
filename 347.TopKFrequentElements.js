/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var hash = {};
  var result = [];

  for (var i = 0, len = nums.length; i < len; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  var hashArr = [];

  for (var prop in hash) {
    hashArr.push({
      value: hash[prop],
      prop: +prop
    });
  }

  hashArr.sort((a, b) => b.value - a.value);

  return hashArr.slice(0, k).map(i => i.prop);

};
