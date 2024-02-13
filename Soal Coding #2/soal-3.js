/**
 * Penjumlahan
 * 
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 * 
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * input.match(/^\d+$/)
 */

const prompt = require('prompt-sync')();

const input = prompt('input ? ');

console.log('jumlah = x'); // ini diganti dengan jumlah seluruh inputnya