let count = 0;
function String(string, arr) {
    for( let i =0; i <string.length; i++) {
        for( let j = 0; j < arr.length; j++) {
            if(string.charAt(i) === arr[j] ) {
                count += 1;
            }
        }
    }
    if( count <= 0) {
        console.log(` fasle`)
    } else {
        console.log(` Có ${count} là chữ số nguyên âm`);
    }
}
let str = "conca";
let arr = ["a","o","e","u","i"];
String(str, arr);