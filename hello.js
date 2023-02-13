
function bubble(arr) {
    
    var swap

    for (let i = arr.length; i > 0; i--) {
       for (let j = 0; j < arr.length; j++) {
        swap=true
       if (arr[j]<arr[j+1]) {
        var temp = arr[j+1];
        arr[j] = arr[j+1]
        arr[j+1] = temp
        swap =false
       }
        
       }
       if (swap) break
        
    }
    return arr
    console.log(arr);
}
bubble([9,6,7,8,3,2,5,6])



