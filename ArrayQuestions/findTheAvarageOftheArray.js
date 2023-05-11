const findTheAvarageOfArray = () => {
    const lengthOfArray= array.length;
    let sumOfTheArray = 0;
    for (let i = 0; i < lengthOfArray; i++) {
        sumOfTheArray += array[i];
    }
    const avarageOfArray = sumOfTheArray /lengthOfArray;
    return avarageOfArray
}
const array = [3, 7, 2, 9, 1]
console.log(findTheAvarageOfArray(array));