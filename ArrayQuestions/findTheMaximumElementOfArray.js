/**
 * 
 * @param {Array} array 
 */
const findTheMaximumElementOfArray = (array) => {
    const lengthOfArray= array.length
    let maximumElement = array[0];
    for (let i = 1; i < lengthOfArray; i++) {
        if (array[i] > maximumElement) maximumElement = array[i];
    }
    return maximumElement;
}
const array = [3, 7, 2, 9, 1]
console.log(findTheMaximumElementOfArray(array));