function setRupiah(nominal) {
    let rupiah = '';
    let strNominal = nominal.toString();
    let count = 0;

    for (let i = strNominal.length - 1; i >= 0; i--) {
        rupiah = strNominal[i] + rupiah;
        count++;
        if (count % 3 === 0 && i !== 0) {
            rupiah = '.' + rupiah;
        }
    }

    return 'Rp ' + rupiah;
}

// TEST CASES
console.log(setRupiah(12345)); // Rp 12.345
console.log(setRupiah(100000)); // Rp. 100.000
console.log(setRupiah(150)); // Rp150
console.log(setRupiah(120500000)); // Rp 120.500.000
console.log(setRupiah(5478300)); // Rp 5.478.300