let sumOfMinMax = (arr, n) => {
    let minVal = Number.MAX_VALUE;
    let maxVal = Number.MIN_VALUE;

    for (let i = 0; i < n; i++) {
        if (minVal > arr[i]) {
            minVal = arr[i];
        }
        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }
    return minVal + maxVal;
}
let arr = [3, 4, 6, 7, 9, 1];
console.log(`sum of Min Max of given number is ${sumOfMinMax(arr, arr.length)}`);