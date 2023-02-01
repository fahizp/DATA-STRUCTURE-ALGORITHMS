
function binarySearch(arr,key)
{
	let low = 0;
	let high = arr.length - 1;
	let mid;
	
	while (high - low > 1) {
		
        let mid = (high + low) / 2;

		if (arr[mid] < key) {
			low = mid + 1;
		}
		else {
			high = mid;
		}
	}
	if (arr[low] == key) {
		console.log( "Found At Index " + low);
	}
	else if (arr[high] == key) {
		console.log("Found At Index " + high);
	}
	else {
		console.log("Not Found");
	}
}
arr = [ 1, 3, 4, 5, 6 ];
let key = 1;
binarySearch(arr, key);
key = 6;
binarySearch(arr, key);
key = 10;
binarySearch(arr, key);


