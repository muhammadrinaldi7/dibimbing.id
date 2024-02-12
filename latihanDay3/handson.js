const prompt = require('prompt-sync')();
function hitungFaktorial(n) {
    if (n < 0) {
        return "Faktorial tidak terdefinisi untuk bilangan negatif";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let hasil = 1;
        for (let i = 2; i <= n; i++) {
            hasil *= i;
        }
        return hasil;
    }
}

const bilangan = parseInt(prompt("Masukkan bilangan untuk dihitung faktorialnya:"));
const hasilFaktorial = hitungFaktorial(bilangan);

console.log(`Faktorial dari ${bilangan} adalah ${hasilFaktorial}`);
