let rows = 5;
let columns = 5;

let str;

for (let i = 1; i <= rows; i++) {
    str = "";

    for (let j = 1; j <= columns; j++) {
        str += "*";
    }
    console.log(str);
}