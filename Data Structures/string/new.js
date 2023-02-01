arr = [3,5,4,7,8,6]
let n = arr.length; 
let largest =arr[0];
let smallest = arr[0]


for(let i = 0 ; i<n ; i++){
  if(largest<arr[i]){
    largest = arr[i]
  }
  if(smallest>arr[i]){
    smallest = arr[i]
  }
}

console.log(smallest,largest)