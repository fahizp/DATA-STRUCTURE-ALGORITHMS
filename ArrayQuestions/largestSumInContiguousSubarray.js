const largestSumInContiguousSubarray = (array) => {
   let lengthOfArray = array.length;
   if(!lengthOfArray) return 0;

   let  current_Sum = array[0], largest_Sum = array[0];

   for (let i = 1; i < lengthOfArray; i++) {
     const num = array[i];
    
     current_Sum = (current_Sum + num > num) ? current_Sum + num : num ;

     if(current_Sum > largest_Sum) largest_Sum = current_Sum;
   }
    return largest_Sum;
}
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(largestSumInContiguousSubarray(array));

