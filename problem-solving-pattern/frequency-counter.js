const same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequentCounter1 = {};
  let frequentCounter2 = {};
  for (const v of arr1) {
    frequentCounter1[v] = (frequentCounter1[v] || 0) + 1;
  }
  for (const v of arr2) {
    frequentCounter2[v] = (frequentCounter2[v] || 0) + 1;
  }

  for (const key in frequentCounter1) {
    if (!(key ** 2 in frequentCounter2)) return false;
    if (frequentCounter1[key] !== frequentCounter2[key ** 2]) return false;
  }
  return true;
};
console.log(same([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]));

const validAnagram = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (const letter of str1) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (const letter of str2) {
    // if lookup doesnt have letter or letter = 0 -> false
    if (!lookup[letter]) return false;
    lookup[letter]--;
  }
  return true;
};

console.log(validAnagram("cinema", "ancime"));
