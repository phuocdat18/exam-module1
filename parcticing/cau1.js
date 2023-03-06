function timPTB2(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("phương trình vô nghiệm")
        // alert(`Phương trình có 1 nghiệm kép x1 = x2 = ${x1} `);
    } else if (delta === 0) {
        let x1 = (-b) / (2 * a);
        let x2 = (-b) / (2 * a);
        console.log(`Phương trình có nghiệm kép x = ${x1}`)
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2}`);
    }
}
timPTB2(8, 12, -20)

