/**
 * counter "yes"
 * 
 * input terminal adalah "yes" / "no"
 * 
 * output adalah angka dari berapa kali jumlah "yes"
 * 
 * tips: ini menggunakan infinity looping & break
 */

const prompt = require('prompt-sync')();

let hasil = 0;
while(true) {
    const input = prompt('continue (yes) / berhenti (no) ? ');
    if(input == 'no') {
        break;
    }else{
        hasil++;
    }
}

console.log(`Anda menginput "yes" sebanyak ${hasil} kali`);