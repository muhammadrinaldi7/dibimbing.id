function konversimenit(menit) {
    let jam = Math.floor(menit / 60); // Mencari jumlah jam
    let sisaMenit = menit % 60; // Mencari sisa menit setelah diubah menjadi jam

    // Menghasilkan string dengan format jam:menit
    let hasil = jam + ":" + (sisaMenit < 10 ? '0' : '') + sisaMenit;

    return hasil;
}
console.log(konversimenit(63));
console.log(konversimenit(124));
console.log(konversimenit(53));
console.log(konversimenit(88));
console.log(konversimenit(120));
