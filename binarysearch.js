// function binarySearch(arr,target) {
//  let mid= Math.min(arr.length/2) 
 
//  if (arr[mid]===target) {
//     return mid
//  } else {
//     if (mid<target) {
        
//     }
//  }
//     for (let index = 0; index < arr.length; index++) {
        
        
//     }
// }



const binarySearch = (arr,target)=>{
    let leftIndex = 0
    let rightIndex = arr.length - 1
   
    while (leftIndex <= rightIndex) {

        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (target === arr[middleIndex]) return middleIndex

          if (target < arr[middleIndex]) rightIndex = middleIndex - 1;

           else  leftIndex = middleIndex + 1;
    }
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10],4));


// function binarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
  
//     while (leftIndex <= rightIndex) {
//       let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//       if (target === arr[middleIndex]) {
//         return middleIndex
//       }
//       if (target < arr[middleIndex]) {
//         rightIndex = middleIndex - 1
//       } else {
//         leftIndex = middleIndex + 1
//       }
//     }
//     return -1
//   }
  
  console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
  console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
  console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1
  