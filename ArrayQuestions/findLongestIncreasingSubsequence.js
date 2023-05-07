const findLongestIncreasingSubsequence = (array, lengthOfArray) => {
  const list = Array(lengthOfArray).fill(1);

  for (let i = 1; i < lengthOfArray; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j] && list[i] < list[j] + 1) list[i] = list[j] + 1;
    }
  }
  return Math.max(...list);
};

const array = [50, 3, 10, 7, 40, 80];
const lengthOfArray = array.length;
console.log(findLongestIncreasingSubsequence(array, lengthOfArray));
