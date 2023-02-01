function factorial(n) {
   
    if (n <= 1) {
        return 1
    }

    return n*factorial(n-1)
}

// console.log(factorial(5));


function power(n,x) {
   
    if (n == 0) {
        return 1
    }

    let result = x * power(n - 1,x)
    console.log(result);
    return result
   
}

// console.log(power(5,5));



function count(n) {
   
    if (n == 0) {
        return
    }
    count(n - 1)
    console.log(n);
}

count(10)
