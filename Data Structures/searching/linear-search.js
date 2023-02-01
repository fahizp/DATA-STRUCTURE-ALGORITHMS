
//recursive approach

let linearsearch = (arr, size, key) => {
    if (size == 0) {
        return -1;
    }
    else if (arr[size - 1] == key)
    {
    
        // Return the index of found key.
        return size - 1;
    }
    else
    {
        let ans = linearsearch(arr, size - 1, key);
        return ans;
    }
    };
    
    // Driver Code
    let main = () => {
    let arr = [5, 15, 6, 9, 4];
    let key = 4;
    let ans = linearsearch(arr, 5, key);
    if (ans == -1) {
        console.log(`The element ${key} is not found.`);
    } else {
        console.log(
        `The element ${key} is found at ${ans} index of the given array.`
        );
    }
    return 0;
    };
    
    main();
    
    


// Javascript code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

function search(arr, n, x)
{
	let i;
	for (i = 0; i < n; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver code

	let arr = [ 2, 3, 4, 10, 40 ];
	let x = 10;
	let n = arr.length;

	// Function call
	let result = search(arr, n, x);
	(result == -1)
		? console.log("Element is not present in array")
		: console.log("Element is present at index " + result);

// This code is contributed by Manoj




