function timPTB2(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return console.log("phương trình vô nghiệm")
    } else if (delta === 0) {
        let x = (-b) / (2 * a);
        console.log(`Phương trình có nghiệm kép x = ${x}`)
        return x;
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2}`);
        return [x1, x2];
    }
}
timPTB2(8, 12, -20)

