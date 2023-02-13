function bubbleSort(arr) {
    var noSwap;
    for (let i = arr.length; i>0 ;i--) {
       
        noSwap=true;
        for (let j = 0; j < i-1; j++) {
            if (arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noSwap=false;
            }        
        }
        if (noSwap) break;                       
    }
    return arr
}


console.log(bubbleSort([10,2,5,8,3,4,9,99,33])); 
// [2,10,5,8,3,4,9,99,33]
// [2,5,8,3,4,9,10,33,99]
// [2,5,3,4,8,9,10,33,99]
// [2,3,4,5,8,9,10,33,99]
// [2,3,4,5,8,9,10,33,99]








