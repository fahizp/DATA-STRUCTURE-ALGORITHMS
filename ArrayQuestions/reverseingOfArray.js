const reverseingOfArray = (array) => {
  const lengthOfArray = array.length;
  for (let i = 0; i < lengthOfArray/2; i++) {
    let temp = array[i];
    array[i] = array[lengthOfArray-1-i];
    array[lengthOfArray-1-i] = temp;
  }
  return array;
};
const array = [3, 7, 2, 9, 1];
console.log(reverseingOfArray(array));
