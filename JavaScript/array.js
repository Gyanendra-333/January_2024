// Javascript program to find Array formed by adding
// each element of given array with largest
// element in new array to its left

// Function to find array B from array
// A such that Ai = Bi – max(B0…Bi-1)

function find_array(a, n) {

    // Initialising as 0 as first 
    // element will remain same
    let x = 0;

    for (let i = 0; i < n; i++) {

        // restoring values of B
        a[i] += x;

        console.log(a[i] + ' ');

        // Find max value
        x = Math.max(x, a[i]);
    }
}


let a = [40, 12, 62];
let a = [30, 32, 62];
let n = a.length;

find_array(a, n);
