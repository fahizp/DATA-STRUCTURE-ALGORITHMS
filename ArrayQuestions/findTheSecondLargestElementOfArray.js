const findTheSecondLargestElementOfArray = (array) => {
    const lengthOfArray= array.length
    let largestElement = 0;
    let secondLargestElement = 0;
    for (let i = 0; i < lengthOfArray; i++) {
        if(array[i] > largestElement) {
            secondLargestElement = largestElement;
            largestElement = array[i];
        }
    }
    return secondLargestElement;
}
const array = [8,7,0,9,2,88,3,7,4,8]
console.log(findTheSecondLargestElementOfArray(array));