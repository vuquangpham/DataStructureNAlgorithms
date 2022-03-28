// sumZero: sorted list -> first pair where the sum is 0
const sumZero = (arr) => {
  const newArr = [...arr];
  let i = 0,
    j = newArr.length - 1;

  while (i !== j) {
    sum = newArr[i] + newArr[j];
    if (sum === 0) {
      return [newArr[i], newArr[j]];
    }
    if (sum > 0) j--;
    else i++;
  }
};

// CountUniqueValue
const countUniqueValue = (arr) => {
  const newArr = [...arr];
  let i = 0;
  for (let j = 1; j < newArr.length; j++)
    if (newArr[i] !== newArr[j]) {
      newArr[i] = newArr[j];
      i++;
    }

  return i;
};

console.log(countUniqueValue([1, 1, 1, 1, 2, 3, 4, 4, 5]));
