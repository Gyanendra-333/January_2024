let rows = 5;
let columns = 5;

let str;

for (let i = 1; i <= rows; i++) {
    str = "";

    for (let j = 1; j <= (rows - i); j++) {
        str += " ";
    }
    for (let k = 0; k != (2 * i - 1); k++) {
        str += "*";
    }
    console.log(str);
}