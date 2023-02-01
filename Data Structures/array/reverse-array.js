let arr= [2,4,1,5,6,9]
var n = arr.length;

function swap(){
    console.log("swwap");
    for (var i = 0, j=n-1 ; i <= j ; i++,j--) {
       let temp = arr[i];
       arr[i] =arr[j];
       arr[j] = temp
    }
}

swap();
console.log(arr)
