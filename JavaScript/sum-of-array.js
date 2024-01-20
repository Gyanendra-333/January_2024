// Javascript program for the above approach

// Function to calculate sum of array
// elements after adding arr[i] / K
// to the end of the array if arr[i]
// is divisible by K

function sum(arr, N, K) {
    // Stores the sum of the array
    var sum = 0;

    var v = [];

    // Traverse the array arr[]
    for (var i = 0; i < N; i++) {
        v.push(arr[i]);
    }

    // Traverse the vector
    for (var i = 0;
        i < v.length; i++) {

        // If v[i] is divisible by K
        if (v[i] % K == 0) {

            var x = v[i] / K;

            // Iterate over the range
            // [0, K]
            for (var j = 0; j < K; j++) {
                // Update v
                v.push(x);
            }
        }
        else
            break;
    }

    // Traverse the vector v
    for (var i = 0; i < v.length; i++)
        sum = sum + v[i];

    return sum;
}

var arr = [4, 6, 8, 2];
var K = 2;
var N = arr.length;
console.log(sum(arr, N, K));
