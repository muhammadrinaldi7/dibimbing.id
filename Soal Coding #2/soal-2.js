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

const input = prompt('continue (yes) / berhenti (no) ? ');

console.log(`Anda menginput "yes" sebanyak x kali`);