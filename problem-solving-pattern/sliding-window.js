const sumArr = (arr) => arr.reduce((acc, cur) => acc + cur);

const maxSubarraySum = function (arr, n) {
  const newArr = [...arr];
  let subarr = [],
    i = 0,
    j = 0;
  let max = -Infinity;

  while (j !== newArr.length - n + 1) {
    if (subarr.length === n) {
      sum = sumArr(subarr);
      max = sum > max ? sum : max;
      i = ++j;
      subarr = [];
    } else {
      subarr.push(newArr[i]);
      i++;
    }
  }
  console.log(max);
};
// maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8], 2);
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);

const maxSubarraySumRefactor = function (arr, num) {
  const newArr = [...arr];
  let maxSum = 0,
    tempSum = 0;
  for (let i = 0; i < num; i++) tempSum += newArr[i];

  for (let i = num; i < newArr.length; i++) {
    tempSum = tempSum - newArr[i - num] + newArr[i];
    maxSum = tempSum > maxSum ? tempSum : maxSum;
  }
  return maxSum;
};
console.log(maxSubarraySumRefactor([1, 2, 5, 2, 8, 1, 5], 4));
