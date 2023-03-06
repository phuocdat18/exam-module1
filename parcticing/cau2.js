
function findValue(number, array) {
    let index = 0;
    for( let i =0; i <array.length; i++) {
        if(number == array[i]) {
            index += i;
        }
    }
    if( index == 0) {
        return console.log(` Số ${number} không có trong mảng`)
    } else {
        return console.log(` Số ${number} có trong mảng`);
    }
}
let num = 7;
let arr = [1,2,3,4,5,6,7,8,9];
findValue(num, arr);
