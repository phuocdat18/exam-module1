function findString(string, arr) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (string.charAt(i) === arr[j]) {
                count += 1;
            }
        }
    }
    if (count <= 0) {
        return console.log(`false`);
    } else {
        return console.log(`Có ${count} là chữ số nguyên âm`);
    }
}
let str = "conca";
let arr = ["a", "o", "e", "u", "i"];
findString(str, arr);
