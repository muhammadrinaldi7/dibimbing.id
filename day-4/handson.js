function segitiga1(panjang) {
    let hasil = '';

    for (let i = 1; i <= panjang; i++) {
        
        for (let j = panjang; j > i; j--) {
            hasil += ' ';
        }

        for (let k = 1; k <= i; k++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(5));