const prompt = require('prompt-sync')();

function hitungkabisat(tahun) {
    if (tahun%400==0) {
        return "Adalah Tahun kabisat";
    }else if (tahun%400!=0 && tahun%100==0) {
        return "Bukan Tahun Kabisat";
    }else if (tahun%400!=0 && tahun%100!=0 && tahun%4==0)
        return "Adalah Tahun kabisat";
    else
        return "Bukan Tahun Kabisat";
}

const kabisat = parseInt(prompt("Masukkan tahun untuk dihitung kabisat:"));
const hasilhitungkabisat = hitungkabisat(kabisat);

console.log(`Tahun ${kabisat} ${hasilhitungkabisat}`);
