/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var hash = {};
  for (var i = 0, len = ransomNote.length; i < len; i++) {
    var item = ransomNote[i];

    for (var j = 0, _len = magazine.length; j < _len; j++) {
      if (hash[j] || magazine[j] !== item)
        continue;
      hash[j] = true;
      break;
    }
    if (j === _len)
      return false;
  }
  return true;
};
