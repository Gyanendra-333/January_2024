// JS code for above approach 

let arr = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]];

for (let i = 0; i < 3; i++) {
    let s = "";
    for (let j = 0; j < 4; j++) {
        s += (arr[i][j] + " ");
    }
    console.log(s);
}