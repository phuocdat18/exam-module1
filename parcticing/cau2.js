let index = 0;
function fiveValue(number, array) {
    for( let i =0; i <array.length; i++) {
        if(number == array[i]) {
            index += i;
        }
    }

    if( index == 0) {
        console.log(` Số ${number} không có trong mảng`)
    } else {
        console.log(` Số ${number} có trong mảng`);
    }
}
let num = 7;
let arr = [1,2,3,4,5,6,7,8,9];
fiveValue(num, arr);