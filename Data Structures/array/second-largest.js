let arr = [7,4,6,8,0,5]
let n = arr.length;
let largest = arr[0];
let secondLargest = arr[0];

for (i = 1; i < n; ++i) {
    if(largest<arr[i]){
        secondLargest = largest;
        largest = arr[i]
    } else if (secondLargest < arr[i] && arr[i] != largest){
        secondLargest = arr[i];
    }
}

console.log(largest , secondLargest)



